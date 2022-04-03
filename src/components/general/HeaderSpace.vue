<template>
    <header>
        <div class="admin" v-if="isHome">
            <a href="./login.html" class="button-primary btn btn-lg" type="button">Soy pastelero</a>
        </div>
        <div class="container d-grid gap-1">
            <img src="@/assets/logo_dulces_mordidas_NB.png" alt="Logo de Dulces mordidas">
            <router-link :to="{name: destiny}" class="button-primary btn btn-lg" type="button">
                {{ button_info }}
            </router-link>
        </div>
    </header>
</template>
<script>
export default {
    name: 'HeaderSpace',
    props: {
        destiny: String,
        button_info: String,
        isHome: Boolean,
    },
}
</script>
<style>

header {
    background-color: rgb(255, 130, 136);
    padding: 10px;
    margin-bottom: 1rem;
}
header img{
    margin: 0px auto;
    width: 250px;
}
</style>