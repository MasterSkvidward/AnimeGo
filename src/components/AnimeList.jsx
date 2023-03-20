import React from 'react';
import AnimeItem from './AnimeItem';
import Loader from './UI/loader/Loader';
import '../styles/css/AnimeList.css';

const AnimeList = ({animes, animesAreLoading}) => {
    return (
       <div className='anime-list'>   
            {
            animes.map(anime =>
                <AnimeItem
                    id={anime.mal_id}
                    img={anime.images.jpg['image_url']}
                    score={anime.score}
                    title={anime.title}
                    synopsis={anime.synopsis}
                    genres={anime.genres}
                    year={anime.year}
                    type={anime.type}
                    key={anime.mal_id + Math.random()}
                />
            )
            }
            
       </div>
    );
}

export default AnimeList;