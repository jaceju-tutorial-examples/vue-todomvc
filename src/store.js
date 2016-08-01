const STORAGE_KEY = 'vue-todomvc';

module.exports = {
  fetch: function () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
};
