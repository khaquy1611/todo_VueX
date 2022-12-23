<template>
  <div class="container">
    <LeftSidebar></LeftSidebar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import LeftSidebar from "../components/LeftSidebar.vue";
export default {
  name: "Layouts",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  components: {
    LeftSidebar,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
