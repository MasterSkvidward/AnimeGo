import React from 'react';
import { Link } from 'react-router-dom';
import cl from './AnimeSearchItem.module.css';
import { getShortenedString, getCurrentYear } from '../../../utils/utils';

const AnimeSearchItem = ({anime, index, setIsVisible}) => {
    const handlerClick = (e) => {
        setIsVisible(false);
    }

    return (
       <div className={cl.anime} title={index} onClick={handlerClick}>
            <div className={cl.anime__img}>
            <Link to={`/anime/${anime.mal_id}`}><img src={anime.images.jpg['image_url']} alt={anime.title} data-link='anime-item' /></Link>
            </div>
            <div className={cl.anime__body}>
                <h5 className={cl.body__title_ru}><Link to={`/anime/${anime.mal_id}`} data-link='anime-item'>{getShortenedString(anime.title, 23)}</Link></h5>
                <div className={cl.body__title_en}>{getShortenedString(anime['title_english'], 50)}</div>
                <div className={cl.body__info}>
                    <ul className={cl.body__links}>
                        <li className={cl.body__link}><Link to=''>{anime.year ? anime.year : getCurrentYear()}</Link></li>
                        <span>/</span>
                        <li className={cl.body__link}><Link to=''>{anime.type}</Link></li>
                    </ul>
                </div>
            </div>
       </div>
    );
}

export default AnimeSearchItem;