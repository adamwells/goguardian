GoGuardian.Routers.Router = Backbone.Router.extend({
	routes: {
		'' : 'leagueView'
	},

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
		this.teams = new GoGuardian.Collections.Teams();
	},

	leagueView: function () {
		var leaguesIndex = new GoGuardian.Views.LeaguesIndex({ collection: this.teams });
		this._swapView(leaguesIndex);
	},

	_swapView: function (view) {
		this.currentView && this.currentView.remove();
		this.currentView = view;
		this.$rootEl.html(view.render().$el);
	}
})