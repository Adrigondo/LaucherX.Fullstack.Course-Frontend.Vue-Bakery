<template>
    <h3>Adornos</h3>
    <SaleItem
        imageURL="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-candle-event-and-party-xnimrodx-lineal-color-xnimrodx.png"
        name="Velas de cumpleaños"
        price="20"
    />
    <SaleItem
        imageURL="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-candle-event-and-party-xnimrodx-lineal-color-xnimrodx.png"
        name="Arco con nombre"
        price="60"
    />
    <SaleItem
        imageURL="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-candle-event-and-party-xnimrodx-lineal-color-xnimrodx.png"
        name="Nombre en el pastel"
        price="20"
    />
</template>

<script>
import SaleItem from "@/components/SaleItem.vue"
export default {
    name: "DecorationList",
    components:{
        SaleItem,
    }
}
</script>

<style>

</style>