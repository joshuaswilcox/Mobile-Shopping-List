var app = app || {};

$(function() {
	//Todo Model
	// ======
	// Our basic **Todo** model has title, order, and completed status
	
	app.Todo = Backbone.Model.extend({
		
		//Defaults
		defaults: {
			title: '',
			completed: false
		},
		
		//Toggle the status
		toggle: function() {
			this.save({
				completed: !this.get('completed')
			});
		}
		
	});
});