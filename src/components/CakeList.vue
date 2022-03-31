<template>
    <h3>Pasteles</h3>
    <SaleItem
        imageURL="https://img.icons8.com/color/48/000000/cake.png"
        name="Pastel simple"
        price="200"
    />
    <SaleItem
        imageURL="https://img.icons8.com/color/48/000000/cake.png"
        name="Pastel normal"
        price="300"
    />
    <SaleItem
        imageURL="https://img.icons8.com/color/48/000000/cake.png"
        name="Pastel de zanahoria"
        price="400"
    />
    <SaleItem
        imageURL="https://img.icons8.com/color/48/000000/cake.png"
        name="Pastel de 3 leches"
        price="620"
    />
</template>

<script>
import SaleItem from "@/components/SaleItem.vue"
export default {
    name: "CakeList",
    components:{
        SaleItem,
    }
}
</script>

<style>

</style>