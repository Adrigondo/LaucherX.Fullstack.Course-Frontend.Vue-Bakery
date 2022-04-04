<template>
    <img :src="imageURL" alt="Icono de Pastel" height="50" width="50">
    <label for="">Productos de {{title}}</label>
    <div class="d-flex align-items-center" v-for="(kind, index) in kinds" :key="index">
        <div class="d-grid gap-1 input-group">
            <div class="form-floating mb-3">
                <input type="number" class="form-control" :placeholder="title" :id="name" :name="type+'_'+name" :value="kind.value" step="0.1" required>
                <label :for="name">Cantidad de {{title}} <span class="badge bg-secondary">{{kind.title}}</span> ({{kind.unit}})</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "IngredientKindsItem",
    props:{
        name: String,
        title: String,
        type: String,
        kinds: Object,
        imageURL: String,
    }
}
</script>

<style>

</style>