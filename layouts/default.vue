<template>
  <div>
    <section>
      <Navbar />
      <nuxt />
    </section>
    <Solution />
    <Foot />
  </div>
</template>
<script>
import Navbar from '../components/navbar.vue'
import Foot from '../components/footer.vue'

export default {
  components: {
    Navbar,
    Foot
  }
}
</script>
