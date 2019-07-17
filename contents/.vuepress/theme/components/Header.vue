<template>
  <div class='flex flex-col h-hero max-h-hero min-h-hero'>
    <div class='headerContent container uppercase text-center mx-auto mt-20 max-w-sm md:max-w-6xl md:mt-40 p-4 z-10'>
      <h1 class='text-huge slideUp md:text-super font-headline text-eggshell'>
        {{ data.headerContent.text }}
      </h1>
      <div class='mt-8 slideUp flex justify-center'>
        <div class='w-3/5 md:w-1/5'>
          <img :src='$withBase(data.headerContent.arrow)' alt='arrow'/>
        </div>
      </div>
      <div class='mt-10 slideUpLater flex flex-wrap max-w-md mx-auto justify-center'>
        <div v-for='skill in data.headerContent.skills'
          class='btn'>
          <a :href='skill.link' ref='skillLink' v-on:click='scrollToTarget'>{{ skill.title }}</a>
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
    data() {
      return this.$page.frontmatter;
    },
  },
  methods: {
    scrollToTarget(event) {
      event.preventDefault();
      const anchor = document.querySelectorAll(event.target.getAttribute('href'))[0];
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
};
</script>

<style>
.slideUp {
  visibility: hidden;
  transform: translateY(20px);
}

.slideUpLater {
  visibility: hidden;
  transform: translateY(10px);
}

.slideUp {
  animation: .5s slide-up .5s forwards;
  -webkit-animation: .5s slide-up .5s forwards;
}

.slideUpLater {
  animation: .5s slide-up .8s forwards;
  -webkit-animation: .5s slide-up .8s forwards;
}

@keyframes slide-up {
  100% {
    visibility: visible;
    transform: translateY(0);
  }
}
</style>
