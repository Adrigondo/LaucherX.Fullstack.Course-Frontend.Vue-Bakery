<template>
    <section>
        <!-- <h3>Pasteles</h3> -->
        <p>
            Seleccione los adornos de su pastel (al combinar se suman precios) <span class="badge bg-secondary">Opcional</span>
        </p>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <checkbox-item
                number="1"
                kind="decorations"
                name="Velas de cumpleaños"
                imageURL="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-candle-event-and-party-xnimrodx-lineal-color-xnimrodx.png"
                price="20"
            />
            <checkbox-item
                number="2"
                kind="decorations"
                name="Arco con nombre"
                imageURL="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-candle-event-and-party-xnimrodx-lineal-color-xnimrodx.png"
                price="60"
            />
            <checkbox-item
                number="3"
                kind="decorations"
                name="Nombre en el pastel"
                imageURL="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-candle-event-and-party-xnimrodx-lineal-color-xnimrodx.png"
                price="20"
            />
        </div>
    </section>
</template>

<script>
import CheckboxItem from '@/components/general/CheckboxItem.vue'

export default {
    name: "DecorationsSelection",
    components:{
        CheckboxItem,
    }
}
</script>

<style scoped>
    
</style>