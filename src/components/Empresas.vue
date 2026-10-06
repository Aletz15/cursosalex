<script setup lang="ts">
import {ref} from 'vue'
import empresas, {sectores} from '../data/empresas.ts'

const sectorElegido = ref('')

const empresasFiltradas = () => {
    if(sectorElegido.value === ''){
        return empresas
    }
    return empresas.filter(empresa => empresa.sector === sectorElegido.value)
}
</script>

<template>
    <section class="empresas">
        <div class="contenedor">
            <h1>Empresas afiliadas</h1>
             <p>Trabajamos con empresas que reconocen nuestros cursos y abren sus puertas a nuestros alumnos y egresados.</p>

            <!-- V-model para filtrar el select sectorelegido-->
             <div class="empresas-filtro">
                <label for="sector">Filtrar por sector:</label>
                <select id="sector" v-model="sectorElegido">
                    <option value="">Todos</option>
                    <option v-for="sector in sectores" :key="sector" :value="sector">{{ sector }}</option>
                </select>
             </div>

             <!-- Lista de empresas-->
            <div class="empresas-lista">
                <article v-for="empresa in empresasFiltradas()" :key="empresa.id" class="empresa-card">
                    <img class="empresa-imagen" :src="empresa.imagen" :alt="empresa.nombre" />

                <h3>{{ empresa.nombre }}</h3>
                <span class="empresa-sector">{{ empresa.sector }}</span>
                <p>{{ empresa.descripcion }}</p>

                <ul class="curso-datos">
                    <li>Ubicacion: {{ empresa.ciudad }}</li>
                    <li>Beneficio: {{ empresa.beneficio }}</li>
                </ul>
              </article>
            </div>

             <!-- no se rompa el filtro si nada-->
              <p v-if="empresasFiltradas().length === 0" class="empresas-vacio">
                No hay empresas en este sector por ahora.
              </p>
        </div>
    </section>
</template>

