<template>
    <h3>Sabores</h3>
    <SaleItem
        imageURL="https://img.icons8.com/external-colored-outline-lafs/64/000000/external-ice-flavors-colored-outline-part-2-colored-outline-lafs.png"
        name="Chocolate"
        price="50"
    />
    <SaleItem
        imageURL="https://img.icons8.com/external-colored-outline-lafs/64/000000/external-ice-flavors-colored-outline-part-2-colored-outline-lafs.png"
        name="Frambuesa"
        price="40"
    />
    <SaleItem
        imageURL="https://img.icons8.com/external-colored-outline-lafs/64/000000/external-ice-flavors-colored-outline-part-2-colored-outline-lafs.png"
        name="Frutas"
        price="60"
    />
    <SaleItem
        imageURL="https://img.icons8.com/external-colored-outline-lafs/64/000000/external-ice-flavors-colored-outline-part-2-colored-outline-lafs.png"
        name="Nieve napolitano"
        price="60"
    />
</template>

<script>
import SaleItem from "@/components/SaleItem.vue"
export default {
    name: "FlavorsList",
    components:{
        SaleItem,
    }
}
</script>

<style>

</style>