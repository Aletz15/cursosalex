<script setup lang="ts">
import { ref } from 'vue'

interface Enlace {
  texto: string;
  ruta: string;
}

// Cada ruta tiene que estar en router/index.ts
const enlaces: Enlace[] = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Cursos', ruta: '/cursos' },
  { texto: 'Contacto', ruta: '/contacto' },
]

const menuAbierto = ref(false) 
const showMas = ref(false) 

const cerrarMenu = () => {
  menuAbierto.value = false
  showMas.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="contenedor navbar-contenido">
      <RouterLink to="/" class="logo">Cursos en linea</RouterLink>

      <button class="boton-menu" aria-label="Abrir menú" @click="menuAbierto = !menuAbierto">
        ☰
      </button>

      <nav class="navbar-enlaces" :class="{ abierto: menuAbierto }">
        <ul>
          <!-- Enlaces principales salen del arreglo con v-for -->
          <li v-for="enlace in enlaces" :key="enlace.ruta">
            <RouterLink :to="enlace.ruta" @click="cerrarMenu">{{ enlace.texto }}</RouterLink>
          </li>

          <!-- Menu como el profe usando ref + mouseenter/mouseleave + v-if -->
          <li
            class="dropdown"
            @mouseenter="showMas = true"
            @mouseleave="showMas = false"
          >
            <span class="menu-title" @click="showMas = !showMas">Más información</span>
            <div v-if="showMas" class="dropdown-content">
              <RouterLink to="/certificaciones" @click="cerrarMenu">Certificaciones</RouterLink>
              
              <RouterLink to="/empresas" @click="cerrarMenu">Empresas afiliadas</RouterLink>
              <RouterLink to="/casos" @click="cerrarMenu">Casos de éxito</RouterLink>
              <RouterLink to="/material" @click="cerrarMenu">Material de apoyo</RouterLink>
              <RouterLink to="/privacidad" @click="cerrarMenu">Seguridad y privacidad</RouterLink>
            </div>
          </li>
        </ul>

        <RouterLink to="/inscripciones" class="boton boton-principal" @click="cerrarMenu"> Inscripciones</RouterLink>
      </nav>
    </div>
  </header>
</template>
