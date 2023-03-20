import React, { useEffect, useState } from 'react';
import cl from './Carousel.module.css';
import AnimeService from '../../../API/AnimeService';
import AnimeRow from '../AnimeRow/AnimeRow';

const Carousel = ({move, setMove}) => {
    const [animeRow, setAnimeRow] = useState([]);
    const page = 1;
    const limit = 20;
    const orderBy = 'score';


    async function fetchAnimeRow() {
        const response = await AnimeService.getSeasonNow(limit, orderBy);
        setAnimeRow(response);
    }

    useEffect(() => {
        fetchAnimeRow()
    }, [])

    return (
       <div className={cl.carousel}>
           <AnimeRow animeRow={animeRow} move={move} setMove={setMove}/>
       </div>
    );
}

export default Carousel;