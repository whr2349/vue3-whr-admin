<!--
 * @Author: whr2349
 * @Date: 2021-03-04 16:40:19
 * @LastEditors: whr2349
 * @LastEditTime: 2021-03-04 17:08:14
 * @Description: file content
 * @FilePath: \webadmin\src\views\sys\user.vue
-->
<!--user  2021.03.04 @王浩然QQ378237242-->
<template>
  <div
      class=''
      style=""
  >

    <whrtable :table-data="tableData" :table-height-y="210" :current-page="currentPage" :total="total"
              @current-change="handleCurrentChange">
      <el-table-column
          label="姓名"
          prop="name"
      >
      </el-table-column>
      <el-table-column
          label="电话"
          prop="phone"
      >

      </el-table-column>
      <el-table-column
          label="邮箱"
          prop="email"
      >

      </el-table-column>
      <el-table-column
          label="地址"
          prop="address"
      >
      </el-table-column>

      <el-table-column label="操作">
        <template #default="scope">
          <el-button
              size="mini"
              @click.stop="edituser(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click.stop="deleteuser(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </whrtable>

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import whrtable from "@/components/whrtable";
import request from "@/http/axios";

export default {
  components: {
    whrtable
  },
  data() {
    return {
      tableData: [],
      total: 0,
      currentPage: 1,
    };
  },
  created() {

  },
  mounted() {
    this.loaddata();
  },
  computed: {},
  watch: {},
  methods: {
    loaddata() {
      request.one({url: "userlist"}).then(res => {
        this.tableData = res.data;
        this.total = res.total;
      })
    },
    edituser(index, row) {
      debugger
      console.log(index, row);
    },
    deleteuser(index, row) {
      console.log(index, row);
    },
    handleCurrentChange($event) {
      this.currentPage = Number($event);
      this.loaddata();
    },
  },
};
</script>
<style scoped>
/* 引入公共css类 */
/*@import url()*/
</style>
