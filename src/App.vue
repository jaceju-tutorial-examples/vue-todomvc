<template>
  <div id="app" class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
             autofocus autocomplete="off"
             placeholder="What needs to be done?"
             v-model="newTodo"
             @keyup.enter="addTodo">
    </header>
    <section class="main">
      <ul class="todo-list">
        <li class="todo"
            v-for="todo in todos">
          <div class="view">
            <label>{{ todo.title }}</label>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<style src="todomvc-app-css/index.css"></style>
<script>
  export default {
    data () {
      return {
        newTodo: '',
        todos: []
      };
    },
    methods: {
      addTodo () {
        const todo = this.newTodo && this.newTodo.trim();
        if (!todo) {
          return;
        }
        this.todos.push({ title: todo, completed: false });
        this.newTodo = '';
      }
    }
  };
</script>