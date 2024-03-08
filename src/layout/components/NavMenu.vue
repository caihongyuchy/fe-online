<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item :index="index" v-for="(item, index) in list" :key="index">
      {{ item.children[0].meta.title }}
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  async mounted() {
    this.list = this.$router.options.routes;
    // console.log(this.$router.options.routes, '1q');
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(this.list[key].path);
      // this.$emit('changeMenu');
      this.$router.push(this.list[key].path ? this.list[key].path : '/index');
    },
  },
};
</script>
<style>
.el-menu-demo {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
}
</style>
