<template>
  <div class="tree-menu">
    <div class="heads-menu">
      <span>部门</span>
      <span>+</span>
    </div>
    <el-scrollbar>
      <el-menu
        :default-active="active"
        class="menu el-menu-vertical-demo"
        @select="selectMenu"
        @open="handleOpen"
        @close="handleClose"
      >
        <div v-for="(item, index) in list" :key="index">
          <el-menu-item v-if="!item.chinds.length" :index="index">
            <el-icon><icon-menu /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
          <el-sub-menu v-else :index="index">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group v-for="(chind, key) in item.chinds" :key="key">
              <el-menu-item :index="index + '-' + key">{{
                chind.name
              }}</el-menu-item></el-menu-item-group
            >
          </el-sub-menu>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      // list: [],
      active: 0,
    };
  },
  watch: {
    list: {
      handler(v, o) {
        console.log(v, o);
      },
      immediate: true,
      deep: true,
    },
  },

  methods: {
    selectMenu(key, keyPath) {
      // console.log(key, keyPath, 'selectMenu');
      // if (!keyPath) {
      this.$emit('setBreadcrumb', key);
      // }
    },
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath, 'handleOpen');
    // },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.tree-menu {
  width: 200px;
  height: calc(100vh - 50px);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  -webkit-box-shadow: 1px 0 0px rgba(0, 21, 41, 0.35);
  box-shadow: 1px 0 0px rgba(62, 63, 65, 0.35);
  box-sizing: border-box;
}
.heads-menu {
  width: 200px;
  padding: 20px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  color: black;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(62, 63, 65, 0.35);
}
.menu {
}
</style>
