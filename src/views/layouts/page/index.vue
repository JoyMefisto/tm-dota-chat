<template>
  <div :class="colorClass">
    <div
      class="default-layout-page"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  props: {
    colorClass: {
      type: String,
      default: ''
    },
    withPaddingBottom: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
.default-layout-page {
  margin: 0 auto;
  min-width: 320px;
  max-width: 1440px;
}
</style>
