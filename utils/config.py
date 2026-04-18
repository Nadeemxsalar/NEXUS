# Configuration Settings

import os

# Set the configuration settings.

class Config:
    DEBUG = False
    TESTING = False
    DATABASE_URI = os.getenv('DATABASE_URI', 'sqlite:///default.db')
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_default_secret_key')
    API_PREFIX = '/api/v1'
    LOG_LEVEL = 'INFO'  # Options: DEBUG, INFO, WARNING, ERROR, CRITICAL


class DevelopmentConfig(Config):
    DEBUG = True
    DATABASE_URI = os.getenv('DATABASE_URI_DEV', 'sqlite:///dev.db')
    LOG_LEVEL = 'DEBUG'


class TestingConfig(Config):
    TESTING = True
    DATABASE_URI = os.getenv('DATABASE_URI_TEST', 'sqlite:///test.db')
    LOG_LEVEL = 'WARNING'


class ProductionConfig(Config):
    DATABASE_URI = os.getenv('DATABASE_URI_PROD', 'sqlite:///prod.db')
    LOG_LEVEL = 'ERROR'