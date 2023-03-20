import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import AnimeService from '../API/AnimeService';
import AnimeList from '../components/AnimeList';
import MySelect from '../components/UI/select/MySelect';
import Wrapper from '../components/Wrapper';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import '../styles/css/Anime.css'

const Anime = () => {
    const [animes, setAnimes] = useState([]); 

    const [sortType, setSortType] = useState('start_date');
    const [sortDirection, setSortDirection] = useState('desc');
 
    const [limit, setLimit] = useState(40);
    const [page, setPage] = useState(1);

    const lastAnime = useRef();
    const observer = useRef();

    const [fetchAnimes, animesAreLoading, animesError] = useFetching( async (sortType, sortDirection, limit, page) => {
        const response = await AnimeService.getAnimeOrderedBy(sortType, sortDirection, limit, page);
        setAnimes([...animes, ...response])
    })

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
 
    useEffect(() => {
        if (animesAreLoading) return;
        if (observer.current) observer.current.disconnect();
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && entries[0].time > 700) {
                setPage(page + 1);
            }
        }

        const options = {
            root: lastAnime,
            rootMargin: '0px 0px 100px 0px',
            threshold: 0,
          }

        observer.current = new IntersectionObserver(callback)
        observer.current.observe(lastAnime.current)
    
    }, [animesAreLoading])
    

    const sortCategories = [
        {value: 'start_date', name: 'Дате выхода'},
        {value: 'score', name: 'Рейтингу'},
        {value: 'title', name: 'Названию'},
    ]

    useEffect(() => {
        fetchAnimes(sortType, sortDirection, limit, page);
        
    }, [page, sortType])

    const sortAnimes = (sort) => {
        if (sortType === sort) return;

        setAnimes([]);
        setPage(1);
        if (sort === 'title') setSortDirection('asc');
        else setSortDirection('desc');
        setSortType(sort);
    }

    return (
        <Wrapper>
            <div className='anime__container'>
                <div className='anime-list'>
                    <div className='anime__posts'>
                        <h1 className='anime__title'>Список аниме</h1>
                        <p className='anime__description'>
                            Возможно, многие удивятся, узнав, что термин «аниме» родом вовсе не из Страны восходящего солнца, а из Англии. Ёмкое слово animation немного сократили и присвоили по-настоящему магическому искусству японской мультипликации. Аниме мультфильмы онлайн, в отличии от мультфильмов других стран, занимает другую нишу так как он предназначен в основном на подростковую и взрослую аудиторию. Именно эта многогранность обеспечила ей широчайшую востребованность. Для
                        </p>
                        <div className='sort-block'>
                            <span className='sort-block__label'>Сортировать по: </span>
                            <MySelect
                                sortType={sortType}
                                onChange={sortAnimes}
                                options={sortCategories}
                            />
                        </div>

                        {animes.length === 0 &&
                             <div style={{marginTop: 30}}><Loader/></div>
                        }
                       
                        <AnimeList
                            animesAreLoading={animesAreLoading}
                            animes={animes}
                        />

                    </div>
                    <div className='loader'>
                        {animesAreLoading && animes.length !== 0 &&
                            <Loader/>
                        }
                    </div>
                    

                    <div ref={lastAnime} className='lastVisible'></div>
                </div>
            </div>
        </Wrapper>     
    );
}

export default Anime;