<template>
  <form name="contact" method="POST" data-netlify="true">
    <div class="form-input items-center">
      <label class="input-label md:max-w-32" for="name">{{ data.contact.nameLabel }}</label>
      <input type="text" name="name" class="input-field" />
    </div>
    <div class="form-input items-center">
      <label class="input-label md:max-w-32" for="email">{{ data.contact.emailLabel }}</label>
      <input type="email" name="email" class="input-field" />
    </div>
    <div class="form-input">
      <label class="input-label md:max-w-32" for="message">{{ data.contact.messageLabel }}</label>
      <textarea name="message" class="input-field h-32 resize-none"></textarea>
    </div>
    <p>
      <button class='mt-8 btn-secondary w-32' type="submit">{{ data.contact.buttonLabel }}</button>
    </p>
  </form>
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
