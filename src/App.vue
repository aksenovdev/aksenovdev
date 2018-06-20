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
</style>
