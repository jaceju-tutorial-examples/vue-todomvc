module.exports = function (browser) {
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
      .setValue('.new-todo', [todo, browser.Keys.ENTER]);
  };
};
