<template>
  <header-space
    button_info="Realizar pedido"
    destiny="order"
    isHome=true
  />
  <div class="content container">
    <h2>Menú</h2>
    <ul>
      <li><cake-list/></li>
      <li><flavors-list/></li>
      <li><decorations-list/></li>
    </ul>
  </div>
  <footer-space msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import HeaderSpace from '@/components/HeaderSpace.vue'
import FooterSpace from '@/components/FooterSpace.vue'
import CakeList from '@/components/CakeList.vue'
import FlavorsList from '@/components/FlavorsList.vue'
import DecorationsList from '@/components/DecorationsList.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderSpace,
    FooterSpace,
    CakeList,
    FlavorsList,
    DecorationsList
  }
}
</script>

<style>
  .admin {
      position: absolute;
      right: 0;
      top: 0;
  }
</style>