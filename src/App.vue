<template>
  <div id="app">
    <router-view></router-view>
    <div>
      <Button type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
    </div>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  list-style: none;
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
