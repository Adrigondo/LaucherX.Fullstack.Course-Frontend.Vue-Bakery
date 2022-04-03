<template>
    <input
        type="radio" class="btn-check"
        :name="kind" :id="kind+'_radio_'+number" 
        autocomplete="off"
        :value="name"
        :v-model="kind"
        required
    >
    <label class="btn btn-outline-primary" :for="kind+'_radio_'+number">
        <div>
            <SaleItem
                :imageURL="imageURL"
                :name="name"
                :price="price"
            />
        </div>
    </label>
</template>

<script>
import SaleItem from "@/components/general/SaleItem.vue"
export default {
    name: "RadioItem",
    components:{
        SaleItem,
    },
    props: {
        // value: String,
        number: Number,
        kind: String,
        imageURL: String,
        name: String,
        price: String,
    },
}
</script>

<style>

</style>