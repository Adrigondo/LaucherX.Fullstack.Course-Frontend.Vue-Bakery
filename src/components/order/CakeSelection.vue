<template>
    <section>
        <!-- <h3>- Pasteles</h3> -->
        <p>
            Seleccione el tipo de pastel que desea (solo puede escoger un tipo) <span class="badge bg-primary">Obligatorio</span>
        </p>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <radio-item
                number="1"
                :kind="kind"
                name="Pastel simple"
                imageURL="https://img.icons8.com/color/48/000000/cake.png"
                price="200"
            />
            <radio-item
                number="2"
                :kind="kind"
                name="Pastel normal"
                imageURL="https://img.icons8.com/color/48/000000/cake.png"
                price="300"
            />
            <radio-item
                number="3"
                :kind="kind"
                name="Pastel de zanahoria"
                imageURL="https://img.icons8.com/color/48/000000/cake.png"
                price="400"
            />
            <radio-item
                number="4"
                :kind="kind"
                name="Pastel de 3 leches"
                imageURL="https://img.icons8.com/color/48/000000/cake.png"
                price="620"
            />
        </div>
    </section>
</template>

<script>
import RadioItem from '@/components/general/RadioItem.vue'

export default {
    name: "CakeSelection",
    components:{
        RadioItem,
    },
    data() {
        return {
            kind: "cake",
        }
    }
}
</script>
