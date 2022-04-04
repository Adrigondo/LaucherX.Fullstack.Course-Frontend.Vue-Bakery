<template>
    <header-space
        button_info="Volver al menú"
        destiny="home"
    />
    <div class="content container">
        <form @submit.prevent="storeBakeryData">
            <h1>Bienvenido {{ baker.name }}</h1>
            <h2>Pedidos pendientes</h2>

            <div class="form-group table-container">
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Pastel</th>
                            <th>Sabores</th>
                            <th>Adornos</th>
                            <th>Nombre</th>
                            <th>Contacto</th>
                            <th>Especificaciones</th>
                            <th>Completo</th>
                            <th>Entregado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(order, index) in orders" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{order.cake.cake}}</td>
                            <td>
                                <label v-for="(flavor, index) in order.cake.flavors" :key="index">
                                    {{flavor}} <br>
                                </label>
                            </td>
                            <td>
                                <label v-for="(decoration, index) in order.cake.decorations" :key="index">
                                    {{decoration}} <br>
                                </label>
                            </td>
                            <td>{{ order.user.name }}</td>
                            <td>
                                {{ order.user.phone }}
                                <br>{{ order.user.email }}
                            </td>
                            <td class="text-break">{{ order.cake.description }}</td>
                            <td>
                                <div class="form-check form-switch">
                                    <!-- If the cake is completed -->
                                    <input class="form-check-input" type="checkbox" role="switch" :name="'order_'+index+'_completed'" :id="'order_'+index+'_completed'" checked v-if="order.completed">
                                    <!-- else -->
                                    <input class="form-check-input" type="checkbox" role="switch" :name="'order_'+index+'_completed'" :id="'order_'+index" v-else>
                                </div>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <!-- If the cake is completed -->
                                    <input class="form-check-input" type="checkbox" role="switch" :name="'order_'+index+'_delivered'" :id="'order_'+index+'_delivered'" checked v-if="order.delivered">
                                    <!-- else -->
                                    <input class="form-check-input" type="checkbox" role="switch" :name="'order_'+index+'_delivered'" :id="'order_'+index+'_delivered'" v-else>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>Inventario</h2>

            <div class="form-group">
                <ingredient-item
                    :name="ingredient.name"
                    :title="ingredient.title"
                    :unit="ingredient.unit"
                    :value="ingredient.value"
                    type="ingredients"
                    imageURL= "https://img.icons8.com/color/48/000000/cake.png"
                    v-for="(ingredient,index) in ingredients"
                    :key="index"
                />
                <ingredient-kinds-item
                    :name="ingredient.name"
                    :title="ingredient.title"
                    :kinds="ingredient.kinds"
                    type="ingredients"
                    imageURL= "https://img.icons8.com/color/48/000000/cake.png"
                    v-for="(ingredient,index) in multingredients"
                    :key="index"
                />
            </div>
            <div class="form-group">
                <ingredient-item
                    :name="decoration.name"
                    :title="decoration.title"
                    :unit="decoration.unit"
                    :value="decoration.value"
                    type="decorations"
                    imageURL= "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-candle-event-and-party-xnimrodx-lineal-color-xnimrodx.png"
                    v-for="(decoration,index) in decorations"
                    :key="index"
                />
            </div>
            <div class="d-grid gap-1">
                <button type="submit" class="button-primary btn btn-lg">Actualizar</button>
            </div>
        </form>
    </div>

    <footer-space msg="Welcome to Your Vue.js App"/>
</template>

<script>
import {mapState} from "vuex"
import HeaderSpace from "@/components/general/HeaderSpace.vue"
import FooterSpace from "@/components/general/FooterSpace.vue"
import IngredientItem from '@/components/admin/IngredientItem.vue'
import IngredientKindsItem from '@/components/admin/IngredientKindsItem.vue'

export default {
    name: "BakerAdmin",
    components: {
        HeaderSpace,
        FooterSpace,
        IngredientItem,
        IngredientKindsItem,
    },
    computed: mapState({
        baker: state => state.bakery.baker,
        orders: state => state.orders,
        decorations: state => state.bakery.inventory.decorations,
        ingredients: state => {
            let res=[];
            let aux=state.bakery.inventory.ingredients;
            // console.log(aux);
            for(let key in aux){
                if(!aux[key].kinds){
                    res.push(aux[key]);
                }
            }
            /* aux.forEach((ingredient)=>{
                // console.log(ingredient)
                if(!ingredient.kinds){
                    res.push(ingredient);
                }
            }) */
                
            // console.log(res)
            return res;
        },
        multingredients: state => {
            let res=[];
            let aux=state.bakery.inventory.ingredients;
            // console.log(aux);
            for(let key in aux){
                if(aux[key].kinds){
                    res.push(aux[key]);
                }
            }
            /* aux.forEach((ingredient)=>{
                // console.log(ingredient)
                if(!ingredient.kinds){
                    res.push(ingredient);
                }
            }) */
                
            // console.log(res)
            return res;
        },
    }),
    methods: {
        async storeBakeryData(event) {
            const form = event.target;
            const formData = await new FormData(form);
            let bakery={};
            for (const [name, value] of formData) {
                if(!bakery[name]){
                    bakery[name]=[value];
                }else{
                    bakery[name].push(value);
                }

            }
            /* for(let key in bakery){
                console.log({
                    key,
                    value: bakery[key],
                });
            } */
            // console.log(bakery);
            this.$store.dispatch("setBakeryData", bakery);
            alert("Ordenes e inventario actualizados.");
            // router.replace({name: "received"})
        },
    },
}
</script>

<style>
    .table-container{
        overflow-x: auto;
    }
</style>