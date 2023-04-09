eel = {
    _host: window.location.origin,

    set_host: function (hostname) {
        eel._host = hostname
    },

    expose: function(f, name) {
        if(name === undefined){
            name = f.toString();
            let i = 'function '.length, j = name.indexOf('(');
            name = name.substring(i, j).trim();
        }

        eel._exposed_functions[name] = f;
    },

    guid: function() {
        return eel._guid;
    },

    // These get dynamically added by library when file is served
    _py_functions: ['copy_command', 'ex_get_commands', 'ex_get_friends', 'ex_get_servers', 'clear_console_call', 'restart_', 'logout_', 'copy_email', 'copy_key', 'save_settings', 's_alt_tokens_toggle', 's_alt_tokens', 's_proxies', 's_tokens', 's_capmonster', 's_prefix', 's_delete_timer', 's_mode', 's_stream_url', 's_scrape_on_group_join', 's_auto_group_leave', 's_toast_notifications', 's_sound_notifications', 's_webhook_logging', 's_dm_logging', 's_revenge_ghostping', 's_auto_decline_fas', 's_anti_report', 's_anti_report_delay', 's_anti_tokenlog', 's_anti_tokenlog_cooldown', 's_anti_dm_advertise', 's_afk_mode', 's_afk_response', 's_afk_response_cooldown', 's_token_sniper', 's_nitro_sniper', 's_giveaway_joiner', 's_giveaway_word_blacklist', 's_giveaway_join_delay', 's_presence', 's_discord_token', 's_discord_password', 's_webhook_url', 's_webhook_name', 's_webhook_image_url', 's_webhook_title', 's_webhook_footer', 's_webhook_color', 's_theme', 'get_total_themes', 'get_total_scripts', 'reset_configs', 'open_themes', 'delete_themes', 'delete_scripts', 'create_backup', 'get_backup', 'start_account_latest', 'start_account_folder', 'get_total_backups', 'start_scripts_folder', 'start_themes_folder', 'start_group_latest', 'start_group_folder', 'start_chat_latest', 'start_chat_folder', 'get_scripts', 'get_active_theme', 'get_giveaways_joined', 'get_sniped_nitro', 'get_favourite_command', 'get_events', 'get_commands', 'get_total_commands', 'get_logins', 'get_uptime', 'fake_term', 'invisible', 'panic_button', 'close_dms', 'reject_pending_requests', 'unblock_everyone', 'remove_friends', 'leave_servers', 'token_check', 'token_video', 'exit_eel', 'get_pfp', 'get_auth_username', 'get_auth_password', 'get_auth_email', 'get_auth_key', 'get_auth_motd', 'get_auth_uid', 'get_auth_onlineusers', 'get_auth_totallogins', 'get_auth_expiration', 'get_auth_title', 'say_hello', 'get_account', 'get_friends', 'get_servers', 'auth_login', 'auth_register', 'auth_upgrade'],
    _start_geometry: {"default": {"size": null, "position": null}, "pages": {}},

    _guid: ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        ),

    _exposed_functions: {},

    _mock_queue: [],

    _mock_py_functions: function() {
        for(let i = 0; i < eel._py_functions.length; i++) {
            let name = eel._py_functions[i];
            eel[name] = function() {
                let call_object = eel._call_object(name, arguments);
                eel._mock_queue.push(call_object);
                return eel._call_return(call_object);
            }
        }
    },

    _import_py_function: function(name) {
        let func_name = name;
        eel[name] = function() {
            let call_object = eel._call_object(func_name, arguments);
            eel._websocket.send(eel._toJSON(call_object));
            return eel._call_return(call_object);
        }
    },

    _call_number: 0,

    _call_return_callbacks: {},

    _call_object: function(name, args) {
        let arg_array = [];
        for(let i = 0; i < args.length; i++){
            arg_array.push(args[i]);
        }

        let call_id = (eel._call_number += 1) + Math.random();
        return {'call': call_id, 'name': name, 'args': arg_array};
    },

    _sleep: function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    _toJSON: function(obj) {
        return JSON.stringify(obj, (k, v) => v === undefined ? null : v);
    },

    _call_return: function(call) {
        return function(callback = null) {
            if(callback != null) {
                eel._call_return_callbacks[call.call] = {resolve: callback};
            } else {
                return new Promise(function(resolve, reject) {
                    eel._call_return_callbacks[call.call] = {resolve: resolve, reject: reject};
                });
            }
        }
    },

    _position_window: function(page) {
        let size = eel._start_geometry['default'].size;
        let position = eel._start_geometry['default'].position;

        if(page in eel._start_geometry.pages) {
            size = eel._start_geometry.pages[page].size;
            position = eel._start_geometry.pages[page].position;
        }

        if(size != null){
            window.resizeTo(size[0], size[1]);
        }

        if(position != null){
            window.moveTo(position[0], position[1]);
        }
    },

    _init: function() {
        eel._mock_py_functions();

        document.addEventListener("DOMContentLoaded", function(event) {
            let page = window.location.pathname.substring(1);
            eel._position_window(page);

            let websocket_addr = (eel._host + '/eel').replace('http', 'ws');
            websocket_addr += ('?page=' + page);
            eel._websocket = new WebSocket(websocket_addr);

            eel._websocket.onopen = function() {
                for(let i = 0; i < eel._py_functions.length; i++){
                    let py_function = eel._py_functions[i];
                    eel._import_py_function(py_function);
                }

                while(eel._mock_queue.length > 0) {
                    let call = eel._mock_queue.shift();
                    eel._websocket.send(eel._toJSON(call));
                }
            };

            eel._websocket.onmessage = function (e) {
                let message = JSON.parse(e.data);
                if(message.hasOwnProperty('call') ) {
                    // Python making a function call into us
                    if(message.name in eel._exposed_functions) {
                        try {
                            let return_val = eel._exposed_functions[message.name](...message.args);
                            eel._websocket.send(eel._toJSON({'return': message.call, 'status':'ok', 'value': return_val}));
                        } catch(err) {
                            debugger
                            eel._websocket.send(eel._toJSON(
                                {'return': message.call,
                                'status':'error',
                                'error': err.message,
                                'stack': err.stack}));
                        }
                    }
                } else if(message.hasOwnProperty('return')) {
                    // Python returning a value to us
                    if(message['return'] in eel._call_return_callbacks) {
                        if(message['status']==='ok'){
                            eel._call_return_callbacks[message['return']].resolve(message.value);
                        }
                        else if(message['status']==='error' &&  eel._call_return_callbacks[message['return']].reject) {
                                eel._call_return_callbacks[message['return']].reject(message['error']);
                        }
                    }
                } else {
                    throw 'Invalid message ' + message;
                }

            };
        });
    }
};

eel._init();

if(typeof require !== 'undefined'){
    // Avoid name collisions when using Electron, so jQuery etc work normally
    window.nodeRequire = require;
    delete window.require;
    delete window.exports;
    delete window.module;
}
