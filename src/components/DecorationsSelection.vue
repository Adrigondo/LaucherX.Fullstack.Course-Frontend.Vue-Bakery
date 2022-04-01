<template>
    <section>
        <!-- <h3>Pasteles</h3> -->
        <p>
            Seleccione los adornos de su pastel (al combinar se suman precios) <span class="badge bg-secondary">Opcional</span>
        </p>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="checkbox" class="btn-check" name="decorations_check" id="decorations_check_1" autocomplete="off">
            <label class="btn btn-outline-primary" for="decorations_check_1">
                <div>
                    <SaleItem
                        imageURL="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-candle-event-and-party-xnimrodx-lineal-color-xnimrodx.png"
                        name="Velas de cumpleaños"
                        price="20"
                    />
                </div>
            </label>

            <input type="checkbox" class="btn-check" name="decorations_check" id="decorations_check_2" autocomplete="off">
            <label class="btn btn-outline-primary" for="decorations_check_2">
                <div>
                    <SaleItem
                        imageURL="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-candle-event-and-party-xnimrodx-lineal-color-xnimrodx.png"
                        name="Arco con nombre"
                        price="60"
                    />
                </div>
            </label>

            <input type="checkbox" class="btn-check" name="decorations_check" id="decorations_check_3" autocomplete="off">
            <label class="btn btn-outline-primary" for="decorations_check_3">
                <div>
                    <SaleItem
                        imageURL="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-candle-event-and-party-xnimrodx-lineal-color-xnimrodx.png"
                        name="Nombre en el pastel"
                        price="20"
                    />
                </div>
            </label>
        </div>
    </section>
</template>

<script>
import SaleItem from "@/components/SaleItem.vue"
export default {
    name: "DecorationsSelection",
    components:{
        SaleItem,
    }
}
</script>

<style scoped>
    
</style>