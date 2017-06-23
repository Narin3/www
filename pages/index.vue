<template>
  <div>
    <div class="particles-background">
      <vue-particles 
        color="#fff"
        :moveSpeed="20"
        shapeType="circle"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push">
      </vue-particles> 
    </div>
    <div>
      <p class='motto'> Secure and Fast Transactions At The Speed Of Light </p>
    </div>
    <div>
      <Problem></Problem>
      <Solution></Solution>
    </div>
  </div>
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
