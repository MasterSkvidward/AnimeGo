import React, { useEffect, useRef, useState } from 'react';
import cl from './MySelect.module.css';
import '../../../styles/css/Anime.css'

const MySelect = ({sortType, onChange, options}) => {
    const [value, setValue] = useState(options[0].name);
    const [selectedOptionNumber, setSelectedOptionNumber] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const MySelect = useRef();

    function handleDocumentClick(e) {
        if (MySelect.current && !MySelect.current.contains(e.target)) setIsVisible(false);
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleDocumentClick);
        return () => document.removeEventListener("mousedown",  handleDocumentClick);
    }, [])
    
    function handlerOptionClick(e) {
        setSelectedOptionNumber(Number(e.target.dataset.number));
        onChange(e.target.dataset.value);
        setValue(e.target.dataset.name);
        setIsVisible(!isVisible);
    }

    return (
        <div className={cl.MySelect} ref={MySelect}>
            <button
                className={cl.MySelect__btn}
                onClick={() => setIsVisible(!isVisible)}
            >{value}</button>

            <div className={isVisible? cl.MySelect__options : [cl.MySelect__options, cl.invisible].join(' ')}>
                    {options.map((option, index) => 
                        <div 
                            className={selectedOptionNumber === index ? [cl.MySelect__option, cl.active].join(' ') : cl.MySelect__option}
                            key={option.value}
                            onClick={handlerOptionClick}
                            data-name={option.name}
                            data-value={option.value}
                            data-number={index}
                            >
                            {option.name}
                        </div>
                    )}  
            </div>
         </div>
    );
}

export default MySelect;