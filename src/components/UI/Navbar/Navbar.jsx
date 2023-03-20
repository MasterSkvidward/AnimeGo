import React, { useEffect, useState, useRef } from 'react';
import cl from './Navbar.module.css';
import logo from './img/animego-logo.png';
import loupe from './img/loupe.png';
import MyInput from '../input/MyInput';
import { Link } from 'react-router-dom';
import AnimeSearch from '../AnimeSearch/AnimeSearch';


const Navbar = () => {

    const [value, setValue] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const searchFocus = useRef();

    function handlerFocusIn(e) {
        setIsVisible(true);
    }


    function handlerClick(e) {
        setIsVisible(false);
    }

    
    useEffect(() => {
        document.addEventListener("click", handlerClick);
        searchFocus.current.addEventListener('focusin', handlerFocusIn)
    }, [])
   

    return (
       <nav className={cl.navbar}>
            <Link to='/animego'>
                <img className={cl.navbar__logo} src={logo} alt="AnimeGO" />
            </Link>

            <div className={cl.navbar__links}>
                <ul className={cl.navbar__menu}>
                    <li><Link to='/anime' className={cl.navbar__link}>Аниме</Link></li>
                    <li><Link to='/error' className={cl.navbar__link}>Манга</Link></li>
                    <li><Link to='/error' className={cl.navbar__link}>Персонажи</Link></li>
                    <li><Link to='/error' className={cl.navbar__link}>Случайное аниме</Link></li>
                </ul>

                <div ref={searchFocus} className={cl.navbar__login} onClick={e => e.stopPropagation()}>
                    <div className={cl.navbar__search}>
                        <div className={cl.navbar__loupe}><img src={loupe} alt="🔍︎" /></div>
                        <MyInput setValue={setValue}/>
                    </div>

                    {value && <AnimeSearch value={value} isVisible={isVisible} setIsVisible={setIsVisible} />}
                   
                    
                </div>
            </div>
       </nav>
    );
}

export default Navbar;