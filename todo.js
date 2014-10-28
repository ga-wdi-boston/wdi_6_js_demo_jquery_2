var TodoApp = {};


TodoApp.items = ["Walk Dog", "Goto 10", "Goto 30"];

TodoApp.addItem = function() {

};

TodoApp.removeItem = function() {

};

TodoApp.renderItems = function() {
  var $list = $('#todos');
  for(var i = 0; i < this.items.length; i++) {
    $('<div>').addClass('todo').html(this.items[i]).appendTo($list);
  }

};

TodoApp.markCompleted = function() {

};

$(document).ready(function() {
  TodoApp.renderItems();
});

