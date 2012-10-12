var app = app || {};

$(function() {
//Todo Collection
//The collections is backed by *localStorage* instated of a remote server
var TodoList = Backbone.Collection.extend({
	
	//Reference to this collections model
	model: app.Todo,
	
	//Save all the todo items under the "todos" namespace
	localStorage: new Store('todos-backbone'),
	
	//Filter down the list of all todo items that are finished
	completed: function() {
		return this.filter(function(todo) {
			return todo.get('completed');
		});
	},
	
	//Filter down to only unfinished
	remaining: function() {
		return this.without.apply(this, this.completed() );
	},
	
	//Generate at next order number for new items
	nextOrder: function() {
		if(!this.length) {
			return 1;
		}
		return this.last().get('order') + 1;
	},
	
	//Todos are sorted by original sorted order
	comparator: function(todo) {
		return todo.get('order');
	},
	
});

//create our global collection of Todos
app.Todos = new TodoList();
});