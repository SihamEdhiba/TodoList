import { ref, onMounted } from "vue";
const todosFunction = () => {
  //data
  const todosList = ref([]);
  //set to local storage
  const addToLocalSt = () => {
    localStorage.setItem("todos", JSON.stringify(todosList.value));
  };
  //Update
  const updateTodos = () => {
    if (localStorage.getItem("todos")) {
      todosList.value = JSON.parse(localStorage.getItem("todos"));
    }
  };

  onMounted(() => {
    updateTodos();
  });
  return { todosList, addToLocalSt };
};
export default todosFunction;
