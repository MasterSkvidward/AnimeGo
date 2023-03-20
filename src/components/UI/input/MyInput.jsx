import React from 'react';
import cl from './MyInput.module.css';

const MyInput = ({setValue}) => {

    function changeHandler(event) {
        if (event.target.value.length > 2){
            setValue(event.target.value)
        }
    }

    return (
       <input 
            onChange={changeHandler}
            className={cl.input} 
            type="text" 
            placeholder='Поиск...'>
        </input>
    );
}

export default MyInput;