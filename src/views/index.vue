<!--
 * @Author: whr2349
 * @Date: 2021-03-05 08:37:16
 * @LastEditors: whr2349
 * @LastEditTime: 2021-03-09 17:04:24
 * @Description: file content
 * @FilePath: \webadmin\src\views\index.vue
-->
<!--index  2021.03.05 @王浩然QQ378237242-->

<template>
  <div
      class="warpz"
  >
    <div
        class="index-left"
        :style="{width:indexLeftWidth}">

      <div class="index-logo"
           :style="{height:indexLogoHeight}">
        <div style="display:flex;justify-content: center;">

          <img
              src="../assets/logo.png"
              alt=""
          >

          <div style="line-height: 28px;margin-left: 10px;">
            whr-admin
          </div>

        </div>
      </div>
      <div
          style="overflow-x:hidden;height:calc(100vh - 70px)"
          class="yeyey"
      >
        <whrmenu
            :menu="menu"
            @dianc="clickChItem"
        ></whrmenu>
      </div>

    </div>
    <div class="index-right">
      <div
          class="index-right-head"
          :style="{height:indexLogoHeight}"
      >
        <div style="width:300px;margin-left:20px">
          <el-input
              clearable
              placeholder="请输入内容"
              v-model="searchinput"
          >
            <template #prefix>
              <i class="el-input__icon el-icon-search"></i>
            </template>
          </el-input>
        </div>

        <div style="margin-right:20px">
          <el-row>
            <el-button
                type="text"
                icon="el-icon-setting"
                size="medium"
                circle
            ></el-button>
            <el-button
                size="medium"
                type="text"
                icon="el-icon-switch-button"
                circle
            ></el-button>

          </el-row>
        </div>
      </div>
      <div style="overflow: hidden auto;padding: 15px 20px;">
        <div>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div
            class="faguang routeconent"

        >
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import whrmenu from "@/components/whrmenu";
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {ref, computed} from "vue"

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    whrmenu,
  },
  provide() {
    return {
      screen: computed(() => this.screen),
    }
  },
  data() {
    //这里存放数据
    return {

      //屏幕
      screen: {
        height: window.innerHeight,
        width: window.innerWidth,
      },
      //左边布局宽度
      indexLeftWidth: "280px",
      // 顶栏高度
      indexLogoHeight: "70px",
      searchinput: "",
      menu: [
        {
          title: "题库管理",
          url: "/index/questionlist",
          icon: "el-icon-files",
          children: [
            {
              title: "题库列表",
              url: "/index/question/questionlist",
            },
          ],
        },
        {
          title: "活动管理",
          url: "/index/activity",
          icon: "el-icon-help",
          children: [
            {
              title: "活动列表",
              url: "/index/activity/activitylist",
            },
          ],
        },
        {
          title: "系统设置",
          url: "/index/sys",
          icon: "el-icon-setting",
          children: [
            {
              title: "用户管理",
              url: "/index/sys/user",
            },
          ],
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    window.onresize = () => {
      return (() => {
        this.screen.height = window.innerHeight;
        this.screen.width = window.innerWidth;
      })();
    };
  },
  //方法集合
  methods: {
    clickChItem($event) {
      console.log($event);
      this.$router.push($event.item.url);
      console.log(this.$route)
    },
  },
  activated() {
  }, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped>
/* 引入公共css类 */
/*@import url()*/
.el-button--medium {
  font-size: 20px;
}

.el-breadcrumb {
  font-size: 13px;
  font-weight: 400;
}

.warpz {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.index-left {
  background-image: linear-gradient(to right, #674e8c, #515287);
}

.index-right {
  background-color: #fcfaff;
  width: calc(100% - v-bind(indexLeftWidth));
}

.index-logo {
  height: 70px;
  color: #FFFFFF;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 300;
}

.index-right-head {
  background-color: #FFFFFF;
  box-shadow: 0px 0px 28px 0px rgba(86, 61, 124, 0.13);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.routeconent {
  height: calc(100vh - 162px);
  overflow: hidden auto;
  padding: 15px;
  background-color: white;
  margin: 15px 0px;
}
</style>
