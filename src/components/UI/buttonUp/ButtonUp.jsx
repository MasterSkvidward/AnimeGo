import React, { useEffect, useRef, useState } from 'react';
import cl from './ButtonUp.module.css';
import useDebounce from '../../../hooks/useDebounce';


const ButtonUp = () => {
    const btn = useRef();

    function scrollUp(event) {
        window.scrollTo(0, 0);
    }

    function getYCoord(e) {
        if (window.scrollY > 1200) btn.current.style = 'display: inline-flex';
        else btn.current.style = 'display: none';
    }

    useEffect(() => {
        window.addEventListener('scroll', getYCoord);
    }, [])


    return (
       <span ref={btn} 
            className={cl.button}
            onClick={scrollUp}
        > Наверх
       </span>
    );
}

export default ButtonUp;