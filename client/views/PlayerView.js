// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    // listen to click event, and set the model to the click target songModel
    
    // listen to ended event, and set the model to the next songModel in songQueue
    this.on();

    this.on('ended', function() {
      //
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

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
