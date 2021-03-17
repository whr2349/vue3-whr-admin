<!--
 * @Author: whr2349
 * @Date: 2021-03-04 16:02:19
 * @LastEditors: whr2349
 * @LastEditTime: 2021-03-09 16:57:11
 * @Description: file content
 * @FilePath: \webadmin\src\App.vue
-->
<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  margin: 0px;
  padding: 0px;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* 正常情况下滑块的样式 */
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}

/* 鼠标悬浮在该类指向的控件上时滑块的样式 */
:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}

/* 鼠标悬浮在滑块上时滑块的样式 */
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}

/* 正常时候的主干部分 */
::-webkit-scrollbar-track {
  border-radius: 2px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: inherit;
}

/* 鼠标悬浮在滚动条上的主干部分 */
::-webkit-scrollbar-track:hover {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  background-color: inherit;
}

.faguang {
  border: 1px solid rgba(51, 51, 51, 0.03);
  box-shadow: rgba(199, 195, 206, 0.08) 0px 0px 10px 5px;
}

</style>
