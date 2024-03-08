<template>
  <el-card shadow="hover">
    <el-input
      v-model="name"
      style="width: 240px"
      placeholder="搜索"
      @input="search"
    />
    <el-table :data="filterTableDatas" style="width: 100%">
      <el-table-column
        v-for="(item, index) in columnList"
        :key="index"
        :label="item.label"
        :prop="item.prop"
      ></el-table-column>
    </el-table>
  </el-card>
</template>
<script>
// import userApi from '../api/user';

export default {
  props: {
    filterTableData: {
      type: Array,
      default: [],
    },
    columnList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      name: '',
      filterTableDatas: this.filterTableData,
    };
  },
  watch: {
    filterTableData(nvl) {
      this.filterTableDatas = nvl;
    },
  },
  methods: {
    search() {
      let time = null;
      time = setTimeout(() => {
        console.log(this.filterTableDatas, 'this.filterTableData');
        this.filterTableDatas = this.filterTableData.filter((item) => {
          if (
            item.name.indexOf(this.name) >= 0 ||
            item.id.indexOf(this.name) >= 0
          ) {
            return item;
          }
        });
      }, 500);
    },
  },
};
</script>
