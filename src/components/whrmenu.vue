<!--
 * @Author: whr2349
 * @Date: 2021-03-08 14:27:51
 * @LastEditors: whr2349
 * @LastEditTime: 2021-03-09 13:54:20
 * @Description: file content
 * @FilePath: \webadmin\src\components\whrmenu.vue
-->
<!--whrmenu  2021.03.08 @王浩然QQ378237242-->
<template>
  <div
      class="home"
      ref="whrmenu"
  >
    <div class="whr-menu">
      <div
          v-for="(item,index) in menus"
          :key="index"
      >
        <div
            v-ripple
            class="whr-pmenu-item"
            :class="{activeMenu:activeItem == item.url}"
            @click="clickitem(item,index)"
        >
          <div style="display:flex;">
            <div style="width:30px">
              <i
                  :class="item.icon"
                  style="margin-right:20px"
              ></i>
            </div>
            <div>
              {{ item.title }}
            </div>
            <div
                class="xiaoqiu"
                v-show="!item.isexpand && pgreen == item.url"
                :style="{ backgroundColor: pointcolor }"
            ></div>
          </div>

        </div>

        <div
            v-if="item.children"
            class="childrendiv"
            :class="{havechildren:item.isexpand}"
        >
          <div
              v-ripple
              class="whr-sbmenu-item"
              :class="{activesbMenu:activesbItem == sb_item.url}"
              @click="clicksbitem(sb_item,item)"
              v-for="(sb_item,sb_index) in item.children"
              :key="sb_index"
          >
            {{ sb_item.title }}
            <div
                class="xiaoqiu"
                v-show="$route.path == sb_item.url"
                :style="{ backgroundColor: pointcolor }"
            ></div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "whrmenu",
  components: {},
  props: {
    //菜单数据必输是数组 包含 url title icon children
    menu: {
      type: Array,
      required: true,
    },
    //父级激活左边阴影颜色
    pletcolor: {
      type: String,
      default: "#856ab5",
    },
    //小球颜色
    pointcolor: {
      type: String,
      default: "#1ab3a3",
    },

  },
  data() {
    return {
      activeItem: "", //当前激活父级菜单
      activesbItem: "",
      activeLength: "0px", //子菜单长度
    };
  },
  computed: {
    //父级菜单绿点位置
    pgreen() {
      let u = [];
      u = this.menus.filter(item => {
        let xu = []
        if (item.children.length > 0) {
          xu = item.children.filter(i => {
            return i.url == this.$route.path
          })
          if (xu.length > 0) {
            return true
          } else {
            return false
          }
        } else {
          return item.url == this.$route.path
        }
      })
      return u[0].url
    },
    //每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。
    //这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性：
    menus() {
      let menus = this.menu.map(item => {
        if (item.children) {
          item.isexpand = false;
        }
        return item
      })
      return menus
    }
  },
  created() {

  },
  mounted() {
    console.log(this.$refs.whrmenu);
    // 接受props传的值设置样式
    this.$refs.whrmenu.style.setProperty("--shodowcolor", this.pletcolor);
  },
  methods: {
    clickitem(item, index) {
      this.menus[index].isexpand = !item.isexpand;
      this.activeItem = item.url;
      if (item.children) {
        //有子菜单，设置子元素高度
        this.activeLength = item.children.length * 49 + 20 + "px";
      }
      this.$emit("dianp", item);
      console.log("当前激活父级菜单", this.activeItem);
    },
    clicksbitem(item, pitem) {
      //点击子菜单
      this.activesbItem = item.url;
      this.activeItem = pitem.url;
      this.$emit("dianc", {item, pitem});
    },
  },
};
</script>

<style lang="scss" scoped>
.whr-pmenu-item {
  color: $whr-fontm-color-default;
  font-weight: 400;
  position: relative;
  // text-align: center;
  padding: 15px 40px;
  transition: all 0.3s ease-out;

  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}

.whr-sbmenu-item {
  color: $whr-fontm-color-default;
  font-weight: 400;
  display: flex;
  padding: 15px 70px;
  position: relative;
  transition: all 0.3s ease-out;

  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  &:first-child {
    margin-top: 10px;
  }

  &:last-child {
    margin-bottom: 10px;
  }
}

.whr-menu {
  // background-color: #554b7e;
  // background-image: linear-gradient(to right, #584475, #515287);
  // width: 100%;
  font-size: 14px;
}

.activeMenu {
  // --shodowcolor: #856ab5;
  color: white;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: inset 4px 0 0 var(--shodowcolor);
}

.activesbMenu {
  color: white;
}

.childrendiv {
  background-color: rgba(0, 0, 0, 0.2);
  height: 0px;
  transition: all 0.3s linear;
  overflow: hidden;
}

.havechildren {
  height: v-bind(activeLength);
}

.xiaoqiu {
  width: 12px;
  height: 12px;
  position: absolute;
  right: 15px;
  top: calc(50% - 5px);
  // background-color: $theme-success-600;
  border-radius: 50%;
}
</style>
