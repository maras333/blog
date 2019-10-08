const keystone = require('keystone');

keystone.init({
    'cookie secret': 'secure string goes here',
    'views': 'templates/views',
    'view engine': 'pug',
    'name': 'blog',
    'user model': 'User',
    'event model': 'Event',
    'auto update': true,
    'auth': true,
  });

keystone.set('routes', require('./routes'));
keystone.import('models');
keystone.start();