import React from 'react';
import Wrapper from '../../Wrapper';
import Navbar from '../Navbar/Navbar';
import cl from './Header.module.css';

const Header = () => {
    return (
       <header className={cl.header}>
            <Wrapper>
                <Navbar/>
            </Wrapper>
       </header>
    );
}

export default Header;
