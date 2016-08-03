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
  </div>
</template>
<style src="todomvc-app-css/index.css"></style>
<script>
  export default {
    data () {
      return { newTodo: '' };
    },
    methods: {
      addTodo () {
        this.newTodo = '';
      }
    }
  };
</script>