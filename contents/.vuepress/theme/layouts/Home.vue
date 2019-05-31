<template>
  <div class='font-sans bg-grey text-blue'>
    <Nav/>
    <Header/>
    <div v-if='data.about' id='about' class='bg-grey w-full'>
      <div class='container flex flex-col md:flex-row mx-auto p-3 py-6'>
        <div class='flex-1'>
          <div class='w-56 py-2 mx-auto'>
            <img class='rounded-full'
              :src='$withBase(data.about.image.source)'
              :alt='data.about.image.alt'
            >
          </div>
        </div>
        <div class='flex-1 mt-3 md:mt-0'>
          <h1 class='font-headline text-4xl'>{{ data.about.headline }}</h1>
          <p class='mt-4'>{{ data.about.text }}</p>
        </div>
      </div>
    </div>
    <div class='w-full h-64 bg-pink'>
      <div class='container font-headline text-4xl relative mx-auto px-3 py-6'>
        <h1>{{ data.experience.headline }}</h1>
      </div>
    </div>
    <div id='contact' class='bg-grey w-full h-64'>
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
import Header from '@theme/components/Header';
import Nav from '@theme/components/Nav';

export default {
  components: { Nav, Header, Footer },
  name: 'Home',
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
