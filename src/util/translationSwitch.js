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

export { introCardSwitch, ghostCardSwitch, toolCardSwitch };