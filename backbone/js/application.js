(function($) {

  // Models
  // ------------
  window.SourceEntity = Backbone.Model.extend({});
  
  // Collections
  // ------------
  window.SourceEntities = Backbone.Collection.extend({
    model: SourceEntity,
    url: '/tstrings'
  });

  // Views
  // -------
  // - TranslationView
  // - DetailsView
  // - HistoryView
  // - HistoryListView
  // - SuggestionView
  // - SuggestionListView

  window.SourceEntityListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'well nav nav-pills nav-stacked',

    initialize: function () {
      this.model.bind('reset', this.render, this);
    },

    render: function (eventName) {
      _.each(this.model.models, function (entity) {
        var entity_view = new SourceEntityView({ model: entity });
        $(this.el).append(entity_view.render().el);
      }, this);
      return this;
    }

  });

  window.SourceEntityView = Backbone.View.extend({
    tagName: 'li',

    initialize: function() {
      _.bindAll(this, 'render');
      this.template = _.template($('#sourceentity-template').html());
    },
    
    render: function() {
      var rendered = this.template(this.model.toJSON());
      $(this.el).html(rendered);
      return this;
    },

    events: {
      'click': 'loadTranslation',
    },
    
    loadTranslation: function(event) {      
      event.preventDefault();

      window.router.navigate('tstring/' + this.model.get('id'), {trigger: true})
      $(this.el).addClass('active');
      $(this.el).siblings().removeClass('active');

      $('#full-text').text(this.model.get('source'));
      $('#translation-text').text(this.model.get('translation'));
    }
  });

  // window.TranslationView = Backbone.View.extend({
  //     tagName: "div",
  // 
  //     events: {
  //         "click .fuzzy"          : "toggleFuzzy",
  //         "click .copy-source"    : "copySource",
  //         "click .revert"         : "revert",
  //         "keypress .input"       : "updateOnEnter"
  //     },
  // 
  //     initialize: function (args) {
  //         _.bindAll(this, 'changeText');
  //         this.model.bind('change:text', this.changeText);
  //     },
  // 
  //     changeText: function () {
  //         this.$('.translation').text(this.model.get('translation'));
  //     },
  // 
  //     updateOnEnter: function(e) {
  //         if (e.keyCode == 13) this.close();
  //     },
  // 
  // })


  window.AppRouter = Backbone.Router.extend({

      routes: {
          ''                   :'start',
          '/tstrings'          :'start',
          '/tstring/:tstringId':'focus', 
          
      },

      start: function() {
          var i;
          this.entities = new SourceEntities();
          this.entities.fetch({ url: "../data/sources.json"});

          this.entityListView = new SourceEntityListView({ model: this.entities });
          $('#list-view').html(this.entityListView.render().el);
      },

      focus: function(id) {
        // url for a single string
        console.log('focusing on string with id=' +id)
      }

  });

  window.router = new AppRouter();
  Backbone.history.start({pushState: true, root: '/lotte-js-mvc-tests/backbone/'});


})(jQuery);
