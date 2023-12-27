<template>
  <div class="show-todos">
    <h1>show todos</h1>
    <table style="width: 100%" v-if="todoList.length">
      <thead>
        <tr>
          <th>text</th>
          <th>from</th>
          <th>To</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todoList"
          :key="todo.id"
          :style="`${
            todo.isCompleted ? 'background:#b8ecd0' : 'background:transparent'
          }`"
        >
          <td>{{ todo.text }}</td>
          <td>{{ todo.from }}</td>
          <td>{{ todo.to }}</td>
          <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
          <td>
            <div>
              <button class="completed" @click="markCompleted(todo)">
                {{ todo.isCompleted ? "completed" : "incompleted" }}
              </button>
              <button class="deleted" @click="deleteTodo(index)">
                Deleted
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 v-else style="line-height: 15">No todos to show</h2>
  </div>
</template>
<script setup>
import todosMixin from "@/mixins/todo";
const { todosList, addToLocalSt } = todosMixin();
//data
// const todoList = ref([]);
//methods
// const updateTodos = () => {
//   todoList.value = JSON.parse(localStorage.getItem("todos"));
//   console.log(todoList.value);
// };

//Delete Todo
const deleteTodo = (index) => {
  todosList.value.splice(index, 1);
  addToLocalSt();
};
//set to local storage
// const addToLocalSt = () => {
//   localStorage.setItem("todos", JSON.stringify(todoList.value));
// };
//mark as completed
const markCompleted = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  addToLocalSt();
};
</script>
<style scoped lang="scss">
table {
  tr,
  td,
  th {
    border: 1px solid;
    padding: 5px;
  }
  td {
    .completed {
      background-color: rgb(73, 202, 73);
      color: aliceblue;
      padding: 5px 10px;
      font-size: 17px;
      border: 1px solid rgb(73, 202, 73);
      border-radius: 7px;
      margin-right: 10px;
    }
    .deleted {
      background-color: rgb(229, 67, 67);
      color: white;
      padding: 5px 10px;
      font-size: 17px;
      border: 1px solid rgb(229, 67, 67);
      border-radius: 7px;
    }
  }
}
</style>
