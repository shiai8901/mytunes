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

    this.on('ended', this.playNext, this);
    this.on('dequeue', this.dequeue, this);
  }, 
  
  dequeue: function(song) {
    if (this.at(0) === song) {
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  playNext: function() {
    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  },

  playFirst: function() {
    this.first().play();
  } 

});