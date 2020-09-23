<template>
  <div class="layout--default">
    <Menu />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Menu from '@/components/general/menu'
import Footer from '@/components/general/footer'

export default {
  components: {
    Menu,
    Footer,
  },
}
</script>
<style></style>
