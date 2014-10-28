var TodoApp = {};

TodoApp.addItem = function() {
  var itemName = $(this).val();
  var item = new TodoItem(itemName);
  TodoApp.renderItem(item);
  TodoApp.items.push(item);
};

TodoApp.renderItem = function(item) {
  $('<div>').addClass('todo').html(item.name).appendTo(TodoApp.$list);
};

TodoApp.removeItem = function() {

};

TodoApp.renderItems = function() {
  for(var i = 0; i < this.items.length; i++) {
    $('<div>').addClass('todo').html(this.items[i].name).appendTo(TodoApp.$list);
  }
};

TodoApp.markCompleted = function() {

};

// Constructor Function
// Gives me the ability to call:
// new TodoItem('foo');
// Looks like a class, but NOT.
// Kinda like our initialize method in Ruby
var TodoItem = function(name) {
  this.name = name;
};

TodoItem.prototype = {
  toHTML: function() {
    return $('<div>').addClass('todo').html(this.name);
  },
  completeButton: function() {return 'Complete';},
  deleteButton: function() {return 'Delete';}
}

$(document).ready(function() {
  TodoApp.items = [new TodoItem("Walk Dog"),
                 new TodoItem("Goto 10"),
                 new TodoItem("Goto 30")];

  TodoApp.$list = $('#todos');

  $('#new-todo').change(TodoApp.addItem)
  TodoApp.renderItems();
});

