app = {

    server: 'http://127.0.0.1/',

    sendMsg: function(message){

      $.ajax({
        type: 'POST',
        url: app.server,
        data: JSON.stringify(message),
        contentType: 'application/json',
        success: function(json){
          console.log(message);
        },

      });
    },

};
