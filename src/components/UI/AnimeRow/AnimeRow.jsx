import React, { useEffect, useRef } from 'react';
import cl from './AnimeRow.module.css';
import { getShortenedString } from '../../../utils/utils';
import AnimeImage from '../AnimeImage/AnimeImage';
import { Link } from 'react-router-dom';


const AnimeRow = ({animeRow, move, setMove}) => {
    const row = useRef();
    let currentTranslate = 0;
    if (row.current) {
        currentTranslate = row.current.clientWidth + 25; 
    }
    

    function makeMove(move) {
        if (move === -1) {
            row.current.scrollLeft -= currentTranslate;
        } else if (move === 1) {
            row.current.scrollLeft += currentTranslate;
        }
        setMove(0);
    }

    useEffect(() => {
        makeMove(move);
    },[move])


    return (
       <div ref={row} className={cl.animeRow}>
            {animeRow.map(anime =>
                <div className={cl.animeRow__item} key={anime.mal_id}>
                    <AnimeImage id={anime.mal_id} img={anime.images.jpg['image_url']} score={anime.score} width={162} height={226}/>   
                    <Link className={cl.animeRow__title} to={`/anime/${anime.mal_id}`}>{anime.title}</Link>
                </div>
            )}  
       </div>
    );
}

export default AnimeRow;