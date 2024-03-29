var app = app || {};

$(function() {
	var Workspace = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},
		
		setFilter: function(param){
			window.app.TodoFilter = param.trim() || '';
			
			window.app.Todos.trigger('filter');
		}
	});
	
	app.TodoRouter = new Workspace();
	Backbone.history.start();
});