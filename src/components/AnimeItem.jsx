import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/AnimeItem.css';
import { getAnimeScore, getShortenedString } from '../utils/utils';
import AnimeImage from './UI/AnimeImage/AnimeImage';

const AnimeItem = ({id, img, score, title, synopsis, genres, year, type}) => {
    return (
       <div className='anime'>
            <AnimeImage id={id} img={img} score={score} width={150} height={210}/>
            <div className='anime__body body-anime'>
                <Link to={`/anime/${id}`}><h1 className='body-anime__title'>{title}</h1></Link>
                <ul className='body-anime__links'>
                    <li><Link>{type}</Link></li><span>/</span>
                    <li><Link>{year? year : '?'}</Link></li><span>/</span>
                    {genres.map(genre => 
                        <li key={genre['mal_id']}><Link to=''>{genre.name.trim()},</Link></li>
                    )}
                </ul>
                <div className='body-anime__description'>{getShortenedString(synopsis, 400)}</div>
            </div>
           
       </div>
    );
}

export default AnimeItem;