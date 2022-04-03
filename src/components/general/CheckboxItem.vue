<template>
    <input
        type="checkbox" class="btn-check"
        :name="kind" :id="kind+'_check_'+number"
        autocomplete="off"
        :value="name"
        :v-model="kind"
    >
    <label class="btn btn-outline-primary" :for="kind+'_check_'+number">
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
    name: "CheckboxItem",
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