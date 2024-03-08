<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavMenu></NavMenu>
      </el-header>
      <router-view />
    </el-container>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue';
export default {
  components: { NavMenu,  },
};
</script>

<style>

</style>
