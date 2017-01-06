// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(song) {
    this.on('add', function() {
      if (this.length === 1) {
        //this.trigger('playFirst', this);
        this.playFirst();
      }
    }); 

    this.on('ended', function() {
      //check length is > 0 then shift the first element
      if (this.length > 0) {
        this.shift();
      }

      if (this.length > 0) {
        this.playFirst();
      }

    });

    this.on('dequeue', function() {
        //check length is > 0 then shift the first element
      if (this.length > 0) {
        this.remove();
      }
    });
  }, 
  

  playFirst: function() {
    this.first().play();

  } 

});