var db = require('../db');


// Requests to database are in format of:
// "SELECT ?? FROM ?? WHERE ?? = ?"

module.exports = {
  messages: {
    // a function which produces all the messages.
    getAll: function (req) {
      console.log(req);
    },
    // a function which produces all messages from a given user.
    getByUserName: function() {
      //
    },
    // a function which can be used to insert a message into the database.
    post: function () {}
  },

  users: {
    getAll: function () {},
    post: function () {}
  }
};

