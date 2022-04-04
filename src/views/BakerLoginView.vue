<template>
    <header-space
        button_info="Volver al menú"
        destiny="home"
    />
    <div class="content container">
        <form @submit.prevent="storeBaker">
            <h2>¡Bienvenido!</h2>
            <div class="form-group">
                <label>Rellene sus datos por favor:</label>
                <br>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" placeholder="Nombre y apellido" id="name" name="name" required>
                    <label for="name">Nombre y apellido</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" placeholder="Usuario" id="user" name="user" required>
                    <label for="user">Usuario</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" placeholder="Contraseña" id="password" name="password" required>
                    <label for="password">Contraseña</label>
                </div>
            </div>
            
            <div class="d-grid gap-1">
                <button type="submit" class="button-primary btn btn-lg">¡Iniciar Sesión!</button>
            </div>
        </form>
    </div>
    <footer-space msg="Welcome to Your Vue.js App"/>
</template>

<script>
import router from '@/router'
import HeaderSpace from "@/components/general/HeaderSpace.vue"
import FooterSpace from "@/components/general/FooterSpace.vue"

export default {
    name: "BakerLogin",
    components: {
        HeaderSpace,
        FooterSpace
    },
    methods: {
        async storeBaker(event) {
            const form = event.target;
            console.log(form)
            const formData = await new FormData(form);
            let baker={};
            for (const [name, value] of formData) {
                baker[name]=value;
            }
            /* for(let key in order){
                console.log({
                    key,
                    value: order[key],
                });
            } */
            console.log(baker);
            this.$store.dispatch("setBaker", baker);
            router.replace({name: "admin"})
        },
    },
}
</script>