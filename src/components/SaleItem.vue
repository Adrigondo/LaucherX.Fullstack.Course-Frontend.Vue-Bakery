<template>
    <div class="sale-item">
        <img v-bind:src="imageURL" :alt="'Icono de' + name" height="50" width="50">
        <div class="">
            <h4 style="margin: 0px;">{{name}}</h4>
            ${{price}}.00
        </div>
    </div>
</template>

<script>
export default {
    name: "SaleItem",
    props: {
        imageURL: String,
        name: String,
        price: String,
    },
}
</script>

<style>
    .btn-group .sale-item{
        display: block;
    }
    .sale-item{
        display: flex;
        align-items: center;
    }
</style>