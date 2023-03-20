import React from 'react';
import cl from './MyLink.module.css';
import { Link, useNavigate } from 'react-router-dom';

const MyLink = ({url, text}) => {
    return (
       <Link to={url} className={cl.myLink}>{text}</Link>
    );
}

export default MyLink;