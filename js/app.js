// VARIABLES
const container = document.getElementById('container');

const categoria = document.getElementById('categoria');
const tema = document.getElementById('tema');
const puntaje = document.getElementById('puntaje');
const repetir = document.getElementById('repetir');

const busqueda = {
    titulo: '',
    portada: '',
    descripcion: '',
    categoria: '',
    tema: '',
    puntaje: '',
    repetir: ''
}

// EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    mostrarPeliseries(peliseries);
})

categoria.addEventListener('change', e => {
    busqueda.categoria = e.target.value;
    filtrarPeliserie();
})
tema.addEventListener('change', e => {
    busqueda.tema = e.target.value;
    filtrarPeliserie();
})
puntaje.addEventListener('change', e => {
    busqueda.puntaje = parseInt(e.target.value);
    filtrarPeliserie();
})
repetir.addEventListener('change', e => {
    busqueda.repetir = parseInt(e.target.value);
    console.log(busqueda)
    filtrarPeliserie();
})

// FUNCIONES
function mostrarPeliseries(peliseries) {
    container.innerHTML = '';

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

        // Temas
        const temas = document.createElement('p');
        temas.classList.add('tema')
        temas.textContent = `Temas: ${peliserie.tema}`;

        // Crear el puntaje de la película
        const score = document.createElement('p');
        score.classList.add('card-score');
        score.textContent = `Puntaje: ${peliserie.puntaje}/5`;


        if (peliserie.repetir === 1) {
            card.classList.remove('text-bg-light');
            card.classList.add('text-bg-success'); // Agregar clase si repetir es 1
        }

        if (peliserie.repetir === 2) {
            card.classList.remove('text-bg-light');
            card.classList.add('text-bg-danger'); // Agregar clase si repetir es 1
        }

        if (peliserie.repetir === '') {
            card.classList.remove('text-bg-light');
            card.classList.add('text-bg-light'); // Agregar clase si repetir es 1
        }


        // Agrega todos los elementos al cuerpo de la card
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(categoria)
        cardBody.appendChild(temas);
        cardBody.appendChild(score);

        // Agrega la imagen y el cuerpo de la card al contenedor de la card
        card.appendChild(img);
        card.appendChild(cardBody);

        // Agrega la card al contenedor principal
        container.appendChild(card);

    });
}

function filtrarPeliserie() {
    const resultado = peliseries.filter(filtrarCategoria).filter(filtrarTema).filter(filtrarPuntaje).filter(filtrarRepetir)
    console.log(resultado);
    mostrarPeliseries(resultado);
}

function filtrarCategoria(peliserie) {
    if (busqueda.categoria) {
        return peliserie.categoria === busqueda.categoria;
    }
    return peliserie;
}

function filtrarTema(peliserie) {
    if (busqueda.tema) {
        return peliserie.tema.includes(busqueda.tema);
    }
    return peliserie;
}

function filtrarPuntaje(peliserie) {
    if (busqueda.puntaje) {
        return peliserie.puntaje === busqueda.puntaje;
    }
    return peliserie;
}

function filtrarRepetir(peliserie) {
    if (busqueda.repetir) {
        return peliserie.repetir === busqueda.repetir;
    }
    return peliserie;
}

