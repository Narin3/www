<template>
  <section>
    <template>
    <div>
      <nav 
        :class="[isNavbarActive ? navbarActiveClass : '']">
        <img src="../static/logoLumina.png"/>
        <a href="#" 
           v-scroll-to="{el: '.problem-wrap'}" 
           class="problem" 
           v-on:click="makeActive('problem')">Problem</a>
        <a href="#"
           v-scroll-to="{el: '.solution-wrap'}" 
           class="solution" 
           v-on:click="makeActive('solution')">Solution</a>
        <a>Services</a>
        <a >Team</a>
      </nav>
    </div>
    </template>
    <!--<template v-else>

    <div>
       <nav v-on:click.prevent class="navbar">
      Width: {{width}}
   <img src="../static/logoLumina.png" class="navbar-image--logo" />
    </nav>
    <div class="navbar-link--container">
      <div class="navbar-link--wrap-first-item">
        <a href="#" v-scroll-to="{
          el: '.problem-wrap'
            }" class="navbar-link" v-on:click="makeActive('problem')">Problem</a>
        </div>
        <div class="navbar-link--wrap"><a href="#" class="navbar-link">Solution</a></div>
        <div class="navbar-link--wrap"><a href="#" class="navbar-link" >Services</a></div>
        <div class="navbar-link--wrap"><a href="#" class="navbar-link" >Contact</a></div>
      </div>
    </div>
    </template>-->

  </section>
</template>

<script>
import Problem from './problem'

export default {
  data () {
    return {
      top: 0,
      isNavbarActive: false,
      navbarActiveClass: 'navbar-active',
      width: 0
    }
  },
  methods: {
    onScroll () {
      this.top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (this.top > 300) {
        this.isNavbarActive = true
      } else {
        this.isNavbarActive = false
      }
    },
    onWidthChange () {
      this.width = window.innerWidth
    }
  },
  components: {
    problem: Problem
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onWidthChange)
  }
}
</script>

<style lang="scss" src="../assets/navbar.scss" scoped/>

