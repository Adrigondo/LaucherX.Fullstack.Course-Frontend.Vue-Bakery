<template>
    <section>
        <!-- <h3>- Pasteles</h3> -->
        <p>
            Seleccione el tipo de pastel que desea (solo puede escoger un tipo) <span class="badge bg-primary">Obligatorio</span>
        </p>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="cake_radio" id="cake_radio_1" autocomplete="off" required>
            <label class="btn btn-outline-primary" for="cake_radio_1">
                <div>
                    <SaleItem
                        imageURL="https://img.icons8.com/color/48/000000/cake.png"
                        name="Pastel simple"
                        price="200"
                    />
                </div>
            </label>

            <input type="radio" class="btn-check" name="cake_radio" id="cake_radio_2" autocomplete="off">
            <label class="btn btn-outline-primary" for="cake_radio_2">
                <div>
                    <SaleItem
                        imageURL="https://img.icons8.com/color/48/000000/cake.png"
                        name="Pastel normal"
                        price="300"
                    />
                </div>
            </label>

            <input type="radio" class="btn-check" name="cake_radio" id="cake_radio_3" autocomplete="off">
            <label class="btn btn-outline-primary" for="cake_radio_3">
                <div>
                    <SaleItem
                        imageURL="https://img.icons8.com/color/48/000000/cake.png"
                        name="Pastel de zanahoria"
                        price="400"
                    />
                </div>
            </label>

            <input type="radio" class="btn-check" name="cake_radio_" id="cake_radio_4" autocomplete="off">
            <label class="btn btn-outline-primary" for="cake_radio_4">
                <div>
                    <SaleItem
                        imageURL="https://img.icons8.com/color/48/000000/cake.png"
                        name="Pastel de 3 leches"
                        price="620"
                    />
                </div>
            </label>
        </div>
    </section>
</template>

<script>
import SaleItem from "@/components/SaleItem.vue"
export default {
    name: "CakeSelection",
    components:{
        SaleItem,
    }
}
</script>

<style scoped>
    
</style>