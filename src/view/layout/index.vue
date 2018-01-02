<template>
  <el-container>
    <!--left-->
    <el-aside width="180px">
      <!--侧边栏-->
      <sidebar></sidebar>
    </el-aside>

    <!--right-->
    <el-main>

      <div class="breadcrumb">
        <!--面包屑导航-->
        <breadcrumb></breadcrumb>

        <!--重载组件-->
        <el-button type="success" icon="el-icon-refresh" plain size="mini" @click="reloadPage" class="reloadPage">刷新</el-button>
      </div>

      <!--路由入口-->
      <transition name="fade" mode="out-in">
        <router-view v-if="isReload"></router-view>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
  import breadcrumb from 'src/components/breadcrumb/breadcrumb'
  import sidebar from 'src/components/sidebar/sidebar'
  import ElContainer from "element-ui/packages/container/src/main";
  import ElAside from "element-ui/packages/aside/src/main";

  export default {
    name: 'layout',
    data() {
      return {
        isReload:true
      }
    },
    methods: {
      reloadPage(){
        this.isReload = false
        this.$nextTick(function () {
          this.isReload = true
        })
    },
    mounted() {

    }
    },

    components: {
      ElAside,
      ElContainer,
      breadcrumb,
      sidebar
    }
  }

</script>

<style scoped>
  .reloadPage{
    position: absolute;
    right: 0;
    top: 0;
  }
  .breadcrumb {
    position: relative;
    height: 30px;
    margin-bottom: 25px;
    border-bottom: 1px solid #f5f5f5;
  }

  .el-container {
    height: 100%;
  }

</style>
