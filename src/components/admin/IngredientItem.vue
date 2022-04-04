<template>
    <div class="d-flex align-items-center">
        <img :src="imageURL" alt="Icono de Pastel" height="50" width="50">
        <div class="d-grid gap-1 input-group">
            <div class="form-floating mb-3">
                <input type="number" class="form-control" :placeholder="title" :id="name" :name="type+'_'+name" :value="value" step="0.1" required>

                <label :for="type+'_'+name">Cantidad de {{title}} ({{unit}})</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IngredientItem",
    props:{
        name: String,
        title: String,
        type: String,
        unit: String,
        value: Number,
        imageURL: String,
    }
}
</script>

<style>

</style>