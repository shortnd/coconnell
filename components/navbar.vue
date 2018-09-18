<template lang="html">
  <header>
    <div class="text-center mt-4">
      <nuxt-link class="no-underline text-black" to="/">
        <h1 class="font-normal text-5xl">Collin O'Connell</h1>
      </nuxt-link>
    </div>
    <nav class="mb-6">
      <ul class="list-reset flex justify-center items-center">
        <li>
          <nuxt-link class="block p-6 text-2xl" to="/projects">Projects</nuxt-link>
        </li>
        <li>
          <nuxt-link class="block p-6 text-2xl" to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link class="block p-6 text-2xl" to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
}
</script>
