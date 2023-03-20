import React from 'react';
import Wrapper from '../../Wrapper';
import cl from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       <footer className={cl.footer}>
            <Wrapper>
                <div className={cl.footer__row}>
                    <div className={cl.links__row}>
                        <ul className={cl.footer__links}>
                            <li className={cl.footer__link}><Link to='/error'>Соглашение</Link></li>
                            <li className={cl.footer__link}><Link to='/error'>Конфидециальность</Link></li>
                            <li className={cl.footer__link}><Link to='/error'>Для правообладателей</Link></li>
                        </ul>
                    </div>
                    <div className={cl.footer__name}>© animego.org 2017-2023</div>
                </div>
            </Wrapper>
          
       </footer>
    );
}

export default Footer;