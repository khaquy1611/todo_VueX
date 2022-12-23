<template>
  <div class="sidebar">
    <h1>Basic Sidebar</h1>
    <MenuList></MenuList>
  </div>
</template>

<script>
import MenuList from "./MenuList.vue";
export default {
  name: "LeftSidebar",

  data() {
    return {};
  },

  mounted() {
    console.log(this.$route);
  },

  methods: {},
  components: {
    MenuList,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 30px;
  padding: 26px;
  font-weight: 500;
}
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #eee;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  overflow-x: hidden;
  box-sizing: border-box;
}

</style>
