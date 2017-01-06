// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/songs/',
  // type: 'GET',
  // contentType: 'application/json',
  model: SongModel,
  parse: function(response) {
    return response.results;
  },

  initialize: function() {
    this.fetch();

  },
});