import storage from "./util/storage.js";
const init = {
  todos: storage.get(),
  filter: "all",
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
  editIndex: null,
};
const actions = {
  add({ todos }, title) {
    if (title) {
      todos.push({ title, completed: false });
      storage.set(todos);
    }
  },
  toggle({ todos }, index) {
    todos[index].completed = !todos[index].completed;
    storage.set(todos);
  },
  toggleAll({ todos }, completed) {
    todos.forEach((todo) => {
      todo.completed = completed;
    });
    storage.set(todos);
  },
  destroy({ todos }, index) {
    todos.splice(index, 1);
    storage.set(todos);
  },
  switchFilter(state, type) {
    state.filter = type;
    storage.set(state.todos);
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(state.filters.active);
    storage.set(state.todos);
  },
  startEdit(state, index) {
    state.editIndex = index;
  },
  endEdit(state, newTitle) {
    if (state.editIndex != null) {
      if (newTitle) {
        state.todos[state.editIndex].title = newTitle;
        storage.set(state.todos);
      }
      state.editIndex = null;
    }
  },
  cancelEdit(state) {
    state.editIndex = null;
  },
};
export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
