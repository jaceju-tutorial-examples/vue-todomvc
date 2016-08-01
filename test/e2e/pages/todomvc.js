module.exports = function (browser) {
  const newTodo = '.new-todo';
  const firstTodoItem = '.todo-list > .todo:first-child';

  this.show = () => {
    return browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
  };

  this.shouldSeeTitleAndInput = () => {
    return browser
      .assert.elementPresent('.header')
      .assert.containsText('h1', 'todos')
      .assert.elementPresent('.new-todo');
  };

  this.addTodo = (todo) => {
    return browser
      .setValue(newTodo, [todo, browser.Keys.ENTER]);
  };

  this.shouldSeeAtNewTodo = (value) => {
    return browser
      .assert.value(newTodo, value);
  };

  this.shouldSeeAtFirstTodoItem = (todo) => {
    return browser
      .waitForElementVisible(firstTodoItem, 1000)
      .assert.containsText(firstTodoItem + ' > .view > label', todo);
  };

  this.shouldHiddenTodoListWithoutTodo = () => {
    return browser
      .assert.hidden('.main', 1000);
  };

  this.makeTodoCompeleted = () => {
    return browser
      .click(firstTodoItem + ' > .view > .toggle');
  };

  this.shouldCompeleteTodo = () => {
    return browser
      .assert.cssClassPresent(firstTodoItem, 'completed');
  };

  this.deleteTodo = () => {
    return browser
      .moveToElement('.todo-list > .todo:first-child', 10, 10)
      .click('.todo-list > .todo:first-child > .view > button.destroy');
  };

  this.shouldGetEmptyTodoList = () => {
    return browser
      .assert.elementCount('.todo', 0);
  };
};
