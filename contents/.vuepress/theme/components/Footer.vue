<template>
  <footer class='font-sans bg-blue text-center text-pink pt-8 pb-4 px-4'>
    <div>©2019 Sandra Z. All rights reserved.</div>
    <div class='mt-2 mx-auto w-32'>
      <img :src='$withBase(data.footerError)' alt='arrow'/>
    </div>
    <span class='block mt-4 text-center text-tiny'>Vintage vector created by <a href="https://www.freepik.com/free-photos-vectors/vintage">rawpixel.com</a>, icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> - <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span>
  </footer>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter;
    },
  },
}
</script>
