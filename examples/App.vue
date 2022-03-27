<template>
  <div id="app">==66=</div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .row-name {
    height: 30px;
    width: 300px;
    background: rgb(73, 76, 251);
    margin-bottom: 10px;
    .ivu-col {
      background: rgba(0, 153, 229, 0.7);
      height: 100%;
      &:nth-child(1) {
        background-color: rgba(85, 198, 255, 0.7);
      }
      &:nth-child(3) {
        background-color: rgba(85, 198, 255, 0.7);
      }
    }
  }
}
</style>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
};
</script>
