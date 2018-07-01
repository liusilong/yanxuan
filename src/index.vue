<template>
  <div class="wrapper">
    
    <!-- <webview></webview> -->
    <tab-bar @tabTo = 'onTabTo'></tab-bar>
    <router-view/>
  </div>
</template>

<script>
import tabBar from './components/tabBar.vue';
import webview from './page/webview.vue'
const modal = weex.requireModule('modal'); 
export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  components: {
    'tab-bar': tabBar,
    'webview': webview
  },
  methods: {
    onTabTo(result) {
      modal.toast({
        message: result.data.key
      })
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
