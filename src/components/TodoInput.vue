<template>
  <input class="new-todo"
         autofocus autocomplete="off"
         placeholder="What needs to be done?"
         v-model="newTodo"
         @keyup.enter="addTodo">
</template>
<script>
  export default {
    data () {
      return {
        newTodo: ''
      };
    },
    methods: {
      addTodo () {
        const todo = this.newTodo && this.newTodo.trim();
        if (!todo) {
          return;
        }
        this.$emit('add-todo', todo);
        this.newTodo = '';
      }
    }
  };
</script>
