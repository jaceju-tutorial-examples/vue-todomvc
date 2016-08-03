// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  '應顯示程式標題與輸入欄位' (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.header')
      .assert.containsText('h1', 'todos')
      .assert.elementPresent('.new-todo')
      .end();
  }
};
