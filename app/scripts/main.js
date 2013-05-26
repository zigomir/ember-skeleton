var App = Ember.Application.create();

App.Router.map(function(){
  this.route('about');
});

App.Todo = Ember.Object.extend({});
App.Todo.reopen({
  isDoneChanged: function(todo) {
    var isDone = todo.get('isDone') ? 'done.' : 'not done.';
    console.log(todo.get('title') + ' is now ' + isDone);
  }.observes('isDone')
});

var todo1 = App.Todo.create({title: 'First', isDone: false});
var todo2 = App.Todo.create({title: 'Second', isDone: false});
var todo3 = App.Todo.create({title: 'Third', isDone: false});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [todo1, todo2, todo3];
  }
});
