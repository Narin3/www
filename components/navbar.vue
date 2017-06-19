<template>
  <div>
    <nav v-bind:class="active" v-on:click.prevent>
      <img src="../static/logoLumina.png"  />
      <a href="#" class="problem" v-on:click="makeActive('problem')">Problem</a>
      <a href="#" class="solution" v-on:click="makeActive('solution')">Solution</a>
      <a href="#" class="services" v-on:click="makeActive('services')">Services</a>
      <a href="#" class="contact" v-on:click="makeActive('contact')">Contact</a>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: ''
    }
  },
  methods: {
    makeActive: function (item) {
      this.active = item
    }
  }
}
</script>

<style lang="scss" src="../assets/navbar.scss" scoped/>

