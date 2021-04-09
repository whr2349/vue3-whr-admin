<!--
 * @Author: whr2349
 * @Date: 2021-03-09 15:24:43
 * @LastEditors: whr2349
 * @LastEditTime: 2021-03-09 15:26:31
 * @Description: file content
 * @FilePath: \webadmin\src\views\activity\index.vue
-->
<!--index  2021.03.09 @王浩然QQ378237242-->
<template>
  <div class=''>
    <!--    <iframe src="./nihao.html"></iframe>-->
    <div style="width: 300px;background-color: #363636">
      <div style="color: white" class="caidan-item" v-for="(menu,index) in menuList" :key="index">
        <div class="zhucaidan" @click="clickzhu(menu)">
          {{ menu.title }}
        </div>

        <div class="zicandan-item" :class="{expand:menu.isexpand}">
          <template v-if="menu.children">
            <div class="zicaidan" v-for="(zi,zindex) in menu.children" :key="zindex">
              {{ zi.title }}
            </div>
          </template>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      menuList: [
        {
          title: "主菜单1",
          url: "zhu-1",
          isexpand: false,
          children: [
            {
              title: "子菜单1",
              url: "zhu-1-1",
            },
            {
              title: "子菜单2",
              url: "zhu-1-2",
            },
          ]
        },
        {
          title: "主菜单2",
          url: "zhu-2",
          isexpand: false,
          children: [
            {
              title: "子菜单1",
              url: "zhu-2-1",
            },
            {
              title: "子菜单2",
              url: "zhu-2-2",
            },
            {
              title: "子菜单3",
              url: "zhu-2-3",
            },
          ]
        },
        {
          title: "主菜单3",
          url: "zhu-3",
        }
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
    console.log(this.b)
  },

  //方法集合
  methods: {
    clickzhu(menu) {
      menu.isexpand = !menu.isexpand;
    }
  },
  activated() {
  }, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
/* 引入公共css类 */
/*@import url()*/
.zicandan-item {
  background-color: rgba(0, 0, 0, 0.9);
}

.expand {
  display: none;
}
</style>
