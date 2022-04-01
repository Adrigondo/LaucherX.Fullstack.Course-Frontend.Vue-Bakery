<template>
    <section>
        <!-- <h3>Pasteles</h3> -->
        <p>
            Seleccione el sabor de su pastel (al combinar se suman precios) <span class="badge bg-secondary">Opcional</span>
        </p>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="checkbox" class="btn-check" name="flacors_check" id="flavors_check_1" autocomplete="off">
            <label class="btn btn-outline-primary" for="flavors_check_1">
                <div>
                    <SaleItem
                        imageURL="https://img.icons8.com/external-colored-outline-lafs/64/000000/external-ice-flavors-colored-outline-part-2-colored-outline-lafs.png"
                        name="Chocolate"
                        price="50"
                    />
                </div>
            </label>

            <input type="checkbox" class="btn-check" name="flacors_check" id="flavors_check_2" autocomplete="off">
            <label class="btn btn-outline-primary" for="flavors_check_2">
                <div>
                    <SaleItem
                        imageURL="https://img.icons8.com/external-colored-outline-lafs/64/000000/external-ice-flavors-colored-outline-part-2-colored-outline-lafs.png"
                        name="Frambuesa"
                        price="40"
                    />
                </div>
            </label>

            <input type="checkbox" class="btn-check" name="flacors_check" id="flavors_check_3" autocomplete="off">
            <label class="btn btn-outline-primary" for="flavors_check_3">
                <div>
                    <SaleItem
                        imageURL="https://img.icons8.com/external-colored-outline-lafs/64/000000/external-ice-flavors-colored-outline-part-2-colored-outline-lafs.png"
                        name="Frutas"
                        price="60"
                    />
                </div>
            </label>

            <input type="checkbox" class="btn-check" id="flavors_check_4" autocomplete="off">
            <label class="btn btn-outline-primary" for="flavors_check_4">
                <div>
                    <SaleItem
                        imageURL="https://img.icons8.com/external-colored-outline-lafs/64/000000/external-ice-flavors-colored-outline-part-2-colored-outline-lafs.png"
                        name="Nieve napolitano"
                        price="60"
                    />
                </div>
            </label>
        </div>
    </section>
</template>

<script>
import SaleItem from "@/components/SaleItem.vue"
export default {
    name: "FlavorSelection",
    components:{
        SaleItem,
    }
}
</script>

<style scoped>
    
</style>