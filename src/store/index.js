import { createStore } from "vuex";
import { getAllTodos, createTodos } from "../api/index";
import DateTime from "../ultils/index";
const store = createStore({
  state() {
    return {
      isToggle: true,
      loading: false,
      time: "13:54 14/11/2022",
      todos: [
        {
          id: 1,
          name: "Nhiệm vụ 1",
          done: true,
        },
        {
          id: 2,
          name: "Nhiệm vụ 2",
          done: false,
        },
      ],
    };
  },
  getters: {
    getTime() {
      return DateTime.getFullTimeAndDate();
    },
  },
  mutations: {
    getAllTodos(state, payload) {
      state.loading = true;
      if (typeof payload === "object") {
        state.todos.push(payload);
      }
      state.todos = [...payload];
    },
    getAllTodoDone(state, payload) {
      state.loading = true;
      if (typeof payload === "object") {
        state.todos = state.todos.map((todo) => {
          if (todo.id === payload.id) {
            if (todo.done === payload.done) {
              return todo;
            }
          }
        });
      }
    },
    handleCloseForm(state) {
      state.isToggle = false;
    },
    handleOpenForm(state) {
      state.isToggle = true;
    },
  },
  actions: {
    async getAllTodoAction({ commit }) {
      const result = await getAllTodos();
      commit("getAllTodos", result);
    },
    async createTodoAction({ commit }, payload) {
      const result = await createTodos(payload);
      commit("getAllTodos", result);
    },
    CancelTodoAction({ commit }) {
      commit("handleCloseForm");
    },
    AddTodoAction({ commit }) {
      commit("handleOpenForm");
    },
    getTodoBydone({ commit }, payload) {
      commit("getAllTodoDone", payload);
    },
  },
});

export default store;
