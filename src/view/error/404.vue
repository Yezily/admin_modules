<template>
  <div class="error">
    <div style="text-align: center;">
      <img src="./images/404.gif" alt="">
    </div>
    <div class="error-issue">
      <p>呜呜呜，页面找不到了~</p>
      <p>你可以:</p>
      <router-link to="/">去首页看看~</router-link>
      <a href="https://www.baidu.com">查看原因</a>
    </div>
  </div>
</template>

<style scoped>
  .error {
    height: 100%;
    background-color: #f3f3f3;
  }

  p {
    font-size: 20px;
    color: #e4a975;
    margin-bottom: 10px;
  }

  .error-issue {
    width: 400px;
    margin: 0 auto;
  }

  a {
    margin-bottom: 10px;
    display: block;
    color: #444444;
  }
</style>
