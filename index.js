function saturdayFun(rest =  'roller-skate'){

    return `This Saturday, I want to ${rest}!`
}

function mondayWork(toDo = 'go to the office'){

    return `This Monday, I will ${toDo}.`
}

function wrapAdjective(cym = '*'){

    return function inner(txt = 'special'){

        return `You are ${cym}${txt}${cym}!`
    }
}
wrapAdjective('||')('a dedicated programmer')