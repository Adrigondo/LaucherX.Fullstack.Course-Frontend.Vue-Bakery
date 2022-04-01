<template>
    <header-space
        button_info="Volver al menú"
        destiny=""
    />
    <div class="content container">
        <form action="">
            <h2>Ordena tu pastel!</h2>
            
            <section class="form-group">
                <p>Rellene sus datos por favor: <span class="badge bg-primary">Obligatorio</span> </p>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" placeholder="Nombre y apellido" id="name" name="name" required>
                    <label for="name">Nombre y apellido</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="phone" class="form-control" placeholder="Nombre y apellido" id="phone" name="phone" required>
                    <label for="phone">No. de telefono</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" placeholder="Nombre y apellido" id="email" name="email" required>
                    <label for="email">Correo electronico</label>
                </div>  
            </section>

            <cake-selection/>
            <flavor-selection/>
            <decorations-selection/>

            <div class="form-group">
                <p>Escriba descripción o especificaciones para el pastel, el sabor, y los adornos <span class="badge bg-secondary">Opcional</span> </p>
                <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="Especificaciones" id="cake_description"></textarea>
                    <label for="cake_description">Especificaciones</label>
                </div>
            </div>

            <div class="d-grid gap-1">
                <button type="submit" class="button-primary btn btn-lg">¡Completar pedido!</button>
            </div>
        </form>
    </div>
    <footer-space msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import HeaderSpace from '@/components/HeaderSpace.vue'
import FooterSpace from '@/components/FooterSpace.vue'
import CakeSelection from '@/components/CakeSelection.vue'
import FlavorSelection from '@/components/FlavorSelection.vue'
import DecorationsSelection from '@/components/DecorationsSelection.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderSpace,
    FooterSpace,
    CakeSelection,
    FlavorSelection,
    DecorationsSelection
    // CakeList,
    // FlavorsList,
    // DecorationsList
  }
}
</script>

<style>
    .btn img{
        margin-right: 10px;
    }
    .btn-group{
        width: 100%;
    }
    @media (max-width: 768px) {
        .btn-group{
            display: flex;
            flex-wrap: wrap;
        }
        .btn-group>.btn{
            border-radius: 0.25rem!important;
            margin: 0.2rem!important;
        }
    }
    .btn-outline-primary{
        color: #d10050;
    }
    .btn-check:checked:hover +.btn-outline-primary{
        /* background: #ffe9ea;
        border-color: #ff8288; */
        color: #ffffff;
    }
    .btn-check:hover+.btn-outline-primary{
        background: #ffe9ea;
        border-color: #ff8288;
        color: #d10050;
    }
    .btn-check+.btn-outline-primary{
        border-color: #d10050;
    }
    .btn-check:checked+.btn-outline-primary{
        background: #ff8288;
        border-color: #ff8288;
    }
    .btn-check:focus+.btn-outline-primary,
    .btn-group>.btn:focus{
        box-shadow: 0 0 0 0.25rem rgb(255 130 136 / 50%);
    }
    .badge{
        font-weight: 500;
    }
    h2, section{
        margin-bottom: 2rem;
    }
</style>