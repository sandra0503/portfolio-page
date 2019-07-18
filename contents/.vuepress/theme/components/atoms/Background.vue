<template>
  <div class='backgroundImage absolute w-full h-full bg-cover bg-center'
    v-if='data && data.heroImage'
    :style='{ backgroundImage: `url(${$withBase(data.heroImage.source)})` }'
  />
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  },
};
</script>

<style>
.backgroundImage {
  transform: translateZ(-3px) scale(1.4);
  transform-origin: 0 0;
  top: 0;
  left: 0;
  z-index: -2;
}
</style>
