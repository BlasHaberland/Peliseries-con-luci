// Variables
const container = document.getElementById('container')

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarPeliseries();
})

//Funciones
function mostrarPeliseries() {
    peliseries.forEach((peliserie, index) => {

        // Crea el elemento card
        const card = document.createElement('div');
        card.classList.add('card'); // Agrega la clase 'card'
        card.classList.add('text-bg-light');
        card.style.width = '18rem';

        // Crea el elemento de la imagen
        const img = document.createElement('img');
        img.src = peliserie.portada;
        img.classList.add('card-img-top');
        img.alt = peliserie.titulo;

        // Crea el cuerpo de la card
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Título de la card
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = peliserie.titulo;

        // Descripción de la card
        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = peliserie.descripcion;

        // Categoria (pelicula o serie)
        const categoria = document.createElement('p');
        categoria.classList.add('categoria');
        categoria.textContent = `Categoria: ${peliserie.categoria}`;

        // Crear el puntaje de la película
        const score = document.createElement('p');
        score.classList.add('card-score');
        score.textContent = `Puntaje: ${peliserie.puntaje}/5`;

        // Crear botón "Volver a ver"
        const volverVerButton = document.createElement('a');
        volverVerButton.href = '#';
        volverVerButton.classList.add('btn', 'btn-success'); // Cambié la clase para darle estilo
        volverVerButton.textContent = 'Volver a ver';

        // Evento para cambiar el valor de "repetir" y agregar clase "text-bg-success"
        volverVerButton.addEventListener('click', () => {
            // Cambiar el valor de "repetir" en la base de datos
            peliseries[index].repetir = 1;

            // Agregar clase "text-bg-success" a la card
            card.classList.remove('text-bg-light');
            card.classList.add('text-bg-success');

            volverVerButton.style.display = 'none';
            noVolverVerButton.style.display = 'inline-block';
        });

        // Crear botón "No volver a ver"
        const noVolverVerButton = document.createElement('a');
        noVolverVerButton.href = '#';
        noVolverVerButton.classList.add('btn', 'btn-danger'); // Cambié la clase para darle estilo
        noVolverVerButton.textContent = 'No volver a ver';
        noVolverVerButton.style.display = 'none'

        noVolverVerButton.addEventListener('click', () => {
            // Cambiar el valor de "repetir" en la base de datos
            peliseries[index].repetir = 0;

            // Quitar la clase "text-bg-success" de la card
            card.classList.remove('text-bg-success');
            card.classList.add('text-bg-light');

            noVolverVerButton.style.display = 'none';
            volverVerButton.style.display = 'inline-block';
        });

        if (peliserie.repetir === 1) {
            card.classList.remove('text-bg-light');
            card.classList.add('text-bg-success'); // Agregar clase si repetir es 1
            volverVerButton.style.display = 'none'; // Ocultar botón "Volver a ver"
            noVolverVerButton.style.display = 'inline-block'; // Mostrar botón "No volver a ver"
        }


        // Agrega todos los elementos al cuerpo de la card
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(categoria)
        cardBody.appendChild(score);
        cardBody.appendChild(volverVerButton);
        cardBody.appendChild(noVolverVerButton);

        // Agrega la imagen y el cuerpo de la card al contenedor de la card
        card.appendChild(img);
        card.appendChild(cardBody);

        // Agrega la card al contenedor principal
        container.appendChild(card);

    });
}