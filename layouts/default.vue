<template>
  <section>
    <navbar/>
    <nuxt/>
    <foot/>
  </section>
</template>
<script>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

export default {
  components: {
    navbar: Navbar,
    foot: Footer
  }
}
</script>
