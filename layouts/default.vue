<template>
  <div>
    <section>
      <Navbar />
      <nuxt />
    </section>
    <Problem />
    <Foot />
  </div>
</template>
<script>
import navbar from '../components/navbar.vue'
import problem from '../components/problem.vue'
import footer from '../components/footer.vue'

export default {
  components: {
    Navbar: navbar,
    Problem: problem,
    Foot: footer
  }
}
</script>
