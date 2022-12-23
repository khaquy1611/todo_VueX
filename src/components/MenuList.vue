<template>
  <ul class="sidebar-list">
    <MenuItem :menuItems="menuItems" :active_el="active_el" :active="active"/>
  </ul>
</template>

<script>
import MenuItem from "./MenuItem.vue";
export default {
  name: "MenuList",

  data() {
    return {
      active_el: "HomePage",
      menuItems: [
        {
          id: 1,
          content: "Trang chủ",
          nameRoute: "HomePage",
          path: "home",
        },
        {
          id: 2,
          content: "Todo Apps",
          nameRoute: "TodoPage",
          path: "todo",
        },
        {
          id: 3,
          content: "Bài 1",
          nameRoute: "Exercise1Page",
          path: "exercise1",
        },
        {
          id: 4,
          content: "Bài 2",
          nameRoute: "Exercise2Page",
          path: "exercise2",
        },
      ],
    };
  },

  mounted() {},
  components: {
    MenuItem
  },
  methods: {
    active(el) {
      this.active_el = el;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-list {
  list-style: none;
  width: 100%;
}
</style>
