<template>
  <div :class="wrapClasses"><slot></slot></div>
</template>
<script>
const prefixCls = "fairy-layout";
export default {
  name: "Header",
  computed: {
    wrapClasses() {
      return `${prefixCls}-header`;
    },
  },
};
</script>
