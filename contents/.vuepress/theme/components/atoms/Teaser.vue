<template>
  <div class='blubb flex flex-col flex-1 items-center self-center md:mx-8 my-8 md:my-6'>
    <div class='iconImage rounded-full w-16 h-16'>
      <img :src='this.$withBase(`${icon}`)'/>
    </div>
    <h2 class='font-sansserif center m-4' v-if='headline' v-html='headline'></h2>
    <div class='text-center text-base' v-html='content'></div>
  </div>
</template>

<script>
export default {
  name: 'Teaser',
  props: {
    icon: String,
    headline: String,
    content: String,
  },
};
</script>

<style>
.iconImage {
  transform: scale(1);
  transition: transform .5s ease-in-out;
}

.iconImage:hover {
  transform: scale(1.2);
}
</style>
