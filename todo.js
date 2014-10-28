var TodoApp = {
  items: []
};

TodoApp.addItem = function() {
  var itemName = $(this).val();
  $(this).val('');
  var item = new TodoItem(itemName);
  TodoApp.items.push(item);
};

TodoApp.removeItem = function(event) {
  event.preventDefault();
  console.log(this);
};

TodoApp.markCompleted = function() {};

// Constructor Function
// Gives me the ability to call:
// new TodoItem('foo');
// Looks like a class, but NOT.
// Kinda like our initialize method in Ruby
var TodoItem = function(name) {
  this.name = name;
  this.render();
};

TodoItem.prototype = {
  render: function() {
    TodoApp.$list.append(this.toHTML());
  },
  toHTML: function() {
    return $('<div>').addClass('todo').html(this.name).append(this.deleteButton());
  },
  completeButton: function() {return 'Complete';},
  deleteButton: function() {return " <a href='http://ga.co' class='delete-button'>Delete</a>";}
}

$(document).ready(function() {
  TodoApp.$list = $('#todos');
  TodoApp.$list.on('click', '.delete-button', TodoApp.removeItem); // Event Delegation
  $('#new-todo').change(TodoApp.addItem)
});











