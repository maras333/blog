const keystone = require('keystone');

keystone.init({
    'cookie secret': 'secure string goes here',
    'name': 'blog',
    'user model': 'User',
    'auto update': true,
    'auth': true,
  });

keystone.import('models');

keystone.start();