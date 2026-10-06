<script setup lang="ts">
import {ref, reactive} from 'vue'

//datos del mensaje
const mensaje = reactive({
    nombre: '',
    correo: '',
    asunto: '',
    texto: '',
})

const enviado = ref(false)

//Boton simula el envio del formulario
function enviarFormulario(){
    console.log('Mensaje enviado', {...mensaje})
    enviado.value = true
}

</script>

<template>
    <section class="contacto">
        <div class="contenedor">
            <h1>Contacto</h1>
            <p>¿Tienes dudas sobre algun curso? Escribenos y te responderemos lo antes posible.</p>

            <!-- Datos del contacto -->
            <div class="contacto-info">
                <h2>Datos de contacto</h2>
                <ul>
                    <li>Correo: info@cursosenlinea.com</li>
                    <li>Teléfono: +52 999 534 5337</li>
                    <li>Horario: Lunes a viernes, 9:00 AM - 5:00 PM</li>
                </ul>
                <p> Tambien puedes revisar <RouterLink to="/cursos">nuestros cursos</RouterLink></p>
            </div>

            <!-- Formulario de contacto -->
             <form v-if="!enviado" class="formulario" @submit.prevent="enviarFormulario">
             <h2>Envianos un mensaje</h2>

             <div class="formulario-campo">
                <label for="nombre">Nombre completo</label>
                <input id="nombre" type="text" v-model="mensaje.nombre" required />
             </div>

             <div class="formulario-campo">
                <label for="correo">Correo electrónico</label>
                <input id="correo" type="email" v-model="mensaje.correo" required />
             </div>

            <!-- opciones sin value, lo toma como dato los option muy chido-->
             <div class="formulario-campo">
                <label for="asunto">Asunto</label>
                <select id="asunto" v-model="mensaje.asunto" required>
                    <option>Informacion de cursos</option>
                    <option>Inscripciones</option>
                    <option>Certificaciones</option>
                    <option>Otros</option>
                </select>
             </div>

             <div class="formulario-campo">
                <label for="texto">Mensaje</label>
                <textarea id="texto" rows="5" v-model="mensaje.texto" required></textarea>
             </div>

             <div class="formulario-botones">
                <button type="submit" class="boton boton-principal">Enviar mensaje</button>
             </div>
            </form>


            <!-- Mensaje de exito despues de enviar el formulario -->
             <div v-else class="mensaje-exito">
                <h2>¡Mensaje enviado!</h2>
                <p>Hemos recibido tu mensaje {{mensaje.nombre}} y nos pondremos en contacto contigo en {{mensaje.correo}} lo antes posible.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contacto {
    padding: 50px 0;
}

.contacto h1 {
    margin: 0 0 8px;
    font-size: 2.2rem;
}

.contacto h2 {
    margin: 0 0 12px;
    font-size: 1.4rem;
}

/* Cuadro con los datos de contacto */
.contacto-info {
    margin: 28px 0;
    padding: 24px;
    background: var(--blanco);
    border: 1px solid var(--borde);
    border-left: 5px solid var(--principal);
    border-radius: var(--radio);
}

.contacto-info ul {
    padding-left: 20px;
}

/* El formulario no se estira demasiado en pantallas grandes */
.formulario,
.mensaje-exito {
    max-width: 700px;
    padding: 24px;
    background: var(--blanco);
    border: 1px solid var(--borde);
    border-radius: var(--radio);
}

.formulario-campo {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 16px;
}

.formulario-campo label {
    font-weight: 600;
    color: var(--tinta);
}

.formulario-campo input,
.formulario-campo select,
.formulario-campo textarea {
    padding: 10px 12px;
    font-family: inherit;
    font-size: 1rem;
    border: 1px solid var(--borde);
    border-radius: 8px;
}

/* Solo se puede cambiar el alto del mensaje */
.formulario-campo textarea {
    resize: vertical;
}

/* Se resalta el campo que se está escribiendo */
.formulario-campo input:focus,
.formulario-campo select:focus,
.formulario-campo textarea:focus {
    outline: 2px solid var(--principal);
    border-color: var(--principal);
}

.formulario-botones {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.mensaje-exito h2 {
    margin-top: 0;
    color: var(--principal);
}
</style>