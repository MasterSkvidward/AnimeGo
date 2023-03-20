import React from 'react';
import cl from './AnimeImage.module.css';
import { getAnimeScore } from '../../../utils/utils';
import { Link } from 'react-router-dom';

const AnimeImage = ({id, img, score, width=150, height=210}) => {
    return (
        <Link className={cl.img} to={`/anime/${id}`}>
            <img src={img} width={`${width}px`} height={`${height}px`} ></img>
            <div className={cl.rating}>
                <div className={cl.ratingNumber}>{getAnimeScore(score)}</div>
            </div>
        </Link>
    );
}

export default AnimeImage;