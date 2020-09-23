<template>
  <div class="content--page--home">
    <Breadcrumb title="Mis problemas" :links="links" />
    <div class="problems--content container">
      <div class="row py-5">
        <div class="col-12 col-md-4 mb-3 md-md-0">
          <ProblemList />
        </div>
        <div class="col-12 col-md-8">
          <ProblemChat />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/pages/breadcrumb'
import ProblemList from '@/components/pages/problems/list'
import ProblemChat from '@/components/pages/problems/chat'

export default {
  async fetch() {
    this.$store.dispatch('problems/GET_PROBLEMS')
    // let { data } = await this.$axios.$get('/visitor/videoteca')
    // this.videos = data
    // this.loading = false
  },
  data() {
    return {
      links: [
        { id: 1, title: 'Problemas', linked: true, to: '/' },
        { id: 2, title: 'Mis problemas', linked: false },
      ],
    }
  },
  mounted() {
    console.log(this.$store)
  },
  components: {
    Breadcrumb,
    ProblemList,
    ProblemChat,
  },
}
</script>

<style></style>
