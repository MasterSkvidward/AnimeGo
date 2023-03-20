import React, { useState } from 'react';
import MyLink from './UI/link/MyLink';
import AnimeCardInfo from './AnimeCardInfo';
import '../styles/css/AnimeCard.css';
import MyButton from './UI/button/MyButton';
import pen16 from '../media/img/pen16.png';
import player16 from '../media/img/player16.png';
import star64 from '../media/img/star64.png';
import { Link } from 'react-router-dom';
import {getAnimeScore} from '../utils/utils.js';
import searchLoupe from '../media/search-loupe.png';
import MyModal from './UI/MyModal/MyModal';

const AnimeCard = ({anime}) => {
    const [modalVisible, setModalVisible] = useState(false);
    if (!anime) return;

    return (
       <div className='anime-card'>
            <MyModal visible={modalVisible} setVisible={setModalVisible} image={anime.images.jpg['large_image_url']}/>
            <div className='anime-card__media media-card'>
                <div className='media-card__img' onClick={() => setModalVisible(true)}>
                    <img src={anime.images.jpg['image_url']} alt="Аниме Фото" title={anime.title} /><img className='search-loupe' src={searchLoupe}></img>
                </div>
                <div className='media-card__buttons'>
                    <button onClick={() => ''} className={'media-card__watch'} >
                        <span className='media-card__player-icon'><img src={player16} alt="" /></span><span className='label'>Смотреть онлайн</span>
                    </button>
                    <button onClick={() => ''} className={'media-card__write-review'} >
                        <span className='media-card__pen-icon'><img src={pen16} alt="" /></span>
                    Написать отзыв</button>
                    <button onClick={() => ''} className={'media-card__add-to-list'}><span className='media-card__plus'>+</span>Добавить в список</button>
                    <div className='media-card__user-lists'>В списках у людей</div>
                    <a onClick={() => ''} className={'media-card__read-reviews'} >Читать все рецензии</a>
                </div>
            </div>
            <div className='anime-card__body body-card'>
                <div className='body-card__rating rating-anime'>
                    <span className='rating-anime__star'><img src={star64} alt="star" /></span>
                    <div className='rating-anime-block'>
                        <div className='rating-anime__number'>{getAnimeScore(anime.score)}
                            <span className='rating-anime__max'>/10</span>
                        </div>
                        <div className='rating-anime__all-scores'>{anime.scored_by}</div>
                    </div>
                    {/* <Rating/> */}
                </div>
                <div className='body-card__headline'>
                    <div className='body-card__title_en'>{anime.title_english}</div>
                    <div className='body-card__title_jp'>{anime.title_japanese}</div>
                </div>
                <div className='body-card__next-episode'>Следующий эпизод</div>
                <AnimeCardInfo anime={anime}/>
            </div>
       </div>
    );
}

export default AnimeCard;