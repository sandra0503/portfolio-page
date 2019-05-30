<template>
  <div class='font-sans flex flex-col h-full'>
    <Nav/>
    <div class='hero flex relative min-h-hero'>
      <div class='absolute w-full h-full bg-cover bg-center z-0'
        v-if='data && data.heroImage'
        :style='{ backgroundImage: `url(${$withBase(data.heroImage.source)})` }'
      >
        {{ data.heroImage.alt }}
      </div>
      <div class='container font-headline text-super relative mx-auto p-3 self-center text-pink z-10'>{{ data.heroImage.text }}</div>
    </div>
    <div v-if='data.about' id='about' class='table h-64'>
      <div class='container relative mx-auto p-3 py-6'>
        <h1 class='font-headline text-4xl'>{{ data.about.headline }}</h1>
      </div>
    </div>
    <div class='table w-full h-64 bg-pink'>
      <div class='container font-headline text-4xl text-white relative mx-auto px-3 py-6'>
        <h1>{{ data.experience.headline }}</h1>
      </div>
    </div>
    <div id='contact' class='table w-full h-64'>
      <div class='container font-headline text-4xl text-center relative mx-auto px-3 py-6'>
        <h1>{{ data.contact.headline }}</h1>
      </div>
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
