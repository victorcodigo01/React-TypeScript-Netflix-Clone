export function seedDatabase(firebase) {
  function getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
  }

  /* Series
    ============================================ */
  // Documentaries
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Tiger King",
    description:
      "Una exploración de la cría de grandes felinos y su extraño submundo, poblado por personajes excéntricos.",
    genre: "Documentales",
    maturity: "18",
    slug: "tiger-king",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Amanda Knox",
    description:
      "Amanda Marie Knox es una mujer estadounidense que pasó casi cuatro años en una prisión italiana.",
    genre: "Documentales",
    maturity: "12",
    slug: "amanda-knox",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Citizenfour",
    description:
      "Citizenfour es una película documental de 2014 dirigida por Laura Poitras, sobre Edward Snowden y el escándalo de espionaje de la NSA.",
    genre: "Documentales",
    maturity: "12",
    slug: "citizenfour",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Super Size Me",
    description:
      "El experimento social del director Morgan Spurlock en la gastronomía de comida rápida lo ve tratando de subsistir únicamente con comida de McDonalds.",
    genre: "Documentales",
    maturity: "12",
    slug: "super-size-me",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Man on Wire",
    description:
      "El cineasta James Marsh recrea magistralmente la acrobacia de 1974 del temerario Philippe Petit caminando sobre un cable a través de las Torres Gemelas.",
    genre: "Documentales",
    maturity: "12",
    slug: "man-on-wire",
  });

  // Comedies
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "The Office",
    description:
      "Un variopinto grupo de oficinistas atraviesa divertidas desventuras en la sucursal de Scranton, Pensilvania, de Dunder Mifflin Paper Company.",
    genre: "Comedia",
    maturity: "15",
    slug: "the-office",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Arrested Development",
    description:
      "La familia Bluth, que alguna vez fue un nombre prominente en el negocio, lo pierde todo después de que el patriarca principal es condenado por fraude.",
    genre: "Comedia",
    maturity: "15",
    slug: "arrested-development",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Controla tu entusiasmo",
    description:
      "Larry David, un famoso escritor y productor de televisión, se ve envuelto en varias desventuras con sus amigos y colegas famosos en Los Ángeles.",
    genre: "Comedia",
    maturity: "15",
    slug: "curb-your-enthusiasm",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Padre de familia",
    description:
      "Peter Griffin y su familia de dos adolescentes, un perro inteligente, un bebé diabólico y su esposa se encuentran en algunos de los escenarios más divertidos.",
    genre: "Comedia",
    maturity: "15",
    slug: "family-guy",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "South Park",
    description:
      "Cuatro jóvenes en edad escolar, Stan Marsh, Kyle Broflovski, Eric Cartman y Kenny McCormick, que viven en South Park, emprenden varias aventuras.",
    genre: "Comedia",
    maturity: "15",
    slug: "south-park",
  });

  // Children
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Peppa Pig",
    description:
      "Peppa, una cerdita preescolar extrovertida, participa en muchas actividades energéticas. Aprende algo nuevo todos los días y se divierte mucho con su familia y amigos.",
    genre: "Niños",
    maturity: "0",
    slug: "peppa-pig",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Dora The Explorer",
    description:
      "Dora, una niña de ascendencia latinoamericana de siete años, se embarca en numerosas aventuras en la naturaleza con su amigo Boots, un mono y una variedad de herramientas divertidas y útiles.",
    genre: "Niños",
    maturity: "0",
    slug: "dora-the-explorer",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "PAW Patrol",
    description:
      "Seis valientes cachorros, capitaneados por un niño de diez años experto en tecnología, Ryder, trabajan juntos para llevar a cabo misiones de rescate de alto riesgo para proteger a los residentes de la comunidad de Adventure Bay.",
    genre: "Niños",
    maturity: "0",
    slug: "paw-patrol",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Arthur",
    description:
      "El oso hormiguero de anteojos, Arthur Read, les demuestra a los niños cómo lidiar con traumas y desafíos infantiles como la tarea, los maestros y los matones.",
    genre: "Niños",
    maturity: "0",
    slug: "arthur",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "SpongeBob",
    description:
      "Una esponja marina amarilla llamada Bob Esponja Pantalones Cuadrados vive en la ciudad de Fondo de Bikini en las profundidades del Océano Pacífico. ",
    genre: "Niños",
    maturity: "0",
    slug: "spongebob",
  });

  // Crime
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Making a Murderer",
    description:
      "Exonerado después de pasar casi dos décadas en prisión por un delito que no cometió, Steven Avery presentó una demanda contra el condado de Manitowoc, Wisconsin, y varias personas involucradas en su arresto.",
    genre: "Crimen",
    maturity: "18",
    slug: "making-a-murderer",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Long Shot",
    description:
      "Un hombre inocente es acusado de asesinato, lo que lleva a su abogado a una persecución salvaje para confirmar su coartada utilizando imágenes sin editar de un programa de televisión.",
    genre: "Crimen",
    maturity: "18",
    slug: "long-shot",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "The Confession Killer",
    description:
      "Henry Lee Lucas fue un asesino en serie convicto estadounidense cuyos crímenes abarcaron desde 1960 hasta 1983. Fue declarado culpable de asesinar a once personas y condenado a muerte por el asesinato de Debra Jackson, aunque su sentencia sería conmutada por cadena perpetua en 1998.",
    genre: "Crimen",
    maturity: "18",
    slug: "the-confession-killer",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Un hombre inocente",
    description:
      "Kang Ma Roo es estudiante de medicina, quien es un poco inocente, confía ciegamente en su novia, Han Jae Hee , de la cual esta muy enamorado. Sin embargo, ella utiliza su confianza para incriminarlo por un asesinato que cometió y luego se casa con un hombre mayor y rico para escapar de su pobreza.",
    genre: "Crimen",
    maturity: "18",
    slug: "the-innocent-man",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "The Staircase",
    description:
      "En 2001, la esposa del novelista Michael Peterson murió y él afirmó que pereció después de caerse por las escaleras en su casa. El médico forense, sin embargo, determinó que había sido golpeada con un arma.",
    genre: "Crimen",
    maturity: "18",
    slug: "the-staircase",
  });

  // Feel-good
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Will Hunting",
    description:
      "Will Hunting, un genio de las matemáticas, resuelve todos los problemas matemáticos difíciles. Cuando enfrenta una crisis emocional, recibe ayuda del psiquiatra Dr. Sean Maguireto, quien lo ayuda a recuperarse.",
    genre: "Sentirse-bien",
    maturity: "12",
    slug: "good-will-hunting",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Forrest Gump",
    description:
      "Forrest Gump, un hombre con un coeficiente intelectual bajo, se une al ejército para el servicio donde conoce a Dan y Bubba. Sin embargo, no puede dejar de pensar en su novia de la infancia, Jenny Curran, cuya vida está arruinada..",
    genre: "Sentirse-bien",
    maturity: "12",
    slug: "forrest-gump",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Juno",
    description:
      "La inadaptada social Juno se protege a sí misma con un ingenio cáustico, pero su embarazo no planificado hace que la adolescente se involucre más de lo que esperaba en la vida de los padres adoptivos de su bebé..",
    genre: "Sentirse-bien",
    maturity: "12",
    slug: "juno",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Medianoche en París",
    description:
      "Gil llega con su prometida y su familia a París de vacaciones, mientras intenta terminar su primera novela. Es seducido por la ciudad, que lo lleva a un tiempo pasado, lejos de su prometida.",
    genre: "Sentirse-bien",
    maturity: "12",
    slug: "midnight-in-paris",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    title: "Escuela de Rock",
    description:
      "Dewey Finn, un entusiasta del rock aficionado, toma astutamente el trabajo de maestro sustituto de su amigo. Sin calificaciones para eso, en cambio comienza a entrenar a los estudiantes para formar una banda..",
    genre: "Sentirse-bien",
    maturity: "12",
    slug: "school-of-rock",
  });

  /* Films
    ============================================ */
  // Drama
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El prestigio",
    description:
      "Dos amigos y compañeros magos se convierten en enemigos acérrimos después de una tragedia repentina. Mientras se dedican a esta rivalidad, hacen sacrificios que les dan fama pero con terribles consecuencias..",
    genre: "drama",
    maturity: "15",
    slug: "the-prestige",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El club de la lucha",
    description:
      "Descontento con su estilo de vida capitalista, un insomne de cuello blanco forma un club de lucha clandestino con Tyler, un vendedor de jabón descuidado. El proyecto pronto se convierte en algo siniestro..",
    genre: "drama",
    maturity: "15",
    slug: "fight-club",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El discurso del Rey",
    description:
      "El rey Jorge VI intenta superar su problema de tartamudeo con la ayuda del terapeuta del habla Lionel Logue y se hace lo suficientemente digno como para liderar a su país durante la Segunda Guerra Mundial..",
    genre: "drama",
    maturity: "15",
    slug: "kings-speech",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El renacido",
    description:
      "Hugh Glass, un hombre de la frontera legendario, resulta gravemente herido en el ataque de un oso y es abandonado por su equipo de caza. Utiliza sus habilidades para sobrevivir y vengarse de su compañero, que lo traicionó.",
    genre: "drama",
    maturity: "15",
    slug: "the-revenant",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "La red social",
    description:
      "Mark Zuckerberg crea un sitio de redes sociales, Facebook, con la ayuda de su amigo Eduardo Saverin. Pero pronto, una cadena de mentiras rompe su relación incluso cuando Facebook conecta a las personas..",
    genre: "drama",
    maturity: "12",
    slug: "the-social-network",
  });

  // Suspense
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Shutter Island",
    description:
      "Teddy Daniels y Chuck Aule, dos alguaciles estadounidenses, son enviados a un asilo en una isla remota para investigar la desaparición de un paciente, donde Teddy descubre una verdad impactante sobre el lugar.",
    genre: "suspense",
    maturity: "15",
    slug: "shutter-island",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Perdida",
    description:
      "Nick Dunne descubre que todo el foco de los medios se ha desplazado hacia él cuando su esposa Amy Dunne desaparece el día de su quinto aniversario de bodas.",
    genre: "suspense",
    maturity: "15",
    slug: "gone-girl",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Prisioneros",
    description:
      "Cuando la policía se toma el tiempo de encontrar a la hija de Keller Dover y a su amiga, él mismo decide realizar una búsqueda. Su desesperación lo lleva más cerca de encontrar la verdad y también pone en peligro su propia vida..",
    genre: "suspense",
    maturity: "15",
    slug: "prisoners",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Seven",
    description:
      "Un asesino en serie comienza a asesinar personas según los siete pecados capitales. Dos detectives, uno nuevo en la ciudad y otro a punto de jubilarse, tienen la tarea de detener al criminal.",
    genre: "suspense",
    maturity: "15",
    slug: "seven",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Zodiac",
    description:
      "Robert Graysmith, dibujante de profesión, se encuentra pensando obsesivamente en el asesino del Zodiaco. Utiliza sus habilidades para resolver acertijos para estar más cerca de revelar la identidad del asesino.",
    genre: "suspense",
    maturity: "15",
    slug: "zodiac",
  });

  // Children
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Hotel Transylvania",
    description:
      "Drácula, dueño de un lujoso resort para monstruos, intenta evitar que su hija se enamore de Jonathan, un humano.",
    genre: "Niños",
    maturity: "0",
    slug: "hotel-transylvania",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Mi villano favorito",
    description:
      "Gru, un cerebro criminal, adopta a tres huérfanos como peones para llevar a cabo el mayor atraco de la historia. Su vida da un giro inesperado cuando las niñas lo ven como su padre potencial.",
    genre: "Niños",
    maturity: "0",
    slug: "despicable-me",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Frozen",
    description:
      "Anna emprende un viaje con un hombre de hielo, Kristoff, y su reno, Sven, para encontrar a su hermana, Elsa, que tiene el poder de convertir cualquier objeto o persona en hielo.",
    genre: "Niños",
    maturity: "0",
    slug: "frozen",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Spirited Away",
    description:
      "En esta película animada del destacado director japonés Hayao Miyazaki, Chihiro (Rumi Hiiragi) de 10 años y sus padres (Takashi Naitô, Yasuko Sawaguchi) se topan con un parque de diversiones aparentemente abandonado..",
    genre: "Niños",
    maturity: "0",
    slug: "spirited-away",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Una aventura de altura",
    description:
      "Carl, un anciano viudo, se embarca en una aventura en su casa voladora en busca de Paradise Falls, el destino soñado de su esposa.",
    genre: "Niños",
    maturity: "0",
    slug: "up",
  });

  // Thriller
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Joker",
    description:
      "La pasión de Arthur Fleck, un hombre ignorado por la sociedad, es hacer reír a la gente. Sin embargo, una serie de trágicos sucesos harán que su visión del mundo se distorsione considerablemente convirtiéndolo en un brillante criminal.",
    genre: "thriller",
    maturity: "15",
    slug: "joker",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "A Quiet Place",
    description:
      "La familia Abbott ahora debe enfrentar los terrores del mundo exterior mientras luchan por sobrevivir en silencio. Obligados a aventurarse en lo desconocido, se dan cuenta de que las criaturas que cazan por medio del sonido no son las únicas amenazas que acechan más allá del camino de arena.",
    genre: "thriller",
    maturity: "15",
    slug: "a-quiet-place",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El cisne negro",
    description:
      "Nina, una bailarina, tiene la oportunidad de interpretar al Cisne Blanco, la Princesa Odette. Pero se encuentra cayendo en la locura cuando Thomas, el director artístico, decide que Lily podría encajar mejor en el papel.",
    genre: "thriller",
    maturity: "15",
    slug: "black-swan",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Primicia mortal",
    description:
      "Tras ser testigo de un accidente, Lou Bloom, un apasionado joven que no consigue encontrar empleo, descubre como forma de ganar dinero el mundo del periodismo criminalista en la peligrosa ciudad de Los Ángeles. Su trabajo es llegar al escenario de crímenes o accidentes y fotografiar lo sucedido para venderlos al mejor postor.",
    genre: "thriller",
    maturity: "15",
    slug: "nightcrawler",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El silencio de los corderos",
    description:
      "Clarice Starling, una agente del FBI, busca la ayuda de Hannibal Lecter, un asesino en serie psicópata y ex psiquiatra, para detener a otro asesino en serie que se ha cobrado víctimas femeninas.",
    genre: "thriller",
    maturity: "15",
    slug: "the-silence-of-the-lambs",
  });

  // Romance
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Ha nacido una estrella",
    description:
      "Después de enamorarse de la luchadora artista Ally, Jackson, un músico, la convence para que siga sus sueños, mientras él lucha contra el alcoholismo y sus demonios personales.",
    genre: "romance",
    maturity: "15",
    slug: "a-star-is-born",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Triste San Valentín",
    description:
      "Dean y Cynthia están casados y tienen una hija y su matrimonio está a punto de desmoronarse. Ambos provienen de familias disfuncionales y luchan por darle sentido a su relación.",
    genre: "romance",
    maturity: "15",
    slug: "blue-valentine",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "La La Land",
    description:
      "Sebastian (Ryan Gosling) y Mia (Emma Stone) se unen por su deseo común de hacer lo que aman. Pero a medida que aumenta el éxito, se enfrentan a decisiones que comienzan...",
    genre: "romance",
    maturity: "15",
    slug: "la-la-land",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "El diario de Noah",
    description:
      "Duke lee la historia de Allie y Noah, dos amantes separados por el destino, a la Sra. Hamilton, una anciana que sufre de Alzheimer, a diario de su cuaderno.",
    genre: "romance",
    maturity: "15",
    slug: "the-notebook",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    title: "Titanic",
    description:
      "Rose, de diecisiete años, proviene de una familia aristocrática y está lista para casarse. Cuando aborda el Titanic, conoce a Jack Dawson, un artista, y se enamora de él.",
    genre: "romance",
    maturity: "15",
    slug: "titanic",
  });
}
