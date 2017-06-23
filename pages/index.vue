<template>
  <section>
    <parallax speedFactor=0.18 fixed=true>
    <header class="header">
    
    </header>
        </parallax>
        <section>
          <p class='text'> Secure and Fast Transactions With The Speed Of Light </p>
      </section>
    <section>
      <Problem></Problem>
      <Solution></Solution>
    </section>
  </section>
</template>

<script>
import Problem from '../components/problem'
import Solution from '../components/solution'
import Parallax from 'vue-parallaxy'

export default {
  components: {
    Problem,
    Solution,
    Parallax
  }
}
</script>

<style lang="scss" src="../assets/main.scss" />
