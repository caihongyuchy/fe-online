<template>
  <div>
    <el-card shadow="never">
      <el-breadcrumb>
        <el-breadcrumb-item v-for="(item, index) in list" :key="index">{{
          item.name
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
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
};
</script>
