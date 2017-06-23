<template>
  <div>
    <Navbar> </Navbar>
      <nuxt> </nuxt>
    <Foot> </Foot>
  </div>
</template>
<script>
import Navbar from '../components/navbar.vue'
import Foot from '../components/footer.vue'

export default {
  components: {
    Navbar,
    Foot
  }
}
</script>
