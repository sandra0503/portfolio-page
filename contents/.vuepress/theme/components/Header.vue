<template>
  <div class='flex flex-col relative h-hero max-h-hero min-h-hero'>
    <div class='absolute w-full h-full bg-cover bg-center z-0'
      v-if='data && data.heroImage'
      :style='{ backgroundImage: `url(${$withBase(data.heroImage.source)})` }'
    />
    <div class='container uppercase text-center mx-auto mt-8 md:mt-40 p-3 z-10'>
      <h1 class='text-huge font-headline md:text-super text-pink'>
        {{ data.headerContent.text }}
      </h1>
      <div class='mt-4 flex justify-center'>
        <div class='w-3/5 md:w-1/4'>
          <img :src='$withBase(data.headerContent.arrow)' alt='arrow'/>
        </div>
      </div>
      <div class='mt-8 md:mt-10 flex flex-wrap font-sansserif max-w-md mx-auto justify-center'>
        <div v-for='skill in data.headerContent.skills'
          class='bg-pink p-2 m-2 rounded'>
          <a :href='skill.link' class='headerAnchorLink text-blue'>{{ skill.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '@theme/components/Footer';
import Header from '@theme/components/Header';
import Nav from '@theme/components/Nav';

export default {
  computed: {
    data () {
      return this.$page.frontmatter;
    },
  },
  mounted () {
    this.anchorLinks = document.querySelectorAll('.headerAnchorLink');
    this.anchorLinks.forEach(link => {
      link.addEventListener('click', this.scrollToTarget);
    });
  },
  data () {
    return {
      anchorLinks: [],
    }
  },
  methods: {
    scrollToTarget(event) {
      event.preventDefault();
      const anchor = document.querySelectorAll(event.target.getAttribute('href'))[0];
      if (anchor) {
        const y = anchor.getBoundingClientRect().top + window.scrollY;
        window.scroll({
          top: y,
          behavior: 'smooth'
        });
      }
    }
  },
  beforeDestroyed() {
    this.anchorLinks.forEach(link => {
      link.removeEventListener('click', this.scrollToTarget);
    });
  }
};
</script>
