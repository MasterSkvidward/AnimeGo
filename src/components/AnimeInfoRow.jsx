import React, { useEffect, useLayoutEffect, useState } from 'react';
import '../styles/css/AnimeInfoRow.css';
import { getValues } from '../utils/utils';
import Loader from './UI/loader/Loader';
import { Link } from 'react-router-dom';

const AnimeInfoRow = ({title, value}) => {
    let [newValue, setNewValue] = useState('');
    const links = ['Статус', 'Жанр', 'Сезон', 'Студия'];
    let valueStyles = ['value'];

    function titleInLinks() {
        return links.includes(title);
    }

    if (titleInLinks()) valueStyles.push('value_link');


    useEffect( () => {
        setNewValue(getValues(title, value));
    }, [])

    return (
       <div className='info-row'>
            {newValue 
                ? <div className='info-row__block'>
                    <div className='title'>{title}</div>
                        <>
                            {newValue.map((item, index) => 
                                <div key={index}>
                                    <div className={valueStyles.join(' ')}>
                                        {titleInLinks() 
                                            ? <Link to=''>{item}</Link>  
                                            : <div>{item}</div>
                                        }
                                    </div>   
                                    {index !== newValue.length-1 ? ',' : <></>} 
                                </div>                        
                            )
                            }  
                        </>
                    </div>

                : <Loader/>
            }    
       </div>
    );
}

export default AnimeInfoRow;