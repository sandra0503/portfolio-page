<template>
  <header>
    <nav
      class='font-sans bg-grey text-center flex justify-between py-4 px-3 mx-auto container overflow-hidden'
    >
      <router-link
        :to='`/`'
        class='block text-left self-center no-underline font-light'
        v-html='$site.title'
      ></router-link>
      <ul class='text-sm text-grey-dark list-reset flex items-center'>
        <li v-for='item in navItems'>
          <router-link
            :to='item.link'
            class='inline-block py-2 ml-3 text-grey-darkest hover:text-grey-dark no-underline'
          >
            {{item.text}}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Nav',
  computed: {
    navItems() {
      const base = this.$site.base;
      return this.$site.themeConfig.locales[base].nav;
    },
  },
};
</script>
