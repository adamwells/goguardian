GoGuardian.Views.LeaguesIndex = Backbone.CompositeView.extend({
	template: _.template(''),

	initialize: function () {
		this.collection.fetch({
			
		});
	},

	render: function () {
		var content = this.template({ currentView: this.currentView });
		this.$el.html(content);
		// this.attachSubviews();
		return this;
	}
})