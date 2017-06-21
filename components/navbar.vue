<template>
  <section>
    <div v-if="top <= 300">
      <nav >
        <img src="../static/logoLumina.png"  />
        <a href="#" 
           v-scroll-to="{el: '.problem-wrap'}" 
           class="problem" 
           v-on:click="makeActive('problem')">Problem</a>
        <a href="#"
           v-scroll-to="{el: '.solution-wrap'}" 
           class="solution" 
           v-on:click="makeActive('solution')">Solution</a>
        <a href="#" class="services" v-on:click="makeActive('services')">Services</a>
        <a href="#" class="contact" v-on:click="makeActive('contact')">Contact</a>
      </nav>
    </div>
    <div v-else>
      <nav style="background-color: #fff">
        <img src="../static/logoLumina.png"  />
        <a href="#" 
           v-scroll-to="{el: '.problem-wrap'}">Problem</a>
        <a href="#" 
           v-scroll-to="{el: '.solution-wrap'}">Solution</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  </section>
</template>

<script>
import Problem from './problem'
export default {
  data () {
    return {
      top: 0
    }
  },
  methods: {
    onScroll () {
      this.top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
  },
  components: {
    problem: Problem
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="scss" src="../assets/navbar.scss" scoped/>

