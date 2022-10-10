<h1 align="center">
  <img title="Firebase" src="https://brandslogos.com/wp-content/uploads/images/large/firebase-logo.png" alt="Firebase Logo" width="80" />
  <img title="Netflix" src="https://fhsknightlife.com/wp-content/uploads/2020/04/uVASXqvMzyUrAPfSn9pMtxOC7s89ulzdDKBdtqCP.png" alt="NETFLIX Logo" width="400" />
  <img title="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="Typescript Logo" width="100" />
  <br>
  Clon de Netflix creado con React.JS & Typescript
</h1>

<p><font size="3">
  Este es un clon del sitio web de Netflix construido usando <strong><em>React.JS & Typescript</em></strong> No es una réplica y no tiene todas las características del sitio web de Netflix. es una versión similar de Netflix con mi propio toque de diseño, mostrando mis habilidades en React.JS para construir una web avanzada como Netflix. Contiene la página de inicio, la página de inicio de sesión, la página de registro, la página de exploración, además del reproductor de películas y series.
  <br><br> 
  <strong><em>Echa un vistazo a la versión usable aquí:</em></strong> https://peliculastrailers.netlify.app :octocat: :heart_eyes:
</p>

## Tabla de contenidos

- [Recorrido del proyecto](#Recorrido-del-proyecto)
  - [Página de inicio](#Página-de-inicio)
  - [Página de navegación](#Página-de-navegación)
- [Demo en vivo](#Demo-en-vivo)
- [Tecnologías utilizadas](#Tecnologías-utilizadas)

# Recorrido del proyecto

# Página de inicio

<div align="center"><a name="menu"></a>

![ScreenShot](/public/images/readme/21.png)
![ScreenShot](/public/images/readme/22.png)
![ScreenShot](/public/images/readme/23.png)
![ScreenShot](/public/images/readme/24.png)
![ScreenShot](/public/images/readme/25.png)
![ScreenShot](/public/images/readme/26.png)

</div>

La página de inicio consta de 5 secciones principales:

**_1) Header, que incluye:_**

- Logo Netflix:
  Te redirige a la página de inicio cuando haces clic en él.

- Título y subtítulo de la función:
  Muestra las frases principales del sitio web.

**_2) Jumbotron:_**
Esta sección contiene algunas imágenes y párrafos al lado que muestran las ventajas de Netflix. Los datos de este Jumbotron provienen del archivo jumbo.json.

**_3) Preguntas Frecuentes:_**
Esta sección contiene las preguntas frecuentes en forma de acordeón, cuando hace clic en cualquier parte del área gris de la pregunta, la respuesta aparece debajo y luego puede cerrar la respuesta haciendo clic nuevamente en la misma área gris de la pregunta. Los datos de estas preguntas frecuentes provienen del archivo faqs.json.

**_4) Footer:_**
Contiene enlaces útiles que los usuarios pueden necesitar.

**_### La página responde completamente a todos los dispositivos móviles, incluso a los más pequeños.. ###_**

# Página de navegación

<div align="center"><a name="menu"></a>

![ScreenShot](/public/images/readme/31.png)
![ScreenShot](/public/images/readme/32.png)
![ScreenShot](/public/images/readme/33.png)
![ScreenShot](/public/images/readme/34.png)

</div>

La página de navegación consta de 5 secciones principales:

**_1) Header, que incluye:_**

- Logo:
  le redirige a la página de inicio cada vez que hace clic en él.

- Categorías de enlaces:
  Muestra las películas de una categoría específica cuando hace clic en ella, por ejemplo, si hace clic en el enlace de películas, estará activo y la página de exploración mostrará solo las películas. Y si hace clic en el enlace de la serie, estará activo y la página de exploración mostrará solo la serie.

- Título y descripción de la película:
  Muestra el título y la descripción de la película presentada.

- Botón de Trailer:
  muestra el reproductor de video para reproducir el trailer de la película.

**_2) Diapositivas de Películas :_**
Es una diapositiva que muestra las películas según su género. Los géneros y toda la información de la película se recuperaron una la base de datos de Firebase.

**_3) Tarjeta de la película:_**
Es una imagen que representa la película, cuando pasas el cursor sobre ella se hace más grande y mostrará su función de tarjeta si haces clic en ella.

**_4) Característica de la tarjeta:_**
es otra sección que aparece debajo de la diapositiva de la película si hace clic en cualquier tarjeta de película, contiene más información sobre la película, como el título, la descripción, un fondo especial que representa la película y el botón de reproducción. cuando hace clic en el botón de reproducción, muestra el reproductor de video para reproducir la película. y puede cerrar la función de la tarjeta haciendo clic en el icono de cerrar en la esquina superior derecha de la función de la tarjeta.

**_5) Reproductor de video:_**
es un reproductor de video que tiene controles completos, aparece en el medio de la pantalla cuando hace clic en cualquier botón de reproducción, y debe hacer clic en el ícono de reproducción en el reproductor de video después de que aparezca porque no tiene una opción de reproducción automática corrientemente.
Y cuando aparece el reproductor de video, toda la pantalla se convierte en una superposición, y solo aparece el video en el medio, y cuando se desplaza hacia arriba y hacia abajo, el reproductor de video se mueve con usted.
El reproductor de video debe mostrar el video de esta película en la que hizo clic, pero para el propósito de este proyecto, muestra solo un video como muestra para todas las películas.

Puede cerrar el reproductor de video en cualquier momento haciendo clic en cualquier otro lugar de la pantalla.

<div align="center"><a name="menu"></a>

![ScreenShot](/public/images/readme/14.jpg)

</div>

**_6) Footer:_**
Contiene enlaces útiles que los usuarios pueden necesitar.

**_### La página responde completamente a todos los dispositivos móviles, incluso a los más pequeños. ###_**

# Demo en vivo

**_Echa un vistazo a la versión en vivo aquí:_** https://peliculastrailers.netlify.app :octocat: :heart_eyes:

# Tecnologías utilizadas

He construido este proyecto utilizando las siguientes tecnologías y herramientas:

- React.JS
- Typescript.
- Styled-Components.
- React Router.
- React Hooks.
- Compound Components.

- [Tabla-de-contenidos](##Tabla-de-contenidos)
