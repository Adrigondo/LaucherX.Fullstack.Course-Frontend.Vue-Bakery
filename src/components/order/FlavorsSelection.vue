<template>
    <section>
        <!-- <h3>Pasteles</h3> -->
        <p>
            Seleccione el sabor de su pastel (al combinar se suman precios) <span class="badge bg-secondary">Opcional</span>
        </p>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <checkbox-item
                number="1"
                kind="flavors"
                name="Chocolate"
                imageURL="https://img.icons8.com/external-colored-outline-lafs/64/000000/external-ice-flavors-colored-outline-part-2-colored-outline-lafs.png"
                price="50"
            />
            <checkbox-item
                number="2"
                kind="flavors"
                name="Frambuesa"
                imageURL="https://img.icons8.com/external-colored-outline-lafs/64/000000/external-ice-flavors-colored-outline-part-2-colored-outline-lafs.png"
                price="40"
            />
            <checkbox-item
                number="3"
                kind="flavors"
                name="Frutas"
                imageURL="https://img.icons8.com/external-colored-outline-lafs/64/000000/external-ice-flavors-colored-outline-part-2-colored-outline-lafs.png"
                price="60"
            />
            <checkbox-item
                number="4"
                kind="flavors"
                name="Nieve napolitano"
                imageURL="https://img.icons8.com/external-colored-outline-lafs/64/000000/external-ice-flavors-colored-outline-part-2-colored-outline-lafs.png"
                price="60"
            />
        </div>
    </section>
</template>

<script>
import CheckboxItem from '@/components/general/CheckboxItem.vue'
export default {
    name: "FlavorSelection",
    components:{
        CheckboxItem,
    }
}
</script>

<style scoped>
    
</style>