// Banco de Preguntas Bíblicas para WISE SHEEP
// Categorizadas por Niveles (Fácil, Intermedio, Avanzado) y Modalidades

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
  // ==========================================
  // NIVEL 1: CORDERITO (FÁCIL / PRINCIPIANTE)
  // ==========================================
  {
    id: 'q1',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Historias Bíblicas',
    question: '¿Cuántos días y cuántas noches llovió durante el diluvio en el arca de Noé?',
    options: ['7 días y 7 noches', '40 días y 40 noches', '100 días y 100 noches', '12 días y 12 noches'],
    correctAnswer: 1, // 40 días y 40 noches
    verse: 'Génesis 7:12',
    explanation: 'Y hubo lluvia sobre la tierra cuarenta días y cuarenta noches.'
  },
  {
    id: 'q2',
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
    id: 'q3',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Nuevo Testamento',
    question: '¿En qué ciudad nació Jesús?',
    options: ['Nazaret', 'Jerusalén', 'Belén', 'Capernaúm'],
    correctAnswer: 2,
    verse: 'Miqueas 5:2 / Lucas 2:4-7',
    explanation: 'Jesús nació en Belén de Judea, conforme a las profecías del Antiguo Testamento.'
  },
  {
    id: 'q4',
    level: 'EASY',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'Personajes',
    question: '¿Verdadero o Falso? Jonás huyó hacia Tarsis en lugar de ir a predicar a Nínive.',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Jonás 1:3',
    explanation: 'Jonás se levantó para huir de la presencia de Jehová a Tarsis, y descendió a Jope.'
  },
  {
    id: 'q5',
    level: 'EASY',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina el Personaje',
    question: '¿Qué historia o personaje representan estos emojis? 🍎 🐍 🌳 🚫',
    options: ['Noé y el diluvio', 'Adán y Eva en el Edén', 'Moisés y la zarza', 'Sansón y Dalila'],
    correctAnswer: 1,
    verse: 'Génesis 3:1-6',
    explanation: 'Representa la tentación en el huerto del Edén con Adán, Eva y el árbol del conocimiento.'
  },
  {
    id: 'q6',
    level: 'EASY',
    type: QUESTION_TYPES.FILL_VERSE,
    category: 'Versículos Memorables',
    question: 'Completa: "El Señor es mi pastor, nada me _________"',
    options: ['faltará', 'sobrará', 'asustará', 'apartará'],
    correctAnswer: 0,
    verse: 'Salmos 23:1',
    explanation: 'Salmos 23:1: "Jehová es mi pastor; nada me faltará."'
  },
  {
    id: 'q7',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Nuevo Testamento',
    question: '¿Cuántos discípulos / apóstoles principales eligió Jesús?',
    options: ['7', '10', '12', '14'],
    correctAnswer: 2,
    verse: 'Mateo 10:1-4',
    explanation: 'Jesús llamó a sus doce discípulos y les dio autoridad sobre los espíritus inmundos.'
  },
  {
    id: 'q8',
    level: 'EASY',
    type: QUESTION_TYPES.WHO_SAID_IT,
    category: '¿Quién lo dijo?',
    question: '¿Quién dijo: "¿Acaso soy yo el que cuida a mi hermano?"',
    options: ['Abel', 'Caín', 'Esaú', 'Jacob'],
    correctAnswer: 1,
    verse: 'Génesis 4:9',
    explanation: 'Caín respondió esto a Dios cuando le preguntó dónde estaba su hermano Abel.'
  },
  {
    id: 'q9',
    level: 'EASY',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Milagros',
    question: '¿Qué mar abrió Dios a través de Moisés para que pasara el pueblo de Israel?',
    options: ['El Mar Muerto', 'El Mar de Galilea', 'El Mar Rojo', 'El Mar Mediterráneo'],
    correctAnswer: 2,
    verse: 'Éxodo 14:21',
    explanation: 'Moisés extendió su mano sobre el mar, e hizo Jehová que el mar se retirase.'
  },
  {
    id: 'q10',
    level: 'EASY',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina el Personaje',
    question: '¿Qué personaje representan estos emojis? 🦁 🕳️ 🙏 🛡️',
    options: ['Elías', 'Daniel en el foso de leones', 'Sansón', 'David'],
    correctAnswer: 1,
    verse: 'Daniel 6:16-22',
    explanation: 'Daniel fue arrojado al foso de los leones y Dios envió su ángel a cerrar la boca de las fieras.'
  },

  // ==========================================
  // NIVEL 2: DISCÍPULO (INTERMEDIO)
  // ==========================================
  {
    id: 'q11',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Jesús y sus Milagros',
    question: '¿Cuál fue el primer milagro público registrado de Jesús?',
    options: [
      'Multiplicar los panes y los peces',
      'Caminar sobre las aguas',
      'Convertir el agua en vino en Caná de Galilea',
      'Sanar a un ciego de nacimiento'
    ],
    correctAnswer: 2,
    verse: 'Juan 2:1-11',
    explanation: 'Este principio de señales hizo Jesús en Caná de Galilea, y manifestó su gloria.'
  },
  {
    id: 'q12',
    level: 'MEDIUM',
    type: QUESTION_TYPES.WHO_SAID_IT,
    category: '¿Quién lo dijo?',
    question: '¿Quién declaró con valentía: "Yo y mi casa serviremos a Jehová"?',
    options: ['Moisés', 'Josué', 'Gedeón', 'Samuel'],
    correctAnswer: 1,
    verse: 'Josué 24:15',
    explanation: 'Josué lo declaró al pueblo de Israel en Siquem al renovar el pacto con Dios.'
  },
  {
    id: 'q13',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Epístolas',
    question: '¿Cuál de los siguientes NO es parte del Fruto del Espíritu en Gálatas 5:22-23?',
    options: ['Amor y Gozo', 'Paciencia y Benignidad', 'Orgullo y Fama', 'Paz y Mansedumbre'],
    correctAnswer: 2,
    verse: 'Gálatas 5:22-23',
    explanation: 'El fruto del Espíritu es: amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza.'
  },
  {
    id: 'q14',
    level: 'MEDIUM',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'Hechos de los Apóstoles',
    question: '¿Verdadero o Falso? Pablo tuvo su encuentro con Jesús camino a Damasco cuando una gran luz lo rodeó.',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Hechos 9:3-6',
    explanation: 'Yendo por el camino, aconteció que al llegar cerca de Damasco, súbitamente le rodeó un resplandor de luz del cielo.'
  },
  {
    id: 'q15',
    level: 'MEDIUM',
    type: QUESTION_TYPES.FILL_VERSE,
    category: 'Versículos Memorables',
    question: 'Filipenses 4:13: "Todo lo puedo en Cristo que me ____________"',
    options: ['fortalece', 'sustenta', 'guía', 'ilumina'],
    correctAnswer: 0,
    verse: 'Filipenses 4:13',
    explanation: '"Todo lo puedo en Cristo que me fortalece."'
  },
  {
    id: 'q16',
    level: 'MEDIUM',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina el Personaje',
    question: '¿Quién es este personaje? 👸 👑 📜 🇮🇱 🍽️ (Arriesgó su vida diciendo: "Si perezco, que perezca")',
    options: ['Rut', 'Ester', 'Débora', 'María Magdalena'],
    correctAnswer: 1,
    verse: 'Ester 4:16',
    explanation: 'La reina Ester intercedió ante el rey Asuero para salvar a todo el pueblo judío del complot de Amán.'
  },
  {
    id: 'q17',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Antiguo Testamento',
    question: '¿A qué profeta se le apareció Dios en un silbo apacible y delicado tras huir a una cueva?',
    options: ['Isaías', 'Jeremías', 'Elías', 'Ezequiel'],
    correctAnswer: 2,
    verse: '1 Reyes 19:12',
    explanation: 'Dios no estaba en el viento fuerte, ni en el terremoto, ni en el fuego, sino en un silbo apacible y delicado.'
  },
  {
    id: 'q18',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Parábolas',
    question: 'En la parábola del Hijo Pródigo, ¿qué animal mandó sacrificar el padre para celebrar el regreso de su hijo?',
    options: ['Un cordero sin mancha', 'El becerro gordo', 'Dos palominos', 'Un cabrito'],
    correctAnswer: 1,
    verse: 'Lucas 15:23',
    explanation: '"Y traed el becerro gordo y matadlo, y comamos y hagamos fiesta."'
  },
  {
    id: 'q19',
    level: 'MEDIUM',
    type: QUESTION_TYPES.WHO_SAID_IT,
    category: '¿Quién lo dijo?',
    question: '¿Quién clamó a Jesús en voz alta: "¡Hijo de David, ten misericordia de mí!", a pesar de que la multitud le mandaba callar?',
    options: ['Zaqueo', 'El ciego Bartimeo', 'Nicodemo', 'Simón el leproso'],
    correctAnswer: 1,
    verse: 'Marcos 10:47-48',
    explanation: 'El ciego Bartimeo, hijo de Timeo, gritó con fe a Jesús al salir de Jericó.'
  },
  {
    id: 'q20',
    level: 'MEDIUM',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Nuevo Testamento',
    question: '¿En qué día de fiesta judía descendió el Espíritu Santo sobre los discípulos reunidos en el aposento alto?',
    options: ['La Pascua', 'Pentecostés', 'Tabernáculos', 'Purim'],
    correctAnswer: 1,
    verse: 'Hechos 2:1-4',
    explanation: 'Cuando llegó el día de Pentecostés, estaban todos unánimes juntos y fueron llenos del Espíritu Santo.'
  },

  // ==========================================
  // NIVEL 3: MAESTRO / TEÓLOGO (DIFÍCIL / EXPERTO)
  // ==========================================
  {
    id: 'q21',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Cronología y Datos Bíblicos',
    question: '¿Quién fue el hombre más longevo según la Biblia y cuántos años vivió?',
    options: ['Noé (950 años)', 'Matusalén (969 años)', 'Adán (930 años)', 'Jared (962 años)'],
    correctAnswer: 1,
    verse: 'Génesis 5:27',
    explanation: 'Fueron, pues, todos los días de Matusalén novecientos sesenta y nueve años; y murió.'
  },
  {
    id: 'q22',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Reyes y Profetas',
    question: '¿A qué rey de Judá Dios le añadió 15 años de vida después de clamar y llorar ante Él con el profeta Isaías?',
    options: ['Josías', 'Ezequías', 'Uzías', 'Asa'],
    correctAnswer: 1,
    verse: '2 Reyes 20:5-6 / Isaías 38:5',
    explanation: 'Dios le dijo a Ezequías: "He oído tu oración, y visto tus lágrimas; he aquí que yo añado a tus días quince años."'
  },
  {
    id: 'q23',
    level: 'HARD',
    type: QUESTION_TYPES.TRUE_FALSE,
    category: 'Cartas y Epístolas',
    question: '¿Verdadero o Falso? El libro de Filemón es una carta de Pablo intercediendo por un esclavo fugitivo llamado Onésimo.',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    verse: 'Filemón 1:10-12',
    explanation: 'Pablo le ruega a Filemón por Onésimo, a quien engendró en sus prisiones, para que lo reciba no ya como esclavo, sino como hermano amado.'
  },
  {
    id: 'q24',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Apocalipsis y Profecía',
    question: '¿Cuál de las siguientes NO es una de las 7 iglesias mencionadas en los capítulos 2 y 3 de Apocalipsis?',
    options: ['Éfeso y Esmirna', 'Pérgamo y Tiatira', 'Antioquía y Roma', 'Sardis, Filadelfia y Laodicea'],
    correctAnswer: 2,
    verse: 'Apocalipsis 1:11',
    explanation: 'Las 7 iglesias de Asia son: Éfeso, Esmirna, Pérgamo, Tiatira, Sardis, Filadelfia y Laodicea.'
  },
  {
    id: 'q25',
    level: 'HARD',
    type: QUESTION_TYPES.WHO_SAID_IT,
    category: '¿Quién lo dijo?',
    question: '¿Quién profetizó en Hechos atándose sus propias manos y pies con el cinto de Pablo anunciando que sería apresado en Jerusalén?',
    options: ['Bernabé', 'Ágabo', 'Silas', 'Apolos'],
    correctAnswer: 1,
    verse: 'Hechos 21:10-11',
    explanation: 'El profeta Ágabo tomó el cinto de Pablo y atándose los pies y las manos, dijo: "Esto dice el Espíritu Santo: Así atarán los judíos en Jerusalén al varón de quien es este cinto".'
  },
  {
    id: 'q26',
    level: 'HARD',
    type: QUESTION_TYPES.FILL_VERSE,
    category: 'Versículos Clave',
    question: 'Miqueas 6:8: "¿Y qué pide Jehová de ti: solamente hacer justicia, y amar misericordia, y ____________ ante tu Dios?"',
    options: ['humillarte para andar', 'ofrendar con alegría', 'orar sin cesar', 'cantar salmos'],
    correctAnswer: 0,
    verse: 'Miqueas 6:8',
    explanation: '"Oh hombre, él te ha declarado lo que es bueno, y qué pide Jehová de ti: solamente hacer justicia, y amar misericordia, y humillarte para andar con tu Dios."'
  },
  {
    id: 'q27',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Tabernáculo y Sacerdocio',
    question: '¿De qué madera estaba construida el Arca del Pacto antes de ser recubierta de oro puro por dentro y por fuera?',
    options: ['Madera de Cedro del Líbano', 'Madera de Acacia', 'Madera de Olivo', 'Madera de Roble'],
    correctAnswer: 1,
    verse: 'Éxodo 25:10-11',
    explanation: 'Harán también un arca de madera de acacia, cuya longitud será de dos codos y medio, y su anchura de codo y medio.'
  },
  {
    id: 'q28',
    level: 'HARD',
    type: QUESTION_TYPES.EMOJI_GUESS,
    category: 'Adivina la Historia',
    question: '¿Qué historia bíblica representan estos emojis? 🏺 🎺 🍞 🪔 3️⃣0️⃣0️⃣ ⚔️',
    options: ['La conquista de Jericó', 'Gedeón y los 300 soldados', 'La victoria de Josafat', 'Sansón contra los filisteos'],
    correctAnswer: 1,
    verse: 'Jueces 7:16-22',
    explanation: 'Gedeón repartió los 300 hombres con trompetas en sus manos y cántaros vacíos con teas ardiendo dentro.'
  },
  {
    id: 'q29',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Genealogías y Evangelios',
    question: '¿Cuál de los cuatro evangelios comienza con la frase: "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios"?',
    options: ['Mateo', 'Marcos', 'Lucas', 'Juan'],
    correctAnswer: 3,
    verse: 'Juan 1:1',
    explanation: 'El Evangelio según San Juan presenta a Cristo como el Verbo eterno encarnado.'
  },
  {
    id: 'q30',
    level: 'HARD',
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    category: 'Sabiduría y Proverbios',
    question: '¿Qué libro de la Biblia termina con el célebre elogio acróstico a la "Mujer Virtuosa" (versículos 10 al 31)?',
    options: ['Cantar de los Cantares', 'Proverbios (capítulo 31)', 'Eclesiastés', 'Rut'],
    correctAnswer: 1,
    verse: 'Proverbios 31:10-31',
    explanation: 'Proverbios 31 culmina con las enseñanzas del rey Lemuel aprendidas de su madre acerca de la mujer virtuosa cuyo valor sobrepasa a las piedras preciosas.'
  }
];
