<script setup lang="ts">
import {ref} from 'vue'
//eventos q el hijoles le puede mandar al padre
const emit = defineEmits<{
    (e: 'inscribir', cursoId: number): void
}>()

//Props que recibe el padre 
const props = defineProps({
    // required true, dice a vue y ts que el id SIEMPRE LLEGA
        id:{ 
            type: Number,
            required: true
        },
        titulo: String,
        categoria: String,
        descripcion: String,
        duracion: String,
        nivel: String,
        precio: Number,
        imagen: String,
        certificacion: String,
        masDemandado: Boolean,
        idVideo: String
    })
//true muestra y false oculta
const mostrarVideo = ref(false)
</script>

<template>
    <div class="curso-card">
        <img class="curso-card-imagen" :src="props.imagen" :alt="props.titulo" />

        <div class="curso-card-contenido">
            <span v-if="props.masDemandado" class="curso-card-badge">Más demandado</span>

            <h3>{{ props.titulo }}</h3>
            <p class="curso-categoria">{{ props.categoria }}</p>
            <p>{{ props.descripcion}}</p>

            <ul class="curso-datos">
                <li>Duracion: {{ props.duracion }}</li>
                <li>Nivel: {{ props.nivel }}</li>
                <li>Certificacion: {{ props.certificacion }}</li>
            </ul>
            <!-- Botono si tiene idVideo-->
             <button v-if="props.idVideo" type="button" class="boton boton-secundario boton-video" @click="mostrarVideo = !mostrarVideo"> {{mostrarVideo ? 'Ocultar video' : 'Ver video'}} </button>

             <!-- video solo carga si se da click en el boton-->
              <Transition name="desplegar">
                <div v-if="props.idVideo && mostrarVideo" class="curso-video">
                    <iframe :src="`https://www.youtube.com/embed/${props.idVideo}`" :title="props.titulo" allowfullscreen></iframe>
                </div>
              </Transition>

            <div class="curso-precio-pie">
                <strong class="curso-precio">Precio: ${{ props.precio }} MXN</strong>
                <!-- para que funcione el boton props.id inscribirme -->
                <button class="boton boton-principal" @click="emit('inscribir', props.id)"> Inscribirme
                </button>
            </div>
        </div>
    </div>
</template>