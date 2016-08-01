const STORAGE_KEY = 'vue-todomvc';

module.exports = {
  fetch: function () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  }
};
