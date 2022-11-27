const TODOS_STORAGE_KEY = "todos";
export default {
  get() {
    return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
  },
  set(todos) {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  },
};
