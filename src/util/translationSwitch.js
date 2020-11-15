const introCardSwitch = (item, language) => {
    let card = {
        name: item.name,
        desc: item.desc,
    }
    switch (language) {
        case ('ru'):
            card.name = item.nameRU;
            card.desc = item.descRU;
            return card;
    }
    return card;

}

const ghostCardSwitch = (item, language) => {
    let card = {
        name: item.name,
        desc: item.desc,
        strength: item.strength,
        weakness: item.weakness,
        evidence: item.evidence,
    }
    switch (language) {
        case ('ru'):
            card.name = item.nameRU;
            card.desc = item.descRU;
            card.strength = item.strengthRU;
            card.weakness = item.weaknessRU;
            card.evidence = item.evidence;
            return card;
    }
    return card;

}

const toolCardSwitch = (item, language) => {
    let card = {
        name: item.name,
        desc: item.desc,
    }
    switch (language) {
        case ('ru'):
            card.name = item.nameRU;
            card.desc = item.descRU;
            return card;
    }
    return card;
}

const labelSwitch = (language) => {
    switch (language) {
        case ('ru'):
            return labelsRU;
        default:
            return labelsEN;
    }
}

const labelsRU = {
    introduction: 'Введение',
    ghosts: 'Призраки',
    tools: 'Инструменты',
    evidence: 'Улики',
    noEvidence: 'Не найдено',
    emf5: 'ЭМП ур. 5',
    spiritBox: 'Радиоприёмник',
    fingerprints: 'Отпечатки',
    ghostOrb: 'Призрачный огонёк',
    ghostWriting: 'Записи в блокноте',
    freezingTemp: 'Минусовая температура',
    evidenceAbove: 'На основе вышеперечисленных доказательств, я заключаю, что это:',
    notYedDiscovered: 'Не найдено',
    evidenceRemaining: 'Возможные оставшиеся улики',
    all: 'Все',
    reset: 'Сброс',
    timer: 'Таймер',
    resetTimer: 'Нажмите для сброса и настройки времени',
    start: 'Старт',
    pause: 'Пауза',
    investigationDifficultyToTime: 'Каждый уровень сложности имеет разное количество времени, прежде чем призрак начнёт охоту',
    amateur: 'Любитель',
    intermediate: 'Средний',
    professional: 'Профессионал',
    resetTimerWhenYouLeave: 'Сбросьте таймер на выходе из фургона!',
    uniqueStrengths: 'Уникальные сильные стороны: ',
    uniqueWeaknesses: 'Уникальные недостатки: '
}

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
    evidenceAbove: 'Using the evidence above, I have discovered that the Ghost type is:',
    notYedDiscovered: 'Not Yet Discovered',
    evidenceRemaining: 'Possible Evidence Remaining',
    all: 'All',
    reset: 'Reset',
    timer: 'Timer',
    resetTimer: 'Tap the timer to reset and toggle the time remaining',
    start: 'Start',
    pause: 'Pause',
    investigationDifficultyToTime: 'Each invesitgation difficulty has a different amount of time before the ghost can start hunting:',
    amateur: 'Amateur',
    intermediate: 'Intermediate',
    professional: 'Professional',
    resetTimerWhenYouLeave: 'Reset the timer when you leave the van!',
    uniqueStrengths: 'Unique Strengths: ',
    uniqueWeaknesses: 'Unique Weaknesses: '
}

export { introCardSwitch, ghostCardSwitch, toolCardSwitch, labelSwitch };