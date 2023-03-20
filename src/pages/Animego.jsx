import React, { useEffect, useState } from 'react';
import Wrapper from '../components/Wrapper';
import '../styles/css/Animego.css';
import Carousel from '../components/UI/Carousel/Carousel';
import MyLink from '../components/UI/link/MyLink';
import { getCurrentSeasonName } from '../utils/utils';
import { Link } from 'react-router-dom';
import AnimeList from '../components/AnimeList';
import { useFetching } from '../hooks/useFetching';
import AnimeService from '../API/AnimeService';

const Animego = () => {
    const [move, setMove] = useState(0); // -1 влево, 0 неподвижно, 1 вправо
    const [animes, setAnimes] = useState([]);

    const [fetchAnimes, animesAreLoading, animesError] = useFetching( async (sortType, sortDirection, limit, page) => {
        const response = await AnimeService.getAnimeOrderedBy(sortType, sortDirection, limit, page);
        setAnimes(response);
    })

    useEffect(() => {
        fetchAnimes('start_date', 'desc', 10, 1);
    }, [])

    return (
        <div className='animego'>
            <Wrapper>
                <div className='animego__links'>
                    <MyLink url={''} text={'Онгоинги'}/>
                    <MyLink url={''} text={new Date().getFullYear() + ' год'}/>
                    <MyLink url={''} text={new Date().getFullYear() - 1 + ' год'}/>
                </div>
            </Wrapper>
                <div className='animego__carousel carousel'>
                    <button className='carousel__arrow left' onClick={() => setMove(-1)}></button>
                    <div className='carousel__container'>
                        <Link to='/anime'><h2 className='carousel__title'>{'Аниме ' + getCurrentSeasonName() + ' сезона'}</h2></Link>
                        <Carousel move={move} setMove={setMove}/>
                    </div>
                    <button className='carousel__arrow right' onClick={() => setMove(1)}></button>
                </div>
            <Wrapper>
                    <div className='new-anime'>
                        <div className='animego__anime'>
                            <h2 className='new-anime__title'>Новые аниме на сайте</h2>
                            <AnimeList
                                animesAreLoading={animesAreLoading}
                                animes={animes}
                            />
                        </div>
                        <div className='more-btn'><Link to={'/anime'}>Весь список аниме</Link></div>
                    </div>
            </Wrapper>
        </div>
    );
}

export default Animego;