<template>
  <div class='flex flex-col h-full'>
    <Nav/>
    <Content class='flex-1 max-w-xl mx-auto leading-normal'/>
    <Footer class='pin-b'/>
  </div>
</template>

<script>
import Footer from '@theme/components/Footer';
import Nav from '@theme/components/Nav';

export default {
  components: { Nav, Footer },
  name: 'Layout'
};
</script>

<style lang='stylus'>
@import '../styles/theme.styl';
</style>
