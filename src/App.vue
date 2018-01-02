<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <sp-layout
        :defaultActive=defaultActive
        :defaultOpeneds=defaultOpeneds
        v-if="$store.state.admin.layout&&!$route.meta.requireAuth">
      </sp-layout>
      <router-view v-else></router-view>
    </transition>
  </div>
</template>

<script>
  import {spLayout} from 'sp-layout'

  export default {
    data() {
      return {
        defaultActive: 'http://localhost:9998/user_list',
        defaultOpeneds: ['1']
      }
    },
    created() {
    },
    mounted() {
    },
    components: {
      spLayout
    },

  }
</script>
<style>
  @import "assets/css/app.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
