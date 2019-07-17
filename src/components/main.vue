<template>
<div>
  <button @click="req()">点击请求</button>
</div>
</template>

<script>
export default {
  data(){
    return{

    }
  },methods:{
    req: function(){
      this.$store.dispatch('postRes')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
