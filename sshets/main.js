window.onload = function (){
    load_settings();

    if (window.outerWidth < 1072 || window.outerHeight < 562){
        window.resizeTo(1072, 562);
    }


    var element = document.getElementById("account");
    element.classList.remove("active");

    var element = document.getElementById("console");
    element.classList.remove("active");

    var element = document.getElementById("statistics");
    element.classList.remove("active");

    var element = document.getElementById("content");
    element.classList.remove("active");

    var element = document.getElementById("backups");
    element.classList.remove("active");

    var element = document.getElementById("community");
    element.classList.remove("active");

    var element = document.getElementById("settings");
    element.classList.remove("active");

}

function toggle_panel() {
    var element = document.getElementById("panel");
    element.classList.toggle("hide");
}

window.onresize = function (){{
        window.resizeTo(1072, 562);
    }
}

window.onclick = function (){{
    window.resizeTo(1072, 562);
    }
}

eel.expose(process)
function process()  {
    load_elements();
}

eel.expose(set_loader_text)
function set_loader_text(text)  {
    set_loader_text1(text);
}

async function set_loader_text1(text) {
    document.getElementById("pre-text").innerHTML = text;
}

async function load_elements() {
    var _pfp_link = await eel.get_pfp()();
    document.getElementById("_pfp").src = _pfp_link;

    var _account = await eel.get_account()();
    document.getElementById("account1").innerHTML = _account;

    var _friends = await eel.get_friends()();
    document.getElementById("friends1").innerHTML = _friends;

    var _servers = await eel.get_servers()();
    document.getElementById("servers1").innerHTML = _servers;

    var _ethoneuser = await eel.get_auth_username()();
    document.getElementById("ethoneuser1").innerHTML = _ethoneuser;

    var _ethonemail = await eel.get_auth_email()();
    document.getElementById("ethoneemail1").innerHTML = _ethonemail;

    var _ethonekey = await eel.get_auth_key()();
    document.getElementById("ethonekey1").innerHTML = _ethonekey;

    var _ethonemotd = await eel.get_auth_motd()();
    document.getElementById("ethonemotd1").innerHTML = _ethonemotd;

    var _ethoneuid = await eel.get_auth_uid()();
    document.getElementById("ethoneuid1").innerHTML = _ethoneuid;

    var _ethoneexpiration = await eel.get_auth_expiration()();
    document.getElementById("ethoneexpiration1").innerHTML = _ethoneexpiration;

    var _ethoneonlineusers = await eel.get_auth_onlineusers()();
    document.getElementById("ethoneonlineusers1").innerHTML = _ethoneonlineusers;

    var _ethonetotallogins = await eel.get_auth_totallogins()();
    document.getElementById("ethonetotallogins1").innerHTML = _ethonetotallogins;

    var _ethonetitle = await eel.get_auth_title()();
    document.title = _ethonetitle;

    var _loader = document.getElementById("preloader");
    _loader.classList.toggle("fade-in-out", 1000)

    await eel.say_hello()();
}

eel.expose(update_home)
function update_home()  {
    update_home1();
}

async function update_home1() {
    var _ethonemotd = await eel.get_auth_motd()();
    document.getElementById("ethonemotd1").innerHTML = _ethonemotd;

    var _ethoneexpiration = await eel.get_auth_expiration()();
    document.getElementById("ethoneexpiration1").innerHTML = _ethoneexpiration;

    var _ethoneonlineusers = await eel.get_auth_onlineusers()();
    document.getElementById("ethoneonlineusers1").innerHTML = _ethoneonlineusers;

    var _ethonetotallogins = await eel.get_auth_totallogins()();
    document.getElementById("ethonetotallogins1").innerHTML = _ethonetotallogins;

    var _friends = await eel.get_friends()();
    document.getElementById("friends1").innerHTML = _friends;

    var _servers = await eel.get_servers()();
    document.getElementById("servers1").innerHTML = _servers;
}

async function load_settings() {
    document.getElementById("s_prefix").value = await eel.s_prefix()();
    document.getElementById("s_delete_timer").value = await eel.s_delete_timer()();
    document.getElementById("s_mode").innerHTML = await eel.s_mode()();
    document.getElementById("s_stream_url").value = await eel.s_stream_url()();
    document.getElementById("s_scrape_on_group_join").checked = await eel.s_scrape_on_group_join()();
    document.getElementById("s_auto_group_leave").checked = await eel.s_auto_group_leave()();
    document.getElementById("s_toast_notifications").checked = await eel.s_toast_notifications()();
    document.getElementById("s_sound_notifications").checked = await eel.s_sound_notifications()();
    document.getElementById("s_webhook_logging").checked = await eel.s_webhook_logging()();
    document.getElementById("s_dm_logging").checked = await eel.s_dm_logging()();
    document.getElementById("s_revenge_ghostping").checked = await eel.s_revenge_ghostping()();
    document.getElementById("s_auto_decline_fas").checked = await eel.s_auto_decline_fas()();
    document.getElementById("s_anti_report").checked = await eel.s_anti_report()();
    document.getElementById("s_anti_report_delay").value = await eel.s_anti_report_delay()();
    document.getElementById("s_anti_tokenlog").checked = await eel.s_anti_tokenlog()();
    document.getElementById("s_anti_tokenlog_cooldown").value = await eel.s_anti_tokenlog_cooldown()();
    document.getElementById("s_anti_dm_advertise").checked = await eel.s_anti_dm_advertise()();
    document.getElementById("s_afk_mode").checked = await eel.s_afk_mode()();
    document.getElementById("s_afk_response").value = await eel.s_afk_response()();
    document.getElementById("s_afk_response_cooldown").value = await eel.s_afk_response_cooldown()();
    document.getElementById("s_token_sniper").checked = await eel.s_token_sniper()();
    document.getElementById("s_nitro_sniper").checked = await eel.s_nitro_sniper()();
    document.getElementById("s_giveaway_joiner").checked = await eel.s_giveaway_joiner()();
    document.getElementById("s_giveaway_word_blacklist").value = await eel.s_giveaway_word_blacklist()();
    document.getElementById("s_giveaway_join_delay").value = await eel.s_giveaway_join_delay()();
    document.getElementById("s_presence").innerHTML = await eel.s_presence()();
    document.getElementById("s_discord_token").value = await eel.s_discord_token()();
    document.getElementById("s_discord_password").value = await eel.s_discord_password()();
    document.getElementById("s_webhook_url").value = await eel.s_webhook_url()();
    document.getElementById("s_webhook_name").value = await eel.s_webhook_name()();
    document.getElementById("s_webhook_image_url").value = await eel.s_webhook_image_url()();
    document.getElementById("s_webhook_title").value = await eel.s_webhook_title()();
    document.getElementById("s_webhook_footer").value = await eel.s_webhook_footer()();
    document.getElementById("s_webhook_color").value = await eel.s_webhook_color()();
    document.getElementById("s_theme").value = await eel.s_theme()();
    document.getElementById("s_capmonster").value = await eel.s_capmonster()();
    document.getElementById("s_raid_tokens").value = await eel.s_tokens()();
    document.getElementById("s_proxies").value = await eel.s_proxies()();
    document.getElementById("s_alt_tokens").value = await eel.s_alt_tokens()();
    document.getElementById("s_alt_token").checked = await eel.s_alt_tokens_toggle()();
}

eel.expose(update_stats_);
function update_stats_() {
    update_stats_2();
}

async function update_stats_2() {
    var uptime_1 = await eel.get_uptime()();
    document.getElementById("uptime1_").innerHTML = uptime_1;

    var logins_1 = await eel.get_logins()();
    document.getElementById("logins1_").innerHTML = logins_1;

    var total_commands_1 = await eel.get_total_commands()();
    document.getElementById("totalcommandsused1_").innerHTML = total_commands_1;

    var commands_1 = await eel.get_commands()();
    document.getElementById("commandsused1_").innerHTML = commands_1;

    var events_1 = await eel.get_events()();
    document.getElementById("events1_").innerHTML = events_1;

    var fav_command_1 = await eel.get_favourite_command()();
    document.getElementById("command1_").innerHTML = fav_command_1;

    var nitro_1 = await eel.get_sniped_nitro()();
    document.getElementById("nitro1_").innerHTML = nitro_1;

    var giveaways_1 = await eel.get_giveaways_joined()();
    document.getElementById("giveaways1_").innerHTML = giveaways_1;

    var theme_1 = await eel.get_active_theme()();
    document.getElementById("activetheme1_").innerHTML = theme_1;

    var scripts_1 = await eel.get_scripts()();
    document.getElementById("injectedscripts1_").innerHTML = scripts_1;

    var totalbackups_1 = await eel.get_total_backups()();
    document.getElementById("totalbackups1_").innerHTML = totalbackups_1;

    var totalthemes_1 = await eel.get_total_themes()();
    document.getElementById("totalthemes1_").innerHTML = totalthemes_1;

    var totalscripts_1 = await eel.get_total_scripts()();
    document.getElementById("totalscripts1_").innerHTML = totalscripts_1;
}

eel.expose(give_class)
function give_class(name) {
    document.getElementById(name).classList.add("not-finished")
}

eel.expose(startup_1)
function startup_1() {
    var element = document.getElementById("startup1")
    element.innerHTML = "Session prepared";
    element.classList.remove("not-finished")
    element.classList.add("full")
}

eel.expose(startup_2)
function startup_2() {
    var element = document.getElementById("startup2")
    element.innerHTML = "Checked files";
    element.classList.remove("not-finished")
    element.classList.add("full")
}

eel.expose(startup_3)
function startup_3() {
    var element = document.getElementById("startup3")
    element.innerHTML = "Initialized settings";
    element.classList.remove("not-finished")
    element.classList.add("full")
}

eel.expose(startup_4)
function startup_4() {
    var element = document.getElementById("startup4")
    element.innerHTML = "Checked Discord details";
    element.classList.remove("not-finished")
    element.classList.add("full")
}

eel.expose(startup_5)
function startup_5() {
    var element = document.getElementById("startup5")
    element.innerHTML = "Authenticated";
    element.classList.remove("not-finished")
    element.classList.add("full")
}

eel.expose(startup_6)
function startup_6() {
    var element = document.getElementById("startup6")
    element.innerHTML = "Injected custom scripts";
    element.classList.remove("not-finished")
    element.classList.add("full")
}

eel.expose(startup_7)
function startup_7() {
    var element = document.getElementById("startup7")
    element.innerHTML = "Connected to Discord";
    element.classList.remove("not-finished")
    element.classList.add("full")
}

eel.expose(show_notification)
function show_notification(text) {
    iziToast.show({
        theme: 'dark',
        drag: 0,
        message: text,
        closeOnClick: 0,
        titleColor: "rgb(154, 99, 255)",
        icon: "fa fa-circle-check",
        transitionIn: "fadeInDown",
        transitionOut: "fadeOutUp",
        backgroundColor: "rgba(19, 19, 19, 0.613)",
        progressBar: 0,
        iconColor:"rgb(154, 99, 255)",
        position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: "rgb(154, 99, 255)",
        image: "img/white.png",
        timeout: 2000,
        imageWidth: 6
    });
}

eel.expose(show_toast);
function show_toast(_text, code) {
    let _clr, _img;
    if (code == "success") { // success
        _clr = 'rgba(8, 255, 0, 1)'
        _img = 'img/success.png'
        _icon = 'fa fa-circle-check'
    }
    if (code == "info") { // info
        _clr = 'rgba(0, 108, 255, 1)'
        _img = 'img/info.png'
        _icon = 'fa fa-circle-info'
    }
    if (code == "warning") { //warning
        _clr = 'rgba(255, 224, 0, 1)'
        _img = 'img/warning.png'
        _icon = 'fa fa-circle-exclamation'
    }
    if (code == "error") { //error
        _clr = 'rgba(255, 0, 0, 1)'
        _img = 'img/error.png'
        _icon = 'fa fa-circle-exclamation' 
    }

    iziToast.show({
        theme: 'dark',
        drag: 0,
        message: _text,
        closeOnClick: 1,
        icon: _icon,
        transitionIn: "fadeInDown",
        transitionOut: "fadeOutUp",
        backgroundColor: "rgba(19, 19, 19, 0.613)",
        progressBar: 0,
        iconColor: _clr,
        position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: _clr,
        image: _img,
        timeout: 10000,
        imageWidth: 6
    });

}

function copy_email() {
    eel.copy_email();
}

function copy_key() {
    eel.copy_key();
}

function show_home() {
    var homepage = document.getElementById("homepage");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("accountpage").hidden = true;
    document.getElementById("consolepage").hidden = true;
    document.getElementById("executorpage").hidden = true;
    document.getElementById("statisticspage").hidden = true;
    document.getElementById("contentpage").hidden = true;
    document.getElementById("backupspage").hidden = true;
    document.getElementById("communitypage").hidden = true;
    document.getElementById("settings1page").hidden = true;
    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings5page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    var element = document.getElementById("home");
    element.classList.add("active");

    var element = document.getElementById("account");
    element.classList.remove("active");

    var element = document.getElementById("console");
    element.classList.remove("active");

    var element = document.getElementById("statistics");
    element.classList.remove("active");

    var element = document.getElementById("content");
    element.classList.remove("active");

    var element = document.getElementById("backups");
    element.classList.remove("active");

    var element = document.getElementById("community");
    element.classList.remove("active");

    var element = document.getElementById("settings");
    element.classList.remove("active");

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

eel.expose(get_confirm)
function get_confirm() {
    return 1;
}

function show_account() {
    var homepage = document.getElementById("accountpage");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("homepage").hidden = true;
    document.getElementById("consolepage").hidden = true;
    document.getElementById("executorpage").hidden = true;
    document.getElementById("statisticspage").hidden = true;
    document.getElementById("contentpage").hidden = true;
    document.getElementById("backupspage").hidden = true;
    document.getElementById("communitypage").hidden = true;
    document.getElementById("settings1page").hidden = true;
    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings5page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    var element = document.getElementById("home");
    element.classList.remove("active");

    var element = document.getElementById("account");
    element.classList.add("active");

    var element = document.getElementById("console");
    element.classList.remove("active");

    var element = document.getElementById("statistics");
    element.classList.remove("active");

    var element = document.getElementById("content");
    element.classList.remove("active");

    var element = document.getElementById("backups");
    element.classList.remove("active");

    var element = document.getElementById("community");
    element.classList.remove("active");

    var element = document.getElementById("settings");
    element.classList.remove("active");

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

function show_console() {
    var homepage = document.getElementById("consolepage");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("homepage").hidden = true;
    document.getElementById("accountpage").hidden = true;
    document.getElementById("executorpage").hidden = true;
    document.getElementById("statisticspage").hidden = true;
    document.getElementById("contentpage").hidden = true;
    document.getElementById("backupspage").hidden = true;
    document.getElementById("communitypage").hidden = true;
    document.getElementById("settings1page").hidden = true;
    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings5page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    var element = document.getElementById("home");
    element.classList.remove("active");

    var element = document.getElementById("account");
    element.classList.remove("active");

    var element = document.getElementById("console");
    element.classList.add("active");

    var element = document.getElementById("statistics");
    element.classList.remove("active");

    var element = document.getElementById("content");
    element.classList.remove("active");

    var element = document.getElementById("backups");
    element.classList.remove("active");

    var element = document.getElementById("community");
    element.classList.remove("active");

    var element = document.getElementById("settings");
    element.classList.remove("active");

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

function show_executor() {
    var homepage = document.getElementById("executorpage");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("homepage").hidden = true;
    document.getElementById("accountpage").hidden = true;
    document.getElementById("consolepage").hidden = true;
    document.getElementById("statisticspage").hidden = true;
    document.getElementById("contentpage").hidden = true;
    document.getElementById("backupspage").hidden = true;
    document.getElementById("communitypage").hidden = true;
    document.getElementById("settings1page").hidden = true;
    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings5page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    update_server_list();
    update_friends_list();
    update_commands_list();

    var element = document.getElementById("home");
    element.classList.remove("active");

    var element = document.getElementById("account");
    element.classList.remove("active");

    var element = document.getElementById("console");
    element.classList.add("active");

    var element = document.getElementById("statistics");
    element.classList.remove("active");

    var element = document.getElementById("content");
    element.classList.remove("active");

    var element = document.getElementById("backups");
    element.classList.remove("active");

    var element = document.getElementById("community");
    element.classList.remove("active");

    var element = document.getElementById("settings");
    element.classList.remove("active");

    var element = document.getElementById("panel");
    element.classList.add("hide");

}

function show_statistics() {
    var homepage = document.getElementById("statisticspage");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("homepage").hidden = true;
    document.getElementById("accountpage").hidden = true;
    document.getElementById("consolepage").hidden = true;
    document.getElementById("executorpage").hidden = true;
    document.getElementById("contentpage").hidden = true;
    document.getElementById("backupspage").hidden = true;
    document.getElementById("communitypage").hidden = true;
    document.getElementById("settings1page").hidden = true;
    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings5page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    var element = document.getElementById("home");
    element.classList.remove("active");

    var element = document.getElementById("account");
    element.classList.remove("active");

    var element = document.getElementById("console");
    element.classList.remove("active");

    var element = document.getElementById("statistics");
    element.classList.add("active");

    var element = document.getElementById("content");
    element.classList.remove("active");

    var element = document.getElementById("backups");
    element.classList.remove("active");

    var element = document.getElementById("community");
    element.classList.remove("active");

    var element = document.getElementById("settings");
    element.classList.remove("active");

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

function show_content() {
    var homepage = document.getElementById("contentpage");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("homepage").hidden = true;
    document.getElementById("accountpage").hidden = true;
    document.getElementById("consolepage").hidden = true;
    document.getElementById("executorpage").hidden = true;
    document.getElementById("statisticspage").hidden = true;
    document.getElementById("backupspage").hidden = true;
    document.getElementById("communitypage").hidden = true;
    document.getElementById("settings1page").hidden = true;
    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings5page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    var element = document.getElementById("home");
    element.classList.remove("active");

    var element = document.getElementById("account");
    element.classList.remove("active");

    var element = document.getElementById("console");
    element.classList.remove("active");

    var element = document.getElementById("statistics");
    element.classList.remove("active");

    var element = document.getElementById("content");
    element.classList.add("active");

    var element = document.getElementById("backups");
    element.classList.remove("active");

    var element = document.getElementById("community");
    element.classList.remove("active");

    var element = document.getElementById("settings");
    element.classList.remove("active");

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

function show_backups() {
    var homepage = document.getElementById("backupspage");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("homepage").hidden = true;
    document.getElementById("accountpage").hidden = true;
    document.getElementById("consolepage").hidden = true;
    document.getElementById("executorpage").hidden = true;
    document.getElementById("statisticspage").hidden = true;
    document.getElementById("contentpage").hidden = true;
    document.getElementById("communitypage").hidden = true;
    document.getElementById("settings1page").hidden = true;
    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings5page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    var element = document.getElementById("home");
    element.classList.remove("active");

    var element = document.getElementById("account");
    element.classList.remove("active");

    var element = document.getElementById("console");
    element.classList.remove("active");

    var element = document.getElementById("statistics");
    element.classList.remove("active");

    var element = document.getElementById("content");
    element.classList.remove("active");

    var element = document.getElementById("backups");
    element.classList.add("active");

    var element = document.getElementById("community");
    element.classList.remove("active");

    var element = document.getElementById("settings");
    element.classList.remove("active");

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

function show_community() {
    var homepage = document.getElementById("communitypage");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("homepage").hidden = true;
    document.getElementById("accountpage").hidden = true;
    document.getElementById("consolepage").hidden = true;
    document.getElementById("executorpage").hidden = true;
    document.getElementById("statisticspage").hidden = true;
    document.getElementById("contentpage").hidden = true;
    document.getElementById("backupspage").hidden = true;
    document.getElementById("settings1page").hidden = true;
    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings5page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    var element = document.getElementById("home");
    element.classList.remove("active");

    var element = document.getElementById("account");
    element.classList.remove("active");

    var element = document.getElementById("console");
    element.classList.remove("active");

    var element = document.getElementById("statistics");
    element.classList.remove("active");

    var element = document.getElementById("content");
    element.classList.remove("active");

    var element = document.getElementById("backups");
    element.classList.remove("active");

    var element = document.getElementById("community");
    element.classList.add("active");

    var element = document.getElementById("settings");
    element.classList.remove("active");

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

function show_settings() {
    load_settings();
    var homepage = document.getElementById("settings1page");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("homepage").hidden = true;
    document.getElementById("accountpage").hidden = true;
    document.getElementById("consolepage").hidden = true;
    document.getElementById("executorpage").hidden = true;
    document.getElementById("statisticspage").hidden = true;
    document.getElementById("contentpage").hidden = true;
    document.getElementById("backupspage").hidden = true;
    document.getElementById("communitypage").hidden = true;
    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings5page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    var element = document.getElementById("home");
    element.classList.remove("active");

    var element = document.getElementById("account");
    element.classList.remove("active");

    var element = document.getElementById("console");
    element.classList.remove("active");

    var element = document.getElementById("statistics");
    element.classList.remove("active");

    var element = document.getElementById("content");
    element.classList.remove("active");

    var element = document.getElementById("backups");
    element.classList.remove("active");

    var element = document.getElementById("community");
    element.classList.remove("active");

    var element = document.getElementById("settings");
    element.classList.add("active");

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

function show_settings1() {
    load_settings();
    var homepage = document.getElementById("settings1page");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings5page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

function show_settings2() {
    load_settings();
    var homepage = document.getElementById("settings2page");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("settings1page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings5page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

function show_settings3() {
    load_settings();
    var homepage = document.getElementById("settings3page");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("settings1page").hidden = true;
    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings5page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

function show_settings4() {
    load_settings();
    var homepage = document.getElementById("settings4page");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("settings1page").hidden = true;
    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings5page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

function show_settings5() {
    load_settings();
    var homepage = document.getElementById("settings5page");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("settings1page").hidden = true;
    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings6page").hidden = true;

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

function show_settings6() {
    load_settings();
    var homepage = document.getElementById("settings6page");
    homepage.style.opacity = 0.5;
    homepage.hidden = false;
    setTimeout(function() {
        homepage.style.opacity = 1;
    }, 10);

    document.getElementById("settings1page").hidden = true;
    document.getElementById("settings2page").hidden = true;
    document.getElementById("settings3page").hidden = true;
    document.getElementById("settings4page").hidden = true;
    document.getElementById("settings5page").hidden = true;

    var element = document.getElementById("panel");
    element.classList.add("hide");
}

eel.expose(get_prefix);
function get_prefix() {
    return document.getElementById("s_prefix").value;
}

eel.expose(get_delete_timer);
function get_delete_timer() {
    return document.getElementById("s_delete_timer").value;
}

eel.expose(get_mode);
function get_mode() {
    return document.getElementById("s_mode").innerHTML;
}

eel.expose(get_theme);
function get_theme() {
    return document.getElementById("s_theme").value;
}

eel.expose(get_capmonster);
function get_capmonster() {
    return document.getElementById("s_capmonster").value;
}

eel.expose(get_tokens);
function get_tokens() {
    return document.getElementById("s_raid_tokens").value;
}

eel.expose(get_alt_tokens);
function get_alt_tokens() {
    return document.getElementById("s_alt_tokens").value;
}

eel.expose(get_alt_tokens_toggle);
function get_alt_tokens_toggle() {
    return document.getElementById("s_alt_token").checked;
}

eel.expose(get_proxies);
function get_proxies() {
    return document.getElementById("s_proxies").value;
}

eel.expose(get_stream_url);
function get_stream_url() {
    return document.getElementById("s_stream_url").value;
}

eel.expose(get_gc_scraper);
function get_gc_scraper() {
    return document.getElementById("s_scrape_on_group_join").checked;
}

eel.expose(get_auto_group_leave);
function get_auto_group_leave() {
    return document.getElementById("s_auto_group_leave").checked;
}

eel.expose(get_toast_notifications);
function get_toast_notifications() {
    return document.getElementById("s_toast_notifications").checked;
}

eel.expose(get_sound_notifications);
function get_sound_notifications() {
    return document.getElementById("s_sound_notifications").checked;
}

eel.expose(get_webhook_logging);
function get_webhook_logging() {
    return document.getElementById("s_webhook_logging").checked;
}

eel.expose(get_dm_logging);
function get_dm_logging() {
    return document.getElementById("s_dm_logging").checked;
}

eel.expose(get_revenge_ghostping);
function get_revenge_ghostping() {
    return document.getElementById("s_revenge_ghostping").checked;
}

eel.expose(get_auto_decline_friend_requests);
function get_auto_decline_friend_requests() {
    return document.getElementById("s_auto_decline_fas").checked;
}

eel.expose(get_anti_report);
function get_anti_report() {
    return document.getElementById("s_anti_report").checked;
}

eel.expose(get_anti_report_delay);
function get_anti_report_delay() {
    return document.getElementById("s_anti_report_delay").value;
}

eel.expose(get_anti_tokenlog);
function get_anti_tokenlog() {
    return document.getElementById("s_anti_tokenlog").checked;
}

eel.expose(get_anti_tokenlog_cooldown);
function get_anti_tokenlog_cooldown() {
    return document.getElementById("s_anti_tokenlog_cooldown").value;
}

eel.expose(get_anti_dm_advertise);
function get_anti_dm_advertise() {
    return document.getElementById("s_anti_dm_advertise").checked;
}

eel.expose(get_afk_mode);
function get_afk_mode() {
    return document.getElementById("s_afk_mode").checked;
}

eel.expose(get_afk_response);
function get_afk_response() {
    return document.getElementById("s_afk_response").value;
}

eel.expose(get_afk_response_cooldown);
function get_afk_response_cooldown() {
    return document.getElementById("s_afk_response_cooldown").value;
}

eel.expose(get_token_sniper);
function get_token_sniper() {
    return document.getElementById("s_token_sniper").checked;
}

eel.expose(get_nitro_sniper);
function get_nitro_sniper() {
    return document.getElementById("s_nitro_sniper").checked;
}

eel.expose(get_giveaway_joiner);
function get_giveaway_joiner() {
    return document.getElementById("s_giveaway_joiner").checked;
}

eel.expose(get_giveaway_word_blacklist);
function get_giveaway_word_blacklist() {
    return document.getElementById("s_giveaway_word_blacklist").value;
}

eel.expose(get_giveaway_join_delay);
function get_giveaway_join_delay() {
    return document.getElementById("s_giveaway_join_delay").value;
}

eel.expose(get_presence);
function get_presence() {
    return document.getElementById("s_presence").innerHTML;
}

eel.expose(get_discord_token);
function get_discord_token() {
    return document.getElementById("s_discord_token").value;
}

eel.expose(get_discord_password);
function get_discord_password() {
    return document.getElementById("s_discord_password").value;
}

eel.expose(get_webhook_url);
function get_webhook_url() {
    return document.getElementById("s_webhook_url").value;
}

eel.expose(get_webhook_name);
function get_webhook_name() {
    return document.getElementById("s_webhook_name").value;
}

eel.expose(get_webhook_image_url);
function get_webhook_image_url() {
    return document.getElementById("s_webhook_image_url").value;
}

eel.expose(get_webhook_title);
function get_webhook_title() {
    return document.getElementById("s_webhook_title").value;
}

eel.expose(get_webhook_footer);
function get_webhook_footer() {
    return document.getElementById("s_webhook_footer").value;
}

eel.expose(get_webhook_color);
function get_webhook_color() {
    return document.getElementById("s_webhook_color").value;
}

window.addEventListener("keydown", function(event) {
    if (event.keyCode == 116) {
        // block F5 (Refresh)
        event.preventDefault();
        event.stopPropagation();
        return false;

    } else if (event.keyCode == 122) {
        // block F11 (Fullscreen)
        event.preventDefault();
        event.stopPropagation();
        return false;

    } else if (event.keyCode == 123) {
        // block F12 (DevTools)
        event.preventDefault();
        event.stopPropagation();
        return false;

    // } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    //     // block Strg+Shift+I (DevTools)
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;

    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
        // block Strg+Shift+J (Console)
        event.preventDefault();
        event.stopPropagation();
        return false;

    } else if (event.ctrlKey && event.keyCode == 85) {
        // block Strg+U (Source)
        event.preventDefault();
        event.stopPropagation();
        return false;

    } else if (event.ctrlKey && event.keyCode == 83) {
        // block Strg+S (Save)
        event.preventDefault();
        event.stopPropagation();
        return false;

    } else if (event.ctrlKey && event.keyCode == 114) {
        // block Strg+R (Force Reload)
        event.preventDefault();
        event.stopPropagation();
        return false;

    } else if (event.ctrlKey && event.keyCode == 70) {
        // block Strg+F (Search)
        event.preventDefault();
        event.stopPropagation();
        return false;

    } else if (event.ctrlKey && event.keyCode == 72) {
        // block Strg+H (History)
        event.preventDefault();
        event.stopPropagation();
        return false;

    } else if (event.ctrlKey && event.keyCode == 80) {
        // block Strg+P (Print)
        event.preventDefault();
        event.stopPropagation();
        return false;

    } else if (event.ctrlKey && event.keyCode == 79) {
        // block Strg+O (Open)
        event.preventDefault();
        event.stopPropagation();
        return false;

    } else if (event.ctrlKey && event.keyCode == 78) {
        // block Strg+N (New)
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
});

window.oncontextmenu = function(event) {
    // block right-click / context-menu
    event.preventDefault();
    event.stopPropagation();
    return false;
};

eel.expose(console_log)
function console_log(text, link, replace, tooltip) {
    const consoleDiv = document.getElementById('true_console');

    const consoleLine = document.createElement('div');
    consoleLine.classList.add('consoleline');

    const consoleParagraph = document.createElement('h3');
    consoleParagraph.classList.add('consoletext');

    if (link && !replace) {
        const button = document.createElement('button');
        button.innerText = 'Jump';
        button.classList.add('consolebutton');
        button.style.display = 'inline-block';
        button.style.verticalAlign = 'middle';
        button.style.marginRight = '0px';
        button.onclick = function() {
            window.location.replace("discord:\/\/" + link);
        };
        consoleParagraph.appendChild(button);
    }

    let replacedText = text;
    if (replace) {
        if (tooltip) {
            replacedText = text.replace(replace, `<a class="consolelink" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="${tooltip}" onclick="window.location.replace('discord:\/\/${link}');">${replace}</a>`);
        } else {
            replacedText = text.replace(replace, `<a class="consolelink" onclick="window.location.replace('discord:\/\/${link}');">${replace}</a>`);
        }
        consoleParagraph.innerHTML = replacedText;
    } else {
        consoleParagraph.insertAdjacentText('beforeend', ` ${text}`);
    }

    consoleParagraph.style.display = 'inline-block';

    consoleLine.appendChild(consoleParagraph); 
    consoleDiv.appendChild(consoleLine);

    consoleLine.style.display = 'block'; 

    consoleDiv.scrollTop = consoleDiv.scrollHeight;

    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
}

eel.expose(console_log_replace)
function console_log_replace(text, link, replace, tooltip) {
    const consoleDiv = document.getElementById('true_console');

    const consoleLine = document.createElement('div'); 
    consoleLine.classList.add('consoleline');

    const consoleParagraph = document.createElement('h3');
    consoleParagraph.classList.add('consoletext');

    let replacedText = text;
    if (tooltip) {
        replacedText = text.replace(replace, `<a class="consolelink" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="${tooltip}" onclick="window.location.replace('discord:\/\/${link}');">${replace}</a>`);
    } else {
        replacedText = text.replace(replace, `<a class="consolelink" onclick="window.location.replace('discord:\/\/${link}');">${replace}</a>`);
    }
    consoleParagraph.innerHTML = replacedText;

    consoleParagraph.style.display = 'inline-block';

    consoleLine.appendChild(consoleParagraph); 
    consoleDiv.appendChild(consoleLine); 

    consoleLine.style.display = 'block';

    consoleDiv.scrollTop = consoleDiv.scrollHeight;

    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
}

eel.expose(clear_console)
function clear_console() {
    const consoleDiv = document.getElementById('true_console');
    while (consoleDiv.firstChild) {
        consoleDiv.removeChild(consoleDiv.firstChild);
    }
}




document.addEventListener("DOMContentLoaded", function() {
    const trigger = document.getElementById('s_mode');
    const options = document.getElementById('s_mode_options');

    trigger.addEventListener('click', function() {
        options.classList.toggle('custom-select__options--shown');
    });

    options.addEventListener('click', function(e) {
        const option = e.target;
        if (!option.classList.contains('custom-select__option')) return;
        const value = option.dataset.value;
        const text = option.textContent;
        trigger.textContent = text;
        trigger.focus();
        options.classList.remove('custom-select__options--shown');
        const fallback = document.getElementById('s_mode_fallback');
        fallback.value = value;
    });

    document.addEventListener('click', function(e) {
        const target = e.target;
        if (!target.closest('.custom-select')) {
            options.classList.remove('custom-select__options--shown');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const trigger = document.getElementById('s_presence');
    const options = document.getElementById('s_presence_options');

    trigger.addEventListener('click', function() {
        options.classList.toggle('custom-select__options--shown');
    });

    options.addEventListener('click', function(e) {
        const option = e.target;
        if (!option.classList.contains('custom-select__option')) return;
        const value = option.dataset.value;
        const text = option.textContent;
        trigger.textContent = text;
        trigger.focus();
        options.classList.remove('custom-select__options--shown');
        const fallback = document.getElementById('s_presence_fallback');
        fallback.value = value;
    });

    document.addEventListener('click', function(e) {
        const target = e.target;
        if (!target.closest('.custom-select')) {
            options.classList.remove('custom-select__options--shown');
        }
    });
});

async function update_server_list() {
    const serverDivs = document.querySelectorAll(".server-div");
    serverDivs.forEach((div) => {
        div.parentNode.removeChild(div);
    });
    document.getElementById("server-filter").value = "";

    const servers = await eel.ex_get_servers()();

    const mainDiv = document.getElementById("server-container");
    mainDiv.scrollTop = 0;
    servers.forEach((server) => {
        const [name, id] = server.split("WEWEEWEWF");
        const existingDiv = document.querySelector(`.server-div[data-name="${name}"]`);
        if (existingDiv) {
            existingDiv.setAttribute("onclick", `window.location.replace("discord:\/\/discord.com/channels/${id}");`);
        } else {
            const serverDiv = document.createElement("div");
            serverDiv.classList.add("server-div");
            serverDiv.innerHTML = name;
            serverDiv.setAttribute("data-name", name);
            serverDiv.setAttribute("onclick", `window.location.replace("discord:\/\/discord.com/channels/${id}");`);
            mainDiv.appendChild(serverDiv);
        }
    });
}

async function update_friends_list() {
    const friendDivs = document.querySelectorAll(".friend-div");
    friendDivs.forEach((div) => {
        div.parentNode.removeChild(div);
    });
    document.getElementById("friend-filter").value = "";

    const friends = await eel.ex_get_friends()();

    const mainDiv = document.getElementById("friend-container");
    mainDiv.scrollTop = 0;
    friends.forEach((friend) => {
        const [name, id] = friend.split("WEWEEWEWF");
        const friendDiv = document.createElement("div");
        friendDiv.classList.add("friend-div");
        friendDiv.innerHTML = name;
        friendDiv.setAttribute("onclick", `window.location.replace("discord:\/\/discord.com/users/${id}");`);
        mainDiv.appendChild(friendDiv);
    });
}


function open_command_modal(name, usage, description, amount) {
    // create the modal container
    const modal = document.createElement("div");
    modal.classList.add("modal");
    
    // create the modal content
    const content = document.createElement("div");
    content.classList.add("modal-content");
    
    // create the close button
    const close = document.createElement("span");
    close.classList.add("close");
    close.innerHTML = "&times;";
    close.addEventListener("click", () => {
        modal.animate([
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration: 400,
            easing: "ease-in-out"
        }).onfinish = () => modal.remove();
    });
    
    // create the name element
    const nameEl = document.createElement("h2");
    nameEl.classList.add("modal-name");
    nameEl.textContent = name;
    
    // create the usage element
    const required = document.createElement("h3");
    required.classList.add("modal-text");
    required.style.marginTop = "25px";
    required.innerHTML = "Required: <a style='color: #ff00f7'>(</a><a style='color: #9f9bb9;'>argument</a><a style='color: #ff00f7'>)</a>"

    const optional = document.createElement("h3");
    optional.classList.add("modal-text");
    optional.innerHTML = "Optional: <a style='color: #0059ff'>[</a><a style='color: #9f9bb9;'>argument</a><a style='color: #0059ff'>]</a>"

    const usageEl = document.createElement("h3");
    usageEl.classList.add("modal-text");
    usageEl.style.marginTop = "10px";

    const usage2 = usage.replace(/\[/g, "<a style='color: #0059ff'>[</a><a style='color: #9f9bb9;'>")
                    .replace(/\]/g, "</a><a style='color: #0059ff'>]</a>")
                    .replace(/\(/g, "<a style='color: #ff00f7'>(</a><a style='color: #9f9bb9;'>")
                    .replace(/\)/g, "</a><a style='color: #ff00f7'>)</a>");


    usageEl.innerHTML = `Usage: <a style="color: #9f9bb9;">${usage2}</a>`;
    
    // create the "Copy to Clipboard" button
    const copyBtn = document.createElement("button");
    copyBtn.classList.add("modal-button_");
    copyBtn.textContent = "Copy Usage to Clipboard";
    copyBtn.addEventListener("click", () => {
        eel.copy_command(usage);
    });
    
    // create the description element
    const descEl = document.createElement("h3");
    descEl.classList.add("modal-text");
    descEl.innerHTML = "Description: <a style='color: #9f9bb9;'>" + description + ".</a>";

    const amouEl = document.createElement("h3");
    amouEl.classList.add("modal-text");
    amouEl.innerHTML = "Times used: <a style='color: #9f9bb9;'>" + amount + "</a>";
    
    // add the content, close button, and copy button to the modal
    content.appendChild(close);
    content.appendChild(nameEl);
    content.appendChild(required);
    content.appendChild(optional);
    content.appendChild(usageEl);
    content.appendChild(descEl);
    content.appendChild(amouEl);
    content.appendChild(copyBtn);
    modal.appendChild(content);
    
    // add the modal to the document
    document.body.appendChild(modal);
    
    // center the modal on the screen using transform
    content.style.transform = "translateY(-24%)";
    const top = (window.innerHeight - content.offsetHeight) / 2;
    content.style.top = `${top}px`;
    const left = (window.innerWidth - content.offsetWidth) / 2;
    content.style.left = `${left}px`;
    
    // add event listener to close the modal when clicking outside of the content
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 200,
                easing: "ease-in-out"
            }).onfinish = () => modal.remove();
        }
    });

    // add animation to the modal container
    modal.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 500,
        easing: "ease-in-out"
    });
}



async function update_commands_list() {
    const commandDivs = document.querySelectorAll(".commands-div");
    commandDivs.forEach((div) => {
        div.parentNode.removeChild(div);
    });
    document.getElementById("command-filter").value = "";

    const commands = await eel.ex_get_commands()();

    const mainDiv = document.getElementById("command-container");
    mainDiv.scrollTop = 0;
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }

    commands.forEach((command) => {
        const [name, usage, description, amount] = command.split("WEWEEWEWF");
        const existingDiv = document.querySelector(`.command-div[data-name="${name}"]`);
        if (existingDiv) {
            existingDiv.setAttribute("onclick", `open_command_modal("${name}", "${usage}", "${description}", "${amount}");`);
        } else {
            const commandDiv = document.createElement("div");
            commandDiv.classList.add("command-div");
            commandDiv.innerHTML = name;
            commandDiv.setAttribute("onclick", `open_command_modal("${name}", "${usage}", "${description}", "${amount}");`);
            mainDiv.appendChild(commandDiv);
        }
    });
}

function restore_backup_friends() {
    eel.get_backup()().then(function(dictionary) {
        console.log(dictionary);
    
        // create the modal container
        const modal = document.createElement("div");
        modal.classList.add("modal");
    
        // create the modal content
        const content = document.createElement("div");
        content.classList.add("modal-content");
    
        // create the close button
        const close = document.createElement("span");
        close.classList.add("close");
        close.innerHTML = "&times;";
        close.addEventListener("click", () => {
        modal.animate(
            [{ opacity: 1 }, { opacity: 0 }],
            {
            duration: 400,
            easing: "ease-in-out",
            }
        ).onfinish = () => modal.remove();
        });
    
        // create the name element
        const nameEl = document.createElement("h2");
        nameEl.classList.add("modal-name");
        nameEl.textContent = "Friends"
        nameEl.style.paddingBottom = "10px";
    
        // create the description element
        const userEl = document.createElement("h3");
        userEl.classList.add("modal-text");
        userEl.innerHTML = `Username: <a style='color: #9f9bb9;'>${dictionary["friends"][0]["name"]}</a>`;

        // create the description element
        const idEl = document.createElement("h3");
        idEl.classList.add("modal-text");
        idEl.innerHTML = `ID: <a style='color: #9f9bb9;'>${dictionary["friends"][0]["id"]}</a>`;
    
        // create the index element
        const indexEl = document.createElement("h3");
        indexEl.classList.add("modal-text");
        indexEl.innerHTML = `Progress: <a style='color: #9f9bb9;'>1 / ${dictionary["friends"].length}</a>`;

        const prevBtn = document.createElement("button");
        prevBtn.classList.add("modal-button-prev");
        prevBtn.classList.add("modal-button");
        prevBtn.textContent = "Previous";
        prevBtn.addEventListener("click", () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = dictionary["friends"].length - 1;
            }
            userEl.innerHTML = `Username: <a style='color: #9f9bb9;'>${dictionary["friends"][currentIndex]["name"]}</a>`;
            idEl.innerHTML = `ID: <a style='color: #9f9bb9;'>${dictionary["friends"][currentIndex]["id"]}</a>`;
            indexEl.innerHTML = `Progress: <a style='color: #9f9bb9;'>${currentIndex + 1} / ${dictionary["friends"].length}</a>`;
            window.location.replace(`discord://discord.com/users/${dictionary["friends"][currentIndex]["id"]}`);
        });

        // create the "Next" button
        const nextBtn = document.createElement("button");
        nextBtn.classList.add("modal-button-next");
        nextBtn.classList.add("modal-button");
        nextBtn.textContent = "Next";
        let currentIndex = 0;
        nextBtn.addEventListener("click", () => {
            currentIndex++;
            if (currentIndex >= dictionary["friends"].length) {
                currentIndex = 0;
            }
            userEl.innerHTML = `Username: <a style='color: #9f9bb9;'>${dictionary["friends"][currentIndex]["name"]}</a>`;
            idEl.innerHTML = `ID: <a style='color: #9f9bb9;'>${dictionary["friends"][currentIndex]["id"]}</a>`;
            indexEl.innerHTML = `Progress: <a style='color: #9f9bb9;'>${currentIndex + 1} / ${dictionary["friends"].length}</a>`;
            window.location.replace(`discord://discord.com/users/${dictionary["friends"][currentIndex]["id"]}`);
        });

        const switcha = document.createElement("a");
        switcha.textContent = "Switch to Servers";
        switcha.classList.add("modal-switch");
        switcha.addEventListener("click", () => {
            modal.animate(
                [{ opacity: 1 }, { opacity: 0 }],
                {
                duration: 400,
                easing: "ease-in-out",
                }
            ).onfinish = () => modal.remove();
            restore_backup_servers();
        });
    
        // create a container for the buttons
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("modal-button-container");
        buttonContainer.appendChild(prevBtn);
        buttonContainer.appendChild(nextBtn);

        // add the content, close button, and button container to the modal
        content.appendChild(close);
        content.appendChild(nameEl);
        content.appendChild(userEl);
        content.appendChild(idEl);
        content.appendChild(indexEl);
        content.appendChild(buttonContainer);
        content.appendChild(switcha);
        modal.appendChild(content);

        window.location.replace(`discord://discord.com/users/${dictionary["friends"][currentIndex]["id"]}`);
    
        // add the modal to the document
        document.body.appendChild(modal);
    
        // center the modal on the screen using transform
        content.style.transform = "translateY(-24%)";
        const top = (window.innerHeight - content.offsetHeight) / 2;
        content.style.top = `${top}px`;
        const left = (window.innerWidth - content.offsetWidth) / 2;
        content.style.left = `${left}px`;
    
        // add event listener to close the modal when clicking outside of the content
        modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.animate(
            [{ opacity: 1 }, { opacity: 0 }],
            {
                duration: 200,
                easing: "ease-in-out",
            }
            ).onfinish = () => modal.remove();
        }
        });
    
        // add animation to the modal container
        modal.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        {
            duration: 500,
            easing: "ease-in-out",
        }
        );
    });
  }
  
  function restore_backup_servers() {
    eel.get_backup()().then(function(dictionary) {
        console.log(dictionary);
    
        // create the modal container
        const modal = document.createElement("div");
        modal.classList.add("modal");
    
        // create the modal content
        const content = document.createElement("div");
        content.classList.add("modal-content");
    
        // create the close button
        const close = document.createElement("span");
        close.classList.add("close");
        close.innerHTML = "&times;";
        close.addEventListener("click", () => {
        modal.animate(
            [{ opacity: 1 }, { opacity: 0 }],
            {
            duration: 400,
            easing: "ease-in-out",
            }
        ).onfinish = () => modal.remove();
        });
    
        // create the name element
        const nameEl = document.createElement("h2");
        nameEl.classList.add("modal-name");
        nameEl.textContent = "Servers";
        nameEl.style.paddingBottom = "10px";
    
        // create the description element
        const userEl = document.createElement("h3");
        userEl.classList.add("modal-text");
        userEl.innerHTML = `Server name: <a style='color: #9f9bb9;'>${dictionary["servers"][0]["name"]}</a>`;

        // create the description element
        const idEl = document.createElement("h3");
        idEl.classList.add("modal-text");
        idEl.innerHTML = `ID: <a style='color: #9f9bb9;'>${dictionary["servers"][0]["id"]}</a>`;
    
        const invEl = document.createElement("h3");
        invEl.classList.add("modal-text");
        invEl.innerHTML = `Invite: <a style='color: #9f9bb9;'>discord.gg/${dictionary["servers"][0]["invite"]}</a>`;

        // create the index element
        const indexEl = document.createElement("h3");
        indexEl.classList.add("modal-text");
        indexEl.innerHTML = `Progress: <a style='color: #9f9bb9;'>1 / ${dictionary["servers"].length}</a>`;

        const prevBtn = document.createElement("button");
        prevBtn.classList.add("modal-button-prev");
        prevBtn.classList.add("modal-button");
        prevBtn.textContent = "Previous";
        prevBtn.addEventListener("click", () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = dictionary["servers"].length - 1;
            }
            userEl.innerHTML = `Server name: <a style='color: #9f9bb9;'>${dictionary["servers"][currentIndex]["name"]}</a>`;
            idEl.innerHTML = `ID: <a style='color: #9f9bb9;'>${dictionary["servers"][currentIndex]["id"]}</a>`;
            indexEl.innerHTML = `Progress: <a style='color: #9f9bb9;'>${currentIndex + 1} / ${dictionary["servers"].length}</a>`;
            invEl.innerHTML = `Invite: <a style='color: #9f9bb9;'>discord.gg/${dictionary["servers"][currentIndex]["invite"]}</a>`;
            window.location.replace(`discord://discord.com/invite/${dictionary["servers"][currentIndex]["invite"]}`);
        });

        // create the "Next" button
        const nextBtn = document.createElement("button");
        nextBtn.classList.add("modal-button-next");
        nextBtn.classList.add("modal-button");
        nextBtn.textContent = "Next";
        let currentIndex = 0;
        nextBtn.addEventListener("click", () => {
            currentIndex++;
            if (currentIndex >= dictionary["servers"].length) {
                currentIndex = 0;
            }
            userEl.innerHTML = `Server name: <a style='color: #9f9bb9;'>${dictionary["servers"][currentIndex]["name"]}</a>`;
            idEl.innerHTML = `ID: <a style='color: #9f9bb9;'>${dictionary["servers"][currentIndex]["id"]}</a>`;
            indexEl.innerHTML = `Progress: <a style='color: #9f9bb9;'>${currentIndex + 1} / ${dictionary["servers"].length}</a>`;
            invEl.innerHTML = `Invite: <a style='color: #9f9bb9;'>discord.gg/${dictionary["servers"][currentIndex]["invite"]}</a>`;
            window.location.replace(`discord://discord.com/invite/${dictionary["servers"][currentIndex]["invite"]}`);
        });

        const switcha = document.createElement("a");
        switcha.textContent = "Switch to Friends";
        switcha.classList.add("modal-switch");
        switcha.addEventListener("click", () => {
            modal.animate(
                [{ opacity: 1 }, { opacity: 0 }],
                {
                duration: 400,
                easing: "ease-in-out",
                }
            ).onfinish = () => modal.remove();
            restore_backup_friends();
        });
    
        // create a container for the buttons
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("modal-button-container");
        buttonContainer.appendChild(prevBtn);
        buttonContainer.appendChild(nextBtn);

        // add the content, close button, and button container to the modal
        content.appendChild(close);
        content.appendChild(nameEl);
        content.appendChild(userEl);
        content.appendChild(idEl);
        content.appendChild(invEl);
        content.appendChild(indexEl);
        content.appendChild(buttonContainer);
        content.appendChild(switcha);
        modal.appendChild(content);

        window.location.replace(`discord://discord.com/invite/${dictionary["servers"][currentIndex]["invite"]}`);
    
        // add the modal to the document
        document.body.appendChild(modal);
    
        // center the modal on the screen using transform
        content.style.transform = "translateY(-24%)";
        const top = (window.innerHeight - content.offsetHeight) / 2;
        content.style.top = `${top}px`;
        const left = (window.innerWidth - content.offsetWidth) / 2;
        content.style.left = `${left}px`;
    
        // add event listener to close the modal when clicking outside of the content
        modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.animate(
            [{ opacity: 1 }, { opacity: 0 }],
            {
                duration: 200,
                easing: "ease-in-out",
            }
            ).onfinish = () => modal.remove();
        }
        });
    
        // add animation to the modal container
        modal.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        {
            duration: 500,
            easing: "ease-in-out",
        }
        );
    });
  }
  