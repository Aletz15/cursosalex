<script setup lang="ts">
import cursos, { getCursosDemandados } from '../data/cursos'
import {ref} from 'vue'
import CursoCard from './CursoCard.vue'
import {useRouter} from 'vue-router'

const router = useRouter()

//Los demandados
const demandados = getCursosDemandados()
//Los no demandados
const noDemandados = cursos.filter(curso => !curso.masDemandado)
const verMas = ref(false)

//El hijo CursoCard nos avisa con el id del curso
function inscribirCurso(cursoId: number) {
    router.push({name: 'Inscripciones', params: {id: cursoId}})
    console.log('Quiero inscribirme al curso', cursoId)
    }

</script>

<template>
    <section class="cursos">
        <div class="contenedor">
            <h1>Nuestros Cursos</h1>
            <p>Elige el curso que mas te interese y da el primer paso para certificarte.</p>

            <h2>Los mas demandados</h2>
            <div class="cursos-lista">
                <CursoCard
                v-for="curso in demandados" 
                :key="curso.id" v-bind="curso" @inscribir="inscribirCurso"
                />
            </div>
<!--                                              -->
            <h2> Mas cursos</h2>

            <!-- Transition le agrega la animación al aparecer y desaparecer el bloque -->
      <Transition name="desplegar">
        <div v-if="verMas" class="cursos-lista cursos-extra">
          <CursoCard
            v-for="curso in noDemandados"
            :key="curso.id"
            v-bind="curso"
            @inscribir="inscribirCurso"
          />
        </div>
      </Transition>
 
      <div class="cursos-boton">
        <button class="boton boton-secundario" @click="verMas = !verMas">
          {{ verMas ? 'Ver menos' : 'Ver más cursos' }}
        </button>
      </div>

    </div>
  </section>
</template>
