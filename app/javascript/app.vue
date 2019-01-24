<template>
  <div id='app'>
    <div class='initial-message white'>{{ firstMessage }}</div>
    <div class='initial-message blue'>{{ secondMessage }}</div>
    <div class='initial-message white'>{{ thirdMessage }}</div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        firstMessage: "Skello",
        secondMessage: "KATA",
        thirdMessage: "vuejs App!",
      }
    }
  }
</script>

<style lang='scss' scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
