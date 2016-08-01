module.exports = function (browser) {
  this.show = () => {
    return browser
      .url('http://localhost:8080')
      .waitForElementVisible('#app', 5000)
  };
};
