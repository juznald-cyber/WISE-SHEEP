// Banco Extenso de Preguntas Bíblicas para WISE SHEEP (525+ Preguntas)
// Categorizadas por Niveles (Corderito / Fácil, Discípulo / Intermedio, Maestro / Avanzado)

export const QUESTION_LEVELS = {
  EASY: { id: 'EASY', name: 'Corderito (Fácil)', color: 'from-emerald-500 to-teal-600', badge: '🌱' },
  MEDIUM: { id: 'MEDIUM', name: 'Discípulo (Intermedio)', color: 'from-amber-500 to-orange-600', badge: '📜' },
  HARD: { id: 'HARD', name: 'Maestro (Avanzado)', color: 'from-purple-600 to-indigo-700', badge: '👑' }
};

export const QUESTION_TYPES = {
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE', // 4 opciones
  TRUE_FALSE: 'TRUE_FALSE',           // Verdadero o Falso
  WHO_SAID_IT: 'WHO_SAID_IT',         // ¿Quién lo dijo?
  EMOJI_GUESS: 'EMOJI_GUESS',         // Adivina por Emojis
  FILL_VERSE: 'FILL_VERSE'            // Completa el Versículo
};

export const QUESTIONS_DATABASE = [
  {
    "id": "e1",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Historias Bíblicas",
    "question": "¿Cuántos días y cuántas noches llovió durante el diluvio en el arca de Noé?",
    "options": [
      "7 días y 7 noches",
      "40 días y 40 noches",
      "100 días y 100 noches",
      "12 días y 12 noches"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 7:12",
    "explanation": "Y hubo lluvia sobre la tierra cuarenta días y cuarenta noches."
  },
  {
    "id": "e2",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Antiguo Testamento",
    "question": "¿Con qué arma venció el joven David al gigante Goliat?",
    "options": [
      "Una espada de bronce",
      "Una honda y una piedra",
      "Una lanza con punta de hierro",
      "Un arco y flecha"
    ],
    "correctAnswer": 1,
    "verse": "1 Samuel 17:50",
    "explanation": "Así venció David al filisteo con honda y piedra; e hirió al filisteo y lo mató."
  },
  {
    "id": "e3",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Nuevo Testamento",
    "question": "¿En qué ciudad nació Jesús?",
    "options": [
      "Nazaret",
      "Jerusalén",
      "Belén",
      "Capernaúm"
    ],
    "correctAnswer": 2,
    "verse": "Miqueas 5:2 / Lucas 2:4-7",
    "explanation": "Jesús nació en Belén de Judea, cumpliendo la profecía de Miqueas."
  },
  {
    "id": "e4",
    "level": "EASY",
    "type": "TRUE_FALSE",
    "category": "Personajes",
    "question": "¿Verdadero o Falso? Jonás intentó huir a Tarsis para no ir a predicar a Nínive.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "verse": "Jonás 1:3",
    "explanation": "Jonás se levantó para huir de la presencia de Dios hacia Tarsis."
  },
  {
    "id": "e5",
    "level": "EASY",
    "type": "EMOJI_GUESS",
    "category": "Adivina la Historia",
    "question": "¿Qué historia bíblica representan estos emojis? 🍎 🐍 🌳 🚫",
    "options": [
      "Noé y el diluvio",
      "Adán y Eva en el Edén",
      "Moisés y la zarza",
      "Sansón y Dalila"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 3:1-6",
    "explanation": "Representa la tentación en el huerto del Edén con Adán, Eva y la serpiente."
  },
  {
    "id": "e6",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Versículos Memorables",
    "question": "Completa el versículo: \"El Señor es mi pastor, nada me _________\"",
    "options": [
      "faltará",
      "sobrará",
      "asustará",
      "apartará"
    ],
    "correctAnswer": 0,
    "verse": "Salmos 23:1",
    "explanation": "Salmos 23:1: \"Jehová es mi pastor; nada me faltará.\""
  },
  {
    "id": "e7",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Los Discípulos",
    "question": "¿Cuántos discípulos / apóstoles principales eligió Jesús?",
    "options": [
      "7",
      "10",
      "12",
      "14"
    ],
    "correctAnswer": 2,
    "verse": "Mateo 10:1-4",
    "explanation": "Jesús llamó a sus doce discípulos y les dio autoridad espiritual."
  },
  {
    "id": "e8",
    "level": "EASY",
    "type": "WHO_SAID_IT",
    "category": "¿Quién lo dijo?",
    "question": "¿Quién dijo: \"¿Acaso soy yo el que cuida a mi hermano?\"",
    "options": [
      "Abel",
      "Caín",
      "Esaú",
      "Jacob"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 4:9",
    "explanation": "Caín respondió esto a Dios cuando le preguntó por su hermano Abel."
  },
  {
    "id": "e9",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "El Éxodo",
    "question": "¿Qué mar abrió Dios a través de Moisés para que el pueblo cruzara en seco?",
    "options": [
      "El Mar Muerto",
      "El Mar de Galilea",
      "El Mar Rojo",
      "El Mar Mediterráneo"
    ],
    "correctAnswer": 2,
    "verse": "Éxodo 14:21",
    "explanation": "Moisés extendió su mano sobre el mar e hizo Dios que el mar se abriera."
  },
  {
    "id": "e10",
    "level": "EASY",
    "type": "EMOJI_GUESS",
    "category": "Adivina el Personaje",
    "question": "¿Qué historia representan estos emojis? 🦁 🕳️ 🙏 🛡️",
    "options": [
      "Elías en la cueva",
      "Daniel en el foso de los leones",
      "Sansón luchando",
      "David el pastor"
    ],
    "correctAnswer": 1,
    "verse": "Daniel 6:16-22",
    "explanation": "Daniel fue guardado milagrosamente en el foso de los leones."
  },
  {
    "id": "e11",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "La Creación",
    "question": "¿En qué día de la creación descansó Dios de toda la obra que había hecho?",
    "options": [
      "En el quinto día",
      "En el sexto día",
      "En el séptimo día",
      "En el octavo día"
    ],
    "correctAnswer": 2,
    "verse": "Génesis 2:2",
    "explanation": "Y acabó Dios en el día séptimo la obra que hizo; y reposó el día séptimo."
  },
  {
    "id": "e12",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Personajes Bíblicos",
    "question": "¿Quién construyó el gran arca por orden de Dios para salvar a su familia?",
    "options": [
      "Abraham",
      "Noé",
      "Moisés",
      "Isaac"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 6:14",
    "explanation": "Noé construyó el arca de madera de gofer tal como Dios le mandó."
  },
  {
    "id": "e13",
    "level": "EASY",
    "type": "TRUE_FALSE",
    "category": "Milagros de Jesús",
    "question": "¿Verdadero o Falso? Jesús caminó sobre el agua hacia la barca de sus discípulos.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "verse": "Mateo 14:25",
    "explanation": "Mas a la cuarta vigilia de la noche, Jesús vino a ellos andando sobre el mar."
  },
  {
    "id": "e14",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Los Mandamientos",
    "question": "¿Dónde entregó Dios las tablas de los 10 Mandamientos a Moisés?",
    "options": [
      "En el Monte Sinaí",
      "En el Monte Carmelo",
      "En el Monte de los Olivos",
      "En el Monte Hermón"
    ],
    "correctAnswer": 0,
    "verse": "Éxodo 19:20",
    "explanation": "Y descendió Jehová sobre el monte Sinaí, y llamó a Moisés a la cumbre."
  },
  {
    "id": "e15",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Versículos Clave",
    "question": "Juan 3:16: \"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo _________\"",
    "options": [
      "unigénito",
      "amado",
      "primogénito",
      "escogido"
    ],
    "correctAnswer": 0,
    "verse": "Juan 3:16",
    "explanation": "\"...para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.\""
  },
  {
    "id": "e16",
    "level": "EASY",
    "type": "EMOJI_GUESS",
    "category": "Adivina el Milagro",
    "question": "¿Qué milagro representan estos emojis? 🍞 🍞 🐟 🐟 🐟 🧺 5️⃣0️⃣0️⃣0️⃣",
    "options": [
      "La pesca milagrosa",
      "La multiplicación de los panes y peces",
      "El maná en el desierto",
      "La última cena"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 14:19-21",
    "explanation": "Jesús multiplicó cinco panes y dos peces alimentando a más de 5,000 personas."
  },
  {
    "id": "e17",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Jesús",
    "question": "¿Quién bautizó a Jesús en el río Jordán?",
    "options": [
      "Pedro",
      "Juan el Bautista",
      "Eliseo",
      "Santiago"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 3:13-17",
    "explanation": "Jesús vino de Galilea a Juan al Jordán, para ser bautizado por él."
  },
  {
    "id": "e18",
    "level": "EASY",
    "type": "WHO_SAID_IT",
    "category": "¿Quién lo dijo?",
    "question": "¿Quién dijo: \"Heme aquí, envíame a mí\" al escuchar la voz del Señor?",
    "options": [
      "Jeremías",
      "Isaías",
      "Jonás",
      "Samuel"
    ],
    "correctAnswer": 1,
    "verse": "Isaías 6:8",
    "explanation": "Isaías respondió con prontitud al llamamiento santo de Dios."
  },
  {
    "id": "e19",
    "level": "EASY",
    "type": "TRUE_FALSE",
    "category": "Curiosidades Bíblicas",
    "question": "¿Verdadero o Falso? El libro de los Salmos es el libro con más capítulos en la Biblia.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "verse": "Salmos",
    "explanation": "El libro de Salmos tiene 150 capítulos, siendo el más extenso de toda la Biblia."
  },
  {
    "id": "e20",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Personajes",
    "question": "¿Quién fue tragado por un gran pez luego de desobedecer a Dios?",
    "options": [
      "Pedro",
      "Pablo",
      "Jonás",
      "Elías"
    ],
    "correctAnswer": 2,
    "verse": "Jonás 1:17",
    "explanation": "Pero Jehová tenía preparado un gran pez que tragase a Jonás."
  },
  {
    "id": "e21",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "La Biblia",
    "question": "¿Cuál es el primer libro de la Biblia?",
    "options": [
      "Éxodo",
      "Salmos",
      "Génesis",
      "Mateo"
    ],
    "correctAnswer": 2,
    "verse": "Génesis 1:1",
    "explanation": "Génesis significa \"principio u origen\" y es el primer libro de las Escrituras."
  },
  {
    "id": "e22",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Versículos Clave",
    "question": "Salmos 119:105: \"Lámpara es a mis pies tu palabra, y ________ a mi camino.\"",
    "options": [
      "guía",
      "lumbrera",
      "sol",
      "escudo"
    ],
    "correctAnswer": 1,
    "verse": "Salmos 119:105",
    "explanation": "\"Lámpara es a mis pies tu palabra, y lumbrera a mi camino.\""
  },
  {
    "id": "e23",
    "level": "EASY",
    "type": "EMOJI_GUESS",
    "category": "Adivina el Personaje",
    "question": "¿Qué personaje bíblico es? 🕊️ 🌿 ⛵ 🌧️ 🌈",
    "options": [
      "Moisés",
      "Noé",
      "Abraham",
      "Lot"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 8 y 9",
    "explanation": "Noé envió la paloma que regresó con una hoja de olivo, y luego vio el arcoíris del pacto."
  },
  {
    "id": "e24",
    "level": "EASY",
    "type": "TRUE_FALSE",
    "category": "La Resurrección",
    "question": "¿Verdadero o Falso? Al tercer día de morir en la cruz, Jesús resucitó de entre los muertos.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "verse": "Lucas 24:6-7",
    "explanation": "¡No está aquí, sino que ha resucitado, tal como lo había prometido!"
  },
  {
    "id": "e25",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Personajes",
    "question": "¿Quién tenía una túnica de muchos colores que le regaló su padre Jacob?",
    "options": [
      "Benjamín",
      "José",
      "Judá",
      "Rubén"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 37:3",
    "explanation": "Israel amaba a José más que a todos sus hijos y le hizo una túnica de diversos colores."
  },
  {
    "id": "e26",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "La Creación",
    "question": "¿Qué creó Dios en el primer día de la creación según Génesis?",
    "options": [
      "El sol y la luna",
      "La luz",
      "Los animales terrestres",
      "Las aves del cielo"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 1:3-5",
    "explanation": "Dios dijo: \"Sea la luz\", y fue la luz en el primer día."
  },
  {
    "id": "e27",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "La Creación",
    "question": "¿En qué día descansó Dios de toda la obra que había hecho?",
    "options": [
      "En el quinto día",
      "En el sexto día",
      "En el séptimo día",
      "En el octavo día"
    ],
    "correctAnswer": 2,
    "verse": "Génesis 2:2",
    "explanation": "Y reposó el día séptimo de toda la obra que hizo."
  },
  {
    "id": "e28",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Historias Bíblicas",
    "question": "¿Qué señal puso Dios en el cielo como pacto de que no volvería a destruir la tierra con un diluvio?",
    "options": [
      "Una estrella brillante",
      "Un arcoíris",
      "Una columna de fuego",
      "Un eclipse"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 9:13",
    "explanation": "Mi arco he puesto en las nubes, el cual será por señal del pacto entre mí y la tierra."
  },
  {
    "id": "e29",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿Cómo se llamaba la esposa de Abraham y madre de Isaac?",
    "options": [
      "Rebeca",
      "Sara",
      "Raquel",
      "Lea"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 17:15-19",
    "explanation": "Dios prometió que Sara daría a luz un hijo llamado Isaac."
  },
  {
    "id": "e30",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿Qué regalo especial le dio Jacob a su hijo amado José que causó envidia en sus hermanos?",
    "options": [
      "Un anillo de oro",
      "Una túnica de diversos colores",
      "Un báculo de cedro",
      "Un par de sandalias reales"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 37:3",
    "explanation": "Y le hizo una túnica de diversos colores."
  },
  {
    "id": "e31",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "José en Egipto",
    "question": "¿A qué país fue llevado José después de ser vendido por sus hermanos?",
    "options": [
      "Babilonia",
      "Asiria",
      "Egipto",
      "Persia"
    ],
    "correctAnswer": 2,
    "verse": "Génesis 37:36",
    "explanation": "Los madianitas lo vendieron en Egipto a Potifar."
  },
  {
    "id": "e32",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Moisés y el Éxodo",
    "question": "¿Dónde encontró la hija de Faraón al bebé Moisés cuando su madre lo puso en el río?",
    "options": [
      "En una cueva secreta",
      "En una canastilla entre los juncos",
      "Bajo una palmera",
      "En una barca de pescadores"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 2:3-5",
    "explanation": "Puso al niño en una arquilla de juncos a la orilla del río Nilo."
  },
  {
    "id": "e33",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Moisés y el Éxodo",
    "question": "¿Qué fenómeno vio Moisés en el monte Horeb donde el arbusto ardía y no se consumía?",
    "options": [
      "Un relámpago eterno",
      "La zarza ardiendo",
      "Una lluvia de estrellas",
      "Un pozo de agua viva"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 3:2",
    "explanation": "Y se le apareció el Ángel de Jehová en una llama de fuego en medio de una zarza."
  },
  {
    "id": "e34",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Las Plagas",
    "question": "¿En qué se convirtió el agua del río Nilo en la primera plaga de Egipto?",
    "options": [
      "En aceite",
      "En sangre",
      "En vino",
      "En arena"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 7:20",
    "explanation": "Todas las aguas que había en el río se convirtieron en sangre."
  },
  {
    "id": "e35",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "El Éxodo",
    "question": "¿Qué mar abrió Dios para que el pueblo de Israel cruzara en seco huyendo de Faraón?",
    "options": [
      "El Mar Muerto",
      "El Mar Mediterráneo",
      "El Mar Rojo",
      "El Mar de Galilea"
    ],
    "correctAnswer": 2,
    "verse": "Éxodo 14:21-22",
    "explanation": "Jehová hizo que el mar se retirara y los hijos de Israel fueron por en medio en seco."
  },
  {
    "id": "e36",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "El Desierto",
    "question": "¿Cómo se llamaba el pan que caía del cielo cada mañana para alimentar a los israelitas en el desierto?",
    "options": [
      "Maná",
      "Matzá",
      "Trigo celestial",
      "Cebada santa"
    ],
    "correctAnswer": 0,
    "verse": "Éxodo 16:31",
    "explanation": "La casa de Israel lo llamó Maná; y era como semilla de culantro, blanco, y su sabor como hojuelas con miel."
  },
  {
    "id": "e37",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Los Diez Mandamientos",
    "question": "¿En qué monte entregó Dios a Moisés las dos tablas de la Ley con los Diez Mandamientos?",
    "options": [
      "Monte Carmelo",
      "Monte de los Olivos",
      "Monte Sinaí",
      "Monte Hermón"
    ],
    "correctAnswer": 2,
    "verse": "Éxodo 19:20; 31:18",
    "explanation": "Descendió Jehová sobre el monte Sinaí y dio a Moisés las tablas de la ley."
  },
  {
    "id": "e38",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Los Diez Mandamientos",
    "question": "Completa el mandamiento: \"Honra a tu padre y a tu madre, para que tus días se _________ en la tierra.\"",
    "options": [
      "acorten",
      "alarguen",
      "llenen de oro",
      "dupliquen"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 20:12",
    "explanation": "Éxodo 20:12: \"...para que tus días se alarguen en la tierra que Jehová tu Dios te da.\""
  },
  {
    "id": "e39",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Tierra Prometida",
    "question": "¿Alrededor de los muros de qué ciudad marchó el pueblo de Israel durante 7 días hasta que los muros cayeron?",
    "options": [
      "Jerusalén",
      "Jericó",
      "Hebrón",
      "Betel"
    ],
    "correctAnswer": 1,
    "verse": "Josué 6:20",
    "explanation": "El pueblo gritó y tocaron las trompetas, y el muro de Jericó cayó a plomo."
  },
  {
    "id": "e40",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Quién fue el juez famoso por su fuerza sobrenatural cuyo secreto estaba en su consagración y su cabello?",
    "options": [
      "Gedeón",
      "Sansón",
      "Barac",
      "Jefté"
    ],
    "correctAnswer": 1,
    "verse": "Jueces 16:17",
    "explanation": "Sansón confesó: \"Navaja nunca ha pasado sobre mi cabeza, porque soy nazareo para Dios.\""
  },
  {
    "id": "e41",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Rut",
    "question": "¿Quién era la suegra amada de Rut a quien acompañó de regreso a Belén?",
    "options": [
      "Sara",
      "Noemí",
      "Elisabet",
      "Ana"
    ],
    "correctAnswer": 1,
    "verse": "Rut 1:16",
    "explanation": "Rut dijo a Noemí: \"Tu pueblo será mi pueblo, y tu Dios mi Dios.\""
  },
  {
    "id": "e42",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Profetas",
    "question": "¿Qué niño escuchó la voz de Dios en la noche pensando que era el sacerdote Elí quien lo llamaba?",
    "options": [
      "Samuel",
      "David",
      "Salomón",
      "Daniel"
    ],
    "correctAnswer": 0,
    "verse": "1 Samuel 3:4-10",
    "explanation": "Jehová llamó a Samuel; y él respondió: \"Heme aquí... Habla, porque tu siervo oye.\""
  },
  {
    "id": "e43",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Reyes de Israel",
    "question": "¿Quién fue el primer rey de Israel, ungido por el profeta Samuel?",
    "options": [
      "David",
      "Saúl",
      "Salomón",
      "Roboam"
    ],
    "correctAnswer": 1,
    "verse": "1 Samuel 10:1",
    "explanation": "Tomando entonces Samuel una redoma de aceite, la derramó sobre la cabeza de Saúl y lo ungió rey."
  },
  {
    "id": "e44",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Rey David",
    "question": "¿Qué oficio realizaba David en el campo antes de ser ungido rey?",
    "options": [
      "Carpintero",
      "Pastor de ovejas",
      "Pescador",
      "Herrero"
    ],
    "correctAnswer": 1,
    "verse": "1 Samuel 16:11",
    "explanation": "David apacentaba las ovejas de su padre Isaí en Belén."
  },
  {
    "id": "e45",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Rey Salomón",
    "question": "¿Qué le pidió el rey Salomón a Dios en oración cuando comenzó a gobernar?",
    "options": [
      "Riquezas y oro",
      "Larga vida",
      "Sabiduría y entendimiento para guiar al pueblo",
      "La victoria sobre todos sus enemigos"
    ],
    "correctAnswer": 2,
    "verse": "1 Reyes 3:9",
    "explanation": "Salomón pidió: \"Da, pues, a tu siervo corazón con entendimiento para juzgar a tu pueblo.\""
  },
  {
    "id": "e46",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Rey Salomón",
    "question": "¿Qué gran edificación construyó el rey Salomón en Jerusalén para adorar a Dios?",
    "options": [
      "El Arca de la Alianza",
      "El Templo de Jerusalén",
      "La Muralla China",
      "La Torre de Babel"
    ],
    "correctAnswer": 1,
    "verse": "1 Reyes 6:1",
    "explanation": "Salomón comenzó a edificar la casa de Jehová en el cuarto año de su reinado."
  },
  {
    "id": "e47",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Elías",
    "question": "¿Qué aves enviaba Dios para alimentar al profeta Elías junto al arroyo de Querit?",
    "options": [
      "Palomas",
      "Cuervos que traían pan y carne",
      "Águilas",
      "Gorriones"
    ],
    "correctAnswer": 1,
    "verse": "1 Reyes 17:6",
    "explanation": "Y los cuervos le traían pan y carne por la mañana y por la tarde."
  },
  {
    "id": "e48",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Elías",
    "question": "¿Cómo fue llevado el profeta Elías al cielo sin ver muerte física?",
    "options": [
      "En un barco de oro",
      "En un torbellino con un carro de fuego y caballos de fuego",
      "En una nube blanca",
      "Caminando sobre el agua"
    ],
    "correctAnswer": 1,
    "verse": "2 Reyes 2:11",
    "explanation": "Un carro de fuego con caballos de fuego apartó a los dos; y Elías subió al cielo en un torbellino."
  },
  {
    "id": "e49",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Reina Ester",
    "question": "¿Qué valiente reina judía arriesgó su vida entrando ante el rey Asuero para salvar a su pueblo?",
    "options": [
      "Vasti",
      "Ester",
      "Rut",
      "Jezabel"
    ],
    "correctAnswer": 1,
    "verse": "Ester 4:16",
    "explanation": "Ester dijo: \"Y si perezco, que perezca\", intercediendo por los judíos."
  },
  {
    "id": "e50",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Daniel",
    "question": "¿En qué lugar fue arrojado el profeta Daniel por negarse a dejar de orar a Dios tres veces al día?",
    "options": [
      "En un horno de fuego",
      "En el foso de los leones",
      "En una cisterna de lodo",
      "En el mar abierto"
    ],
    "correctAnswer": 1,
    "verse": "Daniel 6:16-22",
    "explanation": "Dios envió su ángel, el cual cerró la boca de los leones para que no le hicieran daño."
  },
  {
    "id": "e51",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Amigos de Daniel",
    "question": "¿Cuántos jóvenes hebreos fueron arrojados al horno de fuego ardiendo por no adorar la estatua de oro?",
    "options": [
      "2 jóvenes",
      "3 jóvenes (Sadrac, Mesac y Abed-nego)",
      "5 jóvenes",
      "7 jóvenes"
    ],
    "correctAnswer": 1,
    "verse": "Daniel 3:19-25",
    "explanation": "Sadrac, Mesac y Abed-nego salieron ilesos, y el rey vio a un cuarto varón semejante al Hijo de Dios."
  },
  {
    "id": "e52",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Jonás",
    "question": "¿Cuántos días y noches estuvo el profeta Jonás dentro del vientre del gran pez?",
    "options": [
      "1 día y 1 noche",
      "3 días y 3 noches",
      "7 días y 7 noches",
      "40 días y 40 noches"
    ],
    "correctAnswer": 1,
    "verse": "Jonás 1:17",
    "explanation": "Y estuvo Jonás en el vientre del pez tres días y tres noches."
  },
  {
    "id": "e53",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Nacimiento de Jesús",
    "question": "¿Qué ángel se le apareció a la virgen María para anunciarle que daría a luz al Salvador?",
    "options": [
      "El ángel Miguel",
      "El ángel Gabriel",
      "El ángel Rafael",
      "El ángel Uriel"
    ],
    "correctAnswer": 1,
    "verse": "Lucas 1:26-31",
    "explanation": "El ángel Gabriel fue enviado por Dios a una virgen llamada María."
  },
  {
    "id": "e54",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Nacimiento de Jesús",
    "question": "¿Dónde fue acostado el niño Jesús al nacer porque no había lugar para ellos en el mesón?",
    "options": [
      "En una cuna de marfil",
      "En un pesebre",
      "En un trono real",
      "En un canasto de mimbre"
    ],
    "correctAnswer": 1,
    "verse": "Lucas 2:7",
    "explanation": "Y lo envolvió en pañales, y lo acostó en un pesebre."
  },
  {
    "id": "e55",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Los Magos de Oriente",
    "question": "¿Qué tres regalos presentaron los sabios magos de oriente al niño Jesús?",
    "options": [
      "Plata, bronce y trigo",
      "Oro, incienso y mirra",
      "Vino, pan y aceite",
      "Perlas, seda y miel"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 2:11",
    "explanation": "Abrieron sus tesoros y le ofrecieron presentes: oro, incienso y mirra."
  },
  {
    "id": "e56",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Bautismo de Jesús",
    "question": "¿Quién bautizó a Jesús en las aguas del río Jordán?",
    "options": [
      "Pedro",
      "Juan el Bautista",
      "El apóstol Pablo",
      "Nicodemo"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 3:13-17",
    "explanation": "Jesús vino de Galilea a Juan al Jordán para ser bautizado por él."
  },
  {
    "id": "e57",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Bautismo de Jesús",
    "question": "¿En forma de qué descendió el Espíritu Santo sobre Jesús en su bautismo?",
    "options": [
      "En forma de águila",
      "En forma de paloma",
      "En forma de llama de fuego",
      "En forma de cordero"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 3:16",
    "explanation": "Vio al Espíritu de Dios que descendía como paloma, y venía sobre él."
  },
  {
    "id": "e58",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Tentación en el Desierto",
    "question": "¿Cuántos días ayunó Jesús en el desierto antes de ser tentado por el diablo?",
    "options": [
      "7 días",
      "12 días",
      "40 días y 40 noches",
      "100 días"
    ],
    "correctAnswer": 2,
    "verse": "Mateo 4:2",
    "explanation": "Y después de haber ayunado cuarenta días y cuarenta noches, tuvo hambre."
  },
  {
    "id": "e59",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿Cuál fue el primer milagro realizado por Jesús según el Evangelio de Juan?",
    "options": [
      "Caminar sobre el agua",
      "Convertir el agua en vino en las bodas de Caná",
      "Multiplicar los panes",
      "Sanar al ciego de nacimiento"
    ],
    "correctAnswer": 1,
    "verse": "Juan 2:1-11",
    "explanation": "Este principio de señales hizo Jesús en Caná de Galilea, y manifestó su gloria."
  },
  {
    "id": "e60",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿Cuántos panes y cuántos pececillos tenía el muchacho en la multiplicación que alimentó a más de 5,000 personas?",
    "options": [
      "2 panes y 2 peces",
      "5 panes de cebada y 2 pececillos",
      "7 panes y 3 peces",
      "10 panes y 5 peces"
    ],
    "correctAnswer": 1,
    "verse": "Juan 6:9",
    "explanation": "Aquí está un muchacho, que tiene cinco panes de cebada y dos pececillos."
  },
  {
    "id": "e61",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿A qué amigo amado resucitó Jesús en Betania después de estar cuatro días en el sepulcro?",
    "options": [
      "Jairo",
      "Lázaro",
      "Bartimeo",
      "Zaqueo"
    ],
    "correctAnswer": 1,
    "verse": "Juan 11:43-44",
    "explanation": "Clamó a gran voz: ¡Lázaro, ven fuera! Y el que había muerto salió atadas las manos."
  },
  {
    "id": "e62",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Encuentros con Jesús",
    "question": "¿Quién era el recaudador de impuestos de baja estatura que subió a un árbol sicómoro para ver pasar a Jesús?",
    "options": [
      "Mateo",
      "Zaqueo",
      "Barrabás",
      "Cornelio"
    ],
    "correctAnswer": 1,
    "verse": "Lucas 19:1-6",
    "explanation": "Zaqueo corrió y subió a un árbol sicómoro para ver a Jesús."
  },
  {
    "id": "e63",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Parábolas de Jesús",
    "question": "En la parábola del Sembrador, ¿cuál de las semillas dio fruto al ciento, al sesenta y al treinta por uno?",
    "options": [
      "La que cayó junto al camino",
      "La que cayó en pedregales",
      "La que cayó entre espinos",
      "La que cayó en buena tierra"
    ],
    "correctAnswer": 3,
    "verse": "Mateo 13:8",
    "explanation": "Pero parte cayó en buena tierra, y dio fruto, cuál a ciento, cuál a sesenta, y cuál a treinta por uno."
  },
  {
    "id": "e64",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Parábolas de Jesús",
    "question": "¿Quién se detuvo a curar y vendar las heridas del hombre asaltado en el camino a Jericó?",
    "options": [
      "Un sacerdote",
      "Un levita",
      "Un buen samaritano",
      "Un soldado romano"
    ],
    "correctAnswer": 2,
    "verse": "Lucas 10:33-34",
    "explanation": "Un samaritano, que iba de camino, vino cerca de él, y viéndole, fue movido a misericordia."
  },
  {
    "id": "e65",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Parábolas de Jesús",
    "question": "En la parábola del hijo pródigo, ¿qué hizo el padre cuando vio volver a su hijo arrepentido desde lejos?",
    "options": [
      "Le cerró la puerta de la casa",
      "Corrió, se echó sobre su cuello y le besó",
      "Le impuso un castigo de 40 azotes",
      "Le exigió devolver todo el dinero"
    ],
    "correctAnswer": 1,
    "verse": "Lucas 15:20",
    "explanation": "Y cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió, y se echó sobre su cuello, y le besó."
  },
  {
    "id": "e66",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "La Última Cena",
    "question": "¿Qué elementos usó Jesús en la Última Cena para instituir la Santa Cena en memoria suya?",
    "options": [
      "Carne y leche",
      "El pan y la copa de vino/fruto de la vid",
      "Miel y agua pura",
      "Hierbas amargas y trigo"
    ],
    "correctAnswer": 1,
    "verse": "Lucas 22:19-20",
    "explanation": "Tomó el pan y dio gracias... y de igual manera la copa, diciendo: Esta copa es el nuevo pacto en mi sangre."
  },
  {
    "id": "e67",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "La Pasión de Cristo",
    "question": "¿En qué huerto oró Jesús intensamente con sudor como grandes gotas de sangre antes de ser entregado?",
    "options": [
      "Huerto del Edén",
      "Huerto de Getsemaní",
      "Jardín de Salomón",
      "Monte de la Transfiguración"
    ],
    "correctAnswer": 1,
    "verse": "Lucas 22:39-44",
    "explanation": "Fue al monte de los Olivos / Getsemaní y estando en agonía, oraba más intensamente."
  },
  {
    "id": "e68",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Los Discípulos",
    "question": "¿Por cuántas monedas de plata entregó Judas Iscariote al Señor Jesús?",
    "options": [
      "10 monedas",
      "20 monedas",
      "30 piezas de plata",
      "50 monedas de oro"
    ],
    "correctAnswer": 2,
    "verse": "Mateo 26:15",
    "explanation": "Y ellos le asignaron treinta piezas de plata."
  },
  {
    "id": "e69",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Los Discípulos",
    "question": "¿Cuántas veces negó el apóstol Pedro a Jesús antes de que el gallo cantara?",
    "options": [
      "1 vez",
      "2 veces",
      "3 veces",
      "7 veces"
    ],
    "correctAnswer": 2,
    "verse": "Mateo 26:75",
    "explanation": "Pedro se acordó de las palabras de Jesús: \"Antes que cante el gallo, me negarás tres veces.\""
  },
  {
    "id": "e70",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Resurrección de Jesús",
    "question": "¿Al cuántos días resucitó Jesús de entre los muertos con gloria y victoria?",
    "options": [
      "Al primer día",
      "Al segundo día",
      "Al tercer día según las Escrituras",
      "A los siete días"
    ],
    "correctAnswer": 2,
    "verse": "1 Corintios 15:4",
    "explanation": "Y que fue sepultado, y que resucitó al tercer día, conforme a las Escrituras."
  },
  {
    "id": "e71",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "La Gran Comisión",
    "question": "Completa Mateo 28:19: \"Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del _________\"",
    "options": [
      "profeta Elías",
      "Espíritu Santo",
      "apóstol Pedro",
      "ángel Gabriel"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 28:19",
    "explanation": "\"...en el nombre del Padre, y del Hijo, y del Espíritu Santo.\""
  },
  {
    "id": "e72",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué gran fiesta celebraban cuando el Espíritu Santo descendió con un viento recio y lenguas de fuego?",
    "options": [
      "La Pascua",
      "Pentecostés",
      "La fiesta de los Tabernáculos",
      "El día de Expiación"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 2:1-4",
    "explanation": "Cuando llegó el día de Pentecostés, estaban todos unánimes juntos y fueron llenos del Espíritu Santo."
  },
  {
    "id": "e73",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Apóstol Pablo",
    "question": "¿En qué camino una luz del cielo resplandeció alrededor de Saulo de Tarso y escuchó la voz de Jesús?",
    "options": [
      "Camino a Jericó",
      "Camino a Damasco",
      "Camino a Emaús",
      "Camino a Roma"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 9:3-4",
    "explanation": "Y yendo por el camino, aconteció que al llegar cerca de Damasco, repentinamente le rodeó una luz del cielo."
  },
  {
    "id": "e74",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Amor y Caridad",
    "question": "Completa 1 Corintios 13:13: \"Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el _________\"",
    "options": [
      "conocimiento",
      "amor",
      "dinero",
      "poder"
    ],
    "correctAnswer": 1,
    "verse": "1 Corintios 13:13",
    "explanation": "1 Corintios 13:13: \"...pero el mayor de ellos es el amor.\""
  },
  {
    "id": "e75",
    "level": "EASY",
    "type": "TRUE_FALSE",
    "category": "Apocalipsis",
    "question": "¿Verdadero o Falso? En el libro de Apocalipsis, Jesús se llama a sí mismo \"el Alfa y la Omega, el principio y el fin\".",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "verse": "Apocalipsis 1:8 / 22:13",
    "explanation": "\"Yo soy el Alfa y la Omega, principio y fin, dice el Señor, el que es y que era y que ha de venir.\""
  },
  {
    "id": "e76",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Cómo se llamaban los primeros dos hijos nacidos de Adán y Eva?",
    "options": [
      "Caín y Abel",
      "Jacob y Esaú",
      "Efraín y Manasés",
      "David y Salomón"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 4:1-2",
    "explanation": "Eva dio a luz a Caín y después dio a luz a su hermano Abel."
  },
  {
    "id": "e77",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Qué animal envió Noé en primer lugar fuera del arca para ver si las aguas habían bajado?",
    "options": [
      "Una paloma",
      "Un cuervo",
      "Un águila",
      "Un gorrión"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 8:7",
    "explanation": "Y envió a un cuervo, el cual salió, y estuvo yendo y volviendo hasta que las aguas se secaron."
  },
  {
    "id": "e78",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Qué trajo la paloma en su pico al regresar al arca de Noé?",
    "options": [
      "Una espiga de trigo",
      "Una hoja verde de olivo",
      "Una flor de almendro",
      "Una uva fresca"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 8:11",
    "explanation": "Y la paloma volvió a él a la hora de la tarde; y he aquí que traía una hoja de olivo en el pico."
  },
  {
    "id": "e79",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Qué gran torre intentaron construir los hombres para llegar al cielo antes de que Dios confundiera su lenguaje?",
    "options": [
      "La Torre de Siloé",
      "La Torre de Babel",
      "La Torre de David",
      "La Gran Pirámide"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 11:4-9",
    "explanation": "Por esto fue llamado el nombre de ella Babel, porque allí confundió Jehová el lenguaje de toda la tierra."
  },
  {
    "id": "e80",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿De qué ciudad idólatra llamó Dios a Abraham para ir a la tierra que le mostraría?",
    "options": [
      "Ur de los Caldeos",
      "Nínive",
      "Damasco",
      "Tiro"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 11:31; 12:1",
    "explanation": "Salieron con ellos de Ur de los caldeos para ir a la tierra de Canaán."
  },
  {
    "id": "e81",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿Por qué plato de comida vendió Esaú su primogenitura a su hermano Jacob?",
    "options": [
      "Un guisado de lentejas rojas",
      "Un pan caliente con queso",
      "Un cordero asado",
      "Una copa de miel"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 25:34",
    "explanation": "Entonces Jacob dio a Esaú pan y del guisado de las lentejas; y él comió y bebió."
  },
  {
    "id": "e82",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿Qué vio Jacob en su famoso sueño en Betel mientras dormía con una piedra por cabecera?",
    "options": [
      "Un río de cristal",
      "Una escalera que tocaba el cielo y ángeles de Dios subiendo y bajando",
      "Un carro de oro",
      "Un árbol gigantesco"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 28:12",
    "explanation": "Y soñó: y he aquí una escalera que estaba apoyada en tierra, y su extremo tocaba en el cielo."
  },
  {
    "id": "e83",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "José en Egipto",
    "question": "¿Qué significado tenían las 7 vacas gordas y las 7 vacas flacas en el sueño de Faraón interpretado por José?",
    "options": [
      "7 guerras y 7 victorias",
      "7 años de gran abundancia y 7 años de hambre",
      "7 reyes y 7 dinastías",
      "7 días de fiesta y 7 de luto"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 41:29-30",
    "explanation": "He aquí vienen siete años de gran abundancia... y tras ellos seguirán siete años de hambre."
  },
  {
    "id": "e84",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Éxodo",
    "question": "¿Quién era el hermano mayor de Moisés que fue nombrado el primer Sumo Sacerdote de Israel?",
    "options": [
      "Josué",
      "Aarón",
      "Caleb",
      "Hur"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 28:1",
    "explanation": "Haz llegar delante de ti a Aarón tu hermano... para que sean mis sacerdotes."
  },
  {
    "id": "e85",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Éxodo",
    "question": "¿Cómo guiaba Dios al pueblo de Israel en el desierto durante el día y durante la noche?",
    "options": [
      "Columna de nube de día y columna de fuego de noche",
      "Con estrellas fugaces",
      "Con trompetas celestiales",
      "Con ángeles visibles todo el tiempo"
    ],
    "correctAnswer": 0,
    "verse": "Éxodo 13:21",
    "explanation": "Jehová iba delante de ellos de día en una columna de nube... y de noche en una columna de fuego."
  },
  {
    "id": "e86",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Éxodo",
    "question": "¿Qué animal construyó el pueblo de Israel en oro para adorarlo mientras Moisés estaba en el monte Sinaí?",
    "options": [
      "Un león de oro",
      "Un becerro de oro",
      "Un águila de bronce",
      "Una serpiente alada"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 32:4",
    "explanation": "Y él los tomó de las manos de ellos, y le dio forma con buril, e hizo de ello un becerro de fundición."
  },
  {
    "id": "e87",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Números",
    "question": "¿Qué animal habló con voz humana al profeta Balaam cuando vio al Ángel de Jehová con la espada desenvainada?",
    "options": [
      "Una oveja",
      "Su asna",
      "Un camello",
      "Un perro pastor"
    ],
    "correctAnswer": 1,
    "verse": "Números 22:28",
    "explanation": "Entonces Jehová abrió la boca al asna, la cual dijo a Balaam: ¿Qué te he hecho, que me has azotado estas tres veces?"
  },
  {
    "id": "e88",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Josué",
    "question": "¿Quién fue el sucesor de Moisés que lideró al pueblo de Israel para cruzar el Jordán y conquistar la Tierra Prometida?",
    "options": [
      "Gedeón",
      "Josué",
      "Sansón",
      "Caleb"
    ],
    "correctAnswer": 1,
    "verse": "Josué 1:1-2",
    "explanation": "Jehová habló a Josué hijo de Nun: \"Mi siervo Moisés ha muerto; ahora, pues, levántate y pasa este Jordán.\""
  },
  {
    "id": "e89",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Josué",
    "question": "¿Qué mujer de Jericó escondió a los espías de Israel y puso un cordón de grana en su ventana para salvar a su familia?",
    "options": [
      "Débora",
      "Rahab",
      "Dalila",
      "Jael"
    ],
    "correctAnswer": 1,
    "verse": "Josué 2:18; 6:25",
    "explanation": "Rahab ató el cordón de grana a la ventana y ella y su familia fueron salvadas."
  },
  {
    "id": "e90",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Con cuántos hombres escogidos venció Gedeón al inmenso ejército de los madianitas usando cántaros, teas y trompetas?",
    "options": [
      "300 hombres",
      "1,000 hombres",
      "10,000 hombres",
      "30,000 hombres"
    ],
    "correctAnswer": 0,
    "verse": "Jueces 7:7",
    "explanation": "Jehová dijo a Gedeón: Con estos trescientos hombres que lamieron el agua os salvaré."
  },
  {
    "id": "e91",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Qué mujer engañó a Sansón hasta descubrir de dónde procedía su gran fuerza?",
    "options": [
      "Jezabel",
      "Dalila",
      "Atalía",
      "Mical"
    ],
    "correctAnswer": 1,
    "verse": "Jueces 16:4-19",
    "explanation": "Dalila rogó a Sansón hasta que él le abrió todo su corazón y reveló el voto de su cabello."
  },
  {
    "id": "e92",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "¿Cómo se llamaba la piadosa madre de Samuel que oró llorando en el tabernáculo de Silo pidiendo un hijo?",
    "options": [
      "Ana",
      "Penina",
      "Elisabet",
      "Marta"
    ],
    "correctAnswer": 0,
    "verse": "1 Samuel 1:10-20",
    "explanation": "Ana oró con amargura de alma y Dios se acordó de ella y dio a luz a Samuel."
  },
  {
    "id": "e93",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "¿Qué instrumento musical tocaba el joven David para calmar al rey Saúl cuando lo atormentaba un espíritu malo?",
    "options": [
      "La flauta",
      "El arpa",
      "La trompeta",
      "El pandero"
    ],
    "correctAnswer": 1,
    "verse": "1 Samuel 16:23",
    "explanation": "David tomaba el arpa y tocaba con su mano; y Saúl tenía alivio y estaba mejor."
  },
  {
    "id": "e94",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "¿Quién fue el hijo del rey Saúl y el mejor amigo entrañable de David?",
    "options": [
      "Absalón",
      "Jonatán",
      "Amnón",
      "Adonías"
    ],
    "correctAnswer": 1,
    "verse": "1 Samuel 18:1",
    "explanation": "El alma de Jonatán quedó ligada con la de David, y lo amó Jonatán como a sí mismo."
  },
  {
    "id": "e95",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Samuel",
    "question": "¿Qué ciudad conquistó el rey David y la convirtió en la capital de su reino, llamada \"la ciudad de David\"?",
    "options": [
      "Hebrón",
      "Jerusalén (Sión)",
      "Samaria",
      "Jericó"
    ],
    "correctAnswer": 1,
    "verse": "2 Samuel 5:7-9",
    "explanation": "David tomó la fortaleza de Sion, la cual es la ciudad de David."
  },
  {
    "id": "e96",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Reyes",
    "question": "¿Qué reina extranjera viajó desde los confines de la tierra para comprobar la fama y sabiduría de Salomón?",
    "options": [
      "La reina de Saba",
      "La reina de Egipto",
      "La reina de Babilonia",
      "La reina de Tiro"
    ],
    "correctAnswer": 0,
    "verse": "1 Reyes 10:1-2",
    "explanation": "Oyendo la reina de Sabá la fama que Salomón había alcanzado... vino a probarle con preguntas difíciles."
  },
  {
    "id": "e97",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Reyes",
    "question": "En el monte Carmelo, ¿contra los profetas de qué dios falso compitió el profeta Elías?",
    "options": [
      "Moloc",
      "Baal (450 profetas de Baal)",
      "Dagón",
      "Diana"
    ],
    "correctAnswer": 1,
    "verse": "1 Reyes 18:21-22",
    "explanation": "Elías desafió a los 450 profetas de Baal; y el Dios que respondió con fuego del cielo fue Jehová."
  },
  {
    "id": "e98",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿Qué general sirio fue sanado de lepra al lavarse siete veces en las aguas del río Jordán siguiendo el consejo de Eliseo?",
    "options": [
      "Ben-hadad",
      "Naamán",
      "Hazael",
      "Senaquerib"
    ],
    "correctAnswer": 1,
    "verse": "2 Reyes 5:14",
    "explanation": "Naamán descendió y se zambulló siete veces en el Jordán... y su carne se volvió como la de un niño."
  },
  {
    "id": "e99",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Salmos",
    "question": "Completa el Salmo 119:105: \"Lámpara es a mis pies tu palabra, y _________ a mi camino.\"",
    "options": [
      "guía",
      "lumbrera",
      "estrella",
      "antorcha"
    ],
    "correctAnswer": 1,
    "verse": "Salmos 119:105",
    "explanation": "Salmos 119:105: \"Lámpara es a mis pies tu palabra, y lumbrera a mi camino.\""
  },
  {
    "id": "e100",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Salmos",
    "question": "Completa el Salmo 46:1: \"Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las _________\"",
    "options": [
      "alegrías",
      "tribulaciones",
      "batallas",
      "noches"
    ],
    "correctAnswer": 1,
    "verse": "Salmos 46:1",
    "explanation": "Salmos 46:1: \"Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.\""
  },
  {
    "id": "e101",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Proverbios",
    "question": "Completa Proverbios 1:7: \"El principio de la sabiduría es el _________ de Jehová\"",
    "options": [
      "amor",
      "temor",
      "poder",
      "nombre"
    ],
    "correctAnswer": 1,
    "verse": "Proverbios 1:7",
    "explanation": "Proverbios 1:7: \"El principio de la sabiduría es el temor de Jehová; los insensatos desprecian la sabiduría y la enseñanza.\""
  },
  {
    "id": "e102",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Proverbios",
    "question": "Completa Proverbios 3:5: \"Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia _________\"",
    "options": [
      "prudencia",
      "riqueza",
      "fuerza",
      "voluntad"
    ],
    "correctAnswer": 0,
    "verse": "Proverbios 3:5",
    "explanation": "Proverbios 3:5: \"Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.\""
  },
  {
    "id": "e103",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Isaías",
    "question": "Completa Isaías 40:31: \"Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las _________\"",
    "options": [
      "palomas",
      "águilas",
      "golondrinas",
      "garzas"
    ],
    "correctAnswer": 1,
    "verse": "Isaías 40:31",
    "explanation": "Isaías 40:31: \"...levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.\""
  },
  {
    "id": "e104",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Evangelios",
    "question": "¿Cuántos evangelios componen el inicio del Nuevo Testamento en la Biblia?",
    "options": [
      "3 evangelios",
      "4 evangelios (Mateo, Marcos, Lucas, Juan)",
      "7 evangelios",
      "12 evangelios"
    ],
    "correctAnswer": 1,
    "verse": "Nuevo Testamento",
    "explanation": "Los cuatro evangelios canónicos son Mateo, Marcos, Lucas y Juan."
  },
  {
    "id": "e105",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Jesús en el Templo",
    "question": "¿A qué edad se quedó el niño Jesús en el Templo de Jerusalén dialogando con los doctores de la ley?",
    "options": [
      "A los 7 años",
      "A los 12 años",
      "A los 15 años",
      "A los 30 años"
    ],
    "correctAnswer": 1,
    "verse": "Lucas 2:42-46",
    "explanation": "Cuando tuvo doce años, subieron a Jerusalén conforme a la costumbre de la fiesta."
  },
  {
    "id": "e106",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Ministerio de Jesús",
    "question": "¿En qué famoso sermón dio Jesús las Bienaventuranzas (\"Bienaventurados los pobres en espíritu...\")?",
    "options": [
      "En el Sermón del Monte",
      "En el Pozo de Jacob",
      "En el huerto de Getsemaní",
      "En la barca de Pedro"
    ],
    "correctAnswer": 0,
    "verse": "Mateo 5:1-12",
    "explanation": "Viendo la multitud, subió al monte; y sentándose... abrió su boca y les enseñaba diciendo: Bienaventurados..."
  },
  {
    "id": "e107",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "La Oración del Padre Nuestro",
    "question": "Completa la oración que Jesús enseñó: \"Padre nuestro que estás en los cielos, santificado sea tu _________\"",
    "options": [
      "reino",
      "nombre",
      "templo",
      "trono"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 6:9",
    "explanation": "Mateo 6:9: \"Padre nuestro que estás en los cielos, santificado sea tu nombre.\""
  },
  {
    "id": "e108",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿Qué discípulo intentó caminar sobre las aguas hacia Jesús pero comenzó a hundirse por dudar?",
    "options": [
      "Juan",
      "Pedro",
      "Tomás",
      "Andrés"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 14:28-31",
    "explanation": "Pedro descendió de la barca y anduvo sobre las aguas para ir a Jesús. Pero al ver el viento fuerte, tuvo miedo y comenzó a hundirse."
  },
  {
    "id": "e109",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿Qué hizo Jesús cuando se desató una gran tempestad en el mar mientras dormía en la barca?",
    "options": [
      "Saltó de la barca",
      "Se despertó y reprendió a los vientos y al mar, y se hizo grande bonanza",
      "Pidió ayuda a otros barcos",
      "Les dijo que remaran más rápido"
    ],
    "correctAnswer": 1,
    "verse": "Marcos 4:39",
    "explanation": "Y levantándose, reprendió al viento, y dijo al mar: Calla, enmudece. Y cesó el viento, y se hizo grande bonanza."
  },
  {
    "id": "e110",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿Cómo sanó una mujer que padecía de flujo de sangre desde hacía 12 años?",
    "options": [
      "Tomando medicina herbal",
      "Tocando con fe el borde del manto de Jesús",
      "Lavándose en el estanque de Siloé",
      "Ofreciendo dos monedas de plata"
    ],
    "correctAnswer": 1,
    "verse": "Marcos 5:27-29",
    "explanation": "Vino por detrás entre la multitud, y tocó su manto... y enseguida la fuente de su sangre se secó."
  },
  {
    "id": "e111",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿A qué niña de 12 años, hija de un principal de la sinagoga, resucitó Jesús diciendo: \"Talita cumi\"?",
    "options": [
      "A la hija de Jairo",
      "A la hija de la viuda de Naín",
      "A la hija de Marta",
      "A la hermana de Lázaro"
    ],
    "correctAnswer": 0,
    "verse": "Marcos 5:22; 41-42",
    "explanation": "Tomando la mano de la niña, le dijo: Talita cumi; que traducido es: Niña, a ti te digo, levántate."
  },
  {
    "id": "e112",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Encuentros con Jesús",
    "question": "¿Junto a qué pozo le pidió Jesús agua a una mujer samaritana y le ofreció \"agua viva\"?",
    "options": [
      "Pozo de Abraham",
      "Pozo de Jacob en Sicar",
      "Pozo de Betsaida",
      "Pozo de Beerseba"
    ],
    "correctAnswer": 1,
    "verse": "Juan 4:5-14",
    "explanation": "Vino una mujer de Samaria a sacar agua; y Jesús le dijo: Dame de beber... el que bebiere del agua que yo le daré, no tendrá sed jamás."
  },
  {
    "id": "e113",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Encuentros con Jesús",
    "question": "¿Qué maestro fariseo fue a hablar con Jesús de noche y escuchó que debía \"nacer de nuevo\"?",
    "options": [
      "Gamaliel",
      "Nicodemo",
      "Caifás",
      "Anás"
    ],
    "correctAnswer": 1,
    "verse": "Juan 3:1-3",
    "explanation": "Había un hombre de los fariseos que se llamaba Nicodemo... Jesús le dijo: De cierto te digo, que el que no naciere de nuevo, no puede ver el reino de Dios."
  },
  {
    "id": "e114",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "El Versículo de Oro",
    "question": "Completa Juan 3:16: \"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga _________\"",
    "options": [
      "riquezas terrenales",
      "vida eterna",
      "fama y honra",
      "paz momentánea"
    ],
    "correctAnswer": 1,
    "verse": "Juan 3:16",
    "explanation": "Juan 3:16: \"...para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.\""
  },
  {
    "id": "e115",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Jesús el Buen Pastor",
    "question": "Completa Juan 10:11: \"Yo soy el buen pastor; el buen pastor su _________ da por las ovejas.\"",
    "options": [
      "vara",
      "vida",
      "oro",
      "casa"
    ],
    "correctAnswer": 1,
    "verse": "Juan 10:11",
    "explanation": "Juan 10:11: \"Yo soy el buen pastor; el buen pastor su vida da por las ovejas.\""
  },
  {
    "id": "e116",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Jesús el Camino",
    "question": "Completa Juan 14:6: \"Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por _________\"",
    "options": [
      "las buenas obras",
      "mí",
      "la ley de Moisés",
      "los profetas"
    ],
    "correctAnswer": 1,
    "verse": "Juan 14:6",
    "explanation": "Juan 14:6: \"Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.\""
  },
  {
    "id": "e117",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Entrada Triunfal",
    "question": "¿Sobre qué animal montó Jesús al entrar humildemente a Jerusalén mientras la gente aclamaba \"¡Hosanna!\"?",
    "options": [
      "Un caballo blanco de guerra",
      "Un pollino de asna",
      "Un camello de gala",
      "Un carruaje de bronce"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 21:5-9",
    "explanation": "He aquí, tu Rey viene a ti, manso, y sentado sobre una asna, sobre un pollino hijo de animal de carga."
  },
  {
    "id": "e118",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "El Calvario",
    "question": "¿Qué le pusieron los soldados romanos a Jesús sobre la cabeza como burla a su realeza?",
    "options": [
      "Una corona de oro",
      "Una corona de espinas",
      "Un gorro de púrpura",
      "Un velo de luto"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 27:29",
    "explanation": "Pusieron sobre su cabeza una corona tejida de espinas, y una caña en su mano derecha."
  },
  {
    "id": "e119",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "La Cruz",
    "question": "¿A quién perdonó Jesús en la cruz cuando le dijo: \"De cierto te digo que hoy estarás conmigo en el paraíso\"?",
    "options": [
      "A Poncio Pilato",
      "Al ladrón arrepentido crucificado a su lado",
      "Al centurión romano",
      "A Barrabás"
    ],
    "correctAnswer": 1,
    "verse": "Lucas 23:42-43",
    "explanation": "El malhechor arrepentido le dijo: Acuérdate de mí cuando vengas en tu reino. Y Jesús le dio la promesa de salvación."
  },
  {
    "id": "e120",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "La Tumba Vacía",
    "question": "¿Quién fue la primera mujer que fue de madrugada al sepulcro y vio que la piedra había sido quitada?",
    "options": [
      "María Magdalena",
      "Marta de Betania",
      "Salomé",
      "Elisabet"
    ],
    "correctAnswer": 0,
    "verse": "Juan 20:1",
    "explanation": "El primer día de la semana, María Magdalena fue de mañana, siendo aún oscuro, al sepulcro; y vio quitada la piedra."
  },
  {
    "id": "e121",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Apariciones de Jesús",
    "question": "¿Qué apóstol dijo: \"Si no viere en sus manos la señal de los clavos... no creeré\", hasta que vio a Jesús resucitado?",
    "options": [
      "Tomás",
      "Bartolomé",
      "Felipe",
      "Judas Tadeo"
    ],
    "correctAnswer": 0,
    "verse": "Juan 20:25-28",
    "explanation": "Tomás respondió y le dijo: ¡Señor mío, y Dios mío! Jesús le dijo: Porque me has visto, Tomás, creíste; bienaventurados los que no vieron, y creyeron."
  },
  {
    "id": "e122",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "La Ascensión",
    "question": "¿Hacia dónde ascendió Jesús a la vista de sus discípulos mientras una nube le ocultó de sus ojos?",
    "options": [
      "Hacia el desierto",
      "Hacia el cielo",
      "Hacia las profundidades del mar",
      "Hacia el templo"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 1:9-11",
    "explanation": "Fue alzado, y le recibió una nube que le ocultó de sus ojos. Y dos varones con vestiduras blancas dijeron: Este mismo Jesús... vendrá otra vez."
  },
  {
    "id": "e123",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "En la puerta de la Hermosa del templo, ¿en el nombre de quién levantaron Pedro y Juan a un hombre cojo de nacimiento?",
    "options": [
      "En el nombre de Moisés",
      "En el nombre de Jesucristo de Nazaret",
      "En el nombre de David",
      "En el nombre del sumo sacerdote"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 3:6",
    "explanation": "Pedro dijo: No tengo plata ni oro, pero lo que tengo te doy; en el nombre de Jesucristo de Nazaret, levántate y anda."
  },
  {
    "id": "e124",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Fruto del Espíritu",
    "question": "Completa Gálatas 5:22: \"Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, _________\"",
    "options": [
      "riqueza",
      "fe",
      "orgullo",
      "fama"
    ],
    "correctAnswer": 1,
    "verse": "Gálatas 5:22-23",
    "explanation": "Gálatas 5:22: \"Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza.\""
  },
  {
    "id": "e125",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Victoria en Cristo",
    "question": "Completa Filipenses 4:13: \"Todo lo puedo en Cristo que me _________\"",
    "options": [
      "juzga",
      "fortalece",
      "observa",
      "exige"
    ],
    "correctAnswer": 1,
    "verse": "Filipenses 4:13",
    "explanation": "Filipenses 4:13: \"Todo lo puedo en Cristo que me fortalece.\""
  },
  {
    "id": "e126",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿De qué material formó Dios al primer hombre, Adán?",
    "options": [
      "De oro refinado",
      "Del polvo de la tierra",
      "De madera de cedro",
      "De una roca del Edén"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 2:7",
    "explanation": "Entonces Jehová Dios formó al hombre del polvo de la tierra, y sopló en su nariz aliento de vida."
  },
  {
    "id": "e127",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿De qué parte de Adán creó Dios a la primera mujer, Eva?",
    "options": [
      "De una de sus costillas",
      "De un cabello suyo",
      "De su mano derecha",
      "Del barro del río"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 2:21-22",
    "explanation": "De la costilla que Jehová Dios tomó del hombre, hizo una mujer, y la trajo al hombre."
  },
  {
    "id": "e128",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Cuántas personas en total se salvaron en el arca de Noé?",
    "options": [
      "4 personas",
      "8 personas (Noé, su esposa, sus 3 hijos y sus 3 nueras)",
      "12 personas",
      "70 personas"
    ],
    "correctAnswer": 1,
    "verse": "1 Pedro 3:20 / Génesis 7:13",
    "explanation": "En los días de Noé... pocas personas, es decir, ocho, fueron salvadas por agua."
  },
  {
    "id": "e129",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿Qué animal proveyó Dios para que Abraham sacrificara en el monte Moriah en lugar de su hijo Isaac?",
    "options": [
      "Un carnero trabado en un zarzal por sus cuernos",
      "Un buey blanco",
      "Una tórtola limpia",
      "Un león joven"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 22:13",
    "explanation": "Alzando Abraham sus ojos, miró, y he aquí a sus espaldas un carnero trabado en un zarzal por sus cuernos."
  },
  {
    "id": "e130",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿Cuántos hijos varones tuvo Jacob, que dieron origen a las 12 tribus de Israel?",
    "options": [
      "7 hijos",
      "10 hijos",
      "12 hijos",
      "14 hijos"
    ],
    "correctAnswer": 2,
    "verse": "Génesis 35:22",
    "explanation": "Los hijos de Jacob fueron doce, cabezas de las doce tribus de Israel."
  },
  {
    "id": "e131",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿Cuál era el hijo menor de Jacob, nacido de su amada esposa Raquel?",
    "options": [
      "Rubén",
      "Judá",
      "Benjamín",
      "Dan"
    ],
    "correctAnswer": 2,
    "verse": "Génesis 35:18",
    "explanation": "Raquel dio a luz a Benjamín, el hijo menor de Jacob."
  },
  {
    "id": "e132",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Éxodo",
    "question": "¿Qué le mandó Dios hacer a Moisés con su vara frente a la roca en Horeb para que saliera agua para el pueblo?",
    "options": [
      "Enterrar la vara",
      "Golpear la roca",
      "Quemar la roca",
      "Echar agua sobre ella"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 17:6",
    "explanation": "Golpearás la peña, y saldrán de ella aguas, y beberá el pueblo."
  },
  {
    "id": "e133",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "El Tabernáculo",
    "question": "¿Qué objeto sagrado con querubines de oro en su cubierta guardaba las tablas de la Ley en el Lugar Santísimo?",
    "options": [
      "El Altar del Incienso",
      "El Arca del Pacto (o del Testimonio)",
      "El Candelabro de oro",
      "La Mesa del Pan de la Proposición"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 25:10-22",
    "explanation": "Pondrás el propiciatorio encima del arca, y en el arca pondrás el testimonio que yo te daré."
  },
  {
    "id": "e134",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Los Espías",
    "question": "De los 12 espías que Moisés envió a explorar Canaán, ¿cuáles dos trajeron un informe de fe animando al pueblo a confiar en Dios?",
    "options": [
      "Josué y Caleb",
      "Aarón y Hur",
      "Nadab y Abiú",
      "Core y Datán"
    ],
    "correctAnswer": 0,
    "verse": "Números 14:6-9",
    "explanation": "Josué hijo de Nun y Caleb hijo de Jefone dijeron: \"Si Jehová se agradare de nosotros, él nos llevará a esta tierra.\""
  },
  {
    "id": "e135",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Quién fue la única mujer que fue jueza y profetisa en Israel, que se sentaba bajo una palmera a juzgar al pueblo?",
    "options": [
      "Rut",
      "Débora",
      "Ana",
      "Ester"
    ],
    "correctAnswer": 1,
    "verse": "Jueces 4:4-5",
    "explanation": "Gobernaba en aquel tiempo a Israel una mujer, Débora, profetisa... y se sentaba bajo la palmera de Débora."
  },
  {
    "id": "e136",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Qué señal pidió Gedeón a Dios usando un vellón de lana en la era para confirmar su llamado?",
    "options": [
      "Que el vellón estuviera mojado de rocío y la tierra seca, y luego al revés",
      "Que el vellón ardiera sin consumirse",
      "Que el vellón se volviera púrpura",
      "Que lloviera fuego del cielo"
    ],
    "correctAnswer": 0,
    "verse": "Jueces 6:36-40",
    "explanation": "Gedeón pidió la señal del rocío sobre el vellón de lana para confirmar que Dios salvaría a Israel."
  },
  {
    "id": "e137",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Rut",
    "question": "¿Quién fue el pariente redentor rico en Belén que se casó con Rut la moabita?",
    "options": [
      "Elimelec",
      "Booz",
      "Mahlón",
      "Quilión"
    ],
    "correctAnswer": 1,
    "verse": "Rut 4:9-13",
    "explanation": "Booz tomó a Rut y ella fue su mujer, y dio a luz a Obed, abuelo del rey David."
  },
  {
    "id": "e138",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Rey David",
    "question": "¿Cuántas piedras lisas tomó David del arroyo en su saco de pastor para enfrentar a Goliat?",
    "options": [
      "1 piedra",
      "3 piedras",
      "5 piedras lisas",
      "7 piedras"
    ],
    "correctAnswer": 2,
    "verse": "1 Samuel 17:40",
    "explanation": "Tomó su cayado en su mano, y escogió cinco piedras lisas del arroyo, y las puso en el saco pastoril."
  },
  {
    "id": "e139",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Rey David",
    "question": "¿Cómo demostró David que no quería hacerle daño al rey Saúl cuando lo encontró durmiendo en una cueva en En-gadi?",
    "options": [
      "Le robó su corona",
      "Le cortó la orilla del manto en silencio",
      "Despertó a sus soldados",
      "Le dejó una carta de paz"
    ],
    "correctAnswer": 1,
    "verse": "1 Samuel 24:4",
    "explanation": "Se levantó David, y calladamente cortó la orilla del manto de Saúl, perdonándole la vida."
  },
  {
    "id": "e140",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Samuel",
    "question": "¿A qué hijo lisiado de su amigo Jonatán acogió David en su mesa real de por vida?",
    "options": [
      "Mefiboset",
      "Is-boset",
      "Quilión",
      "Amnón"
    ],
    "correctAnswer": 0,
    "verse": "2 Samuel 9:6-7",
    "explanation": "David dijo a Mefiboset: No tengas temor, porque yo a la verdad haré contigo misericordia... y tú comerás siempre a mi mesa."
  },
  {
    "id": "e141",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Eliseo",
    "question": "¿Qué objeto de hierro flotó milagrosamente en el río Jordán cuando Eliseo arrojó un leño al agua?",
    "options": [
      "Una punta de lanza",
      "El hacha prestada de un profeta",
      "Una espada de bronce",
      "Un yelmo militar"
    ],
    "correctAnswer": 1,
    "verse": "2 Reyes 6:5-7",
    "explanation": "Cortó un palo, y lo echó allí; e hizo flotar el hierro del hacha."
  },
  {
    "id": "e142",
    "level": "EASY",
    "type": "TRUE_FALSE",
    "category": "Libro de Job",
    "question": "¿Verdadero o Falso? A pesar de perder sus riquezas, sus hijos y su salud, Job no pecó ni atribuyó a Dios despropósito alguno.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "verse": "Job 1:21-22",
    "explanation": "\"Jehová dio, y Jehová quitó; sea el nombre de Jehová bendito. En todo esto no pecó Job, ni atribuyó a Dios despropósito alguno.\""
  },
  {
    "id": "e143",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Salmos",
    "question": "Completa el Salmo 100:3: \"Reconoced que Jehová es Dios; él nos hizo, y no nosotros a nosotros mismos; pueblo suyo somos, y _________ de su prado.\"",
    "options": [
      "leones",
      "ovejas",
      "flores",
      "guerreros"
    ],
    "correctAnswer": 1,
    "verse": "Salmos 100:3",
    "explanation": "Salmos 100:3: \"...pueblo suyo somos, y ovejas de su prado.\""
  },
  {
    "id": "e144",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Salmos",
    "question": "Completa el Salmo 91:1: \"El que habita al abrigo del Altísimo morará bajo la _________ del Omnipotente.\"",
    "options": [
      "luz",
      "sombra",
      "espada",
      "mano"
    ],
    "correctAnswer": 1,
    "verse": "Salmos 91:1",
    "explanation": "Salmos 91:1: \"El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.\""
  },
  {
    "id": "e145",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Proverbios",
    "question": "Según Proverbios 6:6, ¿a qué pequeño insecto laborioso se le manda ir al perezoso para aprender sabiduría?",
    "options": [
      "A la abeja",
      "A la hormiga",
      "A la mariposa",
      "A la araña"
    ],
    "correctAnswer": 1,
    "verse": "Proverbios 6:6",
    "explanation": "Ve a la hormiga, oh perezoso, mira sus caminos, y sé sabio."
  },
  {
    "id": "e146",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Proverbios",
    "question": "Completa Proverbios 15:1: \"La blanda respuesta quita la ira; mas la palabra áspera hace subir el _________\"",
    "options": [
      "furor",
      "llanto",
      "miedo",
      "orgullo"
    ],
    "correctAnswer": 0,
    "verse": "Proverbios 15:1",
    "explanation": "Proverbios 15:1: \"La blanda respuesta quita la ira; mas la palabra áspera hace subir el furor.\""
  },
  {
    "id": "e147",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Eclesiastés",
    "question": "Completa Eclesiastés 3:1: \"Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su _________\"",
    "options": [
      "precio",
      "hora",
      "límite",
      "fin"
    ],
    "correctAnswer": 1,
    "verse": "Eclesiastés 3:1",
    "explanation": "Eclesiastés 3:1: \"Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora.\""
  },
  {
    "id": "e148",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Profetas",
    "question": "¿Qué profeta es conocido como \"el profeta llorón\" por su profundo dolor por el pecado y destrucción de Jerusalén?",
    "options": [
      "Isaías",
      "Jeremías",
      "Ezequiel",
      "Miqueas"
    ],
    "correctAnswer": 1,
    "verse": "Jeremías 9:1 / Lamentaciones",
    "explanation": "Jeremías lamentó con lágrimas la rebelión de su pueblo y escribió el libro de Lamentaciones."
  },
  {
    "id": "e149",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Ezequiel",
    "question": "¿En qué visión profética vio Ezequiel cómo huesos secos cobraban vida y se levantaban como un gran ejército al soplar el Espíritu?",
    "options": [
      "En el monte Sinaí",
      "En el valle de los huesos secos",
      "En el mar de cristal",
      "En el templo de Salomón"
    ],
    "correctAnswer": 1,
    "verse": "Ezequiel 37:1-10",
    "explanation": "Y profetizó... y entró espíritu en ellos, y vivieron, y estuvieron sobre sus pies, un ejército grande en extremo."
  },
  {
    "id": "e150",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Daniel",
    "question": "¿Qué alimento sencillo y agua pidieron comer Daniel y sus tres amigos en Babilonia para no contaminarse con la comida del rey?",
    "options": [
      "Legumbres y agua",
      "Carne de cordero y leche",
      "Uvas y pan ácimo",
      "Maná del cielo"
    ],
    "correctAnswer": 0,
    "verse": "Daniel 1:12-15",
    "explanation": "Pruébanos por diez días dando legumbres a comer y agua a beber; y sus rostros se veían mejores que los demás."
  },
  {
    "id": "e151",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Jonás",
    "question": "¿A qué gran ciudad enemiga envió Dios al profeta Jonás a predicar el mensaje de arrepentimiento?",
    "options": [
      "Tiro",
      "Nínive",
      "Babilonia",
      "Roma"
    ],
    "correctAnswer": 1,
    "verse": "Jonás 1:2; 3:2-5",
    "explanation": "Levántate y ve a Nínive, aquella gran ciudad, y proclama en ella el mensaje que yo te diré."
  },
  {
    "id": "e152",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Evangelio de Mateo",
    "question": "¿Qué profesión tenía Mateo (Leví) antes de dejarlo todo y seguir a Jesús?",
    "options": [
      "Pescador de peces",
      "Recaudador de impuestos (publicano)",
      "Médico",
      "Carpintero"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 9:9",
    "explanation": "Vio Jesús a un hombre llamado Mateo, que estaba sentado al banco de los tributos públicos, y le dijo: Sígueme."
  },
  {
    "id": "e153",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Evangelio de Lucas",
    "question": "¿Qué profesión tenía Lucas, el autor del tercer Evangelio y del libro de Hechos de los Apóstoles?",
    "options": [
      "Pescador",
      "Médico amado",
      "Centurión",
      "Escriba fariseo"
    ],
    "correctAnswer": 1,
    "verse": "Colosenses 4:14",
    "explanation": "Pablo lo describe en Colosenses 4:14: \"Os saluda Lucas el médico amado.\""
  },
  {
    "id": "e154",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Nacimiento de Jesús",
    "question": "¿A quiénes se les aparecieron los ángeles en el campo en la noche cantando: \"¡Gloria a Dios en las alturas y en la tierra paz!\"?",
    "options": [
      "A los reyes del palacio",
      "A los pastores que velaban sus rebaños",
      "A los sacerdotes en el templo",
      "A los pescadores en el lago"
    ],
    "correctAnswer": 1,
    "verse": "Lucas 2:8-14",
    "explanation": "Había pastores en la misma región velando sus rebaños y se les presentó un ángel del Señor con buenas nuevas de gran gozo."
  },
  {
    "id": "e155",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Ministerio de Jesús",
    "question": "Completa Mateo 5:14: \"Vosotros sois la _________ del mundo; una ciudad asentada sobre un monte no se puede esconder.\"",
    "options": [
      "luz",
      "sal",
      "fuerza",
      "voz"
    ],
    "correctAnswer": 0,
    "verse": "Mateo 5:14",
    "explanation": "Mateo 5:14: \"Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder.\""
  },
  {
    "id": "e156",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Ministerio de Jesús",
    "question": "Completa Mateo 5:13: \"Vosotros sois la _________ de la tierra; pero si pierde su sabor, ¿con qué será salada?\"",
    "options": [
      "luz",
      "sal",
      "agua",
      "semilla"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 5:13",
    "explanation": "Mateo 5:13: \"Vosotros sois la sal de la tierra.\""
  },
  {
    "id": "e157",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿Qué mendigo ciego clamaba junto al camino de Jericó: \"¡Jesús, Hijo de David, ten misericordia de mí!\" hasta recibir la vista?",
    "options": [
      "Bartimeo",
      "Zaqueo",
      "Lázaro",
      "Simón"
    ],
    "correctAnswer": 0,
    "verse": "Marcos 10:46-52",
    "explanation": "Bartimeo el ciego... comenzó a dar voces y a decir: ¡Jesús, Hijo de David, ten misericordia de mí! Y recobró la vista."
  },
  {
    "id": "e158",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿A cuántos hombres leprosos limpió Jesús de los cuales solo uno (un samaritano) regresó a darle gracias?",
    "options": [
      "3 leprosos",
      "7 leprosos",
      "10 leprosos",
      "12 leprosos"
    ],
    "correctAnswer": 2,
    "verse": "Lucas 17:12-17",
    "explanation": "Jesús dijo: ¿No son diez los que fueron limpiados? Y los nueve, ¿dónde están? ¿No hubo quien volviese a dar gloria a Dios sino este extranjero?"
  },
  {
    "id": "e159",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿Cómo bajaron cuatro amigos a un hombre paralítico hasta los pies de Jesús en Capernaúm?",
    "options": [
      "Por la puerta trasera",
      "Abriendo el techo de la casa y bajando el lecho con cuerdas",
      "Por la ventana de la sala",
      "Esperando afuera en la calle"
    ],
    "correctAnswer": 1,
    "verse": "Marcos 2:4",
    "explanation": "Descubrieron el techo de donde estaba Jesús, y haciendo una abertura, bajaron el lecho en que yacía el paralítico."
  },
  {
    "id": "e160",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Parábolas de Jesús",
    "question": "En la parábola de la oveja perdida, ¿cuántas ovejas dejó el pastor seguras en el redil para ir a buscar a la una que se había extraviado?",
    "options": [
      "9 ovejas",
      "50 ovejas",
      "99 ovejas",
      "100 ovejas"
    ],
    "correctAnswer": 2,
    "verse": "Lucas 15:4",
    "explanation": "¿Qué hombre de vosotros, teniendo cien ovejas, si pierde una de ellas, no deja las noventa y nueve en el desierto, y va tras la que se perdió?"
  },
  {
    "id": "e161",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Parábolas de Jesús",
    "question": "¿Con qué semilla diminuta comparó Jesús el reino de los cielos, diciendo que siendo la más pequeña llega a ser un gran árbol?",
    "options": [
      "Semilla de trigo",
      "Semilla de mostaza",
      "Semilla de uva",
      "Semilla de olivo"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 13:31-32",
    "explanation": "El reino de los cielos es semejante al grano de mostaza... cuando ha crecido, es la mayor de las hortalizas, y se hace árbol."
  },
  {
    "id": "e162",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Parábolas de Jesús",
    "question": "En la parábola de los dos constructores, ¿sobre qué edificó su casa el hombre prudente para que resistiera las lluvias y vientos?",
    "options": [
      "Sobre la arena movediza",
      "Sobre la roca firme",
      "Sobre la hierba suave",
      "En la orilla de la playa"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 7:24-25",
    "explanation": "Cualquiera que me oye estas palabras, y las hace, le compararé a un hombre prudente, que edificó su casa sobre la roca."
  },
  {
    "id": "e163",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "La Última Semana",
    "question": "¿Qué hizo Jesús al entrar al Templo de Jerusalén cuando vio que habían hecho de la casa de oración una cueva de ladrones?",
    "options": [
      "Volcó las mesas de los cambistas y echó fuera a los que vendían",
      "Se sentó a discutir en silencio",
      "Construyó un nuevo muro",
      "Pidió limosna"
    ],
    "correctAnswer": 0,
    "verse": "Mateo 21:12-13",
    "explanation": "Volcó las mesas de los cambistas... y les dijo: Escrito está: Mi casa, casa de oración será llamada; mas vosotros la habéis hecho cueva de ladrones."
  },
  {
    "id": "e164",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "La Última Cena",
    "question": "¿Qué acto de suprema humildad y servicio realizó Jesús con una toalla y un lebrillo antes de la cena pascual?",
    "options": [
      "Lavó los pies de sus discípulos",
      "Peinó a sus discípulos",
      "Les cocinó un pez",
      "Les ungió la ropa con mirra"
    ],
    "correctAnswer": 0,
    "verse": "Juan 13:4-5",
    "explanation": "Puso agua en un lebrillo, y comenzó a lavar los pies de los discípulos, y a enjugarlos con la toalla con que estaba ceñido."
  },
  {
    "id": "e165",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "El Calvario",
    "question": "¿Qué gobernador romano se lavó las manos diciendo: \"Inocente soy yo de la sangre de este justo\", antes de entregar a Jesús?",
    "options": [
      "Herodes Antipas",
      "Poncio Pilato",
      "Félix",
      "Festo"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 27:24",
    "explanation": "Viendo Pilato que nada adelantaba... tomó agua y se lavó las manos delante del pueblo, diciendo: Inocente soy yo de la sangre de este justo."
  },
  {
    "id": "e166",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "La Cruz",
    "question": "¿Qué hombre de Cirene fue obligado por los soldados romanos a cargar la cruz de Jesús camino al Gólgota?",
    "options": [
      "Simón de Cirene",
      "José de Arimatea",
      "Nicodemo",
      "Barrabás"
    ],
    "correctAnswer": 0,
    "verse": "Mateo 27:32",
    "explanation": "Al salir, hallaron a un hombre de Cirene que se llamaba Simón; a éste obligaron a que llevase la cruz."
  },
  {
    "id": "e167",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "La Sepultura de Jesús",
    "question": "¿Qué discípulo secreto y miembro noble del concilio pidió el cuerpo de Jesús a Pilato y lo puso en su propio sepulcro nuevo?",
    "options": [
      "José de Arimatea",
      "Gamaliel",
      "Zaqueo",
      "Bernabé"
    ],
    "correctAnswer": 0,
    "verse": "Mateo 27:57-60",
    "explanation": "José de Arimatea pidió el cuerpo de Jesús... y lo puso en su sepulcro nuevo, que había labrado en la peña."
  },
  {
    "id": "e168",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Resurrección de Jesús",
    "question": "Completa Mateo 28:6, las palabras del ángel en la tumba: \"No está aquí, pues ha _________, como dijo. Venid, ved el lugar donde fue puesto el Señor.\"",
    "options": [
      "huido",
      "resucitado",
      "viajado",
      "dormido"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 28:6",
    "explanation": "Mateo 28:6: \"No está aquí, pues ha resucitado, como dijo.\""
  },
  {
    "id": "e169",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "La Gran Comisión",
    "question": "Completa la promesa final de Jesús en Mateo 28:20: \"Y he aquí yo estoy con vosotros _________ los días, hasta el fin del mundo.\"",
    "options": [
      "algunos de",
      "todos",
      "los primeros",
      "los mejores"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 28:20",
    "explanation": "Mateo 28:20: \"...y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.\""
  },
  {
    "id": "e170",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Quién fue el fiel creyente de Chipre apodado Bernabé, cuyo nombre significa \"Hijo de consolación\"?",
    "options": [
      "José Bernabé",
      "Silas",
      "Apolos",
      "Timoteo"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 4:36",
    "explanation": "José, a quien los apóstoles pusieron por sobrenombre Bernabé (que traducido es, Hijo de consolación)."
  },
  {
    "id": "e171",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué carcelero preguntó con temor y temblor a medianoche: \"Señores, ¿qué debo hacer para ser salvo?\" tras un gran terremoto?",
    "options": [
      "El carcelero de Filipos",
      "El centurión Cornelio",
      "El gobernador Sergio Paulo",
      "El centurión Julio"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 16:30-31",
    "explanation": "Ellos dijeron: Cree en el Señor Jesucristo, y serás salvo, tú y tu casa."
  },
  {
    "id": "e172",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Epístolas de Pablo",
    "question": "Completa Romanos 12:2: \"No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro _________\"",
    "options": [
      "cuerpo",
      "entendimiento",
      "vestido",
      "dinero"
    ],
    "correctAnswer": 1,
    "verse": "Romanos 12:2",
    "explanation": "Romanos 12:2: \"...sino transformaos por medio de la renovación de vuestro entendimiento.\""
  },
  {
    "id": "e173",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Epístolas de Pablo",
    "question": "Completa Efesios 2:8: \"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es _________ de Dios\"",
    "options": [
      "mandato",
      "don (regalo)",
      "exigencia",
      "préstamo"
    ],
    "correctAnswer": 1,
    "verse": "Efesios 2:8",
    "explanation": "Efesios 2:8: \"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.\""
  },
  {
    "id": "e174",
    "level": "EASY",
    "type": "FILL_VERSE",
    "category": "Epístola a los Hebreos",
    "question": "Completa Hebreos 11:1: \"Es, pues, la fe la certeza de lo que se espera, la convicción de lo que _________\"",
    "options": [
      "se compra",
      "no se ve",
      "se pierde",
      "se acaba"
    ],
    "correctAnswer": 1,
    "verse": "Hebreos 11:1",
    "explanation": "Hebreos 11:1: \"Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.\""
  },
  {
    "id": "e175",
    "level": "EASY",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "En Apocalipsis 21:4, ¿qué enjugará Dios de los ojos de los suyos en la Nueva Jerusalén?",
    "options": [
      "Toda lágrima, y ya no habrá muerte, ni llanto, ni clamor, ni dolor",
      "El polvo de la tierra",
      "El rocío del monte",
      "El cansancio"
    ],
    "correctAnswer": 0,
    "verse": "Apocalipsis 21:4",
    "explanation": "Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor."
  },
  {
    "id": "m1",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿Cuál fue el primer milagro público de Jesús según el Evangelio de Juan?",
    "options": [
      "Multiplicar los panes",
      "Caminar sobre el mar",
      "Convertir el agua en vino en Caná",
      "Sanar a diez leprosos"
    ],
    "correctAnswer": 2,
    "verse": "Juan 2:1-11",
    "explanation": "En las bodas de Caná de Galilea, Jesús manifestó por primera vez su gloria."
  },
  {
    "id": "m2",
    "level": "MEDIUM",
    "type": "WHO_SAID_IT",
    "category": "¿Quién lo dijo?",
    "question": "¿Quién declaró con convicción: \"Yo y mi casa serviremos a Jehová\"?",
    "options": [
      "Moisés",
      "Josué",
      "Gedeón",
      "Samuel"
    ],
    "correctAnswer": 1,
    "verse": "Josué 24:15",
    "explanation": "Josué lo proclamó al despedirse del pueblo de Israel reafirmando su lealtad a Dios."
  },
  {
    "id": "m3",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "El Fruto del Espíritu",
    "question": "¿Cuál de los siguientes NO es parte del fruto del Espíritu en Gálatas 5:22-23?",
    "options": [
      "Amor y Gozo",
      "Paciencia y Benignidad",
      "Orgullo y Fama",
      "Paz y Mansedumbre"
    ],
    "correctAnswer": 2,
    "verse": "Gálatas 5:22-23",
    "explanation": "El fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre y templanza."
  },
  {
    "id": "m4",
    "level": "MEDIUM",
    "type": "TRUE_FALSE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Verdadero o Falso? Saulo de Tarso perseguía a los cristianos antes de convertirse en el apóstol Pablo.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 9:1-6",
    "explanation": "Saulo respiraba amenazas y muerte contra los discípulos hasta que tuvo su encuentro con Cristo."
  },
  {
    "id": "m5",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Versículos Clave",
    "question": "Filipenses 4:13: \"Todo lo puedo en Cristo que me ____________\"",
    "options": [
      "fortalece",
      "sustenta",
      "guía",
      "ilumina"
    ],
    "correctAnswer": 0,
    "verse": "Filipenses 4:13",
    "explanation": "\"Todo lo puedo en Cristo que me fortalece.\""
  },
  {
    "id": "m6",
    "level": "MEDIUM",
    "type": "EMOJI_GUESS",
    "category": "Adivina el Personaje",
    "question": "¿Quién es este personaje? 👸 👑 📜 🇮🇱 🍽️ (\"Si perezco, que perezca\")",
    "options": [
      "Rut",
      "Ester",
      "Débora",
      "María Magdalena"
    ],
    "correctAnswer": 1,
    "verse": "Ester 4:16",
    "explanation": "La reina Ester arriesgó su vida para salvar al pueblo judío del complot de Amán."
  },
  {
    "id": "m7",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Profetas",
    "question": "¿A qué profeta se le apareció Dios en un silbo apacible y delicado en el monte Horeb?",
    "options": [
      "Isaías",
      "Jeremías",
      "Elías",
      "Ezequiel"
    ],
    "correctAnswer": 2,
    "verse": "1 Reyes 19:12",
    "explanation": "Dios no estaba en el fuego ni en el terremoto, sino en un silbo apacible."
  },
  {
    "id": "m8",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Parábolas",
    "question": "En la parábola del Hijo Pródigo, ¿qué animal mandó sacrificar el padre para celebrar el regreso?",
    "options": [
      "Un cordero sin mancha",
      "El becerro gordo",
      "Dos palominos",
      "Un cabrito"
    ],
    "correctAnswer": 1,
    "verse": "Lucas 15:23",
    "explanation": "\"Traed el becerro gordo y matadlo, y comamos y hagamos fiesta.\""
  },
  {
    "id": "m9",
    "level": "MEDIUM",
    "type": "WHO_SAID_IT",
    "category": "¿Quién lo dijo?",
    "question": "¿Quién clamó a Jesús en Jericó: \"¡Hijo de David, ten misericordia de mí!\" a pesar de que le mandaban callar?",
    "options": [
      "Zaqueo",
      "El ciego Bartimeo",
      "Nicodemo",
      "Lázaro"
    ],
    "correctAnswer": 1,
    "verse": "Marcos 10:47-48",
    "explanation": "Bartimeo perseveró con fe viva y Jesús le devolvió la vista."
  },
  {
    "id": "m10",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Pentecostés",
    "question": "¿En qué fiesta judía descendió el Espíritu Santo sobre los discípulos reunidos unánimes?",
    "options": [
      "La Pascua",
      "Pentecostés",
      "Tabernáculos",
      "Purim"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 2:1-4",
    "explanation": "Cuando llegó el día de Pentecostés, fueron todos llenos del Espíritu Santo."
  },
  {
    "id": "m11",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces de Israel",
    "question": "¿Qué juez de Israel redujo su ejército de 32,000 soldados a tan solo 300 valientes con trompetas y cántaros?",
    "options": [
      "Sansón",
      "Gedeón",
      "Jefté",
      "Barac"
    ],
    "correctAnswer": 1,
    "verse": "Jueces 7:7",
    "explanation": "Dios le dijo a Gedeón: \"Con estos trescientos hombres que lamieron el agua os salvaré\"."
  },
  {
    "id": "m12",
    "level": "MEDIUM",
    "type": "TRUE_FALSE",
    "category": "Los Apóstoles",
    "question": "¿Verdadero o Falso? Mateo, antes de seguir a Jesús, trabajaba como recaudador de impuestos.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "verse": "Mateo 9:9",
    "explanation": "Jesús vio a un hombre llamado Mateo sentado al banco de los tributos públicos y le dijo: Sígueme."
  },
  {
    "id": "m13",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Sabiduría",
    "question": "Proverbios 3:5: \"Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia ___________\"",
    "options": [
      "prudencia",
      "riqueza",
      "fuerza",
      "justicia"
    ],
    "correctAnswer": 0,
    "verse": "Proverbios 3:5",
    "explanation": "\"Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.\""
  },
  {
    "id": "m14",
    "level": "MEDIUM",
    "type": "EMOJI_GUESS",
    "category": "Adivina la Historia",
    "question": "¿Qué historia es? 🌳 🧗‍♂️ 💰 👀 🏠 (\"Hoy ha venido la salvación a esta casa\")",
    "options": [
      "Zaqueo en el sicómoro",
      "El joven rico",
      "La viuda pobre",
      "Lázaro y el rico"
    ],
    "correctAnswer": 0,
    "verse": "Lucas 19:1-9",
    "explanation": "Zaqueo, jefe de publicanos y de baja estatura, subió a un árbol sicómoro para ver a Jesús."
  },
  {
    "id": "m15",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Antiguo Testamento",
    "question": "¿Quién pidió a Dios \"un corazón entendido para juzgar y discernir entre lo bueno y lo malo\" en lugar de riquezas?",
    "options": [
      "David",
      "Salomón",
      "Josafat",
      "Ezequías"
    ],
    "correctAnswer": 1,
    "verse": "1 Reyes 3:9-12",
    "explanation": "Salomón pidió sabiduría para gobernar al pueblo y Dios le otorgó sabiduría incomparable."
  },
  {
    "id": "m16",
    "level": "MEDIUM",
    "type": "WHO_SAID_IT",
    "category": "¿Quién lo dijo?",
    "question": "¿Quién dijo a Jesús en una noche secreta: \"¿Cómo puede un hombre nacer siendo viejo?\"",
    "options": [
      "Nicodemo",
      "José de Arimatea",
      "Caifás",
      "Gamaliel"
    ],
    "correctAnswer": 0,
    "verse": "Juan 3:1-4",
    "explanation": "Nicodemo, principal entre los judíos, vino a Jesús de noche para conversar sobre el nuevo nacimiento."
  },
  {
    "id": "m17",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Parábolas",
    "question": "¿Quién curó y cuidó al hombre herido en el camino de Jerusalén a Jericó?",
    "options": [
      "Un sacerdote",
      "Un levita",
      "Un buen samaritano",
      "Un soldado romano"
    ],
    "correctAnswer": 2,
    "verse": "Lucas 10:33-35",
    "explanation": "El buen samaritano fue movido a misericordia, vendó sus heridas y lo llevó al mesón."
  },
  {
    "id": "m18",
    "level": "MEDIUM",
    "type": "TRUE_FALSE",
    "category": "La Iglesia Primitiva",
    "question": "¿Verdadero o Falso? Bernabé vendió una heredad que tenía y trajo el precio para ponerlo a los pies de los apóstoles.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 4:36-37",
    "explanation": "José, a quien los apóstoles llamaron Bernabé (Hijo de consolación), vendió una heredad y dio el dinero."
  },
  {
    "id": "m19",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Efesios",
    "question": "Efesios 2:8: \"Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es ________ de Dios\"",
    "options": [
      "premio",
      "don",
      "mandato",
      "pacto"
    ],
    "correctAnswer": 1,
    "verse": "Efesios 2:8",
    "explanation": "\"...no por obras, para que nadie se gloríe.\""
  },
  {
    "id": "m20",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿Cuántos días llevaba muerto Lázaro en el sepulcro cuando Jesús lo resucitó?",
    "options": [
      "1 día",
      "2 días",
      "3 días",
      "4 días"
    ],
    "correctAnswer": 3,
    "verse": "Juan 11:39",
    "explanation": "Marta dijo: \"Señor, hiede ya, porque es de cuatro días\". Y Jesús dijo: \"¡Lázaro, ven fuera!\"."
  },
  {
    "id": "m21",
    "level": "MEDIUM",
    "type": "EMOJI_GUESS",
    "category": "Adivina la Historia",
    "question": "¿Qué historia representan estos emojis? 🌾 👵 🤝 💍 🌾 (\"Dondequiera que tú fueres, iré yo\")",
    "options": [
      "Rut y Booz con Noemí",
      "Sara y Agar",
      "Raquel y Lea",
      "Marta y María"
    ],
    "correctAnswer": 0,
    "verse": "Rut 1:16",
    "explanation": "Rut demostró lealtad a su suegra Noemí y terminó casándose con Booz en Belén."
  },
  {
    "id": "m22",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Profetas",
    "question": "¿Cómo fue llevado el profeta Elías al cielo sin ver muerte física?",
    "options": [
      "En una nube de gloria",
      "En un torbellino en carro de fuego",
      "En alas de águila",
      "En un sueño santo"
    ],
    "correctAnswer": 1,
    "verse": "2 Reyes 2:11",
    "explanation": "Un carro de fuego con caballos de fuego apartó a los dos; y Elías subió al cielo en un torbellino."
  },
  {
    "id": "m23",
    "level": "MEDIUM",
    "type": "WHO_SAID_IT",
    "category": "¿Quién lo dijo?",
    "question": "¿Quién dijo: \"¿Qué es la verdad?\" antes de lavarse las manos y entregar a Jesús para ser crucificado?",
    "options": [
      "Herodes Antipas",
      "Poncio Pilato",
      "Barrabás",
      "Caifás"
    ],
    "correctAnswer": 1,
    "verse": "Juan 18:38",
    "explanation": "Pilato formuló esta famosa pregunta escéptica frente al propio Autor de la verdad."
  },
  {
    "id": "m24",
    "level": "MEDIUM",
    "type": "TRUE_FALSE",
    "category": "El Sermón del Monte",
    "question": "¿Verdadero o Falso? En las Bienaventuranzas, Jesús dijo: \"Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios\".",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "verse": "Mateo 5:9",
    "explanation": "Mateo 5:9 es una de las declaraciones centrales de Jesús en el Sermón del Monte."
  },
  {
    "id": "m25",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Reyes de Israel",
    "question": "¿Qué rey de Judá mandó reparar el Templo y al hallar el Libro de la Ley rasgó sus vestidos y promovió una gran reforma espiritual con solo 8 años al comenzar su reinado?",
    "options": [
      "Ezequías",
      "Josías",
      "Manasés",
      "Roboam"
    ],
    "correctAnswer": 1,
    "verse": "2 Reyes 22:1-11",
    "explanation": "El joven rey Josías hizo lo recto ante los ojos de Dios y renovó el pacto del pueblo con las Escrituras."
  },
  {
    "id": "m26",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Cuántos años tenía Abraham cuando nació su hijo Isaac?",
    "options": [
      "75 años",
      "90 años",
      "100 años",
      "120 años"
    ],
    "correctAnswer": 2,
    "verse": "Génesis 21:5",
    "explanation": "Y era Abraham de cien años cuando nació Isaac su hijo."
  },
  {
    "id": "m27",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Qué le sucedió a la esposa de Lot cuando desobedeció la orden divina y miró atrás hacia Sodoma?",
    "options": [
      "Se convirtió en una estatua de sal",
      "Cayó en un pozo de brea",
      "Fue arrebatada al desierto",
      "Perdió la vista"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 19:26",
    "explanation": "Entonces la mujer de Lot miró atrás, a espaldas de él, y se volvió estatua de sal."
  },
  {
    "id": "m28",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿Por cuántos años en total trabajó Jacob para su tío Labán para poder casarse con su amada Raquel?",
    "options": [
      "7 años",
      "10 años",
      "14 años (7 por Lea y 7 por Raquel)",
      "21 años"
    ],
    "correctAnswer": 2,
    "verse": "Génesis 29:18-30",
    "explanation": "Jacob sirvió siete años por Raquel, pero Labán le dio a Lea; y luego sirvió otros siete años por Raquel."
  },
  {
    "id": "m29",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿En qué lugar luchó Jacob con el Ángel de Dios hasta el rayar del alba y su nombre fue cambiado a Israel?",
    "options": [
      "Betel",
      "Peniel (o Penuel)",
      "Hebrón",
      "Beerseba"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 32:28-30",
    "explanation": "Y llamó Jacob el nombre de aquel lugar, Peniel; porque dijo: Vi a Dios cara a cara, y fue librada mi alma."
  },
  {
    "id": "m30",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "José en Egipto",
    "question": "¿En el saco de qué hermano menor mandó José esconder su copa especial de plata para probarlos?",
    "options": [
      "Rubén",
      "Simeón",
      "Judá",
      "Benjamín"
    ],
    "correctAnswer": 3,
    "verse": "Génesis 44:1-2",
    "explanation": "Puso su copa de plata en la boca del costal del menor, Benjamín."
  },
  {
    "id": "m31",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Éxodo",
    "question": "¿Qué nombre se reveló a sí mismo Dios ante Moisés en la zarza ardiendo al enviarlo a Faraón?",
    "options": [
      "EL ELYON",
      "YO SOY EL QUE SOY (YHVH)",
      "JEHOVÁ JIREH",
      "EL SHADDAI"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 3:14",
    "explanation": "Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros."
  },
  {
    "id": "m32",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "La Pascua",
    "question": "¿Con qué debían pintar los israelitas los dos postes y el dintel de sus casas para que el destructor no entrara en la noche de la Pascua?",
    "options": [
      "Con aceite consagrado",
      "Con la sangre del cordero pascual",
      "Con vino tinto",
      "Con mirra y ceniza"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 12:7; 13",
    "explanation": "Y tomarán de la sangre, y la pondrán en los dos postes y en el dintel... y veré la sangre y pasaré de vosotros."
  },
  {
    "id": "m33",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Éxodo",
    "question": "¿Qué hermana de Moisés y Aarón entonó un cántico con pandero tras cruzar el Mar Rojo?",
    "options": [
      "Séfora",
      "María (Miriam)",
      "Débora",
      "Elisabet"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 15:20-21",
    "explanation": "María la profetisa, hermana de Aarón, tomó un pandero en su mano... Cantad a Jehová, porque en extremo se ha engrandecido."
  },
  {
    "id": "m34",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Leyes y Tabernáculo",
    "question": "¿Qué tribu de las doce fue apartada por Dios para el servicio sagrado del sacerdocio y el tabernáculo?",
    "options": [
      "Tribu de Judá",
      "Tribu de Leví",
      "Tribu de Benjamín",
      "Tribu de José"
    ],
    "correctAnswer": 1,
    "verse": "Números 3:6-9",
    "explanation": "Haz que se acerque la tribu de Leví... y desempeñen el ministerio del tabernáculo."
  },
  {
    "id": "m35",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Números",
    "question": "¿Qué vara reverdeció milagrosamente produciendo flores y almendras para confirmar la elección sacerdotal de Dios?",
    "options": [
      "La vara de Moisés",
      "La vara de Aarón",
      "La vara de Josué",
      "La vara de Hur"
    ],
    "correctAnswer": 1,
    "verse": "Números 17:8",
    "explanation": "Y he aquí que la vara de Aarón de la casa de Leví había reverdecido, y echado flores, y arrojado renuevos, y producido almendras."
  },
  {
    "id": "m36",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Números",
    "question": "¿Qué ordenó Dios a Moisés levantar sobre una asta en el desierto para que quien fuera mordido por serpiente ardiente mirara y viviera?",
    "options": [
      "Un querubín de plata",
      "Una serpiente de bronce",
      "Un candelero de oro",
      "Una paloma de piedra"
    ],
    "correctAnswer": 1,
    "verse": "Números 21:8-9",
    "explanation": "Moisés hizo una serpiente de bronce, y la puso sobre una asta; y cuando alguna serpiente mordía a alguno, miraba a la serpiente de bronce, y vivía."
  },
  {
    "id": "m37",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Josué",
    "question": "¿En qué batalla oró Josué a Dios y el sol y la luna se detuvieron casi un día entero?",
    "options": [
      "En la batalla de Jericó",
      "En la batalla de Gabaón (Valle de Ajalón)",
      "En la batalla de Hai",
      "En la toma de Hebrón"
    ],
    "correctAnswer": 1,
    "verse": "Josué 10:12-13",
    "explanation": "Sol, detente en Gabaón; y tú, luna, en el valle de Ajalón. Y el sol se detuvo y la luna se paró."
  },
  {
    "id": "m38",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Qué general cananeo murió atravesado por una estaca en su tienda a manos de la valiente Jael?",
    "options": [
      "Jabín",
      "Sísara",
      "Og",
      "Sehón"
    ],
    "correctAnswer": 1,
    "verse": "Jueces 4:17-21",
    "explanation": "Jael tomó una estaca de la tienda y un mazo en su mano... y le metió la estaca por las sienes."
  },
  {
    "id": "m39",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Qué acertijo propuso Sansón a los filisteos en su boda tras matar a un león con sus manos?",
    "options": [
      "\"Del devorador salió comida, y del fuerte salió dulzura\"",
      "\"De la noche vino el fuego, y del fuego la espada\"",
      "\"El que ríe al final come miel del panal\"",
      "\"Fuerte es el cedro pero cae ante el hacha\""
    ],
    "correctAnswer": 0,
    "verse": "Jueces 14:14",
    "explanation": "Sansón halló miel en el cuerpo del león y propuso: \"Del devorador salió comida, y del fuerte salió dulzura.\""
  },
  {
    "id": "m40",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "¿Qué le sucedió a la estatua del dios Dagón en Asdod cuando los filisteos colocaron el Arca del Pacto a su lado?",
    "options": [
      "Se quemó con fuego",
      "Apareció caída rostro en tierra quebrada de cabeza y manos",
      "Se convirtió en polvo",
      "Comenzó a llorar"
    ],
    "correctAnswer": 1,
    "verse": "1 Samuel 5:3-4",
    "explanation": "Apareció Dagón postrado en tierra delante del arca de Jehová; y la cabeza de Dagón y las dos palmas de sus manos estaban cortadas sobre el umbral."
  },
  {
    "id": "m41",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "¿A qué mujer sabia y sensata tomó David por esposa después de que su insensato esposo Nabal muriera?",
    "options": [
      "Abigail",
      "Mical",
      "Betsabé",
      "Ahinoam"
    ],
    "correctAnswer": 0,
    "verse": "1 Samuel 25:39-42",
    "explanation": "Envió David a hablar a Abigail, para tomarla por su mujer; y ella fue y le siguió."
  },
  {
    "id": "m42",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Samuel",
    "question": "¿Qué profeta confrontó al rey David por su pecado con Betsabé y la muerte de Urías contándole la parábola de la corderita?",
    "options": [
      "Samuel",
      "Natán",
      "Gad",
      "Ahías"
    ],
    "correctAnswer": 1,
    "verse": "2 Samuel 12:1-7",
    "explanation": "Entonces dijo Natán a David: Tú eres aquel hombre. Así ha dicho Jehová, Dios de Israel..."
  },
  {
    "id": "m43",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Samuel",
    "question": "¿Qué hijo de David se rebeló contra él y murió al quedar colgado por su frondosa cabellera en las ramas de una encina?",
    "options": [
      "Amnón",
      "Adonías",
      "Absalón",
      "Salomón"
    ],
    "correctAnswer": 2,
    "verse": "2 Samuel 18:9-14",
    "explanation": "La cabeza de Absalón se trabó en la encina, y quedó suspendido entre el cielo y la tierra."
  },
  {
    "id": "m44",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Reyes",
    "question": "¿Cómo demostró Salomón su sabiduría ante dos mujeres que disputaban por la maternidad de un bebé vivo?",
    "options": [
      "Pidió una espada para partir al niño por la mitad y ver la reacción de la verdadera madre",
      "Las hizo jurar por el templo",
      "Sorteó al niño con dados",
      "Consultó a los sacerdotes"
    ],
    "correctAnswer": 0,
    "verse": "1 Reyes 3:24-27",
    "explanation": "La verdadera madre se conmovió y rogó que dieran al niño vivo a la otra; así Salomón supo quién era la madre real."
  },
  {
    "id": "m45",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "División del Reino",
    "question": "¿Quiénes fueron los dos primeros reyes tras la división de la monarquía en el Reino del Norte (Israel) y el Reino del Sur (Judá)?",
    "options": [
      "Saúl y David",
      "Jeroboam (Israel) y Roboam (Judá)",
      "Acab y Josafat",
      "Ezequías y Manasés"
    ],
    "correctAnswer": 1,
    "verse": "1 Reyes 12:16-20",
    "explanation": "Roboam reinó sobre Judá en el sur, y Jeroboam reinó sobre las diez tribus del norte (Israel)."
  },
  {
    "id": "m46",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Reyes",
    "question": "¿Quién fue la malvada reina de Israel, esposa del rey Acab, que promovió el culto a Baal y persiguió a los profetas de Dios?",
    "options": [
      "Atalía",
      "Jezabel",
      "Vasti",
      "Herodías"
    ],
    "correctAnswer": 1,
    "verse": "1 Reyes 16:31; 19:1-2",
    "explanation": "Acab tomó por mujer a Jezabel hija de Et-baal rey de los sidonios, y fue y sirvió a Baal."
  },
  {
    "id": "m47",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿Qué pidió el profeta Eliseo a Elías como herencia espiritual antes de que este fuera llevado al cielo?",
    "options": [
      "Su manto de oro",
      "Una doble porción de su espíritu",
      "Riquezas para la escuela de profetas",
      "Larga vida de 100 años"
    ],
    "correctAnswer": 1,
    "verse": "2 Reyes 2:9",
    "explanation": "Y dijo Eliseo: Te ruego que una doble porción de tu espíritu sea sobre mí."
  },
  {
    "id": "m48",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿Cuántos años de vida añadió Dios al piadoso rey Ezequías tras su ferviente oración entre lágrimas?",
    "options": [
      "5 años",
      "10 años",
      "15 años",
      "20 años"
    ],
    "correctAnswer": 2,
    "verse": "2 Reyes 20:5-6",
    "explanation": "He aquí que yo sano; al tercer día subirás a la casa de Jehová. Y añadiré a tus días quince años."
  },
  {
    "id": "m49",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿Qué rey de Babilonia sitió y destruyó el Templo de Jerusalén llevando cautivo al pueblo judío?",
    "options": [
      "Ciro el Grande",
      "Nabucodonosor II",
      "Darío el Medo",
      "Belsasar"
    ],
    "correctAnswer": 1,
    "verse": "2 Reyes 25:1-11",
    "explanation": "Nabucodonosor rey de Babilonia quemó la casa de Jehová y la casa del rey y todos los palacios."
  },
  {
    "id": "m50",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Nehemías",
    "question": "¿En cuántos días récord lograron Nehemías y el pueblo reedificar los muros de Jerusalén a pesar de las amenazas?",
    "options": [
      "40 días",
      "52 días",
      "70 días",
      "120 días"
    ],
    "correctAnswer": 1,
    "verse": "Nehemías 6:15",
    "explanation": "Fue terminado el muro el veinticinco del mes de Elul, en cincuenta y dos días."
  },
  {
    "id": "m51",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Ester",
    "question": "¿Quién era el primo mayor de Ester que descubrió la conspiración contra el rey Asuero y la aconsejó sabiamente?",
    "options": [
      "Mardoqueo",
      "Amán",
      "Nehemías",
      "Esdras"
    ],
    "correctAnswer": 0,
    "verse": "Ester 2:7",
    "explanation": "Mardoqueo había criado a Hadasa, es decir, Ester, hija de su tío, porque era huérfana."
  },
  {
    "id": "m52",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Ester",
    "question": "¿En qué horca de cincuenta codos fue colgado el malvado Amán tras descubrirse su complot contra los judíos?",
    "options": [
      "En la horca que él mismo había preparado para Mardoqueo",
      "En la puerta de la ciudad",
      "En el muro del palacio",
      "En un barco en el río"
    ],
    "correctAnswer": 0,
    "verse": "Ester 7:9-10",
    "explanation": "Así colgaron a Amán en la horca que él había hecho preparar para Mardoqueo."
  },
  {
    "id": "m53",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Daniel",
    "question": "¿Qué misteriosas palabras aparecieron escritas por una mano en la pared del palacio durante el banquete del rey Belsasar?",
    "options": [
      "KADOSH KADOSH ADONAI",
      "MENE, MENE, TEKEL, UPARSIN",
      "HOSANNA EN LAS ALTURAS",
      "MARANATA VEN SEÑOR"
    ],
    "correctAnswer": 1,
    "verse": "Daniel 5:25-28",
    "explanation": "Mene: Contó Dios tu reino y le ha puesto fin. Tekel: Pesado has sido en balanza y fuiste hallado falto. Peres: Tu reino ha sido roto."
  },
  {
    "id": "m54",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Profecías Mesiánicas",
    "question": "¿Qué profeta del Antiguo Testamento profetizó con exactitud que el Mesías nacería en Belén de Judá?",
    "options": [
      "Isaías",
      "Miqueas",
      "Zacarías",
      "Malaquías"
    ],
    "correctAnswer": 1,
    "verse": "Miqueas 5:2",
    "explanation": "Pero tú, Belén Efrata, pequeña para estar entre las familias de Judá, de ti me saldrá el que será Señor en Israel."
  },
  {
    "id": "m55",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Profecías Mesiánicas",
    "question": "¿En qué capítulo de Isaías se describe con asombrosa precisión el sufrimiento redentor del Siervo (\"Mas él herido fue por nuestras rebeliones...\")?",
    "options": [
      "Isaías 6",
      "Isaías 40",
      "Isaías 53",
      "Isaías 61"
    ],
    "correctAnswer": 2,
    "verse": "Isaías 53:5",
    "explanation": "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él."
  },
  {
    "id": "m56",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Genealogía de Jesús",
    "question": "¿A través de qué linaje real del Antiguo Testamento se profetizó que vendría el Mesías prometido?",
    "options": [
      "Del linaje del rey Saúl",
      "Del linaje del rey David (la raíz de Isaí)",
      "Del linaje de Leví",
      "Del linaje de José"
    ],
    "correctAnswer": 1,
    "verse": "Jeremías 23:5 / Romanos 1:3",
    "explanation": "Levantaré a David renuevo justo, y reinará como Rey, el cual será dichoso."
  },
  {
    "id": "m57",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Nacimiento de Jesús",
    "question": "¿Qué profetisa viuda de 84 años servía de noche y de día con oraciones en el Templo y dio gracias al ver al niño Jesús?",
    "options": [
      "Ana",
      "Débora",
      "Huldá",
      "Elisabet"
    ],
    "correctAnswer": 0,
    "verse": "Lucas 2:36-38",
    "explanation": "Estaba también allí Ana, profetisa, de la tribu de Aser... daba gracias a Dios y hablaba del niño a todos los que esperaban la redención."
  },
  {
    "id": "m58",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Ministerio de Jesús",
    "question": "¿Qué dos hermanos pescadores apodó Jesús \"Boanerges\", que significa \"Hijos del trueno\"?",
    "options": [
      "Pedro y Andrés",
      "Jacobo (Santiago) y Juan",
      "Felipe y Bartolomé",
      "Simón y Judas"
    ],
    "correctAnswer": 1,
    "verse": "Marcos 3:17",
    "explanation": "A Jacobo hijo de Zebedeo, y a Juan hermano de Jacobo, a quienes apellidó Boanerges, esto es, Hijos del trueno."
  },
  {
    "id": "m59",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿En qué estanque de cinco pórticos sanó Jesús a un hombre que llevaba 38 años enfermo en Jerusalén?",
    "options": [
      "Estanque de Siloé",
      "Estanque de Betesda",
      "Pozo de Sicar",
      "Río Jordán"
    ],
    "correctAnswer": 1,
    "verse": "Juan 5:2-9",
    "explanation": "Y hay en Jerusalén... un estanque, que en hebreo se llama Betesda... y el hombre fue sanado, y tomó su lecho, y anduvo."
  },
  {
    "id": "m60",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿Cómo obtuvo Pedro el dinero para pagar el impuesto del templo para él y para Jesús?",
    "options": [
      "Vendió su red de pesca",
      "Sacó una moneda de cuatro dracmas (estatero) de la boca del primer pez que pescó",
      "Pidió una ofrenda a Zaqueo",
      "Trabajó como carpintero"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 17:27",
    "explanation": "Ve al mar, y echa el anzuelo, y el primer pez que viniere, tómalo, y al abrirle la boca, hallarás un estatero."
  },
  {
    "id": "m61",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "La Transfiguración",
    "question": "¿Qué dos personajes gloriosos del Antiguo Testamento aparecieron conversando con Jesús en el Monte de la Transfiguración?",
    "options": [
      "Abraham y David",
      "Moisés y Elías",
      "Noé y Enoc",
      "Samuel e Isaías"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 17:1-3",
    "explanation": "Y se transfiguró delante de ellos... y he aquí les aparecieron Moisés y Elías, hablando con él."
  },
  {
    "id": "m62",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Parábolas de Jesús",
    "question": "En la parábola de las diez vírgenes, ¿por qué cinco de ellas fueron llamadas insensatas?",
    "options": [
      "Porque se quedaron dormidas",
      "Porque no tomaron aceite extra en sus vasijas para sus lámparas",
      "Porque perdieron sus vestidos de boda",
      "Porque llegaron a la casa equivocada"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 25:1-4",
    "explanation": "Las insensatas, tomando sus lámparas, no tomaron consigo aceite; mas las prudentes tomaron aceite en sus vasijas."
  },
  {
    "id": "m63",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Parábolas de Jesús",
    "question": "En la parábola de los talentos, ¿qué hizo el siervo que recibió un solo talento con el dinero de su señor?",
    "options": [
      "Lo invirtió en el mercado",
      "Lo cavó en la tierra y escondió el dinero de su señor",
      "Se lo dio a los pobres",
      "Lo perdió en un viaje"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 25:18",
    "explanation": "Pero el que había recibido uno fue y cavó en la tierra, y escondió el dinero de su señor."
  },
  {
    "id": "m64",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Discursos de Jesús",
    "question": "¿Qué mandamiento nuevo dio Jesús a sus discípulos durante la Última Cena?",
    "options": [
      "Que ayunaran tres días a la semana",
      "Que se amen los unos a los otros, como yo os he amado",
      "Que no hablaran con extranjeros",
      "Que construyeran una iglesia en Jerusalén"
    ],
    "correctAnswer": 1,
    "verse": "Juan 13:34",
    "explanation": "Un mandamiento nuevo os doy: Que os améis unos a otros; como yo os he amado, que también os améis unos a otros."
  },
  {
    "id": "m65",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Arresto de Jesús",
    "question": "¿A qué siervo del sumo sacerdote le cortó Pedro la oreja derecha con su espada en Getsemaní, al cual Jesús sanó inmediatamente?",
    "options": [
      "Malco",
      "Barrabás",
      "Cornelio",
      "Demetrio"
    ],
    "correctAnswer": 0,
    "verse": "Juan 18:10 / Lucas 22:51",
    "explanation": "Simón Pedro, que tenía una espada, la desenvainó, e hirió al siervo del sumo sacerdote, y le cortó la oreja derecha. Y el siervo se llamaba Malco."
  },
  {
    "id": "m66",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "La Crucifixión",
    "question": "¿Qué letrero mandó poner Poncio Pilato sobre la cruz de Jesús escrito en hebreo, griego y latín?",
    "options": [
      "JESÚS DE NAZARET, REY DE LOS JUDÍOS (INRI)",
      "EL HOMBRE QUE REVOLUCIONÓ A JUDEA",
      "CONDENADO POR BLASFEMIA",
      "PROFETA DE GALILEA"
    ],
    "correctAnswer": 0,
    "verse": "Juan 19:19-20",
    "explanation": "Escribió también Pilato un título: JESÚS NAZARENO, REY DE LOS JUDÍOS. Y estaba escrito en hebreo, en griego y en latín."
  },
  {
    "id": "m67",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "La Muerte de Jesús",
    "question": "¿Qué ocurrió en el Templo de Jerusalén en el momento exacto en que Jesús expiró en la cruz?",
    "options": [
      "Las columnas de bronce cayeron",
      "El velo del templo se rasgó en dos, de arriba abajo",
      "El candelabro de oro se apagó",
      "El fuego del altar se congeló"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 27:51",
    "explanation": "Y he aquí, el velo del templo se rasgó en dos, de arriba abajo; y la tierra tembló, y las rocas se partieron."
  },
  {
    "id": "m68",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Camino a Emaús",
    "question": "¿En qué momento reconocieron los dos discípulos a Jesús resucitado en la aldea de Emaús?",
    "options": [
      "Al ver sus huellas en el camino",
      "Al tomar el pan, bendecirlo, partirlo y dárselo",
      "Al escuchar el canto del gallo",
      "Al ver su sombra en la pared"
    ],
    "correctAnswer": 1,
    "verse": "Lucas 24:30-31",
    "explanation": "Aconteció que estando sentado con ellos a la mesa, tomó el pan y bendijo, lo partió, y les dio. Entonces les fueron abiertos los ojos, y le reconocieron."
  },
  {
    "id": "m69",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué matrimonio de la iglesia primitiva murió fulminado por mentir al Espíritu Santo respecto al precio de una heredad vendida?",
    "options": [
      "Aquila y Priscila",
      "Ananías y Safira",
      "Filemón y Apia",
      "Zacarías y Elisabet"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 5:1-10",
    "explanation": "Pedro dijo: Ananías, ¿por qué llenó Satanás tu corazón para que mintieses al Espíritu Santo?... Y al oír estas palabras, cayó y expiró."
  },
  {
    "id": "m70",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Quién era el centurión romano piadoso en Cesarea a cuya casa fue enviado Pedro para predicar por primera vez a los gentiles?",
    "options": [
      "Cornelio",
      "Julio",
      "Félix",
      "Claudio Lisias"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 10:1-2",
    "explanation": "Había en Cesarea un hombre llamado Cornelio, centurión de la compañía llamada la Italiana, piadoso y temeroso de Dios."
  },
  {
    "id": "m71",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Viajes Misioneros",
    "question": "¿En qué famosa ciudad griega predicó el apóstol Pablo en el Areópago sobre \"el Dios No Conocido\"?",
    "options": [
      "Corinto",
      "Atenas",
      "Éfeso",
      "Tesalónica"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 17:22-23",
    "explanation": "Pablo, puesto en pie en medio del Areópago, dijo: Varones atenienses... hallé también un altar en el cual estaba esta inscripción: AL DIOS NO CONOCIDO."
  },
  {
    "id": "m72",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Viajes Misioneros",
    "question": "¿A qué joven discípulo de Listra consideraba Pablo como su propio hijo espiritual y le escribió dos epístolas pastorales?",
    "options": [
      "Tito",
      "Timoteo",
      "Lucas",
      "Filemón"
    ],
    "correctAnswer": 1,
    "verse": "1 Timoteo 1:2",
    "explanation": "A Timoteo, verdadero hijo en la fe: Gracia, misericordia y paz, de Dios nuestro Padre y de Cristo Jesús nuestro Señor."
  },
  {
    "id": "m73",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístolas de Pablo",
    "question": "Completa Romanos 8:38-39: \"Por lo cual estoy seguro de que ni la muerte, ni la vida... nos podrá separar del _________ de Dios, que es en Cristo Jesús\"",
    "options": [
      "templo",
      "amor",
      "juicio",
      "castigo"
    ],
    "correctAnswer": 1,
    "verse": "Romanos 8:38-39",
    "explanation": "Romanos 8:39: \"...nos podrá separar del amor de Dios, que es en Cristo Jesús Señor nuestro.\""
  },
  {
    "id": "m74",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola a los Gálatas",
    "question": "Completa Gálatas 2:20: \"Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive _________ en mí\"",
    "options": [
      "la ley",
      "Cristo",
      "el profeta",
      "mi alma"
    ],
    "correctAnswer": 1,
    "verse": "Gálatas 2:20",
    "explanation": "Gálatas 2:20: \"Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive Cristo en mí.\""
  },
  {
    "id": "m75",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿En qué solitaria isla griega estaba desterrado el apóstol Juan cuando recibió la revelación del libro de Apocalipsis?",
    "options": [
      "Isla de Creta",
      "Isla de Patmos",
      "Isla de Chipre",
      "Isla de Malta"
    ],
    "correctAnswer": 1,
    "verse": "Apocalipsis 1:9",
    "explanation": "Yo Juan, vuestro hermano... estaba en la isla llamada Patmos, por causa de la palabra de Dios y el testimonio de Jesucristo."
  },
  {
    "id": "m76",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Quién fue el hombre que caminó con Dios y desapareció porque le llevó Dios sin pasar por la muerte física?",
    "options": [
      "Matusalén",
      "Enoc",
      "Noé",
      "Set"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 5:24",
    "explanation": "Caminó, pues, Enoc con Dios, y desapareció, porque le llevó Dios."
  },
  {
    "id": "m77",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "Según la genealogía bíblica en Génesis, ¿quién fue el hombre más longevo que vivió 969 años?",
    "options": [
      "Adán",
      "Noé",
      "Matusalén",
      "Jared"
    ],
    "correctAnswer": 2,
    "verse": "Génesis 5:27",
    "explanation": "Fueron, pues, todos los días de Matusalén novecientos sesenta y nueve años; y murió."
  },
  {
    "id": "m78",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿Quién era el rey de Salem y sacerdote del Dios Altísimo a quien Abraham dio los diezmos de todo?",
    "options": [
      "Abimelec",
      "Melquisedec",
      "Jetro",
      "Balaam"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 14:18-20",
    "explanation": "Melquisedec, rey de Salem y sacerdote del Dios Altísimo... le bendijo. Y le dio Abram los diezmos de todo."
  },
  {
    "id": "m79",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿Cómo se llamaba el criado fiel de Abraham que fue a Mesopotamia a buscar esposa para Isaac?",
    "options": [
      "Eliezer de Damasco",
      "Giezi",
      "Ziba",
      "Urías"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 15:2; 24:2",
    "explanation": "El criado más viejo de la casa de Abraham, Eliezer de Damasco, fue guiado por Dios para encontrar a Rebeca."
  },
  {
    "id": "m80",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "José en Egipto",
    "question": "¿Cómo se llamaban los dos hijos de José nacidos en Egipto antes de los años de hambre, adoptados por Jacob?",
    "options": [
      "Dan y Neftalí",
      "Efraín y Manasés",
      "Gad y Aser",
      "Simeón y Leví"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 41:51-52",
    "explanation": "Llamó José el nombre del primogénito Manasés... y el nombre del segundo lo llamó Efraín."
  },
  {
    "id": "m81",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Éxodo",
    "question": "¿Quién era el suegro de Moisés, sacerdote de Madián, que le aconsejó delegar jueces para no agotarse?",
    "options": [
      "Jetro (Reuel)",
      "Labán",
      "Balaam",
      "Melquisedec"
    ],
    "correctAnswer": 0,
    "verse": "Éxodo 18:1-24",
    "explanation": "Jetro aconsejó a Moisés: Escoge tú de entre todo el pueblo varones de virtud... y juzguen al pueblo en todo tiempo."
  },
  {
    "id": "m82",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Éxodo",
    "question": "¿Qué dos hombres fueron llenos del Espíritu de Dios con habilidad artística para construir todo el Tabernáculo?",
    "options": [
      "Bezaleel y Aholiab",
      "Aarón y Hur",
      "Eleazar e Itamar",
      "Josué y Caleb"
    ],
    "correctAnswer": 0,
    "verse": "Éxodo 31:1-6",
    "explanation": "He llamado por nombre a Bezaleel... y lo he llenado del Espíritu de Dios en sabiduría... y he puesto con él a Aholiab."
  },
  {
    "id": "m83",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Levítico",
    "question": "¿Qué hijos sacerdotes de Aarón murieron delante de Jehová por ofrecer \"fuego extraño\" en el santuario?",
    "options": [
      "Eleazar e Itamar",
      "Nadab y Abiú",
      "Ofni y Finees",
      "Coré y Abiram"
    ],
    "correctAnswer": 1,
    "verse": "Levítico 10:1-2",
    "explanation": "Nadab y Abiú, hijos de Aarón... ofrecieron delante de Jehová fuego extraño... y salieron llamas y murieron."
  },
  {
    "id": "m84",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Números",
    "question": "¿Qué hombre lideró una gran rebelión contra la autoridad de Moisés y Aarón, y la tierra abrió su boca y se los tragó vivos?",
    "options": [
      "Balaac",
      "Coré (con Datán y Abiram)",
      "Og rey de Basán",
      "Agag"
    ],
    "correctAnswer": 1,
    "verse": "Números 16:31-33",
    "explanation": "Abrió la tierra su boca, y los tragó a ellos, a sus casas, a todos los hombres de Coré, y a todos sus bienes."
  },
  {
    "id": "m85",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Deuteronomio",
    "question": "Completa la famosa oración del Shemá en Deuteronomio 6:4-5: \"Oye, Israel: Jehová nuestro Dios, Jehová uno es. Y amarás a Jehová tu Dios de todo tu _________\"",
    "options": [
      "dinero",
      "corazón, y de toda tu alma, y con todas tus fuerzas",
      "conocimiento",
      "templo"
    ],
    "correctAnswer": 1,
    "verse": "Deuteronomio 6:4-5",
    "explanation": "Deuteronomio 6:5: \"Y amarás a Jehová tu Dios de todo tu corazón, y de toda tu alma, y con todas tus fuerzas.\""
  },
  {
    "id": "m86",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Josué",
    "question": "¿Qué hombre cometió anatema en la toma de Jericó escondiendo un manto babilónico, plata y oro, causando la derrota en Hai?",
    "options": [
      "Acán",
      "Caleb",
      "Zimri",
      "Barac"
    ],
    "correctAnswer": 0,
    "verse": "Josué 7:20-21",
    "explanation": "Acán respondió a Josué: Verdaderamente yo he pecado... vi entre los despojos un manto babilónico muy bueno..."
  },
  {
    "id": "m87",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Josué",
    "question": "Completa la firme declaración de Josué al final de su vida en Josué 24:15: \"Pero yo y mi casa _________ a Jehová.\"",
    "options": [
      "dejaremos",
      "serviremos",
      "olvidaremos",
      "juzgaremos"
    ],
    "correctAnswer": 1,
    "verse": "Josué 24:15",
    "explanation": "Josué 24:15: \"...escogeos hoy a quién sirváis... pero yo y mi casa serviremos a Jehová.\""
  },
  {
    "id": "m88",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Quién fue el juez zurdo que liberó a Israel hiriendo en secreto al obeso rey Eglón de Moab con una espada de dos filos?",
    "options": [
      "Aod",
      "Samgar",
      "Otoniel",
      "Jefté"
    ],
    "correctAnswer": 0,
    "verse": "Jueces 3:15-21",
    "explanation": "Aod hijo de Gera, benjamita, el cual era zurdo... metió su mano izquierda, tomó el puñal de su lado derecho, y se lo metió por el vientre."
  },
  {
    "id": "m89",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Quién mató a seiscientos filisteos con una simple aguijada de bueyes, librando también a Israel?",
    "options": [
      "Samgar hijo de Anat",
      "Barac",
      "Gedeón",
      "Abimélec"
    ],
    "correctAnswer": 0,
    "verse": "Jueces 3:31",
    "explanation": "Después de él fue Samgar hijo de Anat, el cual mató a seiscientos hombres de los filisteos con una aguijada de bueyes."
  },
  {
    "id": "m90",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Qué voto apresurado hizo Jefté antes de ir a la batalla contra los amonitas que afectó a su única hija?",
    "options": [
      "Que no comería carne en 3 años",
      "Que quien saliera a recibirle de su casa al volver en paz sería ofrecido a Jehová",
      "Que construiría un templo de plata",
      "Que se raparía la cabeza de por vida"
    ],
    "correctAnswer": 1,
    "verse": "Jueces 11:30-34",
    "explanation": "Cualquiera que saliere de las puertas de mi casa a recibirme... será de Jehová, y lo ofreceré en holocausto."
  },
  {
    "id": "m91",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "¿Qué palabra exclamó la nuera del sacerdote Elí al morir en el parto tras ser capturada el Arca por los filisteos, que significa \"Traspasada es la gloria\"?",
    "options": [
      "Maranata",
      "Icabod",
      "Ebenezer",
      "Aleluya"
    ],
    "correctAnswer": 1,
    "verse": "1 Samuel 4:21-22",
    "explanation": "Y llamó al niño Icabod, diciendo: ¡Traspasada es la gloria de Israel! por haber sido tomada el arca de Dios."
  },
  {
    "id": "m92",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "¿Qué nombre le puso Samuel a la piedra que colocó entre Mizpa y Sen diciendo: \"Hasta aquí nos ayudó Jehová\"?",
    "options": [
      "Betel",
      "Ebenezer",
      "Moriah",
      "Gal-ed"
    ],
    "correctAnswer": 1,
    "verse": "1 Samuel 7:12",
    "explanation": "Tomó luego Samuel una piedra y la puso entre Mizpa y Sen, y le puso por nombre Ebenezer, diciendo: Hasta aquí nos ayudó Jehová."
  },
  {
    "id": "m93",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "¿Por qué rechazó Dios a Saúl como rey de Israel según las palabras de Samuel: \"Ciertamente el obedecer es mejor que los sacrificios\"?",
    "options": [
      "Porque perdió una batalla",
      "Por perdonar al rey Agag y lo mejor del ganado de Amalec desobedeciendo la orden directa",
      "Por edificar un muro sin permiso",
      "Por no pagar tributos"
    ],
    "correctAnswer": 1,
    "verse": "1 Samuel 15:22-23",
    "explanation": "Samuel dijo: ¿Se complace Jehová tanto en los holocaustos como en que se obedezca a la palabra de Jehová? Ciertamente el obedecer es mejor que los sacrificios."
  },
  {
    "id": "m94",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Samuel",
    "question": "¿Qué hombre murió al extender su mano para sostener el Arca del Pacto cuando los bueyes tropezaban camino a Jerusalén?",
    "options": [
      "Uza",
      "Ahío",
      "Obed-edom",
      "Itai"
    ],
    "correctAnswer": 0,
    "verse": "2 Samuel 6:6-7",
    "explanation": "Uza extendió su mano al arca de Dios, y la sostuvo; porque los bueyes tropezaban. Y el furor de Jehová se encendió contra Uza, y lo hirió allí Dios."
  },
  {
    "id": "m95",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Samuel",
    "question": "¿En casa de qué levita se quedó el Arca del Pacto durante tres meses, trayendo gran bendición a toda su casa?",
    "options": [
      "Obed-edom geteo",
      "Asaf",
      "Quenías",
      "Barzilai"
    ],
    "correctAnswer": 0,
    "verse": "2 Samuel 6:11",
    "explanation": "Y estuvo el arca de Jehová en casa de Obed-edom geteo tres meses; y bendijo Jehová a Obed-edom y a toda su casa."
  },
  {
    "id": "m96",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Reyes",
    "question": "¿Quién intentó autoproclamarse rey de Israel en la vejez de David antes de que Salomón fuera coronado?",
    "options": [
      "Adonías hijo de Haguit",
      "Absalón",
      "Joab",
      "Simei"
    ],
    "correctAnswer": 0,
    "verse": "1 Reyes 1:5",
    "explanation": "Entonces Adonías hijo de Haguit se rebeló, diciendo: Yo reinaré. Y se hizo de carros y de gente de a caballo."
  },
  {
    "id": "m97",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Reyes",
    "question": "¿De qué viña se encaprichó el rey Acab, la cual pertenecía a un hombre que se negó a vender la heredad de sus padres?",
    "options": [
      "La viña de Nabot de Jezreel",
      "La viña de En-gadi",
      "La viña de Sorec",
      "La viña de Samaria"
    ],
    "correctAnswer": 0,
    "verse": "1 Reyes 21:1-3",
    "explanation": "Nabot respondió a Acab: Guárdeme Jehová de que yo te dé a ti la heredad de mis padres."
  },
  {
    "id": "m98",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Reyes",
    "question": "¿En qué cueva del monte Horeb escuchó Elías a Dios, no en el viento fuerte, ni en el terremoto, ni en el fuego, sino en qué?",
    "options": [
      "En un trueno potente",
      "En un silbo apacible y delicado",
      "En el cantar de un ave",
      "En una lluvia recia"
    ],
    "correctAnswer": 1,
    "verse": "1 Reyes 19:11-12",
    "explanation": "Y tras el fuego un silbo apacible y delicado. Y cuando lo oyó Elías, cubrió su rostro con su manto."
  },
  {
    "id": "m99",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿Qué criado codicioso de Eliseo persiguió a Naamán para pedirle plata y vestidos a espaldas del profeta, y se le pegó la lepra?",
    "options": [
      "Giezi",
      "Hazael",
      "Ziba",
      "Baraquías"
    ],
    "correctAnswer": 0,
    "verse": "2 Reyes 5:20-27",
    "explanation": "Giezi, criado de Eliseo... dijo: Correré yo tras él, y tomaré de él alguna cosa... Y salió de su presencia leproso, blanco como la nieve."
  },
  {
    "id": "m100",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿Qué rey de Judá fue coronado a los 8 años de edad y lideró una gran reforma tras hallarse el Libro de la Ley en el Templo?",
    "options": [
      "Josías",
      "Ezequías",
      "Manasés",
      "Joás"
    ],
    "correctAnswer": 0,
    "verse": "2 Reyes 22:1-8",
    "explanation": "De ocho años era Josías cuando comenzó a reinar... Hilcías el sumo sacerdote dijo al escriba Safán: He hallado el libro de la ley en la casa de Jehová."
  },
  {
    "id": "m101",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Libro de Job",
    "question": "¿Cómo se llamaban los tres amigos de Job que fueron a consolarle y terminaron acusándole falsamente de pecado oculto?",
    "options": [
      "Elifaz, Bildad y Zofar",
      "Sadrac, Mesac y Abed-nego",
      "Eliú, Jonadab y Baruc",
      "Nadab, Abiú e Itamar"
    ],
    "correctAnswer": 0,
    "verse": "Job 2:11",
    "explanation": "Tres amigos de Job, Elifaz temanita, Bildad suhita, y Zofar naamatita... se pusieron de acuerdo para venir a condolerse de él y a consolarle."
  },
  {
    "id": "m102",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Salmos",
    "question": "Completa el Salmo 37:4: \"Deléitate asimismo en Jehová, y él te concederá las _________ de tu corazón.\"",
    "options": [
      "riquezas",
      "peticiones",
      "coronas",
      "fantasías"
    ],
    "correctAnswer": 1,
    "verse": "Salmos 37:4",
    "explanation": "Salmos 37:4: \"Deléitate asimismo en Jehová, y él te concederá las peticiones de tu corazón.\""
  },
  {
    "id": "m103",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Salmos",
    "question": "Completa el Salmo 51:10, la oración de arrepentimiento de David: \"Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu _________ dentro de mí.\"",
    "options": [
      "fuerte",
      "recto",
      "alegre",
      "sabio"
    ],
    "correctAnswer": 1,
    "verse": "Salmos 51:10",
    "explanation": "Salmos 51:10: \"Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.\""
  },
  {
    "id": "m104",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Salmos",
    "question": "¿Cuál es el capítulo más largo de toda la Biblia, compuesto por 176 versículos dedicados a la Palabra de Dios?",
    "options": [
      "Salmo 23",
      "Salmo 91",
      "Salmo 119",
      "Salmo 150"
    ],
    "correctAnswer": 2,
    "verse": "Salmos 119",
    "explanation": "El Salmo 119 es el más extenso de las Escrituras, organizado acrósticamente según el alfabeto hebreo."
  },
  {
    "id": "m105",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Salmos",
    "question": "¿Cuál es el capítulo más corto de toda la Biblia, que cuenta con tan solo 2 versículos?",
    "options": [
      "Salmo 117",
      "Salmo 133",
      "Salmo 150",
      "Salmo 1"
    ],
    "correctAnswer": 0,
    "verse": "Salmos 117:1-2",
    "explanation": "El Salmo 117 tiene solo 2 versículos: \"Alabad a Jehová, naciones todas; pueblos todos, alabadle...\""
  },
  {
    "id": "m106",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Proverbios",
    "question": "Completa Proverbios 16:18: \"Antes del quebrantamiento es la soberbia, y antes de la caída la altivez de _________\"",
    "options": [
      "ojos",
      "espíritu",
      "manos",
      "pensamiento"
    ],
    "correctAnswer": 1,
    "verse": "Proverbios 16:18",
    "explanation": "Proverbios 16:18: \"Antes del quebrantamiento es la soberbia, y antes de la caída la altivez de espíritu.\""
  },
  {
    "id": "m107",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Proverbios",
    "question": "Completa Proverbios 18:10: \"Torre fuerte es el nombre de Jehová; a él correrá el justo, y será _________\"",
    "options": [
      "derrotado",
      "levantado (puesto en alto)",
      "probado",
      "avergonzado"
    ],
    "correctAnswer": 1,
    "verse": "Proverbios 18:10",
    "explanation": "Proverbios 18:10: \"Torre fuerte es el nombre de Jehová; a él correrá el justo, y será levantado.\""
  },
  {
    "id": "m108",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Isaías",
    "question": "En la visión de Isaías en el Templo, ¿con qué tocó el serafín los labios del profeta para quitar su culpa?",
    "options": [
      "Con aceite de la unción",
      "Con un carbón encendido tomado del altar con tenazas",
      "Con agua bendita",
      "Con incienso aromático"
    ],
    "correctAnswer": 1,
    "verse": "Isaías 6:6-7",
    "explanation": "Voló hacia mí uno de los serafines, teniendo en su mano un carbón encendido... y tocando con él sobre mi boca, dijo: He aquí que esto tocó tus labios, y es quitada tu culpa."
  },
  {
    "id": "m109",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Profeta Jeremías",
    "question": "Completa Jeremías 29:11: \"Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que _________\"",
    "options": [
      "merecéis",
      "esperáis",
      "compráis",
      "soñáis"
    ],
    "correctAnswer": 1,
    "verse": "Jeremías 29:11",
    "explanation": "Jeremías 29:11: \"...pensamientos de paz, y no de mal, para daros el fin que esperáis.\""
  },
  {
    "id": "m110",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Profeta Jeremías",
    "question": "Completa Jeremías 33:3: \"Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú _________\"",
    "options": [
      "ya sabías",
      "no conoces",
      "olvidaste",
      "escribiste"
    ],
    "correctAnswer": 1,
    "verse": "Jeremías 33:3",
    "explanation": "Jeremías 33:3: \"Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.\""
  },
  {
    "id": "m111",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Ezequiel",
    "question": "¿Qué le mandó Dios comer al profeta Ezequiel como símbolo de asimilar plenamente su mensaje, el cual supo dulce como miel?",
    "options": [
      "Un rollo de libro escrito por dentro y por fuera",
      "Un pan cocido sobre fuego",
      "Una fruta de la higuera",
      "Un panal de abejas"
    ],
    "correctAnswer": 0,
    "verse": "Ezequiel 3:1-3",
    "explanation": "Hijo de hombre, come este rollo... y lo comí, y fue en mi boca dulce como miel."
  },
  {
    "id": "m112",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Oseas",
    "question": "¿A qué mujer infiel le mandó Dios tomar por esposa al profeta Oseas para ilustrar el amor redentor de Dios hacia un pueblo idólatra?",
    "options": [
      "Gomer hija de Diblaim",
      "Débora",
      "Séfora",
      "Atalía"
    ],
    "correctAnswer": 0,
    "verse": "Oseas 1:2-3",
    "explanation": "Ve, tómate una mujer fornicaria e hijos de fornicación; porque la tierra fornica apartándose de Jehová. Fue, pues, y tomó a Gomer."
  },
  {
    "id": "m113",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Profeta Habacuc",
    "question": "Completa Habacuc 2:4 (citado tres veces en el Nuevo Testamento): \"He aquí que aquel cuya alma no es recta se enorgullece; mas el justo por su fe _________\"",
    "options": [
      "morirá",
      "vivirá",
      "callará",
      "caerá"
    ],
    "correctAnswer": 1,
    "verse": "Habacuc 2:4 / Romanos 1:17",
    "explanation": "Habacuc 2:4: \"...mas el justo por su fe vivirá.\""
  },
  {
    "id": "m114",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Profeta Zacarías",
    "question": "Completa Zacarías 4:6: \"No con ejército, ni con fuerza, sino con mi _________, ha dicho Jehová de los ejércitos.\"",
    "options": [
      "espada",
      "Espíritu",
      "pueblo",
      "oro"
    ],
    "correctAnswer": 1,
    "verse": "Zacarías 4:6",
    "explanation": "Zacarías 4:6: \"No con ejército, ni con fuerza, sino con mi Espíritu, ha dicho Jehová de los ejércitos.\""
  },
  {
    "id": "m115",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Malaquías",
    "question": "En Malaquías 3:10, ¿en qué desafía Dios a su pueblo diciendo: \"Probadme ahora en esto... si no os abriré las ventanas de los cielos\"?",
    "options": [
      "En traer todos los diezmos al alfolí para que haya alimento en su casa",
      "En ayunar cuarenta días",
      "En salir a conquistar naciones",
      "En construir un nuevo altar"
    ],
    "correctAnswer": 0,
    "verse": "Malaquías 3:10",
    "explanation": "Traed todos los diezmos al alfolí y haya alimento en mi casa; y probadme ahora en esto, dice Jehová de los ejércitos."
  },
  {
    "id": "m116",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Evangelios",
    "question": "¿Quién era el anciano justo en el Templo que tomó a Jesús en sus brazos y dijo: \"Ahora, Señor, despides a tu siervo en paz... porque han visto mis ojos tu salvación\"?",
    "options": [
      "Simeón",
      "Zacarías",
      "Nicodemo",
      "José de Arimatea"
    ],
    "correctAnswer": 0,
    "verse": "Lucas 2:25-30",
    "explanation": "Había en Jerusalén un hombre llamado Simeón... tomó al niño en sus brazos y bendijo a Dios."
  },
  {
    "id": "m117",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Juan el Bautista",
    "question": "¿Qué vestidura tosca usaba Juan el Bautista en el desierto y de qué se alimentaba?",
    "options": [
      "Vestido de pelo de camello con cinto de cuero, y comía langostas y miel silvestre",
      "Túnica de lino fino y comía pan y vino",
      "Manto de lana de oveja y comía pescado asado",
      "Ropa de seda y frutas del huerto"
    ],
    "correctAnswer": 0,
    "verse": "Mateo 3:4",
    "explanation": "Tenía Juan su vestido de pelo de camello, y un cinto de cuero alrededor de sus lomos; y su comida era langostas y miel silvestre."
  },
  {
    "id": "m118",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Evangelio de Juan",
    "question": "¿Bajo qué árbol vio Jesús al discípulo Natanael antes de que Felipe le llamara, dejándolo asombrado?",
    "options": [
      "Bajo una higuera",
      "Bajo un olivo",
      "Bajo un cedro",
      "Bajo una palmera"
    ],
    "correctAnswer": 0,
    "verse": "Juan 1:48",
    "explanation": "Jesús le respondió: Antes que Felipe te llamara, cuando estabas debajo de la higuera, te vi."
  },
  {
    "id": "m119",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿Qué le dijo el centurión romano a Jesús demostrando una fe que Jesús no había hallado ni aun en Israel?",
    "options": [
      "Ven a mi casa y toca a mi siervo",
      "Señor, no soy digno de que entres bajo mi techo; solamente di la palabra, y mi criado sanará",
      "Te daré diez talentos si lo sanas",
      "Escribe una oración en mi puerta"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 8:8-10",
    "explanation": "Al oírlo Jesús, se maravilló, y dijo a los que le seguían: De cierto os digo, que ni aun en Israel he hallado tanta fe."
  },
  {
    "id": "m120",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "¿Cómo se llamaba la legión de demonios que Jesús expulsó de un hombre en la región de los gadarenos hacia un hato de cerdos?",
    "options": [
      "Belcebú",
      "Legión, porque somos muchos",
      "Abadón",
      "Mamón"
    ],
    "correctAnswer": 1,
    "verse": "Marcos 5:9",
    "explanation": "Y le preguntó: ¿Cómo te llamas? Y respondió diciendo: Legión me llamo; porque somos muchos."
  },
  {
    "id": "m121",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Encuentros con Jesús",
    "question": "¿Qué hermana de Lázaro se sentó a los pies de Jesús a escuchar su palabra, mientras su hermana Marta se afanaba con los quehaceres?",
    "options": [
      "María de Betania",
      "Salomé",
      "Juana",
      "Susana"
    ],
    "correctAnswer": 0,
    "verse": "Lucas 10:39-42",
    "explanation": "María ha escogido la buena parte, la cual no le será quitada."
  },
  {
    "id": "m122",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Encuentros con Jesús",
    "question": "¿Con qué ungieron los pies de Jesús en Betania derramando un perfume de nardo puro de gran precio que llenó la casa de olor?",
    "options": [
      "María de Betania",
      "Marta",
      "La esposa de Pilato",
      "Salomé"
    ],
    "correctAnswer": 0,
    "verse": "Juan 12:3",
    "explanation": "Entonces María tomó una libra de perfume de nardo puro, de mucho precio, y ungió los pies de Jesús, y los enjugó con sus cabellos."
  },
  {
    "id": "m123",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Parábolas de Jesús",
    "question": "En la parábola del fariseo y el publicano, ¿qué oración pronunció el publicano humillado en el templo que lo llevó justificado a su casa?",
    "options": [
      "\"Dios, te doy gracias porque no soy como los otros hombres\"",
      "\"Dios, sé propicio a mí, pecador\"",
      "\"Señor, he diezmado de toda mi cosecha\"",
      "\"Líbrame del juicio de los romanos\""
    ],
    "correctAnswer": 1,
    "verse": "Lucas 18:13-14",
    "explanation": "El publicano... no quería ni aun alzar los ojos al cielo, sino que se golpeaba el pecho, diciendo: Dios, sé propicio a mí, pecador."
  },
  {
    "id": "m124",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "La Pasión de Cristo",
    "question": "¿A qué preso peligroso y sedicioso prefirió soltar la multitud en lugar de Jesús por incitación de los principales sacerdotes?",
    "options": [
      "Barrabás",
      "Dimas",
      "Gestas",
      "Barjesús"
    ],
    "correctAnswer": 0,
    "verse": "Mateo 27:20-21",
    "explanation": "Los principales sacerdotes y los ancianos persuadieron a la multitud que pidiese a Barrabás, y que se matase a Jesús."
  },
  {
    "id": "m125",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Las Palabras en la Cruz",
    "question": "¿A qué discípulo amado encomendó Jesús el cuidado de su madre María desde la cruz diciendo: \"He aquí tu madre\"?",
    "options": [
      "A Pedro",
      "A Juan",
      "A Santiago",
      "A Andrés"
    ],
    "correctAnswer": 1,
    "verse": "Juan 19:26-27",
    "explanation": "Cuando vio Jesús a su madre, y al discípulo a quien él amaba... dijo a la madre: Mujer, he ahí tu hijo. Después dijo al discípulo: He ahí tu madre."
  },
  {
    "id": "m126",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "La Resurrección",
    "question": "Junto al mar de Tiberias tras resucitar, ¿cuántas veces le preguntó Jesús a Pedro: \"Simón, hijo de Jonás, ¿me amas?\" restaurando su ministerio?",
    "options": [
      "1 vez",
      "2 veces",
      "3 veces",
      "7 veces"
    ],
    "correctAnswer": 2,
    "verse": "Juan 21:15-17",
    "explanation": "Le dijo la tercera vez: Simón, hijo de Jonás, ¿me amas? Pedro se entristeció... y le dijo: Señor, tú lo sabes todo; tú sabes que te amo. Jesús le dijo: Apacienta mis ovejas."
  },
  {
    "id": "m127",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿A qué discípulo eligieron los apóstoles por suertes para ocupar el lugar de Judas Iscariote en el ministerio apostólico?",
    "options": [
      "Matías",
      "Barsabás",
      "Bernabé",
      "Esteban"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 1:26",
    "explanation": "Y les echaron suertes, y la suerte cayó sobre Matías; y fue contado con los once apóstoles."
  },
  {
    "id": "m128",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Cuántas personas aproximadamente se convirtieron y fueron bautizadas tras el primer sermón de Pedro en el día de Pentecostés?",
    "options": [
      "Como 500 personas",
      "Como 1,000 personas",
      "Como 3,000 personas",
      "Como 10,000 personas"
    ],
    "correctAnswer": 2,
    "verse": "Hechos 2:41",
    "explanation": "Así que, los que recibieron su palabra fueron bautizados; y se añadieron aquel día como tres mil personas."
  },
  {
    "id": "m129",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué sabio fariseo y doctor de la ley aconsejó al concilio judío no perseguir a los apóstoles diciendo: \"Si este consejo es de los hombres, se desvanecerá; mas si es de Dios, no la podréis destruir\"?",
    "options": [
      "Gamaliel",
      "Nicodemo",
      "Caifás",
      "Ananías"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 5:34-39",
    "explanation": "Un fariseo llamado Gamaliel, doctor de la ley, venerado de todo el pueblo... dijo: No os pongáis en riesgo de ser hallados luchando contra Dios."
  },
  {
    "id": "m130",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿A qué funcionario etíope de la reina Candace bautizó el evangelista Felipe en el camino de Jerusalén a Gaza tras explicarle Isaías 53?",
    "options": [
      "Al eunuco etíope tesorero de la reina",
      "Al capitán de la guardia",
      "Al embajador de Egipto",
      "A un comerciante de especias"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 8:27-38",
    "explanation": "Un eunuco etíope, funcionario de Candace... dijo: Aquí hay agua; ¿qué impide que yo sea bautizado? Y descendieron ambos al agua, Felipe y el eunuco, y le bautizó."
  },
  {
    "id": "m131",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué discípula piadosa de Jope, llena de buenas obras y limosnas que hacía túnicas, fue resucitada por Pedro?",
    "options": [
      "Tabita (Dorcas)",
      "Lidia de Tiatira",
      "Priscila",
      "Rode"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 9:36-40",
    "explanation": "Había entonces en Jope una discípula llamada Tabita, que traducido quiere decir, Dorcas... Pedro oró y volviéndose al cuerpo, dijo: Tabita, levántate."
  },
  {
    "id": "m132",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿En qué ciudad fue donde por primera vez se les llamó \"cristianos\" a los discípulos de Jesús?",
    "options": [
      "Jerusalén",
      "Antioquía de Siria",
      "Éfeso",
      "Roma"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 11:26",
    "explanation": "Y se congregaron allí todo un año con la iglesia... y a los discípulos se les llamó cristianos por primera vez en Antioquía."
  },
  {
    "id": "m133",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué sirvienta fue a la puerta en casa de María cuando Pedro, liberado milagrosamente de la cárcel por un ángel, llamó, y de gozo no abrió?",
    "options": [
      "Rode",
      "Salomé",
      "Lidia",
      "Evodia"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 12:13-14",
    "explanation": "Cuando llamó Pedro a la puerta del patio, salió a escuchar una muchacha llamada Rode, la cual, cuando reconoció la voz de Pedro, de gozo no abrió la puerta."
  },
  {
    "id": "m134",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué vendedora de púrpura de la ciudad de Tiatira creyó en Filipos y abrió su casa para hospedar a Pablo y a Silas?",
    "options": [
      "Lidia",
      "Febe",
      "Priscila",
      "Sintique"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 16:14-15",
    "explanation": "Una mujer llamada Lidia, vendedora de púrpura, de la ciudad de Tiatira, que adoraba a Dios, estaba oyendo; y el Señor abrió el corazón de ella."
  },
  {
    "id": "m135",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿En qué isla del Mediterráneo naufragó el barco que llevaba al apóstol Pablo prisionero rumbo a Roma, donde una víbora le mordió la mano sin causarle daño?",
    "options": [
      "Isla de Malta",
      "Isla de Creta",
      "Isla de Chipre",
      "Isla de Sicilia"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 28:1-5",
    "explanation": "Supimos que la isla se llamaba Malta... una víbora, huyendo del calor, se le prendió en la mano; pero él, sacudiendo la víbora en el fuego, ningún daño padeció."
  },
  {
    "id": "m136",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola a los Romanos",
    "question": "Completa Romanos 1:16: \"Porque no me avergüenzo del evangelio, porque es poder de Dios para _________ a todo aquel que cree\"",
    "options": [
      "riqueza",
      "salvación",
      "fama",
      "conocimiento"
    ],
    "correctAnswer": 1,
    "verse": "Romanos 1:16",
    "explanation": "Romanos 1:16: \"Porque no me avergüenzo del evangelio, porque es poder de Dios para salvación a todo aquel que cree; al judío primeramente, y también al griego.\""
  },
  {
    "id": "m137",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola a los Romanos",
    "question": "Completa Romanos 3:23: \"Por cuanto todos pecaron, y están destituidos de la _________ de Dios\"",
    "options": [
      "tierra",
      "gloria",
      "ley",
      "vida"
    ],
    "correctAnswer": 1,
    "verse": "Romanos 3:23",
    "explanation": "Romanos 3:23: \"Por cuanto todos pecaron, y están destituidos de la gloria de Dios.\""
  },
  {
    "id": "m138",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola a los Romanos",
    "question": "Completa Romanos 6:23: \"Porque la paga del pecado es muerte, mas la dádiva de Dios es _________ en Cristo Jesús Señor nuestro.\"",
    "options": [
      "salud terrenal",
      "vida eterna",
      "paz momentánea",
      "sabiduría humana"
    ],
    "correctAnswer": 1,
    "verse": "Romanos 6:23",
    "explanation": "Romanos 6:23: \"Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro.\""
  },
  {
    "id": "m139",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola a los Romanos",
    "question": "Completa Romanos 8:31: \"¿Qué, pues, diremos a esto? Si Dios es por nosotros, ¿_________?\"",
    "options": [
      "quién contra nosotros",
      "quién nos salvará",
      "quién será rico",
      "adónde iremos"
    ],
    "correctAnswer": 0,
    "verse": "Romanos 8:31",
    "explanation": "Romanos 8:31: \"¿Qué, pues, diremos a esto? Si Dios es por nosotros, ¿quién contra nosotros?\""
  },
  {
    "id": "m140",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola a los Romanos",
    "question": "Completa Romanos 10:9: \"Que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás _________\"",
    "options": [
      "juzgado",
      "salvo",
      "exaltado",
      "probado"
    ],
    "correctAnswer": 1,
    "verse": "Romanos 10:9",
    "explanation": "Romanos 10:9: \"...y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo.\""
  },
  {
    "id": "m141",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "1 Corintios",
    "question": "Completa 1 Corintios 10:13: \"No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis _________\"",
    "options": [
      "desear",
      "resistir",
      "comprar",
      "soñar"
    ],
    "correctAnswer": 1,
    "verse": "1 Corintios 10:13",
    "explanation": "1 Corintios 10:13: \"...sino que dará también juntamente con la tentación la salida, para que podáis soportar.\""
  },
  {
    "id": "m142",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Corintios",
    "question": "En 1 Corintios 12, ¿con qué ilustra Pablo la diversidad de dones y la unidad de los creyentes en la iglesia?",
    "options": [
      "Con un edificio de piedra",
      "Con un cuerpo humano que tiene muchos miembros interdependientes",
      "Con un barco y sus velas",
      "Con un ejército y sus armas"
    ],
    "correctAnswer": 1,
    "verse": "1 Corintios 12:12-27",
    "explanation": "Porque así como el cuerpo es uno, y tiene muchos miembros... así también Cristo. Vosotros, pues, sois el cuerpo de Cristo, y miembros cada uno en particular."
  },
  {
    "id": "m143",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "2 Corintios",
    "question": "Completa 2 Corintios 5:17: \"De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas _________\"",
    "options": [
      "iguales",
      "nuevas",
      "difíciles",
      "eternas"
    ],
    "correctAnswer": 1,
    "verse": "2 Corintios 5:17",
    "explanation": "2 Corintios 5:17: \"...las cosas viejas pasaron; he aquí todas son hechas nuevas.\""
  },
  {
    "id": "m144",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "2 Corintios",
    "question": "¿Qué le respondió el Señor a Pablo cuando le rogó tres veces que le quitara su \"aguijón en la carne\"? (2 Corintios 12:9)",
    "options": [
      "\"Espera diez años más\"",
      "\"Bástate mi gracia; porque mi poder se perfecciona en la debilidad\"",
      "\"No tienes suficiente fe\"",
      "\"Ve y lávate en el estanque\""
    ],
    "correctAnswer": 1,
    "verse": "2 Corintios 12:9",
    "explanation": "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad."
  },
  {
    "id": "m145",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola a los Gálatas",
    "question": "Completa Gálatas 6:7: \"No os engañéis; Dios no puede ser burlado: pues todo lo que el hombre sembrare, eso también _________\"",
    "options": [
      "olvidará",
      "segará (cosechará)",
      "venderá",
      "perderá"
    ],
    "correctAnswer": 1,
    "verse": "Gálatas 6:7",
    "explanation": "Gálatas 6:7: \"No os engañéis; Dios no puede ser burlado: pues todo lo que el hombre sembrare, eso también segará.\""
  },
  {
    "id": "m146",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola a los Efesios",
    "question": "En Efesios 6:10-18, ¿qué pieza de la armadura espiritual de Dios sirve para apagar todos los dardos de fuego del maligno?",
    "options": [
      "El cinto de la verdad",
      "El calzado de la paz",
      "El escudo de la fe",
      "El yelmo de la salvación"
    ],
    "correctAnswer": 2,
    "verse": "Efesios 6:16",
    "explanation": "Sobre todo, tomad el escudo de la fe, con que podáis apagar todos los dardos de fuego del maligno."
  },
  {
    "id": "m147",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola a los Filipenses",
    "question": "Completa Filipenses 1:21: \"Porque para mí el vivir es Cristo, y el morir es _________\"",
    "options": [
      "tristeza",
      "ganancia",
      "fin",
      "derrota"
    ],
    "correctAnswer": 1,
    "verse": "Filipenses 1:21",
    "explanation": "Filipenses 1:21: \"Porque para mí el vivir es Cristo, y el morir es ganancia.\""
  },
  {
    "id": "m148",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola a los Filipenses",
    "question": "Completa Filipenses 2:10-11: \"Para que en el nombre de Jesús se doble toda rodilla... y toda lengua confiese que Jesucristo es el _________, para gloria de Dios Padre.\"",
    "options": [
      "profeta",
      "Señor",
      "maestro",
      "juez"
    ],
    "correctAnswer": 1,
    "verse": "Filipenses 2:10-11",
    "explanation": "Filipenses 2:11: \"...y toda lengua confiese que Jesucristo es el Señor, para gloria de Dios Padre.\""
  },
  {
    "id": "m149",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola a los Colosenses",
    "question": "Completa Colosenses 3:23: \"Y todo lo que hagáis, hacedlo de corazón, como para el _________ y no para los hombres\"",
    "options": [
      "jefe",
      "Señor",
      "mundo",
      "dinero"
    ],
    "correctAnswer": 1,
    "verse": "Colosenses 3:23",
    "explanation": "Colosenses 3:23: \"Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.\""
  },
  {
    "id": "m150",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "1 Tesalonicenses",
    "question": "Completa 1 Tesalonicenses 5:16-18: \"Estad siempre gozosos. Orad sin _________. Dad gracias en todo.\"",
    "options": [
      "ruido",
      "cesar",
      "miedo",
      "duda"
    ],
    "correctAnswer": 1,
    "verse": "1 Tesalonicenses 5:17",
    "explanation": "1 Tesalonicenses 5:17: \"Orad sin cesar.\""
  },
  {
    "id": "m151",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "1 Timoteo",
    "question": "Completa 1 Timoteo 4:12: \"Ninguno tenga en poco tu juventud, sino sé _________ de los creyentes en palabra, conducta, amor, espíritu, fe y pureza.\"",
    "options": [
      "juez",
      "ejemplo",
      "maestro",
      "líder"
    ],
    "correctAnswer": 1,
    "verse": "1 Timoteo 4:12",
    "explanation": "1 Timoteo 4:12: \"Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes en palabra, conducta, amor, espíritu, fe y pureza.\""
  },
  {
    "id": "m152",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "1 Timoteo",
    "question": "Completa 1 Timoteo 6:10: \"Porque raíz de todos los males es el _________ al dinero\"",
    "options": [
      "odio",
      "amor",
      "deseo",
      "miedo"
    ],
    "correctAnswer": 1,
    "verse": "1 Timoteo 6:10",
    "explanation": "1 Timoteo 6:10: \"Porque raíz de todos los males es el amor al dinero, el cual codiciando algunos, se extraviaron de la fe.\""
  },
  {
    "id": "m153",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "2 Timoteo",
    "question": "Completa 2 Timoteo 1:7: \"Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de _________\"",
    "options": [
      "riqueza",
      "dominio propio",
      "fama",
      "orgullo"
    ],
    "correctAnswer": 1,
    "verse": "2 Timoteo 1:7",
    "explanation": "2 Timoteo 1:7: \"Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.\""
  },
  {
    "id": "m154",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "2 Timoteo",
    "question": "Completa 2 Timoteo 3:16: \"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en _________\"",
    "options": [
      "filosofía",
      "justicia",
      "ciencia",
      "oratoria"
    ],
    "correctAnswer": 1,
    "verse": "2 Timoteo 3:16",
    "explanation": "2 Timoteo 3:16: \"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia.\""
  },
  {
    "id": "m155",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola a Filemón",
    "question": "¿Por qué esclavo fugitivo intercedió Pablo ante su amo Filemón pidiendo que lo recibiera no ya como esclavo, sino como hermano amado?",
    "options": [
      "Onésimo",
      "Tíquico",
      "Epafrodito",
      "Aristarco"
    ],
    "correctAnswer": 0,
    "verse": "Filemón 1:10-16",
    "explanation": "Te ruego por mi hijo Onésimo, a quien he engendrado en mis prisiones... para que le recibieses para siempre; no ya como esclavo, sino como hermano amado."
  },
  {
    "id": "m156",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola a los Hebreos",
    "question": "Completa Hebreos 4:12: \"Porque la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos _________\"",
    "options": [
      "puntas",
      "filos",
      "empuñaduras",
      "metales"
    ],
    "correctAnswer": 1,
    "verse": "Hebreos 4:12",
    "explanation": "Hebreos 4:12: \"Porque la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos; y penetra hasta partir el alma y el espíritu...\""
  },
  {
    "id": "m157",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola a los Hebreos",
    "question": "Completa Hebreos 12:2: \"Puestos los ojos en Jesús, el autor y consumador de la _________\"",
    "options": [
      "paz",
      "fe",
      "ley",
      "creación"
    ],
    "correctAnswer": 1,
    "verse": "Hebreos 12:2",
    "explanation": "Hebreos 12:2: \"Puestos los ojos en Jesús, el autor y consumador de la fe.\""
  },
  {
    "id": "m158",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola a los Hebreos",
    "question": "Completa Hebreos 13:8: \"Jesucristo es el mismo ayer, y hoy, y por los _________\"",
    "options": [
      "días",
      "siglos",
      "años",
      "hombres"
    ],
    "correctAnswer": 1,
    "verse": "Hebreos 13:8",
    "explanation": "Hebreos 13:8: \"Jesucristo es el mismo ayer, y hoy, y por los siglos.\""
  },
  {
    "id": "m159",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola de Santiago",
    "question": "Completa Santiago 1:5: \"Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin _________\"",
    "options": [
      "tardanza",
      "reproche",
      "condición",
      "medida"
    ],
    "correctAnswer": 1,
    "verse": "Santiago 1:5",
    "explanation": "Santiago 1:5: \"...pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.\""
  },
  {
    "id": "m160",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Epístola de Santiago",
    "question": "Completa Santiago 2:26: \"Porque como el cuerpo sin espíritu está muerto, así también la fe sin obras está _________\"",
    "options": [
      "incompleta",
      "muerta",
      "dormida",
      "oculta"
    ],
    "correctAnswer": 1,
    "verse": "Santiago 2:26",
    "explanation": "Santiago 2:26: \"Porque como el cuerpo sin espíritu está muerto, así también la fe sin obras está muerta.\""
  },
  {
    "id": "m161",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola de Santiago",
    "question": "¿Con qué miembros pequeños compara Santiago a la lengua humana para ilustrar su inmenso poder para bien o para mal?",
    "options": [
      "Con el freno en la boca de los caballos y el pequeño timón de las grandes naves",
      "Con una pequeña semilla y una rama",
      "Con una chispa de fuego y una gota de agua",
      "Con una cuerda y una aguja"
    ],
    "correctAnswer": 0,
    "verse": "Santiago 3:3-5",
    "explanation": "Ponemos freno en la boca de los caballos... mirad también las naves; gobernadas con un muy pequeño timón. Así también la lengua es un miembro pequeño, pero se jacta de grandes cosas."
  },
  {
    "id": "m162",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "1 Pedro",
    "question": "Completa 1 Pedro 5:7: \"Echando toda vuestra ansiedad sobre él, porque él tiene _________ de vosotros.\"",
    "options": [
      "juicio",
      "cuidado",
      "noticia",
      "lástima"
    ],
    "correctAnswer": 1,
    "verse": "1 Pedro 5:7",
    "explanation": "1 Pedro 5:7: \"Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.\""
  },
  {
    "id": "m163",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "1 Pedro",
    "question": "Completa 1 Pedro 5:8: \"Sed sobrios, y velad; porque vuestro adversario el diablo, como león rugiente, anda alrededor buscando a quién _________\"",
    "options": [
      "engañar",
      "devorar",
      "asustar",
      "juzgar"
    ],
    "correctAnswer": 1,
    "verse": "1 Pedro 5:8",
    "explanation": "1 Pedro 5:8: \"Sed sobrios, y velad; porque vuestro adversario el diablo, como león rugiente, anda alrededor buscando a quién devorar.\""
  },
  {
    "id": "m164",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "2 Pedro",
    "question": "Completa 2 Pedro 3:8: \"Mas, oh amados, no ignoréis esto: que para con el Señor un día es como mil años, y mil años como _________\"",
    "options": [
      "un suspiro",
      "un día",
      "una hora",
      "un segundo"
    ],
    "correctAnswer": 1,
    "verse": "2 Pedro 3:8",
    "explanation": "2 Pedro 3:8: \"...que para con el Señor un día es como mil años, y mil años como un día.\""
  },
  {
    "id": "m165",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "1 Juan",
    "question": "Completa 1 Juan 1:9: \"Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda _________\"",
    "options": [
      "maldad",
      "injusticia",
      "duda",
      "culpa"
    ],
    "correctAnswer": 0,
    "verse": "1 Juan 1:9",
    "explanation": "1 Juan 1:9: \"Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad.\""
  },
  {
    "id": "m166",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "1 Juan",
    "question": "Completa la solemne declaración teológica en 1 Juan 4:8: \"El que no ama, no ha conocido a Dios; porque Dios es _________\"",
    "options": [
      "espíritu",
      "amor",
      "luz",
      "fuego"
    ],
    "correctAnswer": 1,
    "verse": "1 Juan 4:8",
    "explanation": "1 Juan 4:8: \"El que no ama, no ha conocido a Dios; porque Dios es amor.\""
  },
  {
    "id": "m167",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "1 Juan",
    "question": "Completa 1 Juan 4:18: \"En el amor no hay temor, sino que el perfecto amor echa fuera el _________\"",
    "options": [
      "odio",
      "temor",
      "pecado",
      "dolor"
    ],
    "correctAnswer": 1,
    "verse": "1 Juan 4:18",
    "explanation": "1 Juan 4:18: \"En el amor no hay temor, sino que el perfecto amor echa fuera el temor.\""
  },
  {
    "id": "m168",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿A cuántas iglesias de Asia Menor van dirigidas las cartas proféticas en los capítulos 2 y 3 del libro de Apocalipsis?",
    "options": [
      "3 iglesias",
      "7 iglesias (Éfeso, Esmirna, Pérgamo, Tiatira, Sardis, Filadelfia, Laodicea)",
      "10 iglesias",
      "12 iglesias"
    ],
    "correctAnswer": 1,
    "verse": "Apocalipsis 1:11; 2-3",
    "explanation": "Escribe en un libro lo que ves, y envíalo a las siete iglesias que están en Asia: a Éfeso, Esmirna, Pérgamo, Tiatira, Sardis, Filadelfia y Laodicea."
  },
  {
    "id": "m169",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿A cuál de las siete iglesias de Apocalipsis censuró el Señor duramente diciendo: \"Por cuanto eres tibio, y no frío ni caliente, te vomitaré de mi boca\"?",
    "options": [
      "A la iglesia en Filadelfia",
      "A la iglesia en Laodicea",
      "A la iglesia en Éfeso",
      "A la iglesia en Esmirna"
    ],
    "correctAnswer": 1,
    "verse": "Apocalipsis 3:15-16",
    "explanation": "Pero por cuanto eres tibio, y no frío ni caliente, te vomitaré de mi boca. Tú dices: Yo soy rico... y no sabes que eres un desventurado, miserable, pobre, ciego y desnudo."
  },
  {
    "id": "m170",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Quién es el único hallado digno en el cielo de tomar el libro y abrir sus siete sellos según Apocalipsis 5?",
    "options": [
      "El arcángel Miguel",
      "El profeta Moisés",
      "El León de la tribu de Judá, el Cordero que fue inmolado",
      "El apóstol Pedro"
    ],
    "correctAnswer": 2,
    "verse": "Apocalipsis 5:5-9",
    "explanation": "He aquí que el León de la tribu de Judá, la raíz de David, ha vencido para abrir el libro y desatar sus siete sellos... Digno eres, porque fuiste inmolado."
  },
  {
    "id": "m171",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Cuántos son los jinetes simbólicos que salen cabalgando en los primeros cuatro sellos de Apocalipsis 6?",
    "options": [
      "2 jinetes",
      "4 jinetes (caballo blanco, bermejo, negro y amarillo)",
      "7 jinetes",
      "12 jinetes"
    ],
    "correctAnswer": 1,
    "verse": "Apocalipsis 6:1-8",
    "explanation": "Los cuatro jinetes del Apocalipsis cabalgan sobre caballos blanco, bermejo (rojo), negro y amarillo (pálido)."
  },
  {
    "id": "m172",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "En Apocalipsis 19, ¿qué nombre glorioso lleva escrito en su vestidura y en su muslo el Jinete del caballo blanco?",
    "options": [
      "ÁNGEL DE LUZ",
      "REY DE REYES Y SEÑOR DE SEÑORES",
      "PROFETA DE NAZARET",
      "PRÍNCIPE DE PAZ"
    ],
    "correctAnswer": 1,
    "verse": "Apocalipsis 19:16",
    "explanation": "Y en su vestidura y en su muslo tiene escrito este nombre: REY DE REYES Y SEÑOR DE SEÑORES."
  },
  {
    "id": "m173",
    "level": "MEDIUM",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿De qué material precioso transparente como vidrio limpio son la plaza y las calles de la Nueva Jerusalén en Apocalipsis 21?",
    "options": [
      "De plata pura",
      "De oro puro, transparente como vidrio límpido",
      "De mármol blanco",
      "De zafiro azul"
    ],
    "correctAnswer": 1,
    "verse": "Apocalipsis 21:21",
    "explanation": "Y la calle de la ciudad era de oro puro, transparente como vidrio."
  },
  {
    "id": "m174",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Apocalipsis",
    "question": "Completa la penúltima oración de toda la Biblia en Apocalipsis 22:20: \"El que da testimonio de estas cosas dice: Ciertamente vengo en breve. Amén; sí, ven, Señor _________\"",
    "options": [
      "Dios",
      "Jesús",
      "Espíritu",
      "Creador"
    ],
    "correctAnswer": 1,
    "verse": "Apocalipsis 22:20",
    "explanation": "Apocalipsis 22:20: \"El que da testimonio de estas cosas dice: Ciertamente vengo en breve. Amén; sí, ven, Señor Jesús.\""
  },
  {
    "id": "m175",
    "level": "MEDIUM",
    "type": "FILL_VERSE",
    "category": "Cierre Bíblico",
    "question": "Completa el último versículo de toda la Biblia (Apocalipsis 22:21): \"La gracia de nuestro Señor Jesucristo sea con todos vosotros. _________\"",
    "options": [
      "Paz",
      "Amén",
      "Aleluya",
      "Gloria"
    ],
    "correctAnswer": 1,
    "verse": "Apocalipsis 22:21",
    "explanation": "Apocalipsis 22:21: \"La gracia de nuestro Señor Jesucristo sea con todos vosotros. Amén.\""
  },
  {
    "id": "h1",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Cronología y Genealogías",
    "question": "¿Quién fue el hombre más longevo según la Biblia y cuántos años vivió?",
    "options": [
      "Noé (950 años)",
      "Matusalén (969 años)",
      "Adán (930 años)",
      "Jared (962 años)"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 5:27",
    "explanation": "Matusalén vivió novecientos sesenta y nueve años; y murió."
  },
  {
    "id": "h2",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Reyes y Sanidad",
    "question": "¿A qué rey de Judá Dios le añadió 15 años de vida tras clamar y llorar ante Él con el profeta Isaías?",
    "options": [
      "Josías",
      "Ezequías",
      "Uzías",
      "Asa"
    ],
    "correctAnswer": 1,
    "verse": "2 Reyes 20:5-6 / Isaías 38:5",
    "explanation": "Dios dijo a Ezequías: \"He oído tu oración, y visto tus lágrimas; he aquí añado a tus días quince años.\""
  },
  {
    "id": "h3",
    "level": "HARD",
    "type": "TRUE_FALSE",
    "category": "Epístolas Paulinas",
    "question": "¿Verdadero o Falso? El libro de Filemón es una carta de Pablo intercediendo por un siervo fugitivo llamado Onésimo.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "verse": "Filemón 1:10-16",
    "explanation": "Pablo pide a Filemón que reciba a Onésimo no ya como esclavo, sino como hermano amado en Cristo."
  },
  {
    "id": "h4",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Cuál de las siguientes ciudades NO fue sede de una de las 7 iglesias de Asia en Apocalipsis 2 y 3?",
    "options": [
      "Éfeso y Esmirna",
      "Pérgamo y Tiatira",
      "Antioquía y Roma",
      "Sardis, Filadelfia y Laodicea"
    ],
    "correctAnswer": 2,
    "verse": "Apocalipsis 1:11",
    "explanation": "Las 7 iglesias de Asia son Éfeso, Esmirna, Pérgamo, Tiatira, Sardis, Filadelfia y Laodicea."
  },
  {
    "id": "h5",
    "level": "HARD",
    "type": "WHO_SAID_IT",
    "category": "¿Quién lo dijo?",
    "question": "¿Qué profeta en Hechos ató sus manos y pies con el cinto de Pablo anunciando que sería arrestado en Jerusalén?",
    "options": [
      "Bernabé",
      "Ágabo",
      "Silas",
      "Apolos"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 21:10-11",
    "explanation": "El profeta Ágabo profetizó con el cinto de Pablo lo que le esperaba en Jerusalén."
  },
  {
    "id": "h6",
    "level": "HARD",
    "type": "FILL_VERSE",
    "category": "Profecía y Justicia",
    "question": "Miqueas 6:8: \"¿Y qué pide Jehová de ti: solamente hacer justicia, y amar misericordia, y ____________ ante tu Dios?\"",
    "options": [
      "humillarte para andar",
      "ofrendar con alegría",
      "orar en silencio",
      "cantar salmos"
    ],
    "correctAnswer": 0,
    "verse": "Miqueas 6:8",
    "explanation": "\"...solamente hacer justicia, y amar misericordia, y humillarte para andar con tu Dios.\""
  },
  {
    "id": "h7",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "El Tabernáculo",
    "question": "¿De qué madera estaba construida el Arca del Pacto antes de ser recubierta de oro puro por dentro y por fuera?",
    "options": [
      "Madera de Cedro del Líbano",
      "Madera de Acacia",
      "Madera de Olivo",
      "Madera de Roble"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 25:10",
    "explanation": "Harán un arca de madera de acacia (madera incorruptible del desierto)."
  },
  {
    "id": "h8",
    "level": "HARD",
    "type": "EMOJI_GUESS",
    "category": "Adivina la Historia",
    "question": "¿Qué batalla representan estos emojis? 🏺 🎺 🪔 🍞 3️⃣0️⃣0️⃣ ⚔️",
    "options": [
      "La toma de Jericó",
      "Gedeón contra los madianitas",
      "Josafat en el desierto de Tecoa",
      "Sansón en Leji"
    ],
    "correctAnswer": 1,
    "verse": "Jueces 7:16-22",
    "explanation": "Gedeón y sus 300 soldados tocaron las trompetas y quebraron los cántaros con teas ardiendo."
  },
  {
    "id": "h9",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Evangelios",
    "question": "¿Cuál de los cuatro evangelios comienza diciendo: \"En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios\"?",
    "options": [
      "Mateo",
      "Marcos",
      "Lucas",
      "Juan"
    ],
    "correctAnswer": 3,
    "verse": "Juan 1:1",
    "explanation": "Juan presenta la deidad y preexistencia eterna de Jesucristo como el Logos divino."
  },
  {
    "id": "h10",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Sabiduría",
    "question": "¿Qué libro de la Biblia culmina con el famoso poema acróstico a la Mujer Virtuosa (capítulo 31)?",
    "options": [
      "Cantar de los Cantares",
      "Proverbios",
      "Eclesiastés",
      "Rut"
    ],
    "correctAnswer": 1,
    "verse": "Proverbios 31:10-31",
    "explanation": "El poema describe a la mujer hacendosa y temerosa de Dios cuyo valor supera a las piedras preciosas."
  },
  {
    "id": "h11",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Antiguo Testamento",
    "question": "¿Quién fue el sumo sacerdote que cayó de su silla hacia atrás y murió desnucado al enterarse de que el Arca de Dios había sido capturada por los filisteos?",
    "options": [
      "Aarón",
      "Elí",
      "Finees",
      "Sadoc"
    ],
    "correctAnswer": 1,
    "verse": "1 Samuel 4:18",
    "explanation": "Elí, con 98 años y de ojos oscurecidos, cayó de espaldas al escuchar la pérdida del Arca."
  },
  {
    "id": "h12",
    "level": "HARD",
    "type": "TRUE_FALSE",
    "category": "Curiosidades Bíblicas",
    "question": "¿Verdadero o Falso? El versículo más corto en español de la Biblia es Juan 11:35: \"Jesús lloró\".",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "verse": "Juan 11:35",
    "explanation": "Con solo dos palabras (\"Jesús lloró\"), es el versículo más corto del Nuevo Testamento."
  },
  {
    "id": "h13",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿En qué isla del Mediterráneo naufragó el barco en el que Pablo viajaba prisionero rumbo a Roma?",
    "options": [
      "Chipre",
      "Creta",
      "Malta",
      "Patmos"
    ],
    "correctAnswer": 2,
    "verse": "Hechos 28:1",
    "explanation": "Estando ya a salvo, supieron que la isla se llamaba Malta."
  },
  {
    "id": "h14",
    "level": "HARD",
    "type": "WHO_SAID_IT",
    "category": "¿Quién lo dijo?",
    "question": "¿Quién exclamó en el juicio ante el rey Agripa: \"¡Por poco me persuades a ser cristiano!\"?",
    "options": [
      "Festo",
      "El rey Agripa",
      "Félix",
      "Claudio Lisias"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 26:28",
    "explanation": "El rey Agripa dijo esto conmovido tras escuchar la apasionada defensa de Pablo."
  },
  {
    "id": "h15",
    "level": "HARD",
    "type": "FILL_VERSE",
    "category": "Hebreos",
    "question": "Hebreos 11:1: \"Es, pues, la fe la certeza de lo que se espera, la convicción de lo que _________\"",
    "options": [
      "no se ve",
      "está por venir",
      "se anhela",
      "se promete"
    ],
    "correctAnswer": 0,
    "verse": "Hebreos 11:1",
    "explanation": "\"Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.\""
  },
  {
    "id": "h16",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Personajes Obscuros",
    "question": "¿Quién fue el sacerdote y rey de Salem a quien Abraham dio los diezmos de todo tras rescatar a Lot?",
    "options": [
      "Jetro",
      "Melquisedec",
      "Balaam",
      "Abimelec"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 14:18-20 / Hebreos 7",
    "explanation": "Melquisedec, rey de justicia y de paz, tipifica el sacerdocio eterno de Cristo."
  },
  {
    "id": "h17",
    "level": "HARD",
    "type": "EMOJI_GUESS",
    "category": "Adivina la Profecía",
    "question": "¿Qué visión profética de Ezequiel representan estos emojis? 💀 🦴 🏜️ 💨 🧍‍♂️🧍‍♀️🧍‍♂️ (Un ejército viviente)",
    "options": [
      "Las cuatro bestias",
      "El valle de los huesos secos",
      "La rueda dentro de la rueda",
      "El río del santuario"
    ],
    "correctAnswer": 1,
    "verse": "Ezequiel 37:1-10",
    "explanation": "Ezequiel profetizó al soplo del Espíritu y los huesos secos cobraron vida como un gran ejército."
  },
  {
    "id": "h18",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Lenguas Bíblicas",
    "question": "¿En qué dos idiomas principales fue escrito originalmente el Antiguo Testamento?",
    "options": [
      "Griego y Latín",
      "Hebreo y Arameo",
      "Hebreo y Griego",
      "Arameo y Árabe"
    ],
    "correctAnswer": 1,
    "verse": "Esdras / Daniel",
    "explanation": "La gran mayoría fue escrita en hebreo, con porciones selectas en arameo (en Esdras y Daniel)."
  },
  {
    "id": "h19",
    "level": "HARD",
    "type": "TRUE_FALSE",
    "category": "Profetas Menores",
    "question": "¿Verdadero o Falso? El profeta Oseas fue instruido por Dios a casarse con una mujer infiel llamada Gomer para ilustrar el amor redentor de Dios hacia Israel.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": 0,
    "verse": "Oseas 1:2-3",
    "explanation": "Oseas tomó por esposa a Gomer como una vívida lección del amor fiel e incondicional de Dios."
  },
  {
    "id": "h20",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "El Sanedrín",
    "question": "¿Qué sabio fariseo y doctor de la ley aconsejó al concilio no perseguir a los apóstoles diciendo: \"Si este consejo o esta obra es de los hombres, se desvanecerá; mas si es de Dios, no la podréis destruir\"?",
    "options": [
      "Nicodemo",
      "Gamaliel",
      "Anás",
      "Tertulo"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 5:34-39",
    "explanation": "Gamaliel dio este sabio consejo protegiendo providencialmente la vida de los apóstoles."
  },
  {
    "id": "h21",
    "level": "HARD",
    "type": "FILL_VERSE",
    "category": "Romanos",
    "question": "Romanos 8:28: \"Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su _________ son llamados.\"",
    "options": [
      "propósito",
      "voluntad",
      "gracia",
      "sabiduría"
    ],
    "correctAnswer": 0,
    "verse": "Romanos 8:28",
    "explanation": "\"...a los que conforme a su propósito son llamados.\""
  },
  {
    "id": "h22",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Guerra Espiritual",
    "question": "En la Armadura de Dios descrita en Efesios 6:10-18, ¿cuál es la ÚNICA arma explícitamente ofensiva?",
    "options": [
      "El escudo de la fe",
      "El yelmo de la salvación",
      "La espada del Espíritu, que es la palabra de Dios",
      "El calzado del evangelio"
    ],
    "correctAnswer": 2,
    "verse": "Efesios 6:17",
    "explanation": "La espada del Espíritu, la Palabra viva de Dios, es el arma con la que Jesús mismo venció al enemigo."
  },
  {
    "id": "h23",
    "level": "HARD",
    "type": "WHO_SAID_IT",
    "category": "¿Quién lo dijo?",
    "question": "¿Quién fue el primer mártir cristiano que, al ser apedreado, oró diciendo: \"Señor, no les tomes en cuenta este pecado\"?",
    "options": [
      "Santiago",
      "Esteban",
      "Felipe",
      "Policarpo"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 7:59-60",
    "explanation": "Esteban murió lleno del Espíritu Santo viendo los cielos abiertos y a Jesús a la diestra de Dios."
  },
  {
    "id": "h24",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Genealogía de Jesús",
    "question": "¿Cuántas mujeres son mencionadas explícitamente en la genealogía de Jesús en el capítulo 1 del Evangelio de Mateo?",
    "options": [
      "2 mujeres",
      "3 mujeres",
      "5 mujeres (Tamar, Rahab, Rut, Betsabé/la de Urías, y María)",
      "7 mujeres"
    ],
    "correctAnswer": 2,
    "verse": "Mateo 1:1-16",
    "explanation": "Mateo incluye de forma extraordinaria por la gracia a Tamar, Rahab, Rut, la mujer de Urías y María."
  },
  {
    "id": "h25",
    "level": "HARD",
    "type": "EMOJI_GUESS",
    "category": "Adivina la Revelación",
    "question": "¿Qué pasaje de Apocalipsis es? 🚪 ✊ ❤️ 🍽️ (\"He aquí, yo estoy a la puerta y llamo...\")",
    "options": [
      "Apocalipsis 3:20 a Laodicea",
      "Apocalipsis 22:20",
      "Apocalipsis 1:8",
      "Apocalipsis 21:1"
    ],
    "correctAnswer": 0,
    "verse": "Apocalipsis 3:20",
    "explanation": "\"He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo.\""
  },
  {
    "id": "h26",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Sobre qué montes específicos reposó el arca de Noé en el mes séptimo, a los diecisiete días del mes?",
    "options": [
      "Montes de Ararat",
      "Monte Nebo",
      "Monte Hermón",
      "Monte Carmelo"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 8:4",
    "explanation": "Y reposó el arca en el mes séptimo, a los diecisiete días del mes, sobre los montes de Ararat."
  },
  {
    "id": "h27",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Quién fue el poderoso cazador delante de Jehová y fundador de Babel, Erec, Acad y Calne en tierra de Sinar?",
    "options": [
      "Nimrod hijo de Cus",
      "Túbal-caín",
      "Jubal",
      "Mizraim"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 10:8-10",
    "explanation": "Cus engendró a Nimrod, quien llegó a ser el primer poderoso en la tierra. Este fue vigoroso cazador delante de Jehová."
  },
  {
    "id": "h28",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿Por cuántas monedas de plata compró Abraham la cueva de Macpela a Efrón el heteo como sepultura para Sara?",
    "options": [
      "50 siclos de plata",
      "100 siclos de plata",
      "400 siclos de plata de buena ley entre mercaderes",
      "1,000 siclos de plata"
    ],
    "correctAnswer": 2,
    "verse": "Génesis 23:15-16",
    "explanation": "Pesó Abraham a Efrón el dinero... cuatrocientos siclos de plata, de buena ley entre mercaderes."
  },
  {
    "id": "h29",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿Qué nombre egipcio le dio Faraón a José cuando lo nombró gobernador de todo Egipto y le dio por esposa a Asenat?",
    "options": [
      "Zafnat-panea",
      "Potifera",
      "Sesostris",
      "Ramsés"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 41:45",
    "explanation": "Y llamó Faraón el nombre de José, Zafnat-panea; y le dio por mujer a Asenat, hija de Potifera sacerdote de On."
  },
  {
    "id": "h30",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Éxodo",
    "question": "¿Cómo se llamaban las dos valientes parteras hebreas que temieron a Dios y no mataron a los niños varones como mandó el rey de Egipto?",
    "options": [
      "Sifra y Fúa",
      "Miriam y Séfora",
      "Elisabet y Ana",
      "Bia y Cozbi"
    ],
    "correctAnswer": 0,
    "verse": "Éxodo 1:15-17",
    "explanation": "El rey de Egipto habló a las parteras de las hebreas, una de las cuales se llamaba Sifra, y otra Fúa; pero las parteras temieron a Dios."
  },
  {
    "id": "h31",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Éxodo",
    "question": "En la batalla de Refidim contra Amalec, ¿quiénes sostuvieron los brazos cansados de Moisés en lo alto del collado hasta la puesta del sol?",
    "options": [
      "Josué y Caleb",
      "Aarón y Hur",
      "Eleazar e Itamar",
      "Gersón y Coat"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 17:12",
    "explanation": "Aarón y Hur sostenían sus manos, el uno de un lado y el otro de otro; así hubo en sus manos firmeza hasta que se puso el sol."
  },
  {
    "id": "h32",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "El Tabernáculo",
    "question": "¿De qué madera incorruptible ordenó Dios construir la mayor parte de los muebles sagrados del Tabernáculo (el Arca, la Mesa, el Altar)?",
    "options": [
      "Madera de cedro del Líbano",
      "Madera de acacia (sitim)",
      "Madera de olivo silvestre",
      "Madera de ciprés"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 25:10, 23; 27:1",
    "explanation": "Harán también un arca de madera de acacia... y una mesa de madera de acacia... y un altar de madera de acacia."
  },
  {
    "id": "h33",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "El Sumo Sacerdote",
    "question": "¿Qué dos objetos sagrados colocados en el pectoral del juicio del Sumo Sacerdote se usaban para consultar la voluntad divina?",
    "options": [
      "El Urim y el Tumim",
      "El Efod y la Mitra",
      "El Incensario y la Redoma",
      "Los Querubines y las Tablas"
    ],
    "correctAnswer": 0,
    "verse": "Éxodo 28:30",
    "explanation": "Y pondrás en el pectoral del juicio Urim y Tumim, para que estén sobre el corazón de Aarón cuando entre delante de Jehová."
  },
  {
    "id": "h34",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Levítico",
    "question": "En el gran Día de la Expiación (Yom Kipur), ¿hacia dónde era enviado el macho cabrío expiatorio sobre el cual se confesaban las iniquidades de Israel?",
    "options": [
      "Al monte Sinaí",
      "Al desierto, para Azazel",
      "Al río Jordán",
      "Al altar de bronce para ser quemado"
    ],
    "correctAnswer": 1,
    "verse": "Levítico 16:10, 21-22",
    "explanation": "Aquel sobre el cual cayere la suerte por Azazel... lo enviará a Azazel al desierto, llevando sobre sí todas las iniquidades."
  },
  {
    "id": "h35",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Levítico",
    "question": "¿Cada cuántos años ordenaba la Ley de Moisés celebrar el Año del Jubileo, proclamando libertad en toda la tierra y regresando cada uno a su posesión?",
    "options": [
      "Cada 7 años",
      "Cada 12 años",
      "Cada 50 años",
      "Cada 70 años"
    ],
    "correctAnswer": 2,
    "verse": "Levítico 25:10-11",
    "explanation": "Y santificaréis el año cincuenta, y pregonaréis libertad en la tierra a todos sus moradores; ese año os será de jubileo."
  },
  {
    "id": "h36",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Números",
    "question": "¿Por qué pecado específico en Cades Dios no permitió a Moisés y Aarón entrar a la Tierra Prometida?",
    "options": [
      "Por construir un altar falso",
      "Por golpear la peña dos veces con enojo en lugar de hablarle como Dios mandó, no santificándolo ante el pueblo",
      "Por quejarse del maná",
      "Por no circuncidar a sus hijos"
    ],
    "correctAnswer": 1,
    "verse": "Números 20:8-12",
    "explanation": "Jehová dijo a Moisés y a Aarón: Por cuanto no creísteis en mí, para santificarme delante de los hijos de Israel, por tanto, no meteréis esta congregación en la tierra."
  },
  {
    "id": "h37",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Deuteronomio",
    "question": "¿En qué monte murió Moisés a la edad de 120 años tras contemplar toda la Tierra Prometida, siendo sepultado por el mismo Dios?",
    "options": [
      "Monte Carmelo",
      "Monte Nebo (cumbre del Pisga)",
      "Monte Gerizim",
      "Monte Ebal"
    ],
    "correctAnswer": 1,
    "verse": "Deuteronomio 34:1-6",
    "explanation": "Subió Moisés de los campos de Moab al monte Nebo, a la cumbre del Pisga... Y murió allí Moisés siervo de Jehová, y lo enterró en el valle."
  },
  {
    "id": "h38",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Josué",
    "question": "¿Qué pueblo cananeo engañó a Josué presentándose con ropas viejas, pan enmohecido y odres rotos fingiendo venir de un país muy lejano?",
    "options": [
      "Los amorreos",
      "Los gabaonitas",
      "Los jebuseos",
      "Los ferezeos"
    ],
    "correctAnswer": 1,
    "verse": "Josué 9:3-15",
    "explanation": "Los moradores de Gabaón fingieron ser embajadores... y los hombres de Israel tomaron de sus provisiones, y no consultaron a Jehová."
  },
  {
    "id": "h39",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Josué",
    "question": "¿Cuántos años tenía el valiente Caleb cuando pidió a Josué que le diera el monte Hebrón habitado por gigantes anaceos para conquistarlo?",
    "options": [
      "40 años",
      "65 años",
      "85 años",
      "100 años"
    ],
    "correctAnswer": 2,
    "verse": "Josué 14:10-12",
    "explanation": "Hoy soy de edad de ochenta y cinco años. Todavía estoy tan fuerte como el día que Moisés me envió... Dame, pues, ahora este monte."
  },
  {
    "id": "h40",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Qué palabra contraseña usaron los hombres de Galaad junto a los vados del Jordán para identificar y matar a 42,000 efraimitas que no podían pronunciarla bien?",
    "options": [
      "Maranata",
      "Shibólet (decían Sibólet)",
      "Ebenezer",
      "Aleluya"
    ],
    "correctAnswer": 1,
    "verse": "Jueces 12:5-6",
    "explanation": "Le decían: Ahora pues di Shibólet; y él decía Sibólet; porque no podía pronunciarlo correctamente. Entonces le echaban mano, y le degollaban."
  },
  {
    "id": "h41",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Cómo murió Abimelec, el tiránico hijo de Gedeón, mientras sitiaba la torre fuerte de Tebes?",
    "options": [
      "Una mujer arrojó un pedazo de rueda de molino sobre su cabeza y le quebró el cráneo",
      "Una flecha perdida le atravesó el cuello",
      "Murió ahogado en el río",
      "Fue envenenado en un banquete"
    ],
    "correctAnswer": 0,
    "verse": "Jueces 9:53-54",
    "explanation": "Una mujer escamoteó un pedazo de una rueda de molino sobre la cabeza de Abimélec, y le rompió el cráneo."
  },
  {
    "id": "h42",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "¿A qué sacerdote de Nob acudió David huyendo de Saúl, quien le dio los panes de la proposición y la espada de Goliat?",
    "options": [
      "Ahimelec hijo de Ahitob",
      "Abiatar",
      "Zadoc",
      "Fineas"
    ],
    "correctAnswer": 0,
    "verse": "1 Samuel 21:1-9",
    "explanation": "Vino David a Nob, al sacerdote Ahimelec... y el sacerdote le dio el pan sagrado... y la espada de Goliat el filisteo."
  },
  {
    "id": "h43",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "¿Qué edomita, jefe de los pastores de Saúl, delató a Ahimelec y asesinó por orden de Saúl a 85 sacerdotes de Nob que vestían efod de lino?",
    "options": [
      "Doeg el edomita",
      "Cusi",
      "Sisac",
      "Simei"
    ],
    "correctAnswer": 0,
    "verse": "1 Samuel 22:18-19",
    "explanation": "Doeg el edomita se volvió y arremetió contra los sacerdotes, y mató en aquel día a ochenta y cinco varones que vestían efod de lino."
  },
  {
    "id": "h44",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "En su desesperación antes de la batalla de Gilboa, ¿a qué médium o adivina consultó el rey Saúl en secreto disfrazándose?",
    "options": [
      "A la adivina de Endor",
      "A la bruja de Samaria",
      "A la sacerdotisa de Baal",
      "A la pitonisa de Filipos"
    ],
    "correctAnswer": 0,
    "verse": "1 Samuel 28:7-14",
    "explanation": "Buscadme una mujer que tenga espíritu de adivinación... y sus criados le dijeron: He aquí hay una mujer en Endor que tiene espíritu de adivinación."
  },
  {
    "id": "h45",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Samuel",
    "question": "¿Quién era el general del ejército de David que asesinó a traición a Abner y a Amasa, y ejecutó a Absalón con tres dardos en el corazón?",
    "options": [
      "Joab hijo de Sarvia",
      "Abisai",
      "Asael",
      "Benaía"
    ],
    "correctAnswer": 0,
    "verse": "2 Samuel 3:27; 18:14; 20:10",
    "explanation": "Joab hijo de Sarvia era el comandante del ejército de David y mató a Abner, a Amasa y a Absalón."
  },
  {
    "id": "h46",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Samuel",
    "question": "¿Qué consejero brillante de David se pasó al bando de Absalón, cuyo consejo era como si se consultase la palabra de Dios, y al ver frustrado su consejo se ahorcó?",
    "options": [
      "Ahitofel gilonita",
      "Husai arquita",
      "Jonadab",
      "Siba"
    ],
    "correctAnswer": 0,
    "verse": "2 Samuel 16:23; 17:23",
    "explanation": "Ahitofel, viendo que no se había seguido su consejo... fue a su casa, y puso en orden su casa, y se ahorcó."
  },
  {
    "id": "h47",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Samuel",
    "question": "¿En la era de qué jebuseo compró David el terreno y los bueyes para edificar un altar y detener la peste que azotaba a Israel?",
    "options": [
      "Arauna (Ornán) el jebuseo",
      "Urias el heteo",
      "Melquisedec",
      "Simei"
    ],
    "correctAnswer": 0,
    "verse": "2 Samuel 24:18-25",
    "explanation": "David compró la era y los bueyes por cincuenta siclos de plata. Y edificó allí David un altar a Jehová, y cesó la plaga en Israel."
  },
  {
    "id": "h48",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Reyes",
    "question": "¿Cómo se llamaban las dos imponentes columnas de bronce erigidas a la entrada del pórtico del Templo de Salomón?",
    "options": [
      "Jaquín y Boaz",
      "Urim y Tumim",
      "Misericordia y Verdad",
      "Alpha y Omega"
    ],
    "correctAnswer": 0,
    "verse": "1 Reyes 7:21",
    "explanation": "Erigió la columna a la derecha, y llamó su nombre Jaquín; y erigió la columna a la izquierda, y llamó su nombre Boaz."
  },
  {
    "id": "h49",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Reyes",
    "question": "¿En qué dos ciudades del norte colocó el rey Jeroboam dos becerros de oro diciendo: \"He aquí tus dioses, oh Israel, que te hicieron subir de Egipto\"?",
    "options": [
      "En Dan y en Betel",
      "En Samaria y en Siquem",
      "En Silo y en Jericó",
      "En Hebrón y en Galaad"
    ],
    "correctAnswer": 0,
    "verse": "1 Reyes 12:28-29",
    "explanation": "Puso uno en Bet-el, y el otro en Dan. Y esto fue causa de pecado."
  },
  {
    "id": "h50",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Reyes",
    "question": "¿Cuántos profetas fieles de Jehová escondió Abdías, mayordomo de Acab, de cincuenta en cincuenta en cuevas sustentándolos con pan y agua?",
    "options": [
      "50 profetas",
      "100 profetas",
      "7,000 profetas",
      "400 profetas"
    ],
    "correctAnswer": 1,
    "verse": "1 Reyes 18:4",
    "explanation": "Cuando Jezabel destruía a los profetas de Jehová, Abdías tomó a cien profetas y los escondió de cincuenta en cincuenta en cuevas."
  },
  {
    "id": "h51",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿Qué capitán valiente y comandante de carros fue ungido rey de Israel por un profeta y exterminó la casa de Acab y a Jezabel?",
    "options": [
      "Jehú hijo de Nimsi",
      "Hazael",
      "Peka",
      "Oseas"
    ],
    "correctAnswer": 0,
    "verse": "2 Reyes 9:1-7; 30-37",
    "explanation": "Jehú fue ungido rey y cabalgó furiosamente a Jezreel donde murió Jezabel y fue destruida toda la casa de Acab."
  },
  {
    "id": "h52",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿Qué princesa y tía piadosa escondió al pequeño príncipe Joás de un año en una cámara secreta del Templo salvándolo del exterminio de Atalía?",
    "options": [
      "Josaba (Joseba)",
      "Huldá",
      "Maaca",
      "Ester"
    ],
    "correctAnswer": 0,
    "verse": "2 Reyes 11:2-3",
    "explanation": "Josaba hija del rey Joram... tomó a Joás hijo de Ocozías y lo hurtó de entre los hijos del rey... y estuvo con ella escondido en la casa de Jehová seis años."
  },
  {
    "id": "h53",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿Qué profetisa de Jerusalén consultaron el rey Josías y el sumo sacerdote Hilcías tras encontrar el rollo de la Ley?",
    "options": [
      "Huldá mujer de Salum",
      "Débora",
      "Miriam",
      "Noadías"
    ],
    "correctAnswer": 0,
    "verse": "2 Reyes 22:14",
    "explanation": "Fueron el sacerdote Hilcías... a la profetisa Huldá, mujer de Salum... la cual moraba en Jerusalén en la segunda parte de la ciudad, y hablaron con ella."
  },
  {
    "id": "h54",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿A cuántos soldados asirios del ejército de Senaquerib mató el Ángel de Jehová en una sola noche mientras sitiaban Jerusalén en tiempos de Ezequías?",
    "options": [
      "10,000 soldados",
      "50,000 soldados",
      "185,000 soldados",
      "300,000 soldados"
    ],
    "correctAnswer": 2,
    "verse": "2 Reyes 19:35",
    "explanation": "Aconteció que aquella misma noche salió el ángel de Jehová, y mató en el campamento de los asirios a ciento ochenta y cinco mil."
  },
  {
    "id": "h55",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Crónicas",
    "question": "¿Qué rey de Judá fue herido de lepra en su frente por querer usurpar las funciones sacerdotales y quemar incienso en el Templo de Dios?",
    "options": [
      "Uzías (Azarías)",
      "Acaz",
      "Roboam",
      "Asa"
    ],
    "correctAnswer": 0,
    "verse": "2 Crónicas 26:16-19",
    "explanation": "Uzías se enalteció... y entró en el templo para quemar incienso... y en su frente le brotó la lepra delante de los sacerdotes."
  },
  {
    "id": "h56",
    "level": "HARD",
    "type": "FILL_VERSE",
    "category": "2 Crónicas",
    "question": "Completa 2 Crónicas 7:14: \"Si se humillare mi pueblo, sobre el cual mi nombre es invocado, y oraren, y buscaren mi rostro, y se convirtieren de sus malos caminos; entonces yo oiré desde los cielos, y perdonaré sus pecados, y _________ su tierra.\"",
    "options": [
      "destruiré",
      "sanaré",
      "venderé",
      "abandonaré"
    ],
    "correctAnswer": 1,
    "verse": "2 Crónicas 7:14",
    "explanation": "2 Crónicas 7:14: \"...entonces yo oiré desde los cielos, y perdonaré sus pecados, y sanaré su tierra.\""
  },
  {
    "id": "h57",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Crónicas",
    "question": "¿Cómo derrotó el rey Josafat a los ejércitos unidos de Moab y Amón en el desierto de Tecoa?",
    "options": [
      "Puso cantores que alabaran a Jehová en la hermosura de la santidad delante del ejército, y Dios puso emboscadas",
      "Usó catapultas de bronce",
      "Inundó el valle con el río",
      "Pidió ayuda al faraón de Egipto"
    ],
    "correctAnswer": 0,
    "verse": "2 Crónicas 20:21-22",
    "explanation": "Puso a algunos que cantasen y alabasen a Jehová... Y cuando comenzaron a entonar cantos de alabanza, Jehová puso contra los enemigos emboscadas."
  },
  {
    "id": "h58",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Esdras y Nehemías",
    "question": "¿Qué rey persa promulgó el famoso decreto que permitió a los judíos regresar a Jerusalén y reconstruir la casa de Dios cumpliendo la profecía de Jeremías?",
    "options": [
      "Ciro el Grande",
      "Darío Histaspes",
      "Jerjes I (Asuero)",
      "Artajerjes Longimano"
    ],
    "correctAnswer": 0,
    "verse": "Esdras 1:1-3",
    "explanation": "En el primer año de Ciro rey de Persia... despertó Jehová el espíritu de Ciro, el cual hizo pregonar por todo su reino... Jehová me ha mandado que le edifique casa en Jerusalén."
  },
  {
    "id": "h59",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Nehemías",
    "question": "¿Quiénes fueron los tres principales enemigos extranjeros que se opusieron tenazmente, burlaron y conspiraron contra Nehemías al reedificar los muros?",
    "options": [
      "Sanbalat el horonita, Tobías el amonita y Gesem el árabe",
      "Hiram, Sisac y Ben-hadad",
      "Amán, Zeres y Harbona",
      "Faraón, Senaquerib y Belsasar"
    ],
    "correctAnswer": 0,
    "verse": "Nehemías 2:19; 4:7",
    "explanation": "Oyéndolo Sanbalat horonita, Tobías el siervo amonita, y Gesem el árabe, hicieron escarnio de nosotros y nos despreciaron."
  },
  {
    "id": "h60",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Ester",
    "question": "¿Cómo se llama la fiesta judía instituida para conmemorar la gran liberación de su pueblo del exterminio tramado por Amán?",
    "options": [
      "Janucá",
      "Purim",
      "Pesaj (Pascua)",
      "Sucot"
    ],
    "correctAnswer": 1,
    "verse": "Ester 9:26-28",
    "explanation": "Por esto llamaron a estos días Purim, por el nombre de Pur... para que estos días fuesen recordados y celebrados en cada generación."
  },
  {
    "id": "h61",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Daniel",
    "question": "En la visión de la gran estatua de Nabucodonosor en Daniel 2, ¿qué representaban la cabeza de oro, el pecho de plata, el vientre de bronce y las piernas de hierro?",
    "options": [
      "Cuatro imperios mundiales sucesivos: Babilonia, Medo-Persia, Grecia y Roma",
      "Cuatro estaciones del año agrícola",
      "Cuatro virtudes del templo de Salomón",
      "Cuatro dinastías de Egipto"
    ],
    "correctAnswer": 0,
    "verse": "Daniel 2:31-40",
    "explanation": "Tú eres aquella cabeza de oro (Babilonia). Y después de ti se levantará otro reino inferior al tuyo (Medo-Persia), y luego un tercer reino de bronce (Grecia), y el cuarto reino será fuerte como hierro (Roma)."
  },
  {
    "id": "h62",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Daniel",
    "question": "¿En qué profecía cronológica de Daniel se calculan las semanas desde la salida de la orden para restaurar a Jerusalén hasta el Mesías Príncipe?",
    "options": [
      "La profecía de las Setenta Semanas",
      "La visión del carnero y el macho cabrío",
      "El sueño del gran árbol cortado",
      "La visión de las cuatro bestias"
    ],
    "correctAnswer": 0,
    "verse": "Daniel 9:24-27",
    "explanation": "Setenta semanas están determinadas sobre tu pueblo y sobre tu santa ciudad, para terminar la prevaricación... hasta el Mesías Príncipe."
  },
  {
    "id": "h63",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Oseas",
    "question": "¿Qué significaban los nombres proféticos de los tres hijos de Oseas: Jezreel, Lo-ruhama y Lo-ammi?",
    "options": [
      "\"Dios siembra\", \"No compadecida\" y \"No sois mi pueblo\"",
      "\"Rey de gloria\", \"Paz eterna\" y \"Luz divina\"",
      "\"Espada afilada\", \"Fuego del cielo\" y \"Viento del norte\"",
      "\"Bendición\", \"Gozo\" y \"Alabanza\""
    ],
    "correctAnswer": 0,
    "verse": "Oseas 1:4-9",
    "explanation": "Lo-ruhama significa no compadecida; Lo-ammi significa vosotros no sois mi pueblo, y yo no seré vuestro Dios."
  },
  {
    "id": "h64",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Jonás",
    "question": "¿Qué planta dio Dios a Jonás para hacerle sombra y luego preparó un gusano que la hirió hasta secarse, enseñándole sobre la misericordia?",
    "options": [
      "Una calabacera",
      "Una parra de uvas",
      "Una higuera",
      "Un sicómoro"
    ],
    "correctAnswer": 0,
    "verse": "Jonás 4:6-7",
    "explanation": "Preparó Dios una calabacera, la cual creció sobre Jonás para que hiciese sombra... pero preparó un gusano el cual hirió la calabacera, y se secó."
  },
  {
    "id": "h65",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Zacarías",
    "question": "¿Por qué suma exacta profetizó Zacarías que sería pesado el salario del buen pastor, cumpliéndose proféticamente en la traición de Judas?",
    "options": [
      "Diez monedas de oro",
      "Treinta piezas de plata arrojadas al alfarero",
      "Cien talentos de bronce",
      "Cincuenta siclos del santuario"
    ],
    "correctAnswer": 1,
    "verse": "Zacarías 11:12-13 / Mateo 26:15",
    "explanation": "Y pesaron por mi salario treinta piezas de plata. Y me dijo Jehová: Échalo al tesoro; ¡hermoso precio con que me han apreciado!"
  },
  {
    "id": "h66",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "El Periodo Intertestamentario",
    "question": "¿Aproximadamente cuántos años de silencio profético transcurrieron entre el profeta Malaquías y la llegada de Juan el Bautista?",
    "options": [
      "100 años",
      "250 años",
      "Aproximadamente 400 años de silencio",
      "700 años"
    ],
    "correctAnswer": 2,
    "verse": "Historia Bíblica",
    "explanation": "El periodo intertestamentario duró unos cuatro siglos, desde Malaquías hasta la anunciación a Zacarías en el Templo."
  },
  {
    "id": "h67",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Los Evangelios",
    "question": "¿Qué Evangelio canónico no incluye parábolas en sentido estricto pero contiene los profundos discursos \"Yo Soy\" de Jesús?",
    "options": [
      "Evangelio de Mateo",
      "Evangelio de Marcos",
      "Evangelio de Lucas",
      "Evangelio de Juan"
    ],
    "correctAnswer": 3,
    "verse": "Evangelio de Juan",
    "explanation": "Juan no registra parábolas narrativas típicas (como el sembrador o el hijo pródigo), sino alegorías y las 7 declaraciones \"Yo Soy\"."
  },
  {
    "id": "h68",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Evangelio de Mateo",
    "question": "¿A qué rey idumeo engañaron los sabios magos de oriente al no regresar a informarle del paradero del niño Jesús, provocando la matanza de los niños en Belén?",
    "options": [
      "Herodes el Grande",
      "Herodes Antipas",
      "Herodes Agripa I",
      "Herodes Arquelao"
    ],
    "correctAnswer": 0,
    "verse": "Mateo 2:1-16",
    "explanation": "Herodes el Grande, viéndose burlado por los magos, se enojó mucho y mandó matar a todos los niños en Belén menores de dos años."
  },
  {
    "id": "h69",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Ministerio de Jesús",
    "question": "¿Cómo se llamaba la mujer samaritana que habló con Jesús en Sicar? ¿Qué detalle reveló Jesús sobre su vida que confirmó su identidad profética?",
    "options": [
      "Que nunca se había casado",
      "Que había tenido cinco maridos, y el que tenía actualmente no era su marido",
      "Que era sacerdotisa de Baal",
      "Que era hermana de Lázaro"
    ],
    "correctAnswer": 1,
    "verse": "Juan 4:17-18",
    "explanation": "Jesús le dijo: Cinco maridos has tenido, y el que ahora tienes no es tu marido; esto has dicho con verdad. La mujer dijo: Señor, me parece que tú eres profeta."
  },
  {
    "id": "h70",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Milagros de Jesús",
    "question": "Al alimentar a los 4,000 hombres (milagro distinto al de los 5,000), ¿cuántas canastas llenas de sobras recogieron los discípulos?",
    "options": [
      "3 canastas",
      "7 canastas grandes (espurídes)",
      "12 canastas",
      "40 canastas"
    ],
    "correctAnswer": 1,
    "verse": "Mateo 15:37-38",
    "explanation": "Y comieron todos, y se saciaron; y recogieron lo que sobró de los pedazos, siete canastas llenas. Y eran los que comían cuatro mil hombres."
  },
  {
    "id": "h71",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Parábolas de Jesús",
    "question": "En la parábola del rico y Lázaro en Lucas 16, ¿cómo se llamaba el mendigo lleno de llagas que al morir fue llevado por los ángeles al seno de Abraham?",
    "options": [
      "Lázaro",
      "Bartimeo",
      "Dimas",
      "Simón"
    ],
    "correctAnswer": 0,
    "verse": "Lucas 16:19-22",
    "explanation": "Había también un mendigo llamado Lázaro, que estaba echado a la puerta de aquél, lleno de llagas... al morir fue llevado al seno de Abraham."
  },
  {
    "id": "h72",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Arresto y Juicio de Jesús",
    "question": "¿A qué ex-sumo sacerdote y suegro de Caifás llevaron primero a Jesús atado la noche de su arresto?",
    "options": [
      "Anás",
      "Gamaliel",
      "Nicodemo",
      "Tertulo"
    ],
    "correctAnswer": 0,
    "verse": "Juan 18:13",
    "explanation": "Le llevaron primeramente a Anás; porque era suegro de Caifás, que era sumo sacerdote aquel año."
  },
  {
    "id": "h73",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "La Crucifixión",
    "question": "¿A qué hora bíblica fue crucificado Jesús y durante qué horas hubo tinieblas sobre toda la tierra?",
    "options": [
      "Fue crucificado a la hora tercera (9 am), y hubo tinieblas desde la hora sexta hasta la novena (12 pm a 3 pm)",
      "Fue crucificado a medianoche",
      "Fue crucificado al amanecer",
      "Hubo tinieblas durante tres días seguidos"
    ],
    "correctAnswer": 0,
    "verse": "Marcos 15:25, 33",
    "explanation": "Era la hora tercera cuando le crucificaron. Y cuando vino la hora sexta, hubo tinieblas sobre toda la tierra hasta la hora novena."
  },
  {
    "id": "h74",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Palabras en la Cruz",
    "question": "¿Qué significan las palabras arameas exclamadas por Jesús en la cruz: \"Elí, Elí, ¿lama sabactani?\" (citando el Salmo 22:1)?",
    "options": [
      "\"Dios mío, Dios mío, ¿por qué me has desamparado?\"",
      "\"Padre, en tus manos encomiendo mi espíritu\"",
      "\"Consumado es el pacto eterno\"",
      "\"He aquí que vengo pronto\""
    ],
    "correctAnswer": 0,
    "verse": "Mateo 27:46 / Salmos 22:1",
    "explanation": "Cerca de la hora novena, Jesús clamó a gran voz, diciendo: Elí, Elí, ¿lama sabactani? Esto es: Dios mío, Dios mío, ¿por qué me has desamparado?"
  },
  {
    "id": "h75",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "La Sepultura de Jesús",
    "question": "¿Qué cantidad aproximada de mirra y áloes trajo Nicodemo para preparar el cuerpo de Jesús para la sepultura?",
    "options": [
      "Unas 5 libras",
      "Unas 10 libras",
      "Como cien libras compuestas de mirra y de áloes",
      "Un barril entero"
    ],
    "correctAnswer": 2,
    "verse": "Juan 19:39",
    "explanation": "También Nicodemo, el que antes había visitado a Jesús de noche, vino trayendo un compuesto de mirra y de áloes, como cien libras."
  },
  {
    "id": "h76",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "La Resurrección",
    "question": "En la pesca milagrosa tras la resurrección en Juan 21, ¿cuántos grandes peces sacaron los discípulos a tierra sin que la red se rompiera?",
    "options": [
      "70 peces",
      "120 peces",
      "153 grandes peces",
      "300 peces"
    ],
    "correctAnswer": 2,
    "verse": "Juan 21:11",
    "explanation": "Subió Simón Pedro, y sacó la red a tierra, llena de grandes peces, ciento cincuenta y tres; y aun siendo tantos, la red no se rompió."
  },
  {
    "id": "h77",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Cuántos varones de buen testimonio, llenos del Espíritu Santo y de sabiduría, fueron elegidos como los primeros diáconos en Hechos 6?",
    "options": [
      "3 varones",
      "7 varones (Esteban, Felipe, Prócoro, Nicanor, Timón, Parmenas y Nicolás)",
      "10 varones",
      "12 varones"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 6:3-5",
    "explanation": "Buscad, pues, hermanos, de entre vosotros a siete varones... y eligieron a Esteban, varón lleno de fe y del Espíritu Santo, a Felipe, a Prócoro, a Nicanor, a Timón, a Parmenas, y a Nicolás."
  },
  {
    "id": "h78",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué hechicero de Samaria intentó comprar con dinero el poder apostólico de impartir el Espíritu Santo por imposición de manos?",
    "options": [
      "Simón el mago",
      "Elimas el encantador",
      "Barjesús",
      "Apolos"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 8:18-20",
    "explanation": "Cuando vio Simón que por la imposición de las manos de los apóstoles se daba el Espíritu Santo, les ofreció dinero... Pedro le dijo: Tu dinero perezca contigo."
  },
  {
    "id": "h79",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Quién era el discípulo de Damasco a quien el Señor envió en visión a la calle llamada Derecha para orar por Saulo de Tarso y restaurarle la vista?",
    "options": [
      "Ananías de Damasco",
      "Bernabé",
      "Agabo",
      "Silas"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 9:10-17",
    "explanation": "Había entonces en Damasco un discípulo llamado Ananías... fue y entró en la casa, y poniendo sobre él las manos, dijo: Hermano Saulo, el Señor Jesús me ha enviado."
  },
  {
    "id": "h80",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué apóstol fue el primero de los doce en morir como mártir, ejecutado a espada por el rey Herodes Agripa I en Jerusalén?",
    "options": [
      "Jacobo (Santiago), hermano de Juan",
      "Pedro",
      "Andrés",
      "Felipe"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 12:1-2",
    "explanation": "En aquel mismo tiempo el rey Herodes echó mano a algunos de la iglesia para maltratarles. Y mató a espada a Jacobo, hermano de Juan."
  },
  {
    "id": "h81",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Cómo murió el rey Herodes Agripa I en Cesarea tras no dar la gloria a Dios cuando el pueblo gritaba: \"Voz de Dios, y no de hombre\"?",
    "options": [
      "Cayó de su carroza",
      "Al momento un ángel del Señor le hirió, y expiró comido de gusanos",
      "Fue envenenado por sus guardias",
      "Murió en batalla contra los sirios"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 12:21-23",
    "explanation": "Al momento un ángel del Señor le hirió, por cuanto no dio la gloria a Dios; y expiró comido de gusanos."
  },
  {
    "id": "h82",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "En Pafos de Chipre, ¿qué mago y falso profeta judío resistió a Pablo y Bernabé y quedó ciego temporalmente por reprensión de Pablo?",
    "options": [
      "Elimas (Barjesús)",
      "Simón el mago",
      "Demetrio el platero",
      "Alejandro el calderero"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 13:6-11",
    "explanation": "Les resistía Elimas, el mago (pues así se traduce su nombre)... Ahora, pues, he aquí la mano del Señor está contra ti, y serás ciego, y no verás el sol por algún tiempo."
  },
  {
    "id": "h83",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "En el Concilio de Jerusalén en Hechos 15 sobre la circuncisión de los gentiles, ¿qué apóstol y hermano del Señor presidió y emitió la resolución final?",
    "options": [
      "Jacobo (Santiago)",
      "Pedro",
      "Pablo",
      "Juan"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 15:13-19",
    "explanation": "Jacobo respondió diciendo: Varones hermanos, oídme... Por lo cual yo juzgo que no se inquiete a los gentiles que se convierten a Dios."
  },
  {
    "id": "h84",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Por qué causa se produjo una fuerte contienda y separación entre Pablo y Bernabé al iniciar su segundo viaje misionero?",
    "options": [
      "Por diferencias doctrinales sobre el sábado",
      "Porque Bernabé quería llevar consigo a Juan Marcos, quien los había abandonado en Panfilia",
      "Por una disputa sobre el dinero de las ofrendas",
      "Por decidir quién lideraba el equipo"
    ],
    "correctAnswer": 1,
    "verse": "Hechos 15:37-40",
    "explanation": "Bernabé quería que llevasen consigo a Juan, el que tenía por sobrenombre Marcos; pero a Pablo no le parecía bien llevar consigo al que se había apartado de ellos."
  },
  {
    "id": "h85",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué pueblo de Macedonia fue elogiado en Hechos 17:11 porque \"escudriñaban cada día las Escrituras para ver si estas cosas eran así\"?",
    "options": [
      "Los de Berea",
      "Los de Tesalónica",
      "Los de Filipos",
      "Los de Atenas"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 17:11",
    "explanation": "Y éstos eran más nobles que los que estaban en Tesalónica, pues recibieron la palabra con toda solicitud, escudriñando cada día las Escrituras para ver si estas cosas eran así."
  },
  {
    "id": "h86",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué elocuente judío alejandrino, poderoso en las Escrituras, predicaba con fervor pero solo conocía el bautismo de Juan hasta que Priscila y Aquila le explicaron con más exactitud el camino de Dios?",
    "options": [
      "Apolos",
      "Tíquico",
      "Epafrodito",
      "Trófimo"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 18:24-26",
    "explanation": "Llegó entonces a Éfeso un judío llamado Apolos, natural de Alejandría, varón elocuente, poderoso en las Escrituras... le oyeron Priscila y Aquila, le tomaron aparte y le expusieron más exactamente el camino de Dios."
  },
  {
    "id": "h87",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Quiénes eran los siete hijos de un sumo sacerdote judío en Éfeso que intentaron expulsar espíritus malos diciendo: \"Os conjuro por Jesús, el que predica Pablo\", y el endemoniado los atacó dejándolos desnudos y heridos?",
    "options": [
      "Los siete hijos de Esceva",
      "Los hijos de Anás",
      "Los hijos de Caifás",
      "Los hijos de Gamaliel"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 19:14-16",
    "explanation": "Había siete hijos de un tal Esceva, judío, jefe de los sacerdotes... el espíritu malo respondió: A Jesús conozco, y sé quién es Pablo; pero vosotros, ¿quiénes sois?"
  },
  {
    "id": "h88",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué joven de Troas se quedó dormido en una ventana mientras Pablo prolongaba su discurso hasta la medianoche, cayó desde un tercer piso y fue resucitado por Pablo?",
    "options": [
      "Eutico",
      "Tíquico",
      "Artemas",
      "Erasto"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 20:9-10",
    "explanation": "Un joven llamado Eutico, que estaba sentado en la ventana... rendido del sueño, cayó del tercer piso abajo, y fue levantado muerto. Pablo descendió y se echó sobre él... y dijo: Su alma está en él."
  },
  {
    "id": "h89",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué profeta de Judea ató sus propias manos y pies con el cinto de Pablo en Cesarea profetizando que los judíos en Jerusalén atarían así a su dueño?",
    "options": [
      "Agabo",
      "Silas",
      "Judas Barsabás",
      "Bernabé"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 21:10-11",
    "explanation": "Descendió de Judea un profeta llamado Agabo... tomando el cinto de Pablo, se ató los pies y las manos, y dijo: Esto dice el Espíritu Santo: Así atarán los judíos en Jerusalén al varón de quien es este cinto."
  },
  {
    "id": "h90",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Ante qué rey judío exclamó el apóstol Pablo su elocuente defensa en Cesarea, a lo que el rey respondió: \"Por poco me persuades a ser cristiano\"?",
    "options": [
      "Herodes Agripa II",
      "Herodes Antipas",
      "César Nerón",
      "El procurador Félix"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 26:27-28",
    "explanation": "¿Crees, oh rey Agripa, a los profetas? Yo sé que crees. Entonces Agripa dijo a Pablo: Por poco me persuades a ser cristiano."
  },
  {
    "id": "h91",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola a los Romanos",
    "question": "¿Quién fue la fiel diaconisa de la iglesia en Cencrea a quien Pablo encomienda con honor en Romanos 16:1-2?",
    "options": [
      "Febe",
      "Priscila",
      "Junia",
      "Trifena"
    ],
    "correctAnswer": 0,
    "verse": "Romanos 16:1-2",
    "explanation": "Os recomiendo además nuestra hermana Febe, la cual es diaconisa de la iglesia en Cencrea... porque ella ha ayudado a muchos, y a mí mismo."
  },
  {
    "id": "h92",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola a los Romanos",
    "question": "¿Quién fue el amanuense o secretario personal que transcribió la Epístola a los Romanos y envía su propio saludo en Romanos 16:22?",
    "options": [
      "Tercio",
      "Lucas",
      "Silvano",
      "Sóstenes"
    ],
    "correctAnswer": 0,
    "verse": "Romanos 16:22",
    "explanation": "Yo Tercio, que escribí la epístola, os saludo en el Señor."
  },
  {
    "id": "h93",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Corintios",
    "question": "En 1 Corintios 15, ¿cuál es profetizado como \"el postrer enemigo que será destruido\" por Cristo?",
    "options": [
      "El diablo",
      "El anticristo",
      "La muerte",
      "El pecado"
    ],
    "correctAnswer": 2,
    "verse": "1 Corintios 15:26",
    "explanation": "Y el postrer enemigo que será destruido es la muerte."
  },
  {
    "id": "h94",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Corintios",
    "question": "En 1 Corintios 15:6, ¿a más de cuántos hermanos a la vez se apareció Jesús resucitado, la mayoría de los cuales aún vivían cuando Pablo escribió?",
    "options": [
      "Más de 100 hermanos",
      "Más de 500 hermanos a la vez",
      "Más de 1,000 hermanos",
      "A los setenta discípulos"
    ],
    "correctAnswer": 1,
    "verse": "1 Corintios 15:6",
    "explanation": "Después apareció a más de quinientos hermanos a la vez, de los cuales muchos viven aún, y otros ya duermen."
  },
  {
    "id": "h95",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Corintios",
    "question": "En 2 Corintios 12:2, ¿a qué cielo declara Pablo haber sido arrebatado en una visión celestial catorce años antes?",
    "options": [
      "Al primer cielo (la atmósfera)",
      "Al segundo cielo (las estrellas)",
      "Al tercer cielo (el Paraíso)",
      "Al séptimo cielo"
    ],
    "correctAnswer": 2,
    "verse": "2 Corintios 12:2-4",
    "explanation": "Conozco a un hombre en Cristo... que fue arrebatado hasta el tercer cielo... y oyó palabras inefables que no le es dado al hombre expresar."
  },
  {
    "id": "h96",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola a los Gálatas",
    "question": "En Gálatas 4:21-31, ¿qué representan alegóricamente las dos mujeres Agar y Sara en la teología de Pablo?",
    "options": [
      "Los dos templos de Jerusalén",
      "Los dos pactos: Agar representa el pacto del monte Sinaí que engendra para esclavitud, y Sara la Jerusalén de arriba que es libre",
      "El Antiguo y el Nuevo Mundo",
      "Israel y Roma"
    ],
    "correctAnswer": 1,
    "verse": "Gálatas 4:24-26",
    "explanation": "Estas mujeres son los dos pactos; el uno proviene del monte Sinaí, el cual da hijos para esclavitud; éste es Agar... Mas la Jerusalén de arriba, la cual es madre de todos nosotros, es libre."
  },
  {
    "id": "h97",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola a los Efesios",
    "question": "En Efesios 4:11, ¿cuáles son los cinco dones ministeriales que Cristo constituyó para perfeccionar a los santos para la obra del ministerio?",
    "options": [
      "Reyes, sacerdotes, jueces, profetas y levitas",
      "Apóstoles, profetas, evangelistas, pastores y maestros",
      "Diáconos, ancianos, obispos, músicos y servidores",
      "Mártires, doctores, sanadores, administradores y sabios"
    ],
    "correctAnswer": 1,
    "verse": "Efesios 4:11-12",
    "explanation": "Y él mismo constituyó a unos, apóstoles; a otros, profetas; a otros, evangelistas; a otros, pastores y maestros, a fin de perfeccionar a los santos."
  },
  {
    "id": "h98",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola a los Filipenses",
    "question": "¿Qué colaborador de Pablo en Filipos enfermó gravemente a punto de morir por causa de la obra de Cristo, a quien Dios tuvo misericordia?",
    "options": [
      "Epafrodito",
      "Onesíforo",
      "Erasto",
      "Tíquico"
    ],
    "correctAnswer": 0,
    "verse": "Filipenses 2:25-30",
    "explanation": "Tuve por necesario enviaros a Epafrodito, mi hermano y colaborador... pues estuvo enfermo, a punto de morir; pero Dios tuvo misericordia de él."
  },
  {
    "id": "h99",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola a los Colosenses",
    "question": "En Colosenses 1:15-18, ¿qué títulos teológicos supremos se le dan a Cristo en relación a la creación y a la iglesia?",
    "options": [
      "Ángel supremo y profeta mayor",
      "La imagen del Dios invisible, el primogénito de toda creación y la cabeza del cuerpo que es la iglesia",
      "El sumo sacerdote del orden levítico",
      "El gobernador de las naciones"
    ],
    "correctAnswer": 1,
    "verse": "Colosenses 1:15, 18",
    "explanation": "Él es la imagen del Dios invisible, el primogénito de toda creación... y él es la cabeza del cuerpo que es la iglesia."
  },
  {
    "id": "h100",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Tesalonicenses",
    "question": "En 2 Tesalonicenses 2:3-4, ¿cómo describe Pablo al personaje siniestro que se manifestará antes del Día del Señor sentándose en el templo de Dios como Dios?",
    "options": [
      "El hombre de pecado, el hijo de perdición",
      "El falso profeta de Babilonia",
      "El león del abismo",
      "El rey del norte"
    ],
    "correctAnswer": 0,
    "verse": "2 Tesalonicenses 2:3-4",
    "explanation": "No vendrá sin que antes venga la apostasía, y se manifieste el hombre de pecado, el hijo de perdición, el cual se opone y se levanta contra todo lo que se llama Dios."
  },
  {
    "id": "h101",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Timoteo",
    "question": "En 2 Timoteo 4:10, ¿quién fue el colaborador que desamparó a Pablo en su prisión romana \"amando este mundo\" y se fue a Tesalónica?",
    "options": [
      "Demas",
      "Crescente",
      "Tito",
      "Alejandro"
    ],
    "correctAnswer": 0,
    "verse": "2 Timoteo 4:10",
    "explanation": "Porque Demas me ha desamparado, amando este mundo, y se ha ido a Tesalónica."
  },
  {
    "id": "h102",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Timoteo",
    "question": "¿Quiénes eran la abuela y la madre creyentes de Timoteo que le transmitieron desde la niñez una fe no fingida y las Sagradas Escrituras?",
    "options": [
      "Loida (abuela) y Eunice (madre)",
      "Sara y Rebeca",
      "Salomé y María",
      "Elisabet y Ana"
    ],
    "correctAnswer": 0,
    "verse": "2 Timoteo 1:5; 3:15",
    "explanation": "Trayendo a la memoria la fe no fingida que hay en ti, la cual habitó primero en tu abuela Loida, y en tu madre Eunice."
  },
  {
    "id": "h103",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola a Tito",
    "question": "¿En qué isla del Mediterráneo dejó Pablo a Tito como delegado apostólico para que corrigiese lo deficiente y estableciese ancianos en cada ciudad?",
    "options": [
      "Isla de Creta",
      "Isla de Chipre",
      "Isla de Malta",
      "Isla de Sicilia"
    ],
    "correctAnswer": 0,
    "verse": "Tito 1:5",
    "explanation": "Por esta causa te dejé en Creta, para que corrigieses lo deficiente, y establecieses ancianos así como yo te mandé."
  },
  {
    "id": "h104",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola a los Hebreos",
    "question": "En Hebreos 7, ¿según el orden de qué enigmático rey y sacerdote del Génesis es Cristo declarado Sumo Sacerdote para siempre, superior al sacerdocio levítico?",
    "options": [
      "Según el orden de Aarón",
      "Según el orden de Melquisedec",
      "Según el orden de David",
      "Según el orden de Enoc"
    ],
    "correctAnswer": 1,
    "verse": "Hebreos 7:1-17",
    "explanation": "Tú eres sacerdote para siempre, según el orden de Melquisedec; sin padre, sin madre, sin genealogía; que ni tiene principio de días, ni fin de vida."
  },
  {
    "id": "h105",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola a los Hebreos",
    "question": "¿Qué tres elementos sagrados estaban guardados dentro del Arca del Pacto según Hebreos 9:4?",
    "options": [
      "Una urna de oro con el maná, la vara de Aarón que floreció, y las tablas del pacto",
      "La espada de Goliat, el aceite santo y la mitra",
      "El candelero, el incensario y la mesa",
      "El manto de Moisés, las piedras del Jordán y la vara"
    ],
    "correctAnswer": 0,
    "verse": "Hebreos 9:4",
    "explanation": "El arca del pacto cubierta de oro... en la que estaba una urna de oro que contenía el maná, la vara de Aarón que floreció, y las tablas del pacto."
  },
  {
    "id": "h106",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola de Santiago",
    "question": "¿A quiénes llama Santiago en su epístola \"amigos de Dios\" y benchmark de la justificación por las obras nacidas de la fe verdadera?",
    "options": [
      "A Abraham y a Rahab la ramera",
      "A Moisés y a Aarón",
      "A David y a Salomón",
      "A Pedro y a Pablo"
    ],
    "correctAnswer": 0,
    "verse": "Santiago 2:21-25",
    "explanation": "¿No fue justificado por las obras Abraham nuestro padre...? Asimismo también Rahab la ramera, ¿no fue justificada por obras cuando recibió a los mensajeros?"
  },
  {
    "id": "h107",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Pedro",
    "question": "En 1 Pedro 2:9, ¿cuáles son los cuatro títulos gloriosos dados a la comunidad de creyentes en Cristo?",
    "options": [
      "Linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios",
      "Profetas mayores, jueces supremos, reyes de la tierra, guardianes de la ley",
      "Hijos de Leví, soldados de Roma, apóstoles de Sion, justos de Israel",
      "Pastores, maestros, diáconos y obispos"
    ],
    "correctAnswer": 0,
    "verse": "1 Pedro 2:9",
    "explanation": "Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios, para que anunciéis las virtudes de aquel que os llamó."
  },
  {
    "id": "h108",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Pedro",
    "question": "En 1 Pedro 3:19-20, ¿a quiénes predicó Cristo en espíritu tras su padecimiento por los pecados?",
    "options": [
      "A los ángeles del cielo",
      "A los espíritus encarcelados, los que en otro tiempo desobedecieron en los días de Noé",
      "A los reyes de Babilonia",
      "A los sacerdotes del templo"
    ],
    "correctAnswer": 1,
    "verse": "1 Pedro 3:19-20",
    "explanation": "En el cual también fue y predicó a los espíritus encarcelados, los que en otro tiempo desobedecieron, cuando una vez esperaba la paciencia de Dios en los días de Noé."
  },
  {
    "id": "h109",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Pedro y Judas",
    "question": "¿Qué arcángel contendía con el diablo disputando sobre el cuerpo de Moisés sin atreverse a proferir juicio de maldición sino diciendo: \"El Señor te reprenda\"?",
    "options": [
      "El arcángel Gabriel",
      "El arcángel Miguel",
      "El ángel Rafael",
      "El ángel Uriel"
    ],
    "correctAnswer": 1,
    "verse": "Judas 1:9",
    "explanation": "Pero cuando el arcángel Miguel contendía con el diablo, disputando con él por el cuerpo de Moisés, no se atrevió a proferir juicio de maldición, sino que dijo: El Señor te reprenda."
  },
  {
    "id": "h110",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola de Judas",
    "question": "¿Qué profecía del patriarca antediluviano Enoc, séptimo desde Adán, cita textualmente el libro de Judas sobre la venida del Señor con sus santas decenas de millares?",
    "options": [
      "Enoc 1:9 citado en Judas 1:14-15",
      "Génesis 5:24",
      "Salmos 110",
      "Isaías 66"
    ],
    "correctAnswer": 0,
    "verse": "Judas 1:14-15",
    "explanation": "De éstos también profetizó Enoc, séptimo desde Adán, diciendo: He aquí, vino el Señor con sus santas decenas de millares, para hacer juicio contra todos."
  },
  {
    "id": "h111",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Qué nombre tiene el ángel del abismo en Apocalipsis 9:11, tanto en hebreo como en griego?",
    "options": [
      "Abadón en hebreo, y en griego Apolión (el Destructor)",
      "Lucifer y Belcebú",
      "Mamón y Moloc",
      "Behemot y Leviatán"
    ],
    "correctAnswer": 0,
    "verse": "Apocalipsis 9:11",
    "explanation": "Y tienen por rey sobre ellos al ángel del abismo, cuyo nombre en hebreo es Abadón, y en griego, Apolión."
  },
  {
    "id": "h112",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Cuántos son los sellados de todas las doce tribus de los hijos de Israel mencionados en Apocalipsis 7 (12,000 de cada tribu)?",
    "options": [
      "12,000 sellados",
      "70,000 sellados",
      "144,000 sellados",
      "1,000,000 de sellados"
    ],
    "correctAnswer": 2,
    "verse": "Apocalipsis 7:4",
    "explanation": "Y oí el número de los sellados: ciento cuarenta y cuatro mil sellados de todas las tribus de los hijos de Israel."
  },
  {
    "id": "h113",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Qué tribu de los 12 hijos de Jacob no es mencionada en la lista de los 144,000 sellados de Apocalipsis 7, figurando en su lugar Manasés?",
    "options": [
      "La tribu de Dan",
      "La tribu de Judá",
      "La tribu de Rubén",
      "La tribu de Leví"
    ],
    "correctAnswer": 0,
    "verse": "Apocalipsis 7:5-8",
    "explanation": "La tribu de Dan no aparece en la enumeración de Apocalipsis 7, asociándose históricamente con el inicio de la idolatría tribal."
  },
  {
    "id": "h114",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Por cuántos días profetizan los Dos Testigos de Apocalipsis 11 vestidos de cilicio antes de ser atacados por la bestia?",
    "options": [
      "40 días",
      "70 días",
      "1,260 días (42 meses / 3 años y medio)",
      "2,300 días"
    ],
    "correctAnswer": 2,
    "verse": "Apocalipsis 11:3",
    "explanation": "Y daré a mis dos testigos que profeticen por mil doscientos sesenta días, vestidos de cilicio."
  },
  {
    "id": "h115",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "En Apocalipsis 12, ¿quién lidera a los santos ángeles en la batalla en el cielo contra el gran dragón y sus ángeles, arrojándolos a la tierra?",
    "options": [
      "Miguel y sus ángeles",
      "Gabriel y sus serafines",
      "Los 24 ancianos",
      "Los 4 seres vivientes"
    ],
    "correctAnswer": 0,
    "verse": "Apocalipsis 12:7-9",
    "explanation": "Después hubo una gran batalla en el cielo: Miguel y sus ángeles luchaban contra el dragón; y luchaban el dragón y sus ángeles; pero no prevalecieron."
  },
  {
    "id": "h116",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Cuál es el número de la Bestia dado en Apocalipsis 13:18, calificado como \"número de hombre\"?",
    "options": [
      "777",
      "666",
      "616",
      "999"
    ],
    "correctAnswer": 1,
    "verse": "Apocalipsis 13:18",
    "explanation": "Aquí hay sabiduría. El que tiene entendimiento, cuente el número de la bestia, pues es número de hombre. Y su número es seiscientos sesenta y seis."
  },
  {
    "id": "h117",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Cómo se llama el lugar profético en hebreo donde los reyes de la tierra se reunirán para la batalla del gran día del Dios Todopoderoso?",
    "options": [
      "Armagedón (Har-Meguido)",
      "Valle de Hinom (Gehena)",
      "Valle de Josafat",
      "Monte de los Olivos"
    ],
    "correctAnswer": 0,
    "verse": "Apocalipsis 16:16",
    "explanation": "Y los reunió en el lugar que en hebreo se llama Armagedón."
  },
  {
    "id": "h118",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Por cuántos años proféticos será atado Satanás en el abismo durante el Milenio según Apocalipsis 20?",
    "options": [
      "100 años",
      "500 años",
      "1,000 años",
      "7,000 años"
    ],
    "correctAnswer": 2,
    "verse": "Apocalipsis 20:1-3",
    "explanation": "Prendió al dragón, la serpiente antigua, que es el diablo y Satanás, y lo ató por mil años; y lo arrojó al abismo."
  },
  {
    "id": "h119",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Cuántas puertas tiene la muralla de la Nueva Jerusalén celestial, cada una hecha de una sola perla inmensa?",
    "options": [
      "4 puertas",
      "7 puertas",
      "12 puertas con los nombres de las doce tribus de Israel",
      "24 puertas"
    ],
    "correctAnswer": 2,
    "verse": "Apocalipsis 21:12, 21",
    "explanation": "Tenía un muro grande y alto con doce puertas... y nombres inscritos, que son los de las doce tribus de los hijos de Israel. Las doce puertas eran doce perlas."
  },
  {
    "id": "h120",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Qué árbol da doce frutos, dando cada mes su fruto, cuyas hojas son para la sanidad de las naciones en Apocalipsis 22?",
    "options": [
      "El Árbol de la Vida",
      "El Olivo celestial",
      "La Palmera de la paz",
      "La Vid verdadera"
    ],
    "correctAnswer": 0,
    "verse": "Apocalipsis 22:2",
    "explanation": "A uno y otro lado del río, estaba el árbol de la vida, que produce doce frutos, dando cada mes su fruto; y las hojas del árbol eran para la sanidad de las naciones."
  },
  {
    "id": "h121",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Idiomas Bíblicos",
    "question": "¿En qué tres idiomas originales fue escrita la Biblia canónica?",
    "options": [
      "Latín, griego y árabe",
      "Hebreo, arameo y griego koiné",
      "Hebreo, siríaco y latín",
      "Arameo, copto y griego"
    ],
    "correctAnswer": 1,
    "verse": "Manuscritos Bíblicos",
    "explanation": "El Antiguo Testamento fue escrito mayormente en hebreo (con porciones en arameo en Daniel y Esdras), y el Nuevo Testamento en griego koiné."
  },
  {
    "id": "h122",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Canon Bíblico",
    "question": "¿Cuántos libros componen en total el canon bíblico protestante (Antiguo Testamento y Nuevo Testamento)?",
    "options": [
      "60 libros",
      "66 libros (39 AT y 27 NT)",
      "73 libros",
      "77 libros"
    ],
    "correctAnswer": 1,
    "verse": "Canon de las Escrituras",
    "explanation": "La Biblia evangélica/protestante consta de 66 libros inspirados: 39 en el Antiguo Testamento y 27 en el Nuevo Testamento."
  },
  {
    "id": "h123",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Pentateuco",
    "question": "¿Cuál es el nombre hebreo tradicional del libro de Génesis, tomado de su primera palabra en el texto masorético?",
    "options": [
      "Bereshit (\"En el principio\")",
      "Shemot (\"Nombres\")",
      "Vayikrá (\"Y llamó\")",
      "Bamidbar (\"En el desierto\")"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 1:1",
    "explanation": "En hebreo, los cinco libros de la Torá llevan por título su primera palabra: Génesis se llama Bereshit (\"En el principio\")."
  },
  {
    "id": "h124",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Teología Bíblica",
    "question": "¿Qué doctrina cardinal de la Reforma protestante, extraída de Romanos 1:17 y Gálatas 3:11, afirma que somos justificados únicamente por la fe en los méritos de Cristo?",
    "options": [
      "Sola Scriptura",
      "Sola Fide (Justificación solo por la fe)",
      "Soli Deo Gloria",
      "Sola Gratia"
    ],
    "correctAnswer": 1,
    "verse": "Romanos 1:17 / Gálatas 3:11",
    "explanation": "Sola Fide (solo por la fe) enseña conforme a Romanos que el pecador es justificado gratuitamente por la fe en la justicia de Cristo, sin las obras de la ley."
  },
  {
    "id": "h125",
    "level": "HARD",
    "type": "FILL_VERSE",
    "category": "Pacto Divino",
    "question": "Completa Hebreos 9:22 sobre el principio bíblico de redención: \"Y según la ley, casi todo es purificado con sangre; y sin derramamiento de sangre no hay _________\"",
    "options": [
      "templo",
      "remisión (perdón)",
      "bendición",
      "riqueza"
    ],
    "correctAnswer": 1,
    "verse": "Hebreos 9:22",
    "explanation": "Hebreos 9:22: \"Y según la ley, casi todo es purificado, sí, con sangre; y sin derramamiento de sangre no se hace remisión.\""
  },
  {
    "id": "h126",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Qué dos ríos de los cuatro que regaban el huerto del Edén aún existen con sus nombres geográficos conocidos hoy?",
    "options": [
      "Pisón y Gihón",
      "Eufrates (Perat) e Hidekel (Tigris)",
      "Nilo y Jordán",
      "Tíber y Danubio"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 2:14",
    "explanation": "El nombre del tercer río es Hidekel (el Tigris)... y el cuarto río es el Eufrates."
  },
  {
    "id": "h127",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Quién fue el primer polígamo mencionado en la Biblia que compuso un poema jactándose de matar a un joven por su herida?",
    "options": [
      "Lamec descendiente de Caín",
      "Nimrod",
      "Irad",
      "Tubal-caín"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 4:19, 23",
    "explanation": "Y Lamec tomó para sí dos mujeres; el nombre de la una fue Ada, y el nombre de la otra, Zila... A un hombre maté por mi herida."
  },
  {
    "id": "h128",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Cuántos soldados entrenados nacidos en su propia casa armó Abraham para rescatar a su sobrino Lot de los cuatro reyes de la coalición mesopotámica?",
    "options": [
      "100 criados",
      "318 criados entrenados",
      "500 hombres",
      "1,000 guerreros"
    ],
    "correctAnswer": 1,
    "verse": "Génesis 14:14",
    "explanation": "Oyó Abram que su pariente estaba prisionero, y armó a sus criados, los nacidos en su casa, trescientos dieciocho, y los siguió hasta Dan."
  },
  {
    "id": "h129",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿Cómo se llamaba el primogénito de Abraham nacido de la sierva egipcia Agar cuando Abraham tenía 86 años?",
    "options": [
      "Ismael",
      "Isaac",
      "Madián",
      "Zimram"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 16:15-16",
    "explanation": "Y dio a luz Agar a Abram un hijo, y llamó Abram el nombre del hijo que le dio Agar, Ismael. Era Abram de ochenta y seis años."
  },
  {
    "id": "h130",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿En qué valle o monte puso Dios a prueba a Abraham pidiéndole en holocausto a su único hijo Isaac?",
    "options": [
      "Tierra de Moriah",
      "Monte de los Olivos",
      "Valle de Mamre",
      "Monte Sinaí"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 22:2",
    "explanation": "Toma ahora tu hijo, tu único, Isaac, a quien amas, y vete a tierra de Moriah, y ofrécelo allí en holocausto."
  },
  {
    "id": "h131",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Patriarcas",
    "question": "¿Qué hija única de Jacob y Lea fue violada por Siquem hijo de Hamor, desatando la violenta venganza de Simeón y Leví?",
    "options": [
      "Dina",
      "Tamar",
      "Séfora",
      "Asenat"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 34:1-2",
    "explanation": "Salió Dina la hija de Lea, la cual ésta había dado a luz a Jacob, a ver a las hijas del país; y la vio Siquem hijo de Hamor."
  },
  {
    "id": "h132",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Génesis",
    "question": "¿A qué suegro engañó Tamar vistiéndose con un velo en Enaim para preservar la descendencia de Judá, dando a luz a los gemelos Fares y Zara?",
    "options": [
      "A Judá",
      "A Jacob",
      "A Rubén",
      "A Potifar"
    ],
    "correctAnswer": 0,
    "verse": "Génesis 38:13-26",
    "explanation": "Tamar se quitó los vestidos de su viudez y se cubrió con un velo... y dio a luz a Fares y a Zara de Judá."
  },
  {
    "id": "h133",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Éxodo",
    "question": "¿Cómo se llamaban los padres de Moisés, Aarón y Miriam, ambos pertenecientes a la tribu de Leví?",
    "options": [
      "Amram y Jocabed",
      "Elcana y Ana",
      "Zacarías y Elisabet",
      "Mahlón y Rut"
    ],
    "correctAnswer": 0,
    "verse": "Éxodo 6:20",
    "explanation": "Y Amram tomó por mujer a Jocabed su tía, la cual dio a luz a Aarón y a Moisés."
  },
  {
    "id": "h134",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Éxodo",
    "question": "¿Cómo se llamaba la esposa madianita de Moisés, hija del sacerdote Jetro (Reuel)?",
    "options": [
      "Séfora",
      "Cozbi",
      "Asenat",
      "Hagar"
    ],
    "correctAnswer": 0,
    "verse": "Éxodo 2:21",
    "explanation": "Y Moisés convino en morar con aquel varón; y él dio su hija Séfora por mujer a Moisés."
  },
  {
    "id": "h135",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Las Plagas de Egipto",
    "question": "¿Hasta qué plaga pudieron imitar los hechiceros y magos de Egipto con sus encantamientos antes de admitir: \"Dedo de Dios es éste\"?",
    "options": [
      "Hasta la plaga de los piojos (la tercera plaga)",
      "Hasta la primera plaga del agua en sangre",
      "Hasta la plaga de las ranas",
      "Hasta la plaga de langostas"
    ],
    "correctAnswer": 0,
    "verse": "Éxodo 8:18-19",
    "explanation": "Los hechiceros hicieron así también... para sacar piojos; mas no pudieron... Entonces los hechiceros dijeron a Faraón: Dedo de Dios es éste."
  },
  {
    "id": "h136",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Éxodo",
    "question": "¿En qué lugar amargo no pudieron beber agua los israelitas en el desierto de Shur hasta que Moisés echó un árbol que Dios le mostró?",
    "options": [
      "Mara",
      "Elim",
      "Refidim",
      "Cades-barnea"
    ],
    "correctAnswer": 0,
    "verse": "Éxodo 15:23-25",
    "explanation": "Llegaron a Mara, y no pudieron beber las aguas de Mara, porque eran amargas... Moisés clamó a Jehová, y Jehová le mostró un árbol; y lo echó en las aguas, y las aguas se endulzaron."
  },
  {
    "id": "h137",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Tabernáculo",
    "question": "¿De cuántos brazos y copas en forma de flor de almendro estaba labrado el candelero sagrado (Menorá) de oro puro en el Lugar Santo?",
    "options": [
      "De 3 brazos",
      "De 7 brazos con sus lámparas de aceite puro de olivo",
      "De 10 brazos",
      "De 12 brazos"
    ],
    "correctAnswer": 1,
    "verse": "Éxodo 25:31-37",
    "explanation": "Harás además un candelero de oro puro... saldrán seis brazos de sus lados... siete lámparas las cuales encenderán para que alumbren hacia adelante."
  },
  {
    "id": "h138",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Levítico",
    "question": "En Levítico 11, ¿cuál es la doble regla anatómica para que un mamífero terrestre fuera considerado animal limpio para comer?",
    "options": [
      "Que tenga pezuña hendida y que rumie",
      "Que tenga garras afiladas y coma pasto",
      "Que nade en ríos y tenga lana",
      "Que no tenga colmillos"
    ],
    "correctAnswer": 0,
    "verse": "Levítico 11:3",
    "explanation": "De entre los animales, todo el que tiene pezuña hendida y que es de pezuñas partidas, y que rumia, éste comeréis."
  },
  {
    "id": "h139",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Números",
    "question": "¿Qué enorme racimo de uvas cortaron los espías en el valle de Escol que debieron transportarlo colgado de un palo entre dos hombres?",
    "options": [
      "El racimo de Escol",
      "El racimo de Jericó",
      "Las uvas de Hebrón",
      "La vid de Sodoma"
    ],
    "correctAnswer": 0,
    "verse": "Números 13:23",
    "explanation": "Llegaron hasta el arroyo de Escol, y cortaron de allí un sarmiento con un racimo de uvas, el cual trajeron dos en un palo."
  },
  {
    "id": "h140",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Números",
    "question": "¿Qué sacerdote y nieto de Aarón traspasó con una lanza a Zimri y a la madianita Cozbi deteniendo con celo santo la mortandad de 24,000 personas en Sitim?",
    "options": [
      "Finees hijo de Eleazar",
      "Itamar",
      "Nadab",
      "Abiatar"
    ],
    "correctAnswer": 0,
    "verse": "Números 25:7-11",
    "explanation": "Finees hijo de Eleazar... tomó una lanza en su mano... y los traspasó a ambos. Y cesó la mortandad de los hijos de Israel."
  },
  {
    "id": "h141",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Deuteronomio",
    "question": "¿Sobre qué dos montes gemelos ordenó Moisés pronunciar las bendiciones y las maldiciones solemnes al entrar en Canaán?",
    "options": [
      "Monte Gerizim (bendiciones) y Monte Ebal (maldiciones)",
      "Monte Sinaí y Monte Horeb",
      "Monte Carmelo y Monte Hermón",
      "Monte Nebo y Monte Tabor"
    ],
    "correctAnswer": 0,
    "verse": "Deuteronomio 11:29; 27:11-13",
    "explanation": "Pondrás la bendición sobre el monte Gerizim, y la maldición sobre el monte Ebal."
  },
  {
    "id": "h142",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Josué",
    "question": "¿En qué valle lapidaron a Acán y a su familia tras confesar el robo del anatema de Jericó, llamándose desde entonces \"Valle de la turbación\"?",
    "options": [
      "Valle de Acor",
      "Valle de Hinom",
      "Valle de Escol",
      "Valle de Cedrón"
    ],
    "correctAnswer": 0,
    "verse": "Josué 7:24-26",
    "explanation": "Tomaron a Acán... y los llevaron al valle de Acor. Y todo Israel los apedreó... Por esto fue llamado aquel lugar Valle de Acor, hasta hoy."
  },
  {
    "id": "h143",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Josué",
    "question": "¿Cuántas ciudades de refugio fueron establecidas en Israel para que el homicida involuntario huyera del vengador de la sangre?",
    "options": [
      "3 ciudades",
      "6 ciudades (3 al este del Jordán y 3 en Canaán)",
      "12 ciudades",
      "48 ciudades"
    ],
    "correctAnswer": 1,
    "verse": "Josué 20:7-8",
    "explanation": "Señalaron seis ciudades de refugio: Cedes, Siquem, Hebrón, y al otro lado del Jordán: Beser, Ramot y Golán."
  },
  {
    "id": "h144",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Qué rey cananeo de Jerusalén había mutilado los pulgares de manos y pies de 70 reyes antes de sufrir el mismo castigo a manos de Judá?",
    "options": [
      "Adonibezec",
      "Agag",
      "Sisac",
      "Jabin"
    ],
    "correctAnswer": 0,
    "verse": "Jueces 1:5-7",
    "explanation": "Dijo Adonibezec: Setenta reyes, cortados los pulgares de sus manos y de sus pies, recogían las migajas debajo de mi mesa; como yo hice, así me ha pagado Dios."
  },
  {
    "id": "h145",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Qué profetisa y jueza compuso con Barac un célebre cántico triunfal en Jueces 5 celebrando la derrota de Sísara?",
    "options": [
      "Débora",
      "Miriam",
      "Huldá",
      "Ana"
    ],
    "correctAnswer": 0,
    "verse": "Jueces 5:1",
    "explanation": "Aquel día cantó Débora con Barac hijo de Abinoam, diciendo: Por haberse puesto al frente los caudillos en Israel... alabad a Jehová."
  },
  {
    "id": "h146",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Jueces",
    "question": "¿Cómo se llamaba el padre de Sansón, perteneciente a la tribu de Dan y natural de Zora, a quien se le apareció el Ángel de Jehová?",
    "options": [
      "Manoa",
      "Elcana",
      "Quis",
      "Jesse"
    ],
    "correctAnswer": 0,
    "verse": "Jueces 13:2",
    "explanation": "Había un hombre de Zora, de la tribu de Dan, el cual se llamaba Manoa; y su mujer era estéril."
  },
  {
    "id": "h147",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "¿Cómo murieron trágicamente en el mismo día los dos hijos corruptos del sacerdote Elí en la batalla de Afec contra los filisteos?",
    "options": [
      "Ofni y Finees murieron y el Arca de Dios fue tomada",
      "Nadab y Abiú murieron por fuego extraño",
      "Amnón y Absalón se mataron",
      "Jonatán y Mefiboset murieron en la cueva"
    ],
    "correctAnswer": 0,
    "verse": "1 Samuel 4:11",
    "explanation": "Y el arca de Dios fue tomada, y muertos los dos hijos de Elí, Ofni y Finees."
  },
  {
    "id": "h148",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "¿Qué hija menor de Saúl amaba a David y fue dada por esposa tras pagar David una dote de doscientos prepucios de filisteos?",
    "options": [
      "Mical",
      "Merab",
      "Abigail",
      "Ahinoam"
    ],
    "correctAnswer": 0,
    "verse": "1 Samuel 18:20, 27",
    "explanation": "Mical la otra hija de Saúl amaba a David... y dio David doscientos prepucios de filisteos, y Saúl le dio a su hija Mical por mujer."
  },
  {
    "id": "h149",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Samuel",
    "question": "¿Qué sacerdote hijo de Ahimelec escapó de la masacre de Nob llevándose consigo el efod sacerdotal hasta unirse con David en el desierto?",
    "options": [
      "Abiatar",
      "Zadoc",
      "Heli",
      "Eliezer"
    ],
    "correctAnswer": 0,
    "verse": "1 Samuel 22:20; 23:6",
    "explanation": "Uno de los hijos de Ahimelec... llamado Abiatar, escapó, y huyó tras David llevando consigo el efod en su mano."
  },
  {
    "id": "h150",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Samuel",
    "question": "¿Quién era el gigante filisteo con seis dedos en cada mano y seis dedos en cada pie (veinticuatro en total) abatido por Jonatán sobrino de David en Gat?",
    "options": [
      "Un descendiente de los gigantes (Rafa) abatido en Gat",
      "Goliat de Gat",
      "Isbi-benob",
      "Saf"
    ],
    "correctAnswer": 0,
    "verse": "2 Samuel 21:20-21",
    "explanation": "Hubo otra guerra en Gat, donde había un hombre de gran estatura, el cual tenía doce dedos en las manos, y otros doce en los pies, veinticuatro por todos."
  },
  {
    "id": "h151",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Samuel",
    "question": "¿Quiénes eran los \"Tres Valientes\" principales del ejército de David que rompieron el campamento filisteo para traerle agua del pozo de Belén?",
    "options": [
      "Joseb-basebet (Adino), Eleazar hijo de Dodo, y Sama hijo de Age",
      "Joab, Abisai y Asael",
      "Benaía, Urías e Itai",
      "Sadrac, Mesac y Abed-nego"
    ],
    "correctAnswer": 0,
    "verse": "2 Samuel 23:8-16",
    "explanation": "Estos son los nombres de los valientes que tuvo David: Joseb-basebet el tacmonita... Eleazar hijo de Dodo... y Sama hijo de Age ararita."
  },
  {
    "id": "h152",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Reyes",
    "question": "¿Qué profeta rasgó su capa nueva en doce pedazos y dio diez a Jeroboam profetizando la división del reino de Salomón?",
    "options": [
      "Ahías silonita",
      "Semayas",
      "Natán",
      "Iddo"
    ],
    "correctAnswer": 0,
    "verse": "1 Reyes 11:29-31",
    "explanation": "El profeta Ahías silonita... tomó la capa nueva que tenía sobre sí, y la rompió en doce pedazos; y dijo a Jeroboam: Toma para ti diez pedazos."
  },
  {
    "id": "h153",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Reyes",
    "question": "¿Cómo murió el rey Acab en la batalla de Ramot de Galaad a pesar de haberse disfrazado para no ser reconocido?",
    "options": [
      "Un soldado disparó su arco al azar e hirió a Acab entre las junturas de la armadura",
      "Joab lo atravesó con tres lanzas",
      "Fue degollado por Jehú",
      "Cayó de su carro al precipicio"
    ],
    "correctAnswer": 0,
    "verse": "1 Reyes 22:34-35",
    "explanation": "Y un hombre disparó su arco a la ventura e hirió al rey de Israel por entre las junturas de la armadura... y a la tarde murió."
  },
  {
    "id": "h154",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿Qué siervo sirio fue advertido por Eliseo de las crueldades que cometería contra Israel, y ahogó al rey Ben-hadad con un paño mojado para reinar en su lugar?",
    "options": [
      "Hazael",
      "Naamán",
      "Sisac",
      "Tiglath-pileser"
    ],
    "correctAnswer": 0,
    "verse": "2 Reyes 8:12-15",
    "explanation": "Eliseo lloró diciendo: Porque sé el mal que harás a los hijos de Israel... Al día siguiente tomó Hazael un paño y lo metió en agua, y lo puso sobre el rostro del rey, y murió."
  },
  {
    "id": "h155",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿Qué milagro ocurrió cuando unos hombres arrojaron apresuradamente un cadáver en el sepulcro donde reposaban los huesos del difunto profeta Eliseo?",
    "options": [
      "Tan pronto como el muerto tocó los huesos de Eliseo, revivió y se puso en pie",
      "El sepulcro se iluminó con fuego",
      "Aparecieron dos ángeles armados",
      "La tierra se abrió y tragó la tumba"
    ],
    "correctAnswer": 0,
    "verse": "2 Reyes 13:20-21",
    "explanation": "Y tan pronto como tocó el muerto los huesos de Eliseo, revivió, y se levantó sobre sus pies."
  },
  {
    "id": "h156",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿En qué año cayó el Reino del Norte (Israel/Samaria) bajo el Imperio Asirio de Salmanasar y Sargón II, dispersando a las diez tribus?",
    "options": [
      "En el año 722 a.C.",
      "En el año 586 a.C.",
      "En el año 605 a.C.",
      "En el año 70 d.C."
    ],
    "correctAnswer": 0,
    "verse": "2 Reyes 17:6",
    "explanation": "En el año 722 a.C. Samaria fue tomada por los asirios y el pueblo de Israel fue llevado cautivo a Asiria."
  },
  {
    "id": "h157",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Reyes",
    "question": "¿En qué año culminó el asedio y destrucción total de Jerusalén y del Templo de Salomón por las tropas babilónicas de Nabucodonosor?",
    "options": [
      "En el año 586 a.C.",
      "En el año 722 a.C.",
      "En el año 457 a.C.",
      "En el año 333 a.C."
    ],
    "correctAnswer": 0,
    "verse": "2 Reyes 25:8-10",
    "explanation": "En el año 586 a.C. Nabuzaradán capitán de la guardia quemó el Templo, el palacio real y derribó las murallas de Jerusalén."
  },
  {
    "id": "h158",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "2 Crónicas",
    "question": "¿Quién fue el sumo sacerdote que lideró el derrocamiento de la usurpadora Atalía y coronó rey a Joás de siete años en el patio del Templo?",
    "options": [
      "Joiada el sacerdote",
      "Hilcías",
      "Zadoc",
      "Urías"
    ],
    "correctAnswer": 0,
    "verse": "2 Crónicas 23:1-15",
    "explanation": "El sacerdote Joiada sacó al hijo del rey, y le puso la corona... y aplaudieron y dijeron: ¡Viva el rey! Y mataron a Atalía a espada."
  },
  {
    "id": "h159",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Nehemías",
    "question": "¿Qué oficio de gran confianza y cercanía desempeñaba Nehemías en el palacio real de Susa antes de viajar a Jerusalén?",
    "options": [
      "Copero del rey Artajerjes",
      "Comandante de la guardia persa",
      "Escriba de impuestos",
      "Arquitecto imperial"
    ],
    "correctAnswer": 0,
    "verse": "Nehemías 1:11; 2:1",
    "explanation": "Porque yo servía de copero al rey. Y en el mes de Nisán, en el año veinte del rey Artajerjes, estando ya el vino delante de él, tomé el vino y lo di al rey."
  },
  {
    "id": "h160",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Job",
    "question": "¿Quién fue el cuarto y más joven personaje que esperó en silencio hasta que los tres amigos callaron para hablar con pasión de la soberanía de Dios ante Job?",
    "options": [
      "Eliú hijo de Baraquel buzita",
      "Elifaz",
      "Bildad",
      "Zofar"
    ],
    "correctAnswer": 0,
    "verse": "Job 32:2-4",
    "explanation": "Se encendió en ira Eliú hijo de Baraquel buzita, de la familia de Ram... porque Job se justificaba a sí mismo más bien que a Dios."
  },
  {
    "id": "h161",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Salmos Mesiánicos",
    "question": "¿Qué Salmo profético inicia con las palabras que Jesús clamó en la cruz y detalla: \"Horadaron mis manos y mis pies; contar puedo todos mis huesos; repartieron entre sí mis vestidos\"?",
    "options": [
      "Salmo 22",
      "Salmo 2",
      "Salmo 16",
      "Salmo 110"
    ],
    "correctAnswer": 0,
    "verse": "Salmos 22:1, 16-18",
    "explanation": "El Salmo 22 de David es la profecía más detallada del sufrimiento físico y espiritual de la crucifixión de Cristo mil años antes de ocurrir."
  },
  {
    "id": "h162",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Salmos",
    "question": "¿Qué salmo es el cántico de Moisés, considerado el salmo más antiguo del Salterio, que inicia: \"Señor, tú nos has sido refugio de generación en generación\"?",
    "options": [
      "Salmo 90",
      "Salmo 80",
      "Salmo 100",
      "Salmo 103"
    ],
    "correctAnswer": 0,
    "verse": "Salmos 90:1",
    "explanation": "Oración de Moisés, varón de Dios: \"Señor, tú nos has sido refugio de generación en generación. Antes que naciesen los montes... tú eres Dios.\""
  },
  {
    "id": "h163",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Proverbios",
    "question": "¿En qué capítulo de Proverbios se encuentra el célebre poema acróstico que alaba las virtudes, laboriosidad y sabiduría de la \"Mujer Virtuosa\"?",
    "options": [
      "Proverbios 31 (versículos 10 al 31)",
      "Proverbios 1",
      "Proverbios 8",
      "Proverbios 15"
    ],
    "correctAnswer": 0,
    "verse": "Proverbios 31:10-31",
    "explanation": "Mujer virtuosa, ¿quién la hallará? Porque su estima sobrepasa largamente a la de las piedras preciosas."
  },
  {
    "id": "h164",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Jeremías",
    "question": "¿Cómo se llamaba el fiel secretario y amanuense de Jeremías que escribió el rollo de profecías que el rey Joacim cortó con un cortaplumas y quemó en el fuego?",
    "options": [
      "Baruc hijo de Nerías",
      "Gedubías",
      "Hilcías",
      "Safán"
    ],
    "correctAnswer": 0,
    "verse": "Jeremías 36:4, 23",
    "explanation": "Llamó Jeremías a Baruc hijo de Nerías, y escribió Baruc de boca de Jeremías todas las palabras de Jehová en un rollo de libro."
  },
  {
    "id": "h165",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Jeremías",
    "question": "¿Qué eunuco etíope de la casa del rey rescató a Jeremías sacándolo con sogas y trapos viejos de la profunda cisterna de fango de Malquías?",
    "options": [
      "Ebed-melec el etíope",
      "Candace",
      "Potifar",
      "Tirhaka"
    ],
    "correctAnswer": 0,
    "verse": "Jeremías 38:7-13",
    "explanation": "Oyó Ebed-melec, eunuco que era etíope... y tomó trapos viejos y sogas, y sacaron a Jeremías de la cisterna."
  },
  {
    "id": "h166",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Daniel",
    "question": "¿Cuáles eran los nombres hebreos originales de los tres amigos de Daniel, llamados por los babilonios Sadrac, Mesac y Abed-nego?",
    "options": [
      "Ananías, Misael y Azarías",
      "Simeón, Leví y Judá",
      "Eliezer, Gersón y Coat",
      "Nadab, Abiú e Itamar"
    ],
    "correctAnswer": 0,
    "verse": "Daniel 1:6-7",
    "explanation": "A Ananías puso Sadrac; a Misael, Mesac; y a Azarías, Abed-nego. El nombre babilonio de Daniel fue Beltsasar."
  },
  {
    "id": "h167",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Profeta Ezequiel",
    "question": "Junto a qué río de Babilonia estaba el profeta Ezequiel cuando se abrieron los cielos y vio las visiones de Dios y los cuatro seres vivientes?",
    "options": [
      "Río Quebar",
      "Río Eufrates",
      "Río Tigris (Hidekel)",
      "Río Nilo"
    ],
    "correctAnswer": 0,
    "verse": "Ezequiel 1:1",
    "explanation": "Aconteció en el año treinta, en el mes cuarto, a los cinco días del mes, que estando yo en medio de los cautivos junto al río Quebar, los cielos se abrieron, y vi visiones de Dios."
  },
  {
    "id": "h168",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Los Doce Apóstoles",
    "question": "¿Qué dos apóstoles de los doce llevaban el sobrenombre de \"Zelote\" o \"Cananista\", y \"Tadeo\" (también llamado Lebeo)?",
    "options": [
      "Simón el Zelote y Judas Tadeo (hijo de Alfeo)",
      "Pedro y Juan",
      "Tomás y Mateo",
      "Bartolomé y Felipe"
    ],
    "correctAnswer": 0,
    "verse": "Mateo 10:3-4 / Lucas 6:15-16",
    "explanation": "Simón llamado Zelote, y Judas hermano de Jacobo (Tadeo)."
  },
  {
    "id": "h169",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "La Última Cena",
    "question": "¿Qué salmos litúrgicos (conocidos como el Gran Hallel, Salmos 113 al 118) cantaron Jesús y sus discípulos al terminar la Última Cena antes de salir al Monte de los Olivos?",
    "options": [
      "El Hallel pascual (Salmos 113 a 118)",
      "El Salmo 23 y el Salmo 91",
      "Los cánticos de David en Hebrón",
      "El cántico de Moisés"
    ],
    "correctAnswer": 0,
    "verse": "Mateo 26:30 / Marcos 14:26",
    "explanation": "Y cuando hubieron cantado el himno (el Hallel pascual), salieron al monte de los Olivos."
  },
  {
    "id": "h170",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué platero de Éfeso provocó un gran alboroto en el teatro de la ciudad gritando: \"¡Grande es Diana de los efesios!\", porque el evangelio arruinaba su negocio de ídolos de plata?",
    "options": [
      "Demetrio el platero",
      "Alejandro el calderero",
      "Tertulo",
      "Gaius"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 19:24-28",
    "explanation": "Un platero llamado Demetrio, que hacía de plata templecillos de Diana... llenos de ira gritaron diciendo: ¡Grande es Diana de los efesios!"
  },
  {
    "id": "h171",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Hechos de los Apóstoles",
    "question": "¿Qué orador y abogado contrataron los líderes judíos para acusar formalmente al apóstol Pablo ante el gobernador Félix en Cesarea?",
    "options": [
      "Tertulo",
      "Gamaliel",
      "Claudio Lisias",
      "Porcio Festo"
    ],
    "correctAnswer": 0,
    "verse": "Hechos 24:1-2",
    "explanation": "Descendió el sumo sacerdote Ananías con algunos de los ancianos y un cierto orador llamado Tértulo, y comparecieron ante el gobernador contra Pablo."
  },
  {
    "id": "h172",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "1 Timoteo",
    "question": "En 1 Timoteo 3, ¿cuáles son los dos oficios eclesiásticos oficiales cuyos estrictos requisitos de carácter y santidad expone Pablo detalladamente?",
    "options": [
      "Obispos (ancianos/pastores) y diáconos",
      "Papas y cardenales",
      "Levitas y cantores",
      "Apóstoles y profetas"
    ],
    "correctAnswer": 0,
    "verse": "1 Timoteo 3:1-13",
    "explanation": "Pablo describe los requisitos morales y espirituales para los obispos (versículos 1-7) y para los diáconos (versículos 8-13)."
  },
  {
    "id": "h173",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Epístola de Judas",
    "question": "En la epístola de Judas versículo 11, ¿cuáles son los tres errores y rebeliones del Antiguo Testamento con que se compara a los apóstatas?",
    "options": [
      "El camino de Caín, el error de Balaam por lucro, y la contradicción de Coré",
      "La torre de Babel, el becerro de oro y Sodoma",
      "La esposa de Lot, Faraón y Acab",
      "Saúl, Absalón y Jezabel"
    ],
    "correctAnswer": 0,
    "verse": "Judas 1:11",
    "explanation": "¡Ay de ellos! porque han seguido el camino de Caín, y se lanzaron por lucro en el error de Balaam, y perecieron en la contradicción de Coré."
  },
  {
    "id": "h174",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Qué misteriosa mujer sentada sobre una bestia escarlata lleva en su frente escrito: \"BABILONIA LA GRANDE, LA MADRE DE LAS RAMERAS Y DE LAS ABOMINACIONES DE LA TIERRA\"?",
    "options": [
      "La Gran Ramera embriagada de la sangre de los santos (Apocalipsis 17)",
      "Jezabel de Tiatira",
      "La reina Atalía",
      "La estatua de Nabucodonosor"
    ],
    "correctAnswer": 0,
    "verse": "Apocalipsis 17:1-6",
    "explanation": "Y en su frente un nombre escrito, un misterio: BABILONIA LA GRANDE, LA MADRE DE LAS RAMERAS... vi a la mujer ebria de la sangre de los santos."
  },
  {
    "id": "h175",
    "level": "HARD",
    "type": "MULTIPLE_CHOICE",
    "category": "Apocalipsis",
    "question": "¿Cuáles son los doce cimientos de piedras preciosas que adornan el muro de la Nueva Jerusalén celestial según Apocalipsis 21:19-20?",
    "options": [
      "Jaspe, zafiro, ágata, esmeralda, ónice, cornalina, crisólito, berilo, topacio, crisopraso, jacinto y amatista",
      "Oro, plata, cobre, hierro, estaño, plomo y bronce",
      "Rubíes, diamantes y perlas únicamente",
      "Doce piedras del Jordán"
    ],
    "correctAnswer": 0,
    "verse": "Apocalipsis 21:19-20",
    "explanation": "Los doce cimientos del muro de la ciudad estaban adornados con toda piedra preciosa: jaspe, zafiro, ágata, esmeralda, ónice, cornalina, crisólito, berilo, topacio, crisopraso, jacinto y amatista."
  }
];

// Función para barajar aleatoriamente un array (Fisher-Yates Shuffle con aleatoriedad robusta)
export function shuffleArray(arr) {
  if (!Array.isArray(arr)) return [];
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
