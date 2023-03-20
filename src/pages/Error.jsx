import React from 'react';
import Wrapper from '../components/Wrapper';
import Loader from '../components/UI/loader/Loader';
import '../styles/css/Error.css'

const Error = () => {
    return (
        <Wrapper>
            <h1 className='error__message'>404 Page Not Found</h1>
            <Loader/>
        </Wrapper>
    );
}

export default Error;