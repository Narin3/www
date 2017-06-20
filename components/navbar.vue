<template>
  <div>
    <nav v-bind:class="active" v-on:click.prevent class="navbar">
      <img src="../static/logoLumina.png" class="navbar-image--logo" />
    </nav>
    <div class="navbar-link--container">
      <div class="navbar-link--wrap-first-item">
        <a href="#" v-scroll-to="{
          el: '.problem-wrap'
          }" class="navbar-link" v-on:click="makeActive('problem')">Problem</a>
      </div>
      <div class="navbar-link--wrap"><a href="#" class="navbar-link" v-on:click="makeActive('solution')">Solution</a></div>
      <div class="navbar-link--wrap"><a href="#" class="navbar-link" v-on:click="makeActive('services')">Services</a></div>
      <div class="navbar-link--wrap"><a href="#" class="navbar-link" v-on:click="makeActive('contact')">Contact</a></div>
    </div>
  </div>
</template>

<script>
import Problem from './problem'
export default {
  data () {
    return {
      active: ''
    }
  },
  methods: {
    makeActive (item) {
      this.active = item
    }
  },
  components: {
    problem: Problem
  }
}
</script>

<style lang="scss" src="../assets/navbar.scss" scoped/>

