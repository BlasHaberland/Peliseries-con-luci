//1 repetir
//2 no repetir
//3 neutro

const peliseries = [
    {
        titulo: 'El eterno resplandor de una mente sin recuerdos',
        portada: 'https://lh6.googleusercontent.com/proxy/7T3A_0D-hnPyg3HdzeI8V9pv_SJ-UOKHCQuvm0--StSolMzaEw0rnbeKasrX8mYWPfeQk61neSwDUdU77xNdNppqh5Q0BtBJD2MAVVU18fgOLC6hHz24u9kICXId-HjjAj6j7SJQrEr8Z_eJCFFZUTlfsA-fKriRXMEG8SABGYdy_glQ2A',
        descripcion: 'Parecían la pareja ideal, su primer encuentro fue mágico, pero con el paso del tiempo ella deseó nunca haberlo conocido. Su anhelo se hace realidad gracias a un polémico y radical invento. Sin embargo descubrirán que el destino no se puede controlar.',
        categoria: 'pelicula',
        tema: ['romance', 'cienciaFiccion'],
        puntaje: 5,
        repetir: 1,
    },
    {
        titulo: 'Interestellar',
        portada: 'https://i.pinimg.com/originals/db/47/2a/db472aa15f455949e34117903c044d7b.jpg',
        descripcion: 'Un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí. La Tierra está llegando a su fin y este grupo necesita encontrar un planeta más allá de nuestra galaxia que garantice el futuro de la raza humana.',
        categoria: 'pelicula',
        tema: ['cienciaFiccion'],
        puntaje: 5,
        repetir: 1,
    },
    {
        titulo: 'Soul',
        portada: 'https://pics.filmaffinity.com/Soul-557797463-large.jpg',
        descripcion: 'Un profesor de música que ha perdido la pasión se transporta fuera de su cuerpo al "Gran Antes" y debe encontrar el camino de regreso con la ayuda de un alma infantil que aprende sobre sí misma.',
        categoria: 'pelicula',
        tema: ['animacion', 'fantasia'],
        puntaje: 4,
        repetir: 1,
    },
    {
        titulo: 'Wolfwalkers: Espiritu de lobo',
        portada: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjKmJn1eJIeUqzfr7jaMirMnlrSR8G1WJVQ&s',
        descripcion: 'En una época de superstición y magia, en la que los lobos son considerados criaturas malévolas, Robyn, una joven aprendiz de cazadora, llega a Irlanda con su padre para erradicar a la última manada. Sin embargo, se hace amiga de uno de ellos.',
        categoria: 'pelicula',
        tema: ['fantasia', 'animacion'],
        puntaje: 4,
        repetir: 1,
    },
    {
        titulo: 'La cancion del mar',
        portada: 'https://pics.filmaffinity.com/La_canciaon_del_mar-168321774-large.jpg',
        descripcion: 'Ben, Saoirse y su padre viven en un faro, en la parte alta de una pequeña isla. Para protegerlos de los peligros del mar, su padre los envía a vivir con su abuela a la ciudad. Allí, Ben descubre que su hermana pequeña es una "selkie", un hada del mar. Con la ayuda de sus poderes mágicos, Saoirse liberará a otras hadas del país del cautiverio.',
        categoria: 'pelicula',
        tema: ['fantasia', 'animacion'],
        puntaje: 4,
        repetir: 1,
    },

    {
        titulo: 'El señor de los anillos: El retorno del rey',
        portada: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVI94bswpyO_Zr7b0d3O8za_G7mpf3sKo4Q&s',
        descripcion: 'En la Tierra Media, el Señor Oscuro Sauron forjó los Grandes Anillos del Poder y creó uno con el poder de esclavizar a toda la Tierra Media. Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único con la misión de destruirlo. Acompañado de sus amigos, Frodo emprende un viaje hacia Mordor, el único lugar donde el anillo puede ser destruido. Sin embargo, Sauron ordena la persecución del grupo para recuperar el anillo y acabar con la Tierra Media.',
        categoria: 'pelicula',
        tema: ['fantasia'],
        puntaje: 5,
        repetir: 1,

    },

    {
        titulo: 'La tortuga roja',
        portada: 'https://pics.filmaffinity.com/La_tortuga_roja-816478706-large.jpg',
        descripcion: 'Atrapado en una isla desierta, rodeado de todo tipo de animales, un náufrago tiene que adaptarse a la vida en la naturaleza más pura y salvaje. Durante sus inútiles intentos por escapar, conoce a una misteriosa tortuga roja y, desde ese momento, su vida cambia para siempre.',
        categoria: 'pelicula',
        tema: ['animacion'],
        puntaje: 2,
        repetir: 2,
    },

    {
        titulo: 'El cuento de la princesa Kaguya',
        portada: 'https://lamanodelextranjero.com/wp-content/uploads/2016/04/poster-espaol-de-el-cuento-de-la-princesa-kaguya.jpg',
        descripcion: 'Encontrada dentro de un brillante tallo de bambú por un viejo cortador de bambú y su esposa, una niña diminuta se convierte rápidamente en una hermosa joven que cautiva a todos los que la conocen, pero debe enfrentar su destino.',
        categoria: 'pelicula',
        tema: ['animacion', 'fantasia'],
        puntaje: 3,
        repetir: 3,
    },

    {
        titulo: 'El recuerdo de Marnie',
        portada: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrrm4T9TPoyG_P8-clTOPlnjVUQrRGwn6ezRi4boZhr6LGhG9S-fEcDx-9f3CjGD9cmA&usqp=CAU',
        descripcion: 'Anna es una niña solitaria de 12 años que vive con sus padres adoptivos. Un verano, mientras está en Hokkaido, Anna explora una villa abandonada, donde conoce a una misteriosa chica rubia a la que solamente ella puede ver.',
        categoria: 'pelicula',
        tema: ['animacion', 'fantasia'],
        puntaje: 4,
        repetir: 1,
    },

    {
        titulo: 'Arrietty y el mundo de los diminutos',
        portada: 'https://pics.filmaffinity.com/karigurashi_no_arietti-356171620-large.jpg',
        descripcion: 'Arrietty, una pequeña joven, vive con sus padres en una casa de los suburbios, a escondidas del dueño y la ama de casa. Como otros de su especie, Arrietty se mantiene oculta de sus anfitriones humanos, pero ocasionalmente se aventura más allá de los pisos en busca de azúcar y otros suministros. Una amistad secreta se forma cuando Shawn, de 12 años, conoce a Arrietty, pero su relación podría ser peligrosa para la familia de Arrietty.',
        categoria: 'pelicula',
        tema: ['animacion', 'fantasia'],
        puntaje: 2,
        repetir: 2,
    },
    {
        titulo: 'El niño y la garza',
        portada: 'https://pics.filmaffinity.com/El_chico_y_la_garza-226243829-large.jpg',
        descripcion: 'Mahito, un joven de 12 años, lucha por asentarse en una nueva ciudad tras la muerte de su madre. Sin embargo, cuando una garza parlante informa a Mahito de que su madre sigue viva, entra en una torre abandonada en su busca, lo que le lleva a otro mundo.',
        categoria: 'pelicula',
        tema: ['animacion', 'fantasia'],
        puntaje: 2,
        repetir: 2,
    },

    {
        titulo: 'Seven',
        portada: 'https://pics.filmaffinity.com/seven_se7en-498520078-large.jpg',
        descripcion: 'El veterano teniente Somerset está a punto de jubilarse y ser reemplazado por el impulsivo detective David Mills. Ambos tendrán que colaborar en la resolución de unos asesinatos cometidos por un psicópata que se basa en los siete pecados capitales.',
        categoria: 'pelicula',
        tema: ['terror'],
        puntaje: 4,
        repetir: 1,
    },
    {
        titulo: 'La tumba de las luciernagas',
        portada: 'https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/60/08/31/19079741.jpg',
        descripcion: 'En Japón, en 1945, durante un ataque aéreo americano en la ciudad de Kobe, el joven Seita y su pequeña hermana Setsuko, hijos de un oficial de la marina japonesa, no consiguen llegar a tiempo al refugio en el que su madre los espera. Después del bombardeo los dos hermanos buscan a su madre, y Seita la encuentra muy malherida en la escuela que ha sido convertida en un hospital. Poco después la madre muere y, tras una breve estancia en casa de su tía, ambos vagarán sin casa y sin rumbo.',
        categoria: 'pelicula',
        tema: ['animacion'],
        puntaje: 3,
        repetir: 2,
    },

    {
        titulo: 'Cuestion de tiempo',
        portada: 'https://www.aceprensa.com/wp-content/uploads/2013/09/122906-0.jpg',
        descripcion: 'Cuando Tim Lake cumple 21 años, su padre le dice un secreto: los hombres de su familia pueden viajar por el tiempo. A pesar de que él no puede cambiar la historia, Tim decide mejorar su vida buscando una novia. Él conoce a Mary, se enamora y finalmente se gana su corazón con los viajes en el tiempo y un poco de astucia. Sin embargo, mientras su inusual vida progresa, Tim descubre que su habilidad especial no puede protegerlos de los problemas diarios de la vida.',
        categoria: 'pelicula',
        tema: ['romance'],
        puntaje: 4,
        repetir: 1,
    },

    {
        titulo: 'De amor y otras adicciones',
        portada: 'https://m.media-amazon.com/images/S/pv-target-images/b6ca1189bbea98556051967164a23c3715264a4d400100f9af3aff0555204304.jpg',
        descripcion: 'Maggie es una mujer independiente que ha decidido vivir sin ataduras. Pero conoce a Jamie, un joven cuyo irresistible encanto funciona no sólo con las mujeres, sino también dentro del mundo de las ventas farmacéuticas.',
        categoria: 'pelicula',
        tema: ['romance'],
        puntaje: 2,
        repetir: 2,
    },

    {
        titulo: '500 dias con ella',
        portada: 'https://m.media-amazon.com/images/S/pv-target-images/9b9915ea71150b667f96f0aa7305c7e0a164ea98d91c20ea66c9766d47623bd2.jpg',
        descripcion: 'Tom, un escritor de tarjetas de felicitación y un romántico desesperado, se sorprende totalmente cuando su novia, Summer, repentinamente lo abandona. Él analiza los 500 días que pasaron juntos para intentar descubrir en que parte falló su relación amorosa y en el proceso, Tom redescubre sus verdaderas pasiones en la vida.',
        categoria: 'pelicula',
        tema: ['romance'],
        puntaje: 3,
        repetir: 3,
    },

    {
        titulo: 'Batman inicia',
        portada: 'https://es.web.img2.acsta.net/pictures/14/03/05/11/10/247578.jpg',
        descripcion: 'Bruce Wayne vive obsesionado con el recuerdo de la muerte de sus padres. Atormentado, se va de Gotham y encuentra a un extraño personaje que lo entrena en todas las disciplinas físicas y mentales que le servirán para combatir el Mal.',
        categoria: 'pelicula',
        tema: ['accion'],
        puntaje: 4,
        repetir: 1,
    },

    {
        titulo: 'El Joker',
        portada: 'https://hips.hearstapps.com/hmg-prod/images/joker-poster-imax-1568799403.jpg',
        descripcion: 'Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.',
        categoria: 'pelicula',
        tema: ['drama', 'suspenso'],
        puntaje:5,
        repetir:1,
    },

];

//CUERPO
/*

{
titulo:'',
portada:'',
descripcion:''.
categoria:'',
tema: ['',''],
puntaje:,
repetir:,
},

*/