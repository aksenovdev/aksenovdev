<template lang="pug">
  #app.roboto.fw3
    nav.flex-center.pv4.fw4
      router-link.link.f5.hover-dark-pink.black.mr3(to="/" exact-active-class="dark-pink") РЕЗЮМЕ
      router-link.link.f5.hover-dark-pink.black(to="/codestyle" exact-active-class="dark-pink") CODE STYLE
    transition(name="fade" mode="out-in")
      router-view
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
  @import url('../node_modules/tachyons/css/tachyons.min.css');
  @import url('../node_modules/normalize.css/normalize.css');
  @import url('../node_modules/mdi/css/materialdesignicons.min.css');

  @import url('./styles/roboto.css');


  .header {
    font-family: 'Roboto Thin', sans-serif;
  }

  a:focus {
    outline: 0 !important;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .arrow {
    transition: transform .5s;
    position: absolute;
    right: 5px;
    bottom: 0;
    cursor: pointer;

    &.active {
      transform: scaleY(-1);
    }
  }
</style>
