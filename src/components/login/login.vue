<template>
  <sp-login></sp-login>
</template>

<script>
  import {spLogin} from 'sp-layout'

  export default {

    data() {
      return {}
    },
    created() {
      // document.onkeydown = function (e) {
      //   var key = window.event.keyCode
      //   if (key === 13) {
      //     document.querySelector('#submitForm').click()
      //   }
      // }
    },
    mounted() {
    },
    components: {
      spLogin
    }
  }

</script>

