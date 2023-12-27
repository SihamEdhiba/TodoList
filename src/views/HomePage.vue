<template>
  <div class="show-todos">
    <h1>Add new todo</h1>
    <form action="" @submit.prevent="addTodo">
      <input
        v-model="todoObject.text"
        type="text"
        name="
       "
        id=""
        placeholder="Enter your todo"
        required
      />
      <br />
      <input
        type="date"
        v-model="todoObject.from"
        placeholder="from"
        style="margin-top: 20px"
        required
      />
      <input
        v-model="todoObject.to"
        type="date"
        placeholder="to"
        style="margin-left: 20px; margin-bottom: 20px"
        required
      />
      <br />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>
<style lang="scss" scoped>
form {
  input[type="text"] {
    width: 50%;
    padding: 10px;
    font-size: 20px;
  }
  input[type="submit"] {
    background: blueviolet;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 7px;
    color: aliceblue;
    border: 3px solid blueviolet;
    margin-left: 20px;
  }
}
</style>
<script setup>
import { ref } from "vue";
import todosMixin from "@/mixins/todo";

//data
const { todosList, addToLocalSt } = todosMixin();

const todoObject = ref({
  id: "",
  text: "",
  from: "",
  to: "",
  createdAt: "",
  isCompleted: false,
});
//method
//add todo
const addTodo = () => {
  todoObject.value.id = todosList.value.length + 1;
  todoObject.value.createdAt = new Date();
  todosList.value.push(todoObject.value);
  addToLocalSt();
  alert("todo was added succefully");
  todoObject.value = {
    id: "",
    text: "",
    from: "",
    to: "",
    createdAt: "",
    isCompleted: false,
  };
};
//set to local storage
// const addToLocalSt = () => {
//   localStorage.setItem("todos", JSON.stringify(todoList.value));
// };
// //Update
// const updateTodos = () => {
//   if (localStorage.getItem("todos")) {
//     todoList.value = JSON.parse(localStorage.getItem("todos"));
//   }
// };
// //hooks
// onMounted(() => {
//   updateTodos();
// });
// updateTodos;
</script>
