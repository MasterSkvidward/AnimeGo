import React, { useEffect, useState } from 'react';
import AnimeCard from '../components/AnimeCard';
import Wrapper from '../components/Wrapper';
import { useFetching } from '../hooks/useFetching';
import AnimeService from '../API/AnimeService';
import { useParams } from 'react-router-dom';
import '../styles/css/AnimeIdPage.css';
import Loader from '../components/UI/loader/Loader';

const AnimeIdPage = () => {
    const params = useParams();
    const [anime, setAnime] = useState('');

    const [fetchAnime, animeIsLoading, animeError] = useFetching( async (id) => {
        const response = await AnimeService.getAnimeFullById(id);
        setAnime(response)
    })

    useEffect(() => {
        fetchAnime(params.id);
    }, [])

    return (
        <Wrapper>
            <div className='anime-page'>
                {animeIsLoading
                    ? <Loader/>
                    : <AnimeCard anime={anime}/>
                }
            
            </div>
        </Wrapper>
    );
}

export default AnimeIdPage;