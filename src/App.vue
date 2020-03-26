<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  provide(){
    return{
        reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true,
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive=true;
      })
    }
  }
}
</script>

<style>
#app {
  background: rgb(250, 250, 250);
}
</style>
