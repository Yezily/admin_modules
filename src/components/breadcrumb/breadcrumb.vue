<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path" v-if='item.meta.title'>
        <router-link :to="item.redirect||item.path">{{item.meta.title | generateTitle}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: "breadcrumb",
    data() {
      return {
        breadcrumbList: null
      }
    },
    methods: {
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)
        const first = matched[0]
        if (first && first.name !== 'index') {
          matched = [{path: '/', meta: {title: 'index'}}].concat(matched)
        }
        console.log(matched)

        this.breadcrumbList = matched
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    created() {
      this.getBreadcrumb()
    }
  }
</script>

<style scoped>

</style>
