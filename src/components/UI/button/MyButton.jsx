import React from 'react';
import cl from './MyButton.module.css';

const MyButton = ({styleClass, text}) => {
    return (
       <button type='button' className={cl[styleClass]}><span></span>{text}</button>
    );
}

export default MyButton;