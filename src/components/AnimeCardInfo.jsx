import React from 'react';
import AnimeInfoRow from './AnimeInfoRow';
import '../styles/css/AnimeCardInfo.css';

const AnimeCardInfo = ({anime}) => {
    const rowsTitles = [['Тип', 'type'], ['Эпизоды', 'episodes'],['Статус', 'status'], ['Жанр', 'genres'], ['Первоисточник', 'source'], ['Сезон', 'season'], ['Выпуск', 'aired'],
     ['Студия', 'studios'], ['Возрастные ограничения'], ['Рейтинг','rating'], ['Длительность', 'duration']]

    return (
       <div className='anime-info'>
            {rowsTitles.map(item =>
                <AnimeInfoRow title={item[0]} value={anime[item[1]]} key={item[0]}/>
            )}

       </div>
    );
}

export default AnimeCardInfo;