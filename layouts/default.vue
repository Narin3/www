<template>
  <div>
    <section>
      <Navbar />
      <nuxt />
    </section>
    <Problem />
    <Solution />
    <Foot />
  </div>
</template>
<script>
import navbar from '../components/navbar.vue'
import problem from '../components/problem.vue'
import solution from '../components/solution.vue'
import footer from '../components/footer.vue'

export default {
  components: {
    Navbar: navbar,
    Problem: problem,
    Solution: solution,
    Foot: footer
  }
}
</script>
