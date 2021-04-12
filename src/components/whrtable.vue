<!--whrtable  2021/3/11 @王浩然QQ378237242-->
<template>
  <div>
    <el-table
        :data="tableData"
        :height="screen.height - tableHeightY"
        style="width: 100%"
        v-bind="$attrs"
        v-loading="loading"
    >
      <slot></slot>
    </el-table>
    <div class="fenye">
      <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[15, 20, 30,40]"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  inheritAttrs: false,
  // inject: ['screen'],
  name: "whrtable",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    //table高度差
    tableHeightY: {
      type: Number,
      default: 0,
    },
    //数据
    tableData: {
      required: true
    },
    //当前页
    currentPage: {
      required: true,
      type: Number,
      default: 1,
    },
    //总数
    total: {
      required: true,
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 20,
    },

  },
  data() {
    //这里存放数据
    return {
      screen: {
        height: window.innerHeight,
        width: window.innerWidth,
      },
      loading: true,
    }
  },
  computed: {//监听属性 类似于data概念
  },
  created() {//生命周期 - 创建完成（可以访问当前this实例）
  },
  watch: {
    // whenever question changes, this function will run
    tableData(newData, oldData) {
      this.loading = false;
    }
  },
  mounted() {//生命周期 - 挂载完成（可以访问DOM元素）
    window.onresize = () => {
      return (() => {
        this.screen.height = window.innerHeight;
        this.screen.width = window.innerWidth;
      })();
    };
  },
  methods: {//方法集合

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.loading = true;
      this.$emit("currentChange", val)
    },
  },
  activated() {//如果页面有keep-alive缓存功能，这个函数会触发
  },
}
</script>

<style scoped>
.fenye {
  margin-top: 15px;
  text-align: right;
}
</style>
