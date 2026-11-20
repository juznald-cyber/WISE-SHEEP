// Banco Extenso de Preguntas Bíblicas para WISE SHEEP
// Categorizadas por Niveles (Fácil, Intermedio, Avanzado) y Modalidades Diversas

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
  // ==============================================================
  // NIVEL 1: CORDERITO (FÁCIL / PRINCIPIANTE) - 25+ PREGUNTAS
  // ==============================================================
  {
    id: 'e1',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Historias Bíblicas',
    question: '¿Cuántos días y cuántas noches llovió durante el diluvio en el arca de Noé?',
    options: ['7 días y 7 noches', '40 días y 40 noches', '100 días y 100 noches', '12 días y 12 noches'],
    correctAnswer: 1,
    verse: 'Génesis 7:12',
    explanation: 'Y hubo lluvia sobre la tierra cuarenta días y cuarenta noches.'
  },
  {
    id: 'e2',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Antiguo Testamento',
    question: '¿Con qué arma venció el joven David al gigante Goliat?',
    options: ['Una espada de bronce', 'Una honda y una piedra', 'Una lanza con punta de hierro', 'Un arco y flecha'],
    correctAnswer: 1,
    verse: '1 Samuel 17:50',
    explanation: 'Así venció David al filisteo con honda y piedra; e hirió al filisteo y lo mató.'
  },
  {
    id: 'e3',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Nuevo Testamento',
    question: '¿En qué ciudad nació Jesús?',
    options: ['Nazaret', 'Jerusalén', 'Belén', 'Capernaúm'],
    correctAnswer: 2,
    verse: 'Miqueas 5:2 / Lucas 2:4-7',
    explanation: 'Jesús nació en Belén de Judea, cumpliendo la profecía de Miqueas.'
  },
  {
    id: 'e4',
    level: 'EASY',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'Personajes',
    question: '¿Verdadero o Falso? Jonás intentó huir a Tarsis para no ir a predicar a Nínive.',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Jonás 1:3',
    explanation: 'Jonás se levantó para huir de la presencia de Dios hacia Tarsis.'
  },
  {
    id: 'e5',
    level: 'EASY',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina la Historia',
    question: '¿Qué historia bíblica representan estos emojis? 🍎 🐍 🌳 🚫',
    options: ['Noé y el diluvio', 'Adán y Eva en el Edén', 'Moisés y la zarza', 'Sansón y Dalila'],
    correctAnswer: 1,
    verse: 'Génesis 3:1-6',
    explanation: 'Representa la tentación en el huerto del Edén con Adán, Eva y la serpiente.'
  },
  {
    id: 'e6',
    level: 'EASY',
    type: QUESTION_TYPES.FILL_VERSE,
    category: 'Versículos Memorables',
    question: 'Completa el versículo: "El Señor es mi pastor, nada me _________"',
    options: ['faltará', 'sobrará', 'asustará', 'apartará'],
    correctAnswer: 0,
    verse: 'Salmos 23:1',
    explanation: 'Salmos 23:1: "Jehová es mi pastor; nada me faltará."'
  },
  {
    id: 'e7',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Los Discípulos',
    question: '¿Cuántos discípulos / apóstoles principales eligió Jesús?',
    options: ['7', '10', '12', '14'],
    correctAnswer: 2,
    verse: 'Mateo 10:1-4',
    explanation: 'Jesús llamó a sus doce discípulos y les dio autoridad espiritual.'
  },
  {
    id: 'e8',
    level: 'EASY',
    type: QUESTION_TYPES.WHO_SAID_IT,
    category: '¿Quién lo dijo?',
    question: '¿Quién dijo: "¿Acaso soy yo el que cuida a mi hermano?"',
    options: ['Abel', 'Caín', 'Esaú', 'Jacob'],
    correctAnswer: 1,
    verse: 'Génesis 4:9',
    explanation: 'Caín respondió esto a Dios cuando le preguntó por su hermano Abel.'
  },
  {
    id: 'e9',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'El Éxodo',
    question: '¿Qué mar abrió Dios a través de Moisés para que el pueblo cruzara en seco?',
    options: ['El Mar Muerto', 'El Mar de Galilea', 'El Mar Rojo', 'El Mar Mediterráneo'],
    correctAnswer: 2,
    verse: 'Éxodo 14:21',
    explanation: 'Moisés extendió su mano sobre el mar e hizo Dios que el mar se abriera.'
  },
  {
    id: 'e10',
    level: 'EASY',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina el Personaje',
    question: '¿Qué historia representan estos emojis? 🦁 🕳️ 🙏 🛡️',
    options: ['Elías en la cueva', 'Daniel en el foso de los leones', 'Sansón luchando', 'David el pastor'],
    correctAnswer: 1,
    verse: 'Daniel 6:16-22',
    explanation: 'Daniel fue guardado milagrosamente en el foso de los leones.'
  },
  {
    id: 'e11',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'La Creación',
    question: '¿En qué día de la creación descansó Dios de toda la obra que había hecho?',
    options: ['En el quinto día', 'En el sexto día', 'En el séptimo día', 'En el octavo día'],
    correctAnswer: 2,
    verse: 'Génesis 2:2',
    explanation: 'Y acabó Dios en el día séptimo la obra que hizo; y reposó el día séptimo.'
  },
  {
    id: 'e12',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Personajes Bíblicos',
    question: '¿Quién construyó el gran arca por orden de Dios para salvar a su familia?',
    options: ['Abraham', 'Noé', 'Moisés', 'Isaac'],
    correctAnswer: 1,
    verse: 'Génesis 6:14',
    explanation: 'Noé construyó el arca de madera de gofer tal como Dios le mandó.'
  },
  {
    id: 'e13',
    level: 'EASY',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'Milagros de Jesús',
    question: '¿Verdadero o Falso? Jesús caminó sobre el agua hacia la barca de sus discípulos.',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Mateo 14:25',
    explanation: 'Mas a la cuarta vigilia de la noche, Jesús vino a ellos andando sobre el mar.'
  },
  {
    id: 'e14',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Los Mandamientos',
    question: '¿Dónde entregó Dios las tablas de los 10 Mandamientos a Moisés?',
    options: ['En el Monte Sinaí', 'En el Monte Carmelo', 'En el Monte de los Olivos', 'En el Monte Hermón'],
    correctAnswer: 0,
    verse: 'Éxodo 19:20',
    explanation: 'Y descendió Jehová sobre el monte Sinaí, y llamó a Moisés a la cumbre.'
  },
  {
    id: 'e15',
    level: 'EASY',
    type: QUESTION_TYPES.FILL_VERSE,
    category: 'Versículos Clave',
    question: 'Juan 3:16: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo _________"',
    options: ['unigénito', 'amado', 'primogénito', 'escogido'],
    correctAnswer: 0,
    verse: 'Juan 3:16',
    explanation: '"...para que todo aquel que en él cree, no se pierda, mas tenga vida eterna."'
  },
  {
    id: 'e16',
    level: 'EASY',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina el Milagro',
    question: '¿Qué milagro representan estos emojis? 🍞 🍞 🐟 🐟 🐟 🧺 5️⃣0️⃣0️⃣0️⃣',
    options: ['La pesca milagrosa', 'La multiplicación de los panes y peces', 'El maná en el desierto', 'La última cena'],
    correctAnswer: 1,
    verse: 'Mateo 14:19-21',
    explanation: 'Jesús multiplicó cinco panes y dos peces alimentando a más de 5,000 personas.'
  },
  {
    id: 'e17',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Jesús',
    question: '¿Quién bautizó a Jesús en el río Jordán?',
    options: ['Pedro', 'Juan el Bautista', 'Eliseo', 'Santiago'],
    correctAnswer: 1,
    verse: 'Mateo 3:13-17',
    explanation: 'Jesús vino de Galilea a Juan al Jordán, para ser bautizado por él.'
  },
  {
    id: 'e18',
    level: 'EASY',
    type: QUESTION_TYPES.WHO_SAID_IT,
    category: '¿Quién lo dijo?',
    question: '¿Quién dijo: "Heme aquí, envíame a mí" al escuchar la voz del Señor?',
    options: ['Jeremías', 'Isaías', 'Jonás', 'Samuel'],
    correctAnswer: 1,
    verse: 'Isaías 6:8',
    explanation: 'Isaías respondió con prontitud al llamamiento santo de Dios.'
  },
  {
    id: 'e19',
    level: 'EASY',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'Curiosidades Bíblicas',
    question: '¿Verdadero o Falso? El libro de los Salmos es el libro con más capítulos en la Biblia.',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Salmos',
    explanation: 'El libro de Salmos tiene 150 capítulos, siendo el más extenso de toda la Biblia.'
  },
  {
    id: 'e20',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Personajes',
    question: '¿Quién fue tragado por un gran pez luego de desobedecer a Dios?',
    options: ['Pedro', 'Pablo', 'Jonás', 'Elías'],
    correctAnswer: 2,
    verse: 'Jonás 1:17',
    explanation: 'Pero Jehová tenía preparado un gran pez que tragase a Jonás.'
  },
  {
    id: 'e21',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'La Biblia',
    question: '¿Cuál es el primer libro de la Biblia?',
    options: ['Éxodo', 'Salmos', 'Génesis', 'Mateo'],
    correctAnswer: 2,
    verse: 'Génesis 1:1',
    explanation: 'Génesis significa "principio u origen" y es el primer libro de las Escrituras.'
  },
  {
    id: 'e22',
    level: 'EASY',
    type: QUESTION_TYPES.FILL_VERSE,
    category: 'Versículos Clave',
    question: 'Salmos 119:105: "Lámpara es a mis pies tu palabra, y ________ a mi camino."',
    options: ['guía', 'lumbrera', 'sol', 'escudo'],
    correctAnswer: 1,
    verse: 'Salmos 119:105',
    explanation: '"Lámpara es a mis pies tu palabra, y lumbrera a mi camino."'
  },
  {
    id: 'e23',
    level: 'EASY',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina el Personaje',
    question: '¿Qué personaje bíblico es? 🕊️ 🌿 ⛵ 🌧️ 🌈',
    options: ['Moisés', 'Noé', 'Abraham', 'Lot'],
    correctAnswer: 1,
    verse: 'Génesis 8 y 9',
    explanation: 'Noé envió la paloma que regresó con una hoja de olivo, y luego vio el arcoíris del pacto.'
  },
  {
    id: 'e24',
    level: 'EASY',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'La Resurrección',
    question: '¿Verdadero o Falso? Al tercer día de morir en la cruz, Jesús resucitó de entre los muertos.',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Lucas 24:6-7',
    explanation: '¡No está aquí, sino que ha resucitado, tal como lo había prometido!'
  },
  {
    id: 'e25',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Personajes',
    question: '¿Quién tenía una túnica de muchos colores que le regaló su padre Jacob?',
    options: ['Benjamín', 'José', 'Judá', 'Rubén'],
    correctAnswer: 1,
    verse: 'Génesis 37:3',
    explanation: 'Israel amaba a José más que a todos sus hijos y le hizo una túnica de diversos colores.'
  },

  // ==============================================================
  // NIVEL 2: DISCÍPULO (INTERMEDIO) - 25+ PREGUNTAS
  // ==============================================================
  {
    id: 'm1',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Milagros de Jesús',
    question: '¿Cuál fue el primer milagro público de Jesús según el Evangelio de Juan?',
    options: ['Multiplicar los panes', 'Caminar sobre el mar', 'Convertir el agua en vino en Caná', 'Sanar a diez leprosos'],
    correctAnswer: 2,
    verse: 'Juan 2:1-11',
    explanation: 'En las bodas de Caná de Galilea, Jesús manifestó por primera vez su gloria.'
  },
  {
    id: 'm2',
    level: 'MEDIUM',
    type: QUESTION_TYPES.WHO_SAID_IT,
    category: '¿Quién lo dijo?',
    question: '¿Quién declaró con convicción: "Yo y mi casa serviremos a Jehová"?',
    options: ['Moisés', 'Josué', 'Gedeón', 'Samuel'],
    correctAnswer: 1,
    verse: 'Josué 24:15',
    explanation: 'Josué lo proclamó al despedirse del pueblo de Israel reafirmando su lealtad a Dios.'
  },
  {
    id: 'm3',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'El Fruto del Espíritu',
    question: '¿Cuál de los siguientes NO es parte del fruto del Espíritu en Gálatas 5:22-23?',
    options: ['Amor y Gozo', 'Paciencia y Benignidad', 'Orgullo y Fama', 'Paz y Mansedumbre'],
    correctAnswer: 2,
    verse: 'Gálatas 5:22-23',
    explanation: 'El fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre y templanza.'
  },
  {
    id: 'm4',
    level: 'MEDIUM',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'Hechos de los Apóstoles',
    question: '¿Verdadero o Falso? Saulo de Tarso perseguía a los cristianos antes de convertirse en el apóstol Pablo.',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Hechos 9:1-6',
    explanation: 'Saulo respiraba amenazas y muerte contra los discípulos hasta que tuvo su encuentro con Cristo.'
  },
  {
    id: 'm5',
    level: 'MEDIUM',
    type: QUESTION_TYPES.FILL_VERSE,
    category: 'Versículos Clave',
    question: 'Filipenses 4:13: "Todo lo puedo en Cristo que me ____________"',
    options: ['fortalece', 'sustenta', 'guía', 'ilumina'],
    correctAnswer: 0,
    verse: 'Filipenses 4:13',
    explanation: '"Todo lo puedo en Cristo que me fortalece."'
  },
  {
    id: 'm6',
    level: 'MEDIUM',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina el Personaje',
    question: '¿Quién es este personaje? 👸 👑 📜 🇮🇱 🍽️ ("Si perezco, que perezca")',
    options: ['Rut', 'Ester', 'Débora', 'María Magdalena'],
    correctAnswer: 1,
    verse: 'Ester 4:16',
    explanation: 'La reina Ester arriesgó su vida para salvar al pueblo judío del complot de Amán.'
  },
  {
    id: 'm7',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Profetas',
    question: '¿A qué profeta se le apareció Dios en un silbo apacible y delicado en el monte Horeb?',
    options: ['Isaías', 'Jeremías', 'Elías', 'Ezequiel'],
    correctAnswer: 2,
    verse: '1 Reyes 19:12',
    explanation: 'Dios no estaba en el fuego ni en el terremoto, sino en un silbo apacible.'
  },
  {
    id: 'm8',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Parábolas',
    question: 'En la parábola del Hijo Pródigo, ¿qué animal mandó sacrificar el padre para celebrar el regreso?',
    options: ['Un cordero sin mancha', 'El becerro gordo', 'Dos palominos', 'Un cabrito'],
    correctAnswer: 1,
    verse: 'Lucas 15:23',
    explanation: '"Traed el becerro gordo y matadlo, y comamos y hagamos fiesta."'
  },
  {
    id: 'm9',
    level: 'MEDIUM',
    type: QUESTION_TYPES.WHO_SAID_IT,
    category: '¿Quién lo dijo?',
    question: '¿Quién clamó a Jesús en Jericó: "¡Hijo de David, ten misericordia de mí!" a pesar de que le mandaban callar?',
    options: ['Zaqueo', 'El ciego Bartimeo', 'Nicodemo', 'Lázaro'],
    correctAnswer: 1,
    verse: 'Marcos 10:47-48',
    explanation: 'Bartimeo perseveró con fe viva y Jesús le devolvió la vista.'
  },
  {
    id: 'm10',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Pentecostés',
    question: '¿En qué fiesta judía descendió el Espíritu Santo sobre los discípulos reunidos unánimes?',
    options: ['La Pascua', 'Pentecostés', 'Tabernáculos', 'Purim'],
    correctAnswer: 1,
    verse: 'Hechos 2:1-4',
    explanation: 'Cuando llegó el día de Pentecostés, fueron todos llenos del Espíritu Santo.'
  },
  {
    id: 'm11',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Jueces de Israel',
    question: '¿Qué juez de Israel redujo su ejército de 32,000 soldados a tan solo 300 valientes con trompetas y cántaros?',
    options: ['Sansón', 'Gedeón', 'Jefté', 'Barac'],
    correctAnswer: 1,
    verse: 'Jueces 7:7',
    explanation: 'Dios le dijo a Gedeón: "Con estos trescientos hombres que lamieron el agua os salvaré".'
  },
  {
    id: 'm12',
    level: 'MEDIUM',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'Los Apóstoles',
    question: '¿Verdadero o Falso? Mateo, antes de seguir a Jesús, trabajaba como recaudador de impuestos.',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Mateo 9:9',
    explanation: 'Jesús vio a un hombre llamado Mateo sentado al banco de los tributos públicos y le dijo: Sígueme.'
  },
  {
    id: 'm13',
    level: 'MEDIUM',
    type: QUESTION_TYPES.FILL_VERSE,
    category: 'Sabiduría',
    question: 'Proverbios 3:5: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia ___________"',
    options: ['prudencia', 'riqueza', 'fuerza', 'justicia'],
    correctAnswer: 0,
    verse: 'Proverbios 3:5',
    explanation: '"Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia."'
  },
  {
    id: 'm14',
    level: 'MEDIUM',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina la Historia',
    question: '¿Qué historia es? 🌳 🧗‍♂️ 💰 👀 🏠 ("Hoy ha venido la salvación a esta casa")',
    options: ['Zaqueo en el sicómoro', 'El joven rico', 'La viuda pobre', 'Lázaro y el rico'],
    correctAnswer: 0,
    verse: 'Lucas 19:1-9',
    explanation: 'Zaqueo, jefe de publicanos y de baja estatura, subió a un árbol sicómoro para ver a Jesús.'
  },
  {
    id: 'm15',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Antiguo Testamento',
    question: '¿Quién pidió a Dios "un corazón entendido para juzgar y discernir entre lo bueno y lo malo" en lugar de riquezas?',
    options: ['David', 'Salomón', 'Josafat', 'Ezequías'],
    correctAnswer: 1,
    verse: '1 Reyes 3:9-12',
    explanation: 'Salomón pidió sabiduría para gobernar al pueblo y Dios le otorgó sabiduría incomparable.'
  },
  {
    id: 'm16',
    level: 'MEDIUM',
    type: QUESTION_TYPES.WHO_SAID_IT,
    category: '¿Quién lo dijo?',
    question: '¿Quién dijo a Jesús en una noche secreta: "¿Cómo puede un hombre nacer siendo viejo?"',
    options: ['Nicodemo', 'José de Arimatea', 'Caifás', 'Gamaliel'],
    correctAnswer: 0,
    verse: 'Juan 3:1-4',
    explanation: 'Nicodemo, principal entre los judíos, vino a Jesús de noche para conversar sobre el nuevo nacimiento.'
  },
  {
    id: 'm17',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Parábolas',
    question: '¿Quién curó y cuidó al hombre herido en el camino de Jerusalén a Jericó?',
    options: ['Un sacerdote', 'Un levita', 'Un buen samaritano', 'Un soldado romano'],
    correctAnswer: 2,
    verse: 'Lucas 10:33-35',
    explanation: 'El buen samaritano fue movido a misericordia, vendó sus heridas y lo llevó al mesón.'
  },
  {
    id: 'm18',
    level: 'MEDIUM',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'La Iglesia Primitiva',
    question: '¿Verdadero o Falso? Bernabé vendió una heredad que tenía y trajo el precio para ponerlo a los pies de los apóstoles.',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Hechos 4:36-37',
    explanation: 'José, a quien los apóstoles llamaron Bernabé (Hijo de consolación), vendió una heredad y dio el dinero.'
  },
  {
    id: 'm19',
    level: 'MEDIUM',
    type: QUESTION_TYPES.FILL_VERSE,
    category: 'Efesios',
    question: 'Efesios 2:8: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es ________ de Dios"',
    options: ['premio', 'don', 'mandato', 'pacto'],
    correctAnswer: 1,
    verse: 'Efesios 2:8',
    explanation: '"...no por obras, para que nadie se gloríe."'
  },
  {
    id: 'm20',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Milagros de Jesús',
    question: '¿Cuántos días llevaba muerto Lázaro en el sepulcro cuando Jesús lo resucitó?',
    options: ['1 día', '2 días', '3 días', '4 días'],
    correctAnswer: 3,
    verse: 'Juan 11:39',
    explanation: 'Marta dijo: "Señor, hiede ya, porque es de cuatro días". Y Jesús dijo: "¡Lázaro, ven fuera!".'
  },
  {
    id: 'm21',
    level: 'MEDIUM',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina la Historia',
    question: '¿Qué historia representan estos emojis? 🌾 👵 🤝 💍 🌾 ("Dondequiera que tú fueres, iré yo")',
    options: ['Rut y Booz con Noemí', 'Sara y Agar', 'Raquel y Lea', 'Marta y María'],
    correctAnswer: 0,
    verse: 'Rut 1:16',
    explanation: 'Rut demostró lealtad a su suegra Noemí y terminó casándose con Booz en Belén.'
  },
  {
    id: 'm22',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Profetas',
    question: '¿Cómo fue llevado el profeta Elías al cielo sin ver muerte física?',
    options: ['En una nube de gloria', 'En un torbellino en carro de fuego', 'En alas de águila', 'En un sueño santo'],
    correctAnswer: 1,
    verse: '2 Reyes 2:11',
    explanation: 'Un carro de fuego con caballos de fuego apartó a los dos; y Elías subió al cielo en un torbellino.'
  },
  {
    id: 'm23',
    level: 'MEDIUM',
    type: QUESTION_TYPES.WHO_SAID_IT,
    category: '¿Quién lo dijo?',
    question: '¿Quién dijo: "¿Qué es la verdad?" antes de lavarse las manos y entregar a Jesús para ser crucificado?',
    options: ['Herodes Antipas', 'Poncio Pilato', 'Barrabás', 'Caifás'],
    correctAnswer: 1,
    verse: 'Juan 18:38',
    explanation: 'Pilato formuló esta famosa pregunta escéptica frente al propio Autor de la verdad.'
  },
  {
    id: 'm24',
    level: 'MEDIUM',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'El Sermón del Monte',
    question: '¿Verdadero o Falso? En las Bienaventuranzas, Jesús dijo: "Bienaventurados los pacificadores, porque ellos serán llamados hijos de Dios".',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Mateo 5:9',
    explanation: 'Mateo 5:9 es una de las declaraciones centrales de Jesús en el Sermón del Monte.'
  },
  {
    id: 'm25',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Reyes de Israel',
    question: '¿Qué rey de Judá mandó reparar el Templo y al hallar el Libro de la Ley rasgó sus vestidos y promovió una gran reforma espiritual con solo 8 años al comenzar su reinado?',
    options: ['Ezequías', 'Josías', 'Manasés', 'Roboam'],
    correctAnswer: 1,
    verse: '2 Reyes 22:1-11',
    explanation: 'El joven rey Josías hizo lo recto ante los ojos de Dios y renovó el pacto del pueblo con las Escrituras.'
  },

  // ==============================================================
  // NIVEL 3: MAESTRO / TEÓLOGO (DIFÍCIL / AVANZADO) - 25+ PREGUNTAS
  // ==============================================================
  {
    id: 'h1',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Cronología y Genealogías',
    question: '¿Quién fue el hombre más longevo según la Biblia y cuántos años vivió?',
    options: ['Noé (950 años)', 'Matusalén (969 años)', 'Adán (930 años)', 'Jared (962 años)'],
    correctAnswer: 1,
    verse: 'Génesis 5:27',
    explanation: 'Matusalén vivió novecientos sesenta y nueve años; y murió.'
  },
  {
    id: 'h2',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Reyes y Sanidad',
    question: '¿A qué rey de Judá Dios le añadió 15 años de vida tras clamar y llorar ante Él con el profeta Isaías?',
    options: ['Josías', 'Ezequías', 'Uzías', 'Asa'],
    correctAnswer: 1,
    verse: '2 Reyes 20:5-6 / Isaías 38:5',
    explanation: 'Dios dijo a Ezequías: "He oído tu oración, y visto tus lágrimas; he aquí añado a tus días quince años."'
  },
  {
    id: 'h3',
    level: 'HARD',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'Epístolas Paulinas',
    question: '¿Verdadero o Falso? El libro de Filemón es una carta de Pablo intercediendo por un siervo fugitivo llamado Onésimo.',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Filemón 1:10-16',
    explanation: 'Pablo pide a Filemón que reciba a Onésimo no ya como esclavo, sino como hermano amado en Cristo.'
  },
  {
    id: 'h4',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Apocalipsis',
    question: '¿Cuál de las siguientes ciudades NO fue sede de una de las 7 iglesias de Asia en Apocalipsis 2 y 3?',
    options: ['Éfeso y Esmirna', 'Pérgamo y Tiatira', 'Antioquía y Roma', 'Sardis, Filadelfia y Laodicea'],
    correctAnswer: 2,
    verse: 'Apocalipsis 1:11',
    explanation: 'Las 7 iglesias de Asia son Éfeso, Esmirna, Pérgamo, Tiatira, Sardis, Filadelfia y Laodicea.'
  },
  {
    id: 'h5',
    level: 'HARD',
    type: QUESTION_TYPES.WHO_SAID_IT,
    category: '¿Quién lo dijo?',
    question: '¿Qué profeta en Hechos ató sus manos y pies con el cinto de Pablo anunciando que sería arrestado en Jerusalén?',
    options: ['Bernabé', 'Ágabo', 'Silas', 'Apolos'],
    correctAnswer: 1,
    verse: 'Hechos 21:10-11',
    explanation: 'El profeta Ágabo profetizó con el cinto de Pablo lo que le esperaba en Jerusalén.'
  },
  {
    id: 'h6',
    level: 'HARD',
    type: QUESTION_TYPES.FILL_VERSE,
    category: 'Profecía y Justicia',
    question: 'Miqueas 6:8: "¿Y qué pide Jehová de ti: solamente hacer justicia, y amar misericordia, y ____________ ante tu Dios?"',
    options: ['humillarte para andar', 'ofrendar con alegría', 'orar en silencio', 'cantar salmos'],
    correctAnswer: 0,
    verse: 'Miqueas 6:8',
    explanation: '"...solamente hacer justicia, y amar misericordia, y humillarte para andar con tu Dios."'
  },
  {
    id: 'h7',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'El Tabernáculo',
    question: '¿De qué madera estaba construida el Arca del Pacto antes de ser recubierta de oro puro por dentro y por fuera?',
    options: ['Madera de Cedro del Líbano', 'Madera de Acacia', 'Madera de Olivo', 'Madera de Roble'],
    correctAnswer: 1,
    verse: 'Éxodo 25:10',
    explanation: 'Harán un arca de madera de acacia (madera incorruptible del desierto).'
  },
  {
    id: 'h8',
    level: 'HARD',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina la Historia',
    question: '¿Qué batalla representan estos emojis? 🏺 🎺 🪔 🍞 3️⃣0️⃣0️⃣ ⚔️',
    options: ['La toma de Jericó', 'Gedeón contra los madianitas', 'Josafat en el desierto de Tecoa', 'Sansón en Leji'],
    correctAnswer: 1,
    verse: 'Jueces 7:16-22',
    explanation: 'Gedeón y sus 300 soldados tocaron las trompetas y quebraron los cántaros con teas ardiendo.'
  },
  {
    id: 'h9',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Evangelios',
    question: '¿Cuál de los cuatro evangelios comienza diciendo: "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios"?',
    options: ['Mateo', 'Marcos', 'Lucas', 'Juan'],
    correctAnswer: 3,
    verse: 'Juan 1:1',
    explanation: 'Juan presenta la deidad y preexistencia eterna de Jesucristo como el Logos divino.'
  },
  {
    id: 'h10',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Sabiduría',
    question: '¿Qué libro de la Biblia culmina con el famoso poema acróstico a la Mujer Virtuosa (capítulo 31)?',
    options: ['Cantar de los Cantares', 'Proverbios', 'Eclesiastés', 'Rut'],
    correctAnswer: 1,
    verse: 'Proverbios 31:10-31',
    explanation: 'El poema describe a la mujer hacendosa y temerosa de Dios cuyo valor supera a las piedras preciosas.'
  },
  {
    id: 'h11',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Antiguo Testamento',
    question: '¿Quién fue el sumo sacerdote que cayó de su silla hacia atrás y murió desnucado al enterarse de que el Arca de Dios había sido capturada por los filisteos?',
    options: ['Aarón', 'Elí', 'Finees', 'Sadoc'],
    correctAnswer: 1,
    verse: '1 Samuel 4:18',
    explanation: 'Elí, con 98 años y de ojos oscurecidos, cayó de espaldas al escuchar la pérdida del Arca.'
  },
  {
    id: 'h12',
    level: 'HARD',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'Curiosidades Bíblicas',
    question: '¿Verdadero o Falso? El versículo más corto en español de la Biblia es Juan 11:35: "Jesús lloró".',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Juan 11:35',
    explanation: 'Con solo dos palabras ("Jesús lloró"), es el versículo más corto del Nuevo Testamento.'
  },
  {
    id: 'h13',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Hechos de los Apóstoles',
    question: '¿En qué isla del Mediterráneo naufragó el barco en el que Pablo viajaba prisionero rumbo a Roma?',
    options: ['Chipre', 'Creta', 'Malta', 'Patmos'],
    correctAnswer: 2,
    verse: 'Hechos 28:1',
    explanation: 'Estando ya a salvo, supieron que la isla se llamaba Malta.'
  },
  {
    id: 'h14',
    level: 'HARD',
    type: QUESTION_TYPES.WHO_SAID_IT,
    category: '¿Quién lo dijo?',
    question: '¿Quién exclamó en el juicio ante el rey Agripa: "¡Por poco me persuades a ser cristiano!"?',
    options: ['Festo', 'El rey Agripa', 'Félix', 'Claudio Lisias'],
    correctAnswer: 1,
    verse: 'Hechos 26:28',
    explanation: 'El rey Agripa dijo esto conmovido tras escuchar la apasionada defensa de Pablo.'
  },
  {
    id: 'h15',
    level: 'HARD',
    type: QUESTION_TYPES.FILL_VERSE,
    category: 'Hebreos',
    question: 'Hebreos 11:1: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que _________"',
    options: ['no se ve', 'está por venir', 'se anhela', 'se promete'],
    correctAnswer: 0,
    verse: 'Hebreos 11:1',
    explanation: '"Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve."'
  },
  {
    id: 'h16',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Personajes Obscuros',
    question: '¿Quién fue el sacerdote y rey de Salem a quien Abraham dio los diezmos de todo tras rescatar a Lot?',
    options: ['Jetro', 'Melquisedec', 'Balaam', 'Abimelec'],
    correctAnswer: 1,
    verse: 'Génesis 14:18-20 / Hebreos 7',
    explanation: 'Melquisedec, rey de justicia y de paz, tipifica el sacerdocio eterno de Cristo.'
  },
  {
    id: 'h17',
    level: 'HARD',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina la Profecía',
    question: '¿Qué visión profética de Ezequiel representan estos emojis? 💀 🦴 🏜️ 💨 🧍‍♂️🧍‍♀️🧍‍♂️ (Un ejército viviente)',
    options: ['Las cuatro bestias', 'El valle de los huesos secos', 'La rueda dentro de la rueda', 'El río del santuario'],
    correctAnswer: 1,
    verse: 'Ezequiel 37:1-10',
    explanation: 'Ezequiel profetizó al soplo del Espíritu y los huesos secos cobraron vida como un gran ejército.'
  },
  {
    id: 'h18',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Lenguas Bíblicas',
    question: '¿En qué dos idiomas principales fue escrito originalmente el Antiguo Testamento?',
    options: ['Griego y Latín', 'Hebreo y Arameo', 'Hebreo y Griego', 'Arameo y Árabe'],
    correctAnswer: 1,
    verse: 'Esdras / Daniel',
    explanation: 'La gran mayoría fue escrita en hebreo, con porciones selectas en arameo (en Esdras y Daniel).'
  },
  {
    id: 'h19',
    level: 'HARD',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'Profetas Menores',
    question: '¿Verdadero o Falso? El profeta Oseas fue instruido por Dios a casarse con una mujer infiel llamada Gomer para ilustrar el amor redentor de Dios hacia Israel.',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Oseas 1:2-3',
    explanation: 'Oseas tomó por esposa a Gomer como una vívida lección del amor fiel e incondicional de Dios.'
  },
  {
    id: 'h20',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'El Sanedrín',
    question: '¿Qué sabio fariseo y doctor de la ley aconsejó al concilio no perseguir a los apóstoles diciendo: "Si este consejo o esta obra es de los hombres, se desvanecerá; mas si es de Dios, no la podréis destruir"?',
    options: ['Nicodemo', 'Gamaliel', 'Anás', 'Tertulo'],
    correctAnswer: 1,
    verse: 'Hechos 5:34-39',
    explanation: 'Gamaliel dio este sabio consejo protegiendo providencialmente la vida de los apóstoles.'
  },
  {
    id: 'h21',
    level: 'HARD',
    type: QUESTION_TYPES.FILL_VERSE,
    category: 'Romanos',
    question: 'Romanos 8:28: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su _________ son llamados."',
    options: ['propósito', 'voluntad', 'gracia', 'sabiduría'],
    correctAnswer: 0,
    verse: 'Romanos 8:28',
    explanation: '"...a los que conforme a su propósito son llamados."'
  },
  {
    id: 'h22',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Guerra Espiritual',
    question: 'En la Armadura de Dios descrita en Efesios 6:10-18, ¿cuál es la ÚNICA arma explícitamente ofensiva?',
    options: ['El escudo de la fe', 'El yelmo de la salvación', 'La espada del Espíritu, que es la palabra de Dios', 'El calzado del evangelio'],
    correctAnswer: 2,
    verse: 'Efesios 6:17',
    explanation: 'La espada del Espíritu, la Palabra viva de Dios, es el arma con la que Jesús mismo venció al enemigo.'
  },
  {
    id: 'h23',
    level: 'HARD',
    type: QUESTION_TYPES.WHO_SAID_IT,
    category: '¿Quién lo dijo?',
    question: '¿Quién fue el primer mártir cristiano que, al ser apedreado, oró diciendo: "Señor, no les tomes en cuenta este pecado"?',
    options: ['Santiago', 'Esteban', 'Felipe', 'Policarpo'],
    correctAnswer: 1,
    verse: 'Hechos 7:59-60',
    explanation: 'Esteban murió lleno del Espíritu Santo viendo los cielos abiertos y a Jesús a la diestra de Dios.'
  },
  {
    id: 'h24',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Genealogía de Jesús',
    question: '¿Cuántas mujeres son mencionadas explícitamente en la genealogía de Jesús en el capítulo 1 del Evangelio de Mateo?',
    options: ['2 mujeres', '3 mujeres', '5 mujeres (Tamar, Rahab, Rut, Betsabé/la de Urías, y María)', '7 mujeres'],
    correctAnswer: 2,
    verse: 'Mateo 1:1-16',
    explanation: 'Mateo incluye de forma extraordinaria por la gracia a Tamar, Rahab, Rut, la mujer de Urías y María.'
  },
  {
    id: 'h25',
    level: 'HARD',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina la Revelación',
    question: '¿Qué pasaje de Apocalipsis es? 🚪 ✊ ❤️ 🍽️ ("He aquí, yo estoy a la puerta y llamo...")',
    options: ['Apocalipsis 3:20 a Laodicea', 'Apocalipsis 22:20', 'Apocalipsis 1:8', 'Apocalipsis 21:1'],
    correctAnswer: 0,
    verse: 'Apocalipsis 3:20',
    explanation: '"He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo."'
  }
];

// Función para barajar aleatoriamente un array (Fisher-Yates Shuffle)
export function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
