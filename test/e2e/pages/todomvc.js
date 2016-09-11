module.exports = function (browser) {
  const newTodo = '.new-todo';

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
};
