const introCardSwitch = (item, language) => {
  let card = {
    name: item.name,
    desc: item.desc,
  };
  switch (language) {
    case 'ru':
      card.name = item.nameRU;
      card.desc = item.descRU;
      return card;
    case 'es':
      card.name = item.nameES;
      card.desc = item.descES;
      return card;
    case 'fr':
      card.name = item.nameFR;
      card.desc = item.descFR;
      return card;
    case 'it':
      card.name = item.nameIT;
      card.desc = item.descIT;
      return card;
  }
  return card;
};

const ghostCardSwitch = (item, language) => {
  let card = {
    name: item.name,
    desc: item.desc,
    strength: item.strength,
    weakness: item.weakness,
    evidence: item.evidence,
  };
  switch (language) {
    case 'ru':
      card.name = item.nameRU;
      card.desc = item.descRU;
      card.strength = item.strengthRU;
      card.weakness = item.weaknessRU;
      card.evidence = item.evidence;
      return card;
    case 'es':
      card.name = item.nameES;
      card.desc = item.descES;
      card.strength = item.strengthES;
      card.weakness = item.weaknessES;
      card.evidence = item.evidence;
      return card;
    case 'fr':
      card.name = item.nameFR;
      card.desc = item.descFR;
      card.strength = item.strengthFR;
      card.weakness = item.weaknessFR;
      card.evidence = item.evidence;
      return card;
    case 'it':
      card.name = item.nameIT;
      card.desc = item.descIT;
      card.strength = item.strengthIT;
      card.weakness = item.weaknessIT;
      card.evidence = item.evidence;
      return card;
  }
  return card;
};

const toolCardSwitch = (item, language) => {
  let card = {
    name: item.name,
    desc: item.desc,
  };
  switch (language) {
    case 'ru':
      card.name = item.nameRU;
      card.desc = item.descRU;
      return card;
    case 'es':
      card.name = item.nameES;
      card.desc = item.descES;
      return card;
    case 'fr':
      card.name = item.nameFR;
      card.desc = item.descFR;
      return card;
    case 'it':
      card.name = item.nameIT;
      card.desc = item.descIT;
      return card;
  }
  return card;
};

const labelSwitch = (language) => {
  switch (language) {
    case 'ru':
      return labelsRU;
    case 'es':
      return labelsES;
    case 'fr':
      return labelsFR;
    case 'it':
      return labelsIT;
    default:
      return labelsEN;
  }
};

const labelsEN = {
  introduction: 'Introduction',
  ghosts: 'Ghosts',
  tools: 'Tools',
  evidence: 'Evidence',
  noEvidence: 'No Evidence',
  emf5: 'EMF Level 5',
  spiritBox: 'Spirit Box',
  fingerprints: 'Fingerprints',
  ghostOrb: 'Ghost Orb',
  ghostWriting: 'Ghost Writing',
  freezingTemp: 'Freezing Temperatures',
  evidenceAbove:
    'Using the evidence above, I have discovered that the Ghost type is:',
  notYedDiscovered: 'Not Yet Discovered',
  evidenceRemaining: 'Possible Evidence Remaining',
  all: 'All',
  reset: 'Reset',
  timer: 'Timer',
  timerFinished: 'The timer has finished, the ghost may start haunting',
  resetTimer: 'Tap the timer to reset and toggle the time remaining',
  start: 'Start',
  pause: 'Pause',
  investigationDifficultyToTime:
    'Each invesitgation difficulty has a different amount of time before the ghost can start hunting:',
  amateur: 'Amateur',
  intermediate: 'Intermediate',
  professional: 'Professional',
  resetTimerWhenYouLeave: 'Reset the timer when you leave the van!',
  uniqueStrengths: 'Unique Strengths: ',
  uniqueWeaknesses: 'Unique Weaknesses: ',
  settings: 'Settings',
  spirit: 'Spirit',
  wraith: 'Wraith',
  phantom: 'Phantom',
  poltergeist: 'Poltergeist',
  banshee: 'Banshee',
  jinn: 'Jinn',
  mare: 'Mare',
  revenant: 'Revenant',
  shade: 'Shade',
  demon: 'Demon',
  yurei: 'Yurei',
  oni: 'Oni',
  review: 'Leave a review!',
  none: 'None',
};

const labelsRU = {
  introduction: 'Введение',
  ghosts: 'Призраки',
  tools: 'Инструменты',
  evidence: 'Улика',
  noEvidence: 'Не найдено',
  emf5: 'ЭМП ур. 5',
  spiritBox: 'Радиоприёмник',
  fingerprints: 'Отпечатки',
  ghostOrb: 'Призрачный огонёк',
  ghostWriting: 'Записи в блокноте',
  freezingTemp: 'Минусовая температура',
  evidenceAbove:
    'На основе вышеперечисленных доказательств, я заключаю, что это:',
  notYedDiscovered: 'Не найдено',
  evidenceRemaining: 'Возможные оставшиеся улики',
  all: 'Все',
  reset: 'Сброс',
  timer: 'Таймер',
  timerFinished: 'Время истекло, призрак может начать охоту',
  resetTimer: 'Нажмите для сброса и настройки времени',
  start: 'Старт',
  pause: 'Пауза',
  investigationDifficultyToTime:
    'Каждый уровень сложности имеет разное количество времени, прежде чем призрак начнёт охоту',
  amateur: 'Любитель',
  intermediate: 'Средний',
  professional: 'Профессионал',
  resetTimerWhenYouLeave: 'Сбросьте таймер на выходе из фургона!',
  uniqueStrengths: 'Уникальные сильные стороны: ',
  uniqueWeaknesses: 'Уникальные недостатки: ',
  settings: 'Настройки',
  spirit: 'Дух',
  wraith: 'Мираж',
  phantom: 'Фантом',
  poltergeist: 'Полтергейст',
  banshee: 'Банши',
  jinn: 'Джинн',
  mare: 'Мара',
  revenant: 'Ревенант',
  shade: 'Тень',
  demon: 'Демон',
  yurei: 'Юрэй',
  oni: 'Óни',
  review: 'Оставьте отзыв!',
  none: 'Нет',
};

const labelsES = {
  introduction: 'Introducción',
  ghosts: 'Fantasmas',
  tools: 'Herramientas',
  evidence: 'Pruebas',
  noEvidence: 'Sin pruebas',
  emf5: 'EMF Nivel 5',
  spiritBox: 'Spirit Box',
  fingerprints: 'Huellas dactilares',
  ghostOrb: 'Orbes',
  ghostWriting: 'Escritura fantasma',
  freezingTemp: 'Temperaturas bajo cero',
  evidenceAbove:
    'Usando las pruebas encontradas, he descubierto que el tipo de Fantasma es:',
  notYedDiscovered: 'Aún no descubierto',
  evidenceRemaining: 'Posibles pruebas restantes',
  all: 'Todas',
  reset: 'Reset',
  timer: 'Temporizador',
  timerFinished:
    'El temporizador ha terminado, el fantasma puede empezar a acechar',
  resetTimer:
    'Toca el temporizador para resetear y para cambiar el tiempo restante.',
  start: 'Empezar',
  pause: 'Pausar',
  investigationDifficultyToTime:
    'Cada nivel de dificultad tiene un tiempo determinado antes de que el Fantasma empiece a atacar.',
  amateur: 'Amateur',
  intermediate: 'Intermedio',
  professional: 'Profesional',
  resetTimerWhenYouLeave: '¡Reajusta el temporizador cuando salgas del camión!',
  uniqueStrengths: 'Puntos fuertes: ',
  uniqueWeaknesses: 'Puntos débiles: ',
  settings: 'Ajustes',
  spirit: 'Espíritu',
  wraith: 'Espectro',
  phantom: 'Ente',
  poltergeist: 'Poltergeist',
  banshee: 'Banshee',
  jinn: 'Jinn',
  mare: 'Pesadilla',
  revenant: 'Revenant',
  shade: 'Sombra',
  demon: 'Demonio',
  yurei: 'Yurei',
  oni: 'Oni',
  review: '¡Deja una reseña!',
  none: 'Ninguna',
};

const labelsFR = {
  introduction: 'Introduction',
  ghosts: 'Fantômes',
  tools: 'Outils',
  evidence: 'Évidences',
  noEvidence: 'Aucune évidence',
  emf5: 'EMF niveau 5',
  spiritBox: 'Spirit Box',
  fingerprints: 'Empreintes',
  ghostOrb: 'Orbe fantomatique',
  ghostWriting: 'Écriture du fantôme',
  freezingTemp: 'Température glaciale',
  evidenceAbove:
    'En utlisant toutes les évidences, je peux en déduire que le type du fantôme est:',
  notYedDiscovered: 'Pas encore découvert',
  evidenceRemaining: 'Évidences possibles restantes',
  all: 'Tout',
  reset: 'Redémarrer',
  timer: 'Temps',
  timerFinished: `Le temps est fini, l'esprit devrai commencer à chasser`,
  resetTimer: 'Clique sur le temps pour redémarrer',
  start: 'Lancer',
  pause: 'Pause',
  investigationDifficultyToTime: `Chaque difficulté d'investigation a un différent temps  avant que l'esprit attaque:`,
  amateur: 'Amateur',
  intermediate: 'Intermédiaire',
  professional: 'Professionnel',
  resetTimerWhenYouLeave: 'Redémarre le temps quand tu quitte le van!',
  uniqueStrengths: 'Points forts: ',
  uniqueWeaknesses: 'Points faibles: ',
  settings: 'Paramètres',
  spirit: 'Esprit',
  wraith: 'Spectre',
  phantom: 'Fantôme',
  poltergeist: 'Poltergeist',
  banshee: 'Banshee',
  jinn: 'Djinn',
  mare: 'Cauchemar',
  revenant: 'Revenant',
  shade: 'Ombre',
  demon: 'Démon',
  yurei: 'Yurei',
  oni: 'Oni',
  review: 'Laisse un commentaire!',
  none: 'Aucun',
};

const labelsIT = {
  introduction: 'Introduzione',
  ghosts: 'Fantasmi',
  tools: 'Utensili',
  evidence: 'Prove',
  noEvidence: 'Nessuna Prova',
  emf5: 'EMF Livello 5',
  spiritBox: 'Spirit Box',
  fingerprints: 'Impronte Digitali',
  ghostOrb: 'Sfera di Luce',
  ghostWriting: 'Libro Spiritico',
  freezingTemp: 'Temperatura di Congelamento',
  evidenceAbove: 'Tipo di Fantasma:',
  notYedDiscovered: 'Non Ancora Scoperto',
  evidenceRemaining: 'Possibili Prove Rimanenti',
  all: 'Tutti',
  reset: 'Reset',
  timer: 'Timer',
  timerFinished: `Il timer è finito, il fantasma può iniziare la caccia`,
  resetTimer:
    'Toccare il timer per reimpostare e attivare o disattivare il tempo rimanente',
  start: 'Start',
  pause: 'Pausa',
  investigationDifficultyToTime: `Ogni livello di difficoltà ha un diverso periodo di tempo prima che il Fantasma inizi a cacciare:`,
  amateur: 'Dilettante',
  intermediate: 'Intermedio',
  professional: 'Professionale',
  resetTimerWhenYouLeave: 'Reimposta il timer quando lasci il furgone!',
  uniqueStrengths: 'Punti di Forza: ',
  uniqueWeaknesses: 'Punti Deboli: ',
  settings: 'Impostazioni',
  spirit: 'Spirito',
  wraith: 'Spettro',
  phantom: 'Phantom',
  poltergeist: 'Poltergeist',
  banshee: 'Banshee',
  jinn: 'Jinn',
  mare: 'Mare',
  revenant: 'Revenant',
  shade: 'Ombra',
  demon: 'Demone',
  yurei: 'Yurei',
  oni: 'Oni',
  review: 'Lascia una recensione!',
  none: 'Nessuno',
};

const LANGUAGES = [
  {key: 'en', name: 'English'},
  {key: 'ru', name: 'Russian'},
  {key: 'es', name: 'Spanish'},
  {key: 'fr', name: 'French'},
  {key: 'it', name: 'Italian'},
];

export {
  introCardSwitch,
  ghostCardSwitch,
  toolCardSwitch,
  labelSwitch,
  LANGUAGES,
};
