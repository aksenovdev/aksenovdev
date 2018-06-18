<template lang="pug">
  #app.roboto
    router-view
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
  @import url('./styles/roboto.css');

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
