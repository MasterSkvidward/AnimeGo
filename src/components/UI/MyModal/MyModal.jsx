import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible, image}) => {
    const rootClasses = [cl.myModal];
    if (visible) rootClasses.push(cl.active);

    function handlerSelection(params) {
        
    }

    return (
       <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onSelect={e => false}>
                <img src={image} alt="" />
            </div>
            
       </div>
    );
}

export default MyModal;