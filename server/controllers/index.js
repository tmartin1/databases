var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    // handles any get request for messages (models handles specifics).
    get: function (req, res) {
      models.messages.getAll(res);
    },
    // handles any post request for messages (models handles specifics).
    post: function (req, res) {
      //
    }
  },

  users: {
    // handles any get request for users (models handles specifics).
    get: function (req, res) {
      //
    },
    // handles any post request for users (models handles specifics).
    post: function (req, res) {
      //
    }
  }
};

