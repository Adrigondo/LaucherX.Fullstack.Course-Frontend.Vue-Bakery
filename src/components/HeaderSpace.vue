<template>
    <header>
        <div class="admin">
            <a href="./login.html" class="button-primary btn btn-lg" type="button">Soy pastelero</a>
        </div>
        <div class="container d-grid gap-1">
            <img src="@/assets/logo_dulces_mordidas_NB.png" alt="Logo de Dulces mordidas">
            <a href="#" class="button-primary btn btn-lg" type="button">
                {{ button_info }}
            </a>
        </div>
    </header>
</template>
<script>
export default {
    name: 'HeaderSpace',
    props: {
        button_info: String,
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