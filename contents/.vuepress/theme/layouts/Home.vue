<template>
  <div class='font-sans bg-grey text-blue'>
    <Nav/>
    <Header class ='mb-6'/>
    <div v-if='data.about' id='about' class='bg-grey w-full'>
      <div class='container flex flex-col md:flex-row mx-auto px-6 py-10'>
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
    <div class='w-full bg-pink'>
      <div class='container relative mx-auto px-3 py-6'>
        <h1 class='font-headline text-center text-4xl mb-4'>{{ data.experience.headline }}</h1>
        <div class='flex flex-col md:flex-row'>
          <template v-for='skill in data.experience.skills'>
            <Teaser :icon='skill.icon' :headline='skill.title' :content='skill.details'></Teaser>
          </template>
        </div>
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
import Teaser from '@theme/components/atoms/Teaser';

export default {
  components: { Nav, Header, Footer, Teaser },
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
