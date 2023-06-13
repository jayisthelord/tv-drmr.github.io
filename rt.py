import os.path
import logging
import argparse

from homekit import AccessoryServer
from homekit.model import Accessory
from homekit.model.services import ThermostatService


def setup_args_parser():
    parser = argparse.ArgumentParser(description='HomeKit demo server')
    parser.add_argument('-f', action='store', required=False, dest='file', default='./config.json',
                        help='File with the config data (defaults to ./config.json)')
    return parser.parse_args()


if __name__ == '__main__':
    args = setup_args_parser()

    # Setup logger
    logger = logging.getLogger('accessory')
    logger.setLevel(logging.INFO)
    ch = logging.StreamHandler()
    ch.setFormatter(logging.Formatter('%(asctime)s %(filename)s:%(lineno)04d %(levelname)s %(message)s'))
    logger.addHandler(ch)
    logger.info('Starting')

    config_file = os.path.expanduser(args.file)

    # Create an instance of AccessoryServer
    httpd = AccessoryServer(config_file, logger)

    # Create an instance of the Accessory
    accessory = Accessory('DemoAccessory', '12:00:00:00:00:00', '031-45-154', 'Thermostat', '0.0.1')

    # Create an instance of ThermostatService
    thermostat_service = ThermostatService()
    accessory.services.append(thermostat_service)

    # Add the accessory to the server
    httpd.add_accessory(accessory)

    # Publish the device and start serving
    httpd.publish_device()
    logger.info('Published device and started serving')

    # Serve forever
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass

    # Unpublish the device and shut down
    logger.info('Unpublish device')
    httpd.unpublish_device()
    httpd.shutdown()
