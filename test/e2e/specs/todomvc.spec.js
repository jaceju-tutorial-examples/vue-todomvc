// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  '應顯示程式標題與輸入欄位' (browser) {
    browser
      .page.todomvc().show()
      .assert.elementPresent('.header')
      .assert.containsText('h1', 'todos')
      .assert.elementPresent('.new-todo')
      .end();
  },

  '輸入欄位應該在輸入待辦事項後清空' (browser) {
    const todo = 'This is new todo';

    browser
      .page.todomvc().show()
      .setValue('.new-todo', [todo, browser.Keys.ENTER])
      .assert.value('.new-todo', '')
      .end();
  },

  '建立新待辦事項後應該出現待辦事項列表' (browser) {
    const todo = 'This is new todo';

    browser
      .page.todomvc().show()
      .setValue('.new-todo', [todo, browser.Keys.ENTER])
      .waitForElementVisible('.todo-list > .todo:first-child', 1000)
      .assert.containsText('.todo-list > .todo:first-child > .view > label', todo)
      .end();
  },

  '當沒有待辦事項時列表應該隱藏' (browser) {
    browser
      .page.todomvc().show()
      .assert.hidden('.main', 1000)
      .end();
  }
};
