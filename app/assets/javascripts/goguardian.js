window.GoGuardian = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	window.router = new GoGuardian.Routers.Router({ $rootEl: $('#content')});
  	Backbone.history.start();
  }
};

$(document).ready(function(){
  GoGuardian.initialize();
});