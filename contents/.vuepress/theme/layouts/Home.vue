<template>
  <div class='flex flex-col h-full'>
    <Nav/>
    <div class='hero'>
      <img
        v-if='data && data.heroImage'
        :src='$withBase(data.heroImage.source)'
        alt='data.heroImage.alt'
      >
    </div>
    <div v-if='data.about' id='about' class='table p-6 h-64'>
      <h1>{{ data.about.title }}</h1>
    </div>
    <div id='contact' class='table h-64 bg-black'>
      <h1>contact</h1>
    </div>
    <Content class='flex-1 max-w-xl mx-auto leading-normal'/>
    <Footer class='pin-b'/>
  </div>
</template>

<script>
import Footer from '@theme/components/Footer';
import Nav from '@theme/components/Nav';

export default {
  components: { Nav, Footer },
  name: 'Home',
  created() {
    console.log(this.$page);
  },
  computed: {
    data () {
      return this.$page.frontmatter;
    },
  },
};
</script>

<style lang='stylus'>
@import '../styles/theme.styl';
</style>
