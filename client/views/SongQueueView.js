// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    // when Songs are clicked, re-render SongQueueView
    this.collection.on('add remove', this.render, this);
    this.render();
  },

  render: function() {

    this.$el.children().detach();

    return this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
