<template>
  <div id="app" class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <todo-input @add-todo="addTodo"></todo-input>
    </header>
    <section class="main" v-show="todos.length" v-cloak>
      <ul class="todo-list">
        <li class="todo"
            :class="{ completed: todo.completed }"
            v-for="todo in todos">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label>{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<style src="todomvc-app-css/index.css"></style>
<script>
  import TodoInput from './components/TodoInput';
  import store from './store';
  export default {
    created () {
      this.todos = store.fetch();
    },
    watch: {
      todos: {
        deep: true,
        handler: store.save
      }
    },
    components: {
      TodoInput
    },
    data () {
      return {
        todos: []
      };
    },
    methods: {
      addTodo (todo) {
        this.todos.push({ title: todo, completed: false });
      },
      removeTodo (todo) {
        this.todos.$remove(todo);
      }
    }
  };
</script>