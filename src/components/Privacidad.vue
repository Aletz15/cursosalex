<script setup lang="ts">
</script>

<template>
    <section class="privacidad">
        <div class="contenedor">
            <h1>Seguridad y privacidad</h1>
            <p class="privacidad-intro">En Cursos en línea cuidamos tu información. Aquí te explicamos qué datos pedimos, para qué los usamos y cómo los protegemos.</p>

            <!-- Fila 1: imagen a la izquierda, texto a la derecha -->
            <div class="privacidad-fila">
                <img class="privacidad-imagen" src="/recursos/privacidad1.jpg" alt="Persona usando una laptop de forma segura" />
                <div class="privacidad-texto">
                    <h2>Qué datos recopilamos</h2>
                    <p>Solo pedimos lo necesario para inscribirte y contactarte:</p>
                    <ul>
                        <li>Nombre completo</li>
                        <li>Correo electrónico</li>
                        <li>Teléfono</li>
                        <li>Ciudad</li>
                        <li>Curso en el que te interesa inscribirte</li>
                    </ul>
                </div>
            </div>

            <!-- Fila 2: texto a la izquierda, imagen a la derecha -->
            <div class="privacidad-fila privacidad-fila-inversa">
                <img class="privacidad-imagen" src="/recursos/privacidad2.jpg" alt="Estudiante tomando un curso en línea" />
                <div class="privacidad-texto">
                    <h2>Para qué usamos tus datos</h2>
                    <ul>
                        <li>Procesar tu inscripción al curso</li>
                        <li>Enviarte información de tu curso y de fechas importantes</li>
                        <li>Responder las dudas que nos mandes desde Contacto</li>
                    </ul>
                    <p class="privacidad-aviso">No vendemos ni compartimos tu información con otras empresas.</p>
                </div>
            </div>

            <h2>Cómo protegemos tu información</h2>
            <div class="privacidad-cajas">
                <div class="privacidad-caja">
                    <h3>Acceso limitado</h3>
                    <p>Solo el personal autorizado puede consultar tus datos.</p>
                </div>

                <div class="privacidad-caja">
                    <h3>Conexión segura</h3>
                    <p>El sitio usa HTTPS para que lo que escribes viaje cifrado.</p>
                </div>

                <div class="privacidad-caja">
                    <h3>Pagos protegidos</h3>
                    <p>Los pagos se hacen con servicios externos certificados, no guardamos datos de tarjetas.</p>
                </div>
            </div>

            <!-- Fila 3: imagen a la izquierda otra vez (cambia el src si agregas otra foto) -->
            <div class="privacidad-fila">
                <img class="privacidad-imagen" src="/recursos/privacidad3.jpg" alt="Persona revisando sus datos en una laptop" />
                <div class="privacidad-texto">
                    <h2>Tus derechos</h2>
                    <p>Tienes derecho a:</p>
                    <ol>
                        <li>Acceder a los datos que tenemos de ti</li>
                        <li>Corregirlos si están equivocados</li>
                        <li>Pedir que los eliminemos</li>
                        <li>Oponerte a que los usemos para ciertos fines</li>
                    </ol>
                    <p>Para ejercer cualquiera de ellos, escríbenos desde la página de <RouterLink to="/contacto">Contacto</RouterLink>.</p>
                </div>
            </div>

            <h2>Consejos de seguridad para ti</h2>
            <ul class="privacidad-consejos">
                <li>Usa contraseñas largas y diferentes en cada sitio</li>
                <li>No compartas tus datos por correo o mensajes que no esperabas</li>
                <li>Revisa que la dirección del sitio sea la correcta antes de escribir tus datos</li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.privacidad {
    padding: 50px 0;
}

.privacidad h1 {
    margin: 0 0 8px;
    font-size: 2.2rem;
}

.privacidad-intro {
    margin: 0 0 40px;
    font-size: 1.1rem;
}

.privacidad h2 {
    margin: 40px 0 12px;
    font-size: 1.5rem;
}

/* ===== Filas de imagen + texto =====
   La imagen va primero en el HTML; en la fila inversa se manda a la derecha con order */
.privacidad-fila {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    margin-bottom: 20px;
}

.privacidad-fila-inversa .privacidad-imagen {
    order: 2;
}

.privacidad-imagen {
    display: block;
    width: 100%;
    height: 320px;
    object-fit: cover;
    border-radius: var(--radio);
    border-bottom: 6px solid var(--acento);
}

.privacidad-texto h2 {
    margin-top: 0;
}

.privacidad-texto ul,
.privacidad-texto ol {
    padding-left: 22px;
}

.privacidad-texto li {
    margin-bottom: 6px;
}

.privacidad-aviso {
    padding: 12px 16px;
    font-weight: 600;
    color: var(--tinta);
    background: var(--blanco);
    border-left: 5px solid var(--acento);
    border-radius: 8px;
}

/* ===== Tarjetas de protección ===== */
.privacidad-cajas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
}

.privacidad-caja {
    padding: 20px;
    background: var(--blanco);
    border: 1px solid var(--borde);
    border-top: 5px solid var(--principal);
    border-radius: var(--radio);
    transition: transform 0.2s, box-shadow 0.2s;
}

.privacidad-caja:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(18, 38, 58, 0.12);
}

.privacidad-caja h3 {
    margin: 0 0 8px;
    font-size: 1.1rem;
}

.privacidad-caja p {
    margin: 0;
}

/* ===== Consejos ===== */
.privacidad-consejos {
    margin: 0;
    padding: 20px 20px 20px 44px;
    background: var(--blanco);
    border: 1px solid var(--borde);
    border-left: 5px solid var(--principal);
    border-radius: var(--radio);
}

.privacidad-consejos li {
    margin-bottom: 8px;
}

.privacidad-consejos li:last-child {
    margin-bottom: 0;
}

/* ===== Responsivo ===== */
@media (max-width: 768px) {
    .privacidad-fila {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    /* En celular la imagen siempre va arriba del texto */
    .privacidad-fila-inversa .privacidad-imagen {
        order: 0;
    }

    .privacidad-imagen {
        height: 220px;
    }
}
</style>