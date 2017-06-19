<template>
  <div>
    <section>
      <navbar />
      <nuxt />
    </section>
    <problem />
    <foot />
  </div>
</template>
<script>
import Navbar from '../components/navbar.vue'
import Problem from '../components/problem.vue'
import Footer from '../components/footer.vue'

export default {
  components: {
    navbar: Navbar,
    problem: Problem,
    foot: Footer
  }
}
</script>
