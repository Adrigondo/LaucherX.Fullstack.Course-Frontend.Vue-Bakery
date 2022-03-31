<template>
  <Header button_info="Realizar pedido"/>
  <Footer msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import Header from '../components/HeaderSpace.vue'
import Footer from '../components/FooterSpace.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  }
}
</script>
