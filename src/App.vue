<template>
  <!-- <div class="first"> -->
  <!-- 这里不能再加div嵌套,  加了, 下面样式就得加一个 高度,不然,后面的继承不了它的高度, 影响登录页面的高度 -->
  <!-- 路由出口 -->
  <!-- 登录出口,因为是独立于任何一个页面,所以直写在app.vue中 -->
  <!-- <el-button type="primary">测试用,说明整合Ui成功了</el-button>
    我是app -->
  <router-view></router-view>
  <!-- </div> -->
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
/* 当嵌套多时, 又不删除上面的div 只能通过 个类名来为它加高度来达到后面的所需要的继承 bug1 */
/* .first{
  height: 100%;
} */
</style>
