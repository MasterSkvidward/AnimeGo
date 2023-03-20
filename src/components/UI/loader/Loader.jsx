import React from 'react';
import cl from './Loader.module.css';

const Loader = () => {
    return (
        <div className={cl.flow}>
            <div className={cl.dot}></div>
            <div className={cl.dot}></div>
            <div className={cl.dot}></div>
        </div>
    );
}

export default Loader;