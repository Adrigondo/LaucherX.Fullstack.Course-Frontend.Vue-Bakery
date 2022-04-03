<template>
    <header-space
        button_info="Volver al menú"
        destiny=""
    />
    <div class="content container">
        <form action="">
            <h2>Ordena tu pastel!</h2>

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
import HeaderSpace from '@/components/general/HeaderSpace.vue'
import FooterSpace from '@/components/general/FooterSpace.vue'

export default {
  name: 'OrderCompleteView',
  components: {
    HeaderSpace,
    FooterSpace,
  }
}
</script>

<style>

</style>