<template>
  <section>
    <header class="header">
      <section>
        <p>Secure and Fast Transactions at the Speed of Light</p>
      </section>
    </header>
    <section>
      <Problem/>
      <Solution/>
      <Team />
    </section>
  </section>
</template>

<script>
import Problem from '../components/problem'
import Solution from '../components/solution'
import Team from '../components/team'

export default {
  components: {
    Problem,
    Solution,
    Team
  }
}
</script>

<style lang="scss" src="../assets/main.scss" />
