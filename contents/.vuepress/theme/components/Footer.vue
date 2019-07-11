<template>
  <footer class='font-sans bg-blue text-center text-eggshell pt-8 pb-4 px-4'>
    <div class="mt-4 mb-8">©2019 Sandra Z. All rights reserved.</div>
    <span class='block my-4 text-center text-tiny'>Vintage vector created by <a href="https://www.freepik.com/free-photos-vectors/vintage">rawpixel.com</a>, icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> - <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span>
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
