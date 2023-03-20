import React, { useEffect } from 'react';
import cl from './AnimeSearch.module.css';
import AnimeSearchItem from './AnimeSearchItem';
import { useState } from 'react';
import AnimeService from '../../../API/AnimeService';
import { useFetching } from '../../../hooks/useFetching';
import useDebounce from '../../../hooks/useDebounce';
import Loader from '../loader/Loader'
import { Link } from 'react-router-dom';


const AnimeSearch = ({value, isVisible, setIsVisible}) => {
    const [animesBySearch, setAnimesBySearch] = useState([]);
    const [totalAnimeCount, setTotalAnimeCount] = useState(0);
    const [animeAreLoading, setAnimeAreLoading] = useState(false);
    // const [animeSearchLimit, setAnimeSearchLimit] = useState(3)
    const debouncedSearch = useDebounce(searchAnime, 500);

    async function searchAnime(value) {
        setAnimeAreLoading(true);
        const [response, totalCount]= await AnimeService.getAnimeByTitle(value);
        setAnimesBySearch(response);
        setTotalAnimeCount(totalCount);
        setAnimeAreLoading(false);
    }


    useEffect(() => {
        debouncedSearch(value);
    }, [value])
    
    return (
       <div className={isVisible? cl.search : cl.hidden}>
            <div id={'search'}  className={cl.search__container}>
                {animeAreLoading 
                    ? <div style={{marginTop: 20}}><Loader/></div>
                    :   (!totalAnimeCount && !animeAreLoading)
                        ? <div className={cl.emptyDescription}>Сожалеем, но ничего не найдено.</div>
                        : (totalAnimeCount && value)
                            ?   <div>
                                    <div className={cl.search__head}>
                                        <h5 className={cl.search__title}>Аниме</h5>
                                            <span className={cl.search__number}>{totalAnimeCount}</span>
                                    </div>
                                    <div className={cl.search__body}>
                                        <div className={cl.seatch__item}>
                                        {animesBySearch.map((anime, index) =>
                                            <AnimeSearchItem
                                                anime={anime}
                                                index={index}
                                                setIsVisible={setIsVisible}
                                                key={anime.mal_id}
                                            />
                                        )}
                                        </div>
                                    </div>
                                </div>
                            : <></>   
                }
            </div>  
       </div>
    );
}

export default AnimeSearch;