<template>
    <footer>
        <p>Dirección: Lomas Lejanas #1234
        <br>Telefono: 611 111 1111
        <br>Horario de atención: Lunes a Viernes de 8 a.m a 7 p.m</p>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
    footer {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        bottom: 0;
        width: 100%;
        height: 100px;

        background: rgb(255,159,170);
        background: -moz-linear-gradient(0deg, rgba(255,159,170,1) 0%, rgba(255,255,255,1) 100%);
        background: -webkit-linear-gradient(0deg, rgba(255,159,170,1) 0%, rgba(255,255,255,1) 100%);
        background: linear-gradient(0deg, rgba(255,159,170,1) 0%, rgba(255,255,255,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff9faa",endColorstr="#ffffff",GradientType=1);
        
        color: rgb(0, 0, 0);
    }
    footer * {
        background-color: white;
        padding: 0px 15px 15px 15px;
        border-radius: 0px 0px 20px 20px;
    }
</style>