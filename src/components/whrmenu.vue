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
          v-for="(item,index) in menu"
          :key="index"
      >
        <div
            v-ripple
            class="whr-pmenu-item"
            :class="{activeMenu:activeItem == item.url}"
            @click="clickitem(item)"
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
                v-show="pgreenpoint == item.url"
                :style="{ backgroundColor: pointcolor }"
            ></div>
          </div>

        </div>

        <div
            v-if="item.children"
            class="childrendiv"
            :class="{havechildren:activeItem == item.url && havechildren}"
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
                v-show="activesbItem == sb_item.url"
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
    //字菜单背景色
    chbackgroudcolorr: {
      type: String,
      default: "#434373",
    },
    chbackgroudcolorl: {
      type: String,
      default: "#4f3d69",
    },
  },
  data() {
    return {
      activeItem: "", //当前激活父级菜单
      activesbItem: "",
      havechildren: false,
      pgreenpoint: "", //父级菜单绿点 url绿点所在菜单
      activeLength: "0px", //子菜单长度
    };
  },
  // computed: {
  // 	pgreen() {},
  // },
  mounted() {
    console.log(this.$refs.whrmenu);
    this.$refs.whrmenu.style.setProperty("--shodowcolor", this.pletcolor);
    this.$refs.whrmenu.style.setProperty(
        "--chbackgroudcolorr",
        this.chbackgroudcolorr
    );
    this.$refs.whrmenu.style.setProperty(
        "--chbackgroudcolorl",
        this.chbackgroudcolorl
    );
  },
  methods: {
    clickitem(item) {
      //点击父菜单,有没有子元素
      if (item.children) {
        //有子菜单，设置子元素高度
        this.activeLength = item.children.length * 49 + 20 + "px";

        if (this.activeItem == item.url) {
          //如果点击的是已经展开的父菜单,收起来，加绿点
          this.havechildren = !this.havechildren;
          //如果折叠起来,加绿
          if (this.havechildren == false) {
            this.pgreenpoint = item.url;
            // this.$nextTick(function () {
            // 	this.pgreenpoint = item.url;
            // });
          } else {
            this.pgreenpoint = "";
          }
        } else {
          this.havechildren = true;
          // this.pgreenpoint = JSON.parse(
          // 	JSON.stringify(this.activeItem)
          // );
          this.activeItem = item.url;
        }
      } else {
        this.pgreenpoint = "";
        this.activesbItem = "";
        this.activeItem = item.url;
        //直接赋值绿点
        this.pgreenpoint = item.url;
      }
      this.$emit("dianp", item);
      console.log("当前激活父级菜单", this.activeItem);
      console.log("绿点所在父级菜单", this.pgreenpoint);
    },
    clicksbitem(item, pitem) {
      this.pgreenpoint = "";
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
  background-image: linear-gradient(
          to right,
          var(--chbackgroudcolorl),
          var(--chbackgroudcolorr)
  );
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
