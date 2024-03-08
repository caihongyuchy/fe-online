<template>
  <div class="body">
    <el-container>
      <el-container>
        <el-aside width="200px">
          <OrgTree :list="list" @setBreadcrumb="setBreadcrumb"></OrgTree>
        </el-aside>
        <el-main>
          <Breadcrumb :list="breadcrumbList"></Breadcrumb>
          <UserTable
            v-if="filterTableData.length > 0"
            :columnList="columnList"
            :filterTableData="filterTableData"
          ></UserTable>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import orgApi from '../api/org';
import userApi from '../api/user';

import OrgTree from '../components/OrgTree.vue';
import Breadcrumb from '../components/Breadcrumb.vue';
import UserTable from '../components/UserTable.vue';

export default {
  components: { OrgTree, Breadcrumb, UserTable },
  data() {
    return {
      list: [],
      breadcrumbList: [],
      filterTableData: [],
      columnList: [
        {
          label: 'id',
          prop: 'id',
        },
        {
          label: '名称',
          prop: 'name',
        },
      ],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      orgApi.query('1').then((users) => {
        // console.log(users);
        this.list = users;
      });
    },
    getTableData() {
      userApi.query({}).then((users) => {
        console.log(users, 'getTableData');
        this.filterTableData = [];
        this.filterTableData = users;
      });
    },
    async setBreadcrumb(item) {
      await this.getTableData();

      this.breadcrumbList = [];
      if (typeof item == 'number') {
        this.breadcrumbList = [this.list[item]];
        return;
      }
      let arr = item.split('-');
      this.breadcrumbList.push(this.list[arr[0]]);
      this.breadcrumbList.push(this.list[arr[0]].chinds[arr[1]]);
      // console.log(this.breadcrumbList, 'setBreadcrumb2');
    },
  },
};
</script>

<style></style>
