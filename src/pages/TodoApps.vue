<template>
  <div class="todoContainer">
    <div class="search-todo">
      <input
        class="input-search"
        type="text"
        placeholder="Nhập từ khóa tìm kiếm nhiệm vụ"
        name="search"
      />
      <button class="btn-search">Tìm Kiếm</button>
    </div>
    <!-- Todo Work -->
    <div class="todoWorkContainer">
      <div class="todo-item">
        <h2>Mới</h2>
        <div class="todo-task">
          <div v-if="isToggle" class="form-task">
            <form action="" method="">
              <input
                type="text"
                class="input-task"
                v-model="user.name"
                name="name"
                placeholder="Nhập tên nhiệm vụ"
              />
              <p class="time">
                <span>{{ getTimeCurrent }}</span>
              </p>
              <button @click="createTodo(user)" class="btn-ask-save">
                Lưu
              </button>
              <button @click="handleCloseInput" class="btn-ask-reject">
                Hủy
              </button>
            </form>
          </div>
        </div>
        <div class="todo-task" v-for="item in todoList" :key="item.id">
          <h2>{{ item.name }}</h2>
          <p class="time">
            <span>{{ item.createdAt }}</span>
          </p>
          <button
            @click="handleChangeType('complete', item.id)"
            class="btn-ask-save"
          >
            Hoàn Thành
          </button>
          <button
            @click="handleChangeType('reject', item.id)"
            class="btn-ask-reject"
          >
            Từ Bỏ
          </button>
        </div>
        <button @click="handleOpenInput" class="add-to-do">Thêm Mới</button>
      </div>
      <div class="todo">
        <div class="todo-item">
          <h2>Đã hoàn thành</h2>
          <div
            class="todo-task"
            v-for="todoComplete in completeTodo"
            :key="todoComplete.id"
          >
            <h2 :class="{ done: todoComplete.done === true }">
              {{ todoComplete.name }}
            </h2>
            <p class="time">
              <span :class="{ done: todoComplete.done === true }"
                >Hoàn thanh vào lúc {{ getTimeCurrent }}</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="todo">
        <div class="todo-item">
          <h2>Đã từ bỏ</h2>
          <div
            class="todo-task"
            v-for="rejectTodo in rejectTodo"
            :key="rejectTodo.id"
          >
            <h2>
              {{ rejectTodo.name }}
            </h2>
            <p class="time">
              <span>Đã hủy vào lúc 13:54 14/11/2022</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "VueXLearningTodoApps",
  data() {
    return {
      type: "",
      completeTodo: [],
      rejectTodo: [],
      user: {
        name: "",
        done: false,
      },
    };
  },
  computed: {
    ...mapGetters({
      getTimeCurrent: "getTime",
    }),
    ...mapState({
      isToggle: (state) => state.isToggle,
      time: (state) => state.time,
      todoList: (state) => state.todos,
      loading: (state) => state.loading,
    }),
  },
  methods: {
    handleChangeType(type, id) {
      this.type = type;
      let index = this.todoList.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        let newObject = this.todoList.splice(index, 1);
        switch (this.type) {
          case "complete":
            this.user = { ...newObject, done: true };
            this.completeTodo = [...this.completeTodo, this.user];
            break;
          case "reject":
            this.user = { ...newObject, done: false };
            this.rejectTodo = [...this.rejectTodo, this.user];
            break;
          default:
            return newObject;
        }
      } else {
        return alert("No Found Id");
      }
    },
    handleChangeStatusComplete() {
      this.user.done = true;
    },
    handleChangeStatusCancel() {
      this.user.done = false;
    },
    ...mapActions({
      getTodoList: "getAllTodoAction",
      createTodo: "createTodoAction",
      handleOpenInput: "AddTodoAction",
      handleCloseInput: "CancelTodoAction",
      getTodoDone: "getTodoBydone",
    }),
  },
  created() {
    this.getTodoList();
  },
};
</script>

<style lang="scss" scoped>
.todoContainer {
  margin: 20px;
}
.search-todo {
  width: 278px;
  margin: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-search {
  position: absolute;
  top: -4px;
  cursor: pointer;
  background-color: green;
  color: #fff;
  display: inline-flex;
  align-items: center;
  border: none;
  outline: none;
  right: -120px;
  padding: 20px;
  line-height: 100%;
  border-radius: 4px;
  height: 100%;
}
.input-search {
  width: 100%;
  padding: 6px;
  border: 1px solid #000;
  outline: none;
  border-radius: 2px;
}
.input-search::placeholder,
.input-search:focus {
  text-indent: 10px;
}
h2 {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
}
.todoWorkContainer {
  display: flex;
  justify-content: space-evenly;
}
.todo-item {
  background-color: #eee;
  width: 300px;
  height: 600px;
  padding: 10px;
  overflow-y: scroll;
}
.todo-item {
  margin-left: 20px;
}
.todo-task {
  width: 300px;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
}
.input-task {
  padding: 2px;
  border: 1px solid #000;
  outline: none;
  border-radius: 2px;
}
.input-task::placeholder,
.input-task:focus {
  text-indent: 10px;
}
.time {
  margin: 20px 0;
  color: rgb(216, 52, 52);
  font-weight: 400;
}
.btn-ask-save,
.btn-ask-reject {
  cursor: pointer;
  color: #fff;
  display: inline-flex;
  align-items: center;
  border: none;
  outline: none;
  padding: 4px 30px;
  text-align: center;
  border-radius: 2px;
}
.btn-ask-save {
  background-color: green;
}
.btn-ask-reject {
  background-color: red;
  margin-left: 2px;
}
.add-to-do {
  margin: 0 auto;
  display: block;
  vertical-align: middle;
  margin-top: 20px;
  border-radius: 4px;
  background-color: green;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  width: 200px;
}
.done {
  color: green;
}
</style>
