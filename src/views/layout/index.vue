<template>
  <div class="layout-container">
    <router-view></router-view>
    <van-tabbar route class="layout-tabbar">
      <!-- 标签导航栏 -->
      <van-tabbar-item to="/">
        <i slot="icon" class="iconfont toutiaoshouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <i slot="icon" class="iconfont toutiaowenda"></i>
        <span class="text">问答</span>
      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <i slot="icon" class="iconfont toutiaoshipin"></i>
        <span class="text">视频</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <i slot="icon" class="iconfont toutiaowode"></i>
        <span class="text">{{$store.state.user ? '我的' : '未登录'}}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layoutpage',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-container {
  .layout-tabbar {
    i.toutiao {
      font-size: 30px;
    }
    span.text {
      font-size: 22px;
    }
  }
}
</style>
