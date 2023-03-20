export const getShortenedString = (string, numberOfLetters) => {
    if (!string) return '';
    return (string.length > numberOfLetters)
        ? string.substr(0, numberOfLetters) + '...'
        : string;
}

export const getAnimeScore = (score) => {
    if (!score) return '???'
    return score.toFixed(1);
}

export const getCurrentYear = () => {
    return new Date().getFullYear();
}

export const getValues = (title, value) => {
    if (value === null || value === undefined) return ['?']
    let result= ''

    if (title === 'Жанр' || title === 'Студия'){
        if (value.length === 1) result = [value[0].name];
        else {
            let tmpValue = value.map(item=> item.name);
            result = tmpValue;
        }
    } else if (title === 'Выпуск') {
        result = [value['from'].slice(0, 10)];
    } else {
        result = [value];
    }
    
    return result.length ? result : ['?'];
}

export const getCurrentSeasonName = () => {
    const currentMonth = new Date().getMonth();
    let currentSeason = 'Зимнего';
    if (currentMonth < 3 || currentMonth === 11) currentSeason = 'зимнего';
    else if (currentMonth < 6) currentSeason = 'весеннего';
    else if (currentMonth < 9) currentSeason = 'летнего';
    else if (currentMonth < 11) currentSeason = 'осеннего';
    
    return currentSeason;
}