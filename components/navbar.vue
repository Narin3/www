<template>
  <section>
    <template v-if="windowWidth > 667">
    <div>
      <nav 
        :class="[isNavbarActive ? navbarActiveClass : '']">
        <!--<img src="../static/logoLumina.png"/>-->
        <a href="#" 
           v-scroll-to="{el: '.problem-wrap'}" 
           class="problem" 
           v-on:click="makeActive('problem')">Problem</a>
        <a hrNavbarActNavbarActef="#"
           v-scroll-to="{el: '.solution-wrap'}" 
           class="solution" 
           v-on:click="makeActive('solution')">Solution</a>
        <a>Services</a>
        <a >Team</a>
      </nav>
    </div>
    </template>
    <template v-else>
      <div>
        <nav v-on:click.prevent class="navbar">
        <img src="../static/logoLumina.png" class="navbar-image--logo"></img>
        </nav>
        <div class="navbar-link--container">
          <div class="navbar-link--wrap-first-item">
            <a href="#" 
               v-scroll-to="{el: '.problem-wrap'}" 
               class="navbar-link" 
               v-on:click="makeActive('problem')">Problem</a>
          </div>
          <div class="navbar-link--wrap"><a href="#" class="navbar-link">Solution</a></div>
          <div class="navbar-link--wrap"><a href="#" class="navbar-link" >Services</a></div>
          <div class="navbar-link--wrap"><a href="#" class="navbar-link" >Contact</a></div>
        </div>
      </div>
    </template>
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
      windowWidth: 0
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
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth
      console.log(document.documentElement.clientWidth)
    }
  },
  components: {
    problem: Problem
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)

    this.$nextTick(() => {
      window.addEventListener('resize', this.getWindowWidth)

      this.getWindowWidth()
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth)
  }
}
</script>

<style lang="scss" src="../assets/navbar.scss" scoped/>

