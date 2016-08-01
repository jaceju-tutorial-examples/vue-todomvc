// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  '應顯示程式標題與輸入欄位' (browser) {
    browser
      .page.todomvc().show()
      .page.todomvc().shouldSeeTitleAndInput()
      .end();
  },

  '輸入欄位應該在輸入待辦事項後清空' (browser) {
    const todo = 'This is new todo';

    browser
      .page.todomvc().show()
      .page.todomvc().addTodo(todo)
      .page.todomvc().shouldSeeAtNewTodo('')
      .end();
  },

  '建立新待辦事項後應該出現待辦事項列表' (browser) {
    const todo = 'This is new todo';

    browser
      .page.todomvc().show()
      .page.todomvc().addTodo(todo)
      .page.todomvc().shouldSeeAtFirstTodoItem(todo)
      .end();
  },

  '當沒有待辦事項時列表應該隱藏' (browser) {
    browser
      .page.todomvc().show()
      .page.todomvc().shouldHiddenTodoListWithoutTodo()
      .end();
  },

  '當完成待辦事項後應標記為已完成' (browser) {
    const todo = 'This is new todo';

    browser
      .page.todomvc().show()
      .page.todomvc().addTodo(todo)
      .page.todomvc().shouldSeeAtFirstTodoItem(todo)
      .page.todomvc().makeTodoCompeleted()
      .page.todomvc().shouldCompeleteTodo()
      .end();
  },

  '應可從列表上刪除待辦事項' (browser) {
    const todo = 'This is new todo';

    browser
      .page.todomvc().show()
      .page.todomvc().addTodo(todo)
      .page.todomvc().shouldSeeAtFirstTodoItem(todo)
      .page.todomvc().deleteTodo()
      .page.todomvc().shouldGetEmptyTodoList()
      .end();
  }
};
