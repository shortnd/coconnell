<template>
  <div class="mx-auto">
    <h2 class="text-center text-3xl">Hey there! <span class="underline">My name is Collin</span>.</h2>
    <p class="mb-4 text-lg">I am a Fullstack Developer, Detroit City Football Club Fan</p>
    <p class="mb-4 text-lg">I develop with with <a class="text-green" href="//vue.org" target="_blank">Vue</a>, <a class="text-green" href="//expressjs.com" target="_blank">Express</a>, <a class="text-green" href="//laravel.com" target="_blank">Laravel</a>, <a class="text-green" href="//getbootstrap.com" target="_blank">Bootstrap</a>, and <a class="text-green" href="//tailwindcss.com" target="_blank">Tailwind</a>.</p>
    <p class="mb-4 text-lg">If you would like to talk to me please <nuxt-link class="text-green" to="/contact">contact me</nuxt-link>.</p>
  </div>
</template>

<script>
export default {
  head: {
    meta: [{ hid: 'description', name: 'description', content: 'Welcome' }]
  }
}
</script>
