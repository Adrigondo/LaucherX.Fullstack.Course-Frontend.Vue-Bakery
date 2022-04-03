<template>
    <header-space
        button_info="Volver al menú"
        destiny="home"
    />
    <div class="content container d-flex justify-content-center align-items-center text-wrap">
        <label for="" class="thanks">¡Gracias {{ $store.state.user.name }}, su orden está en proceso!</label>
    </div>
    <footer-space msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HeaderSpace from "@/components/general/HeaderSpace.vue"
import FooterSpace from "@/components/general/FooterSpace.vue"

export default {
    name: "BakerLogin",
    components: {
        HeaderSpace,
        FooterSpace
    }
}
</script>

<style>

</style>