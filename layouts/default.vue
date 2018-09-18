<template>
  <div class="min-h-full container mx-auto">
    <navbar></navbar>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
</style>
