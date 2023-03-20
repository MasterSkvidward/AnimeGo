import React from 'react';
import '../styles/css/Wrapper.css'

const Wrapper = ({children}) => {
    return (
       <div className='container'>
           {children}
       </div>
    );
}

export default Wrapper;