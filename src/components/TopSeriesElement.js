import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function TopSeriesElement(props){


    return(
        <>
            <div className='movie-elements'>
                <img src={props.image}className='movie-img' alt='movie'/>
                <h3 className='movie-name'>{props.showName}</h3>
                <div className='movie-info'>
                    <div className='movie-country'>
                        <p>{props.country}</p>
                        <p>Country</p>
                    </div>
                    <div className='movie-year'>
                        <p>{props.year}</p>
                        <p>Premiered</p>
                    </div>
                </div>
                <div className='movie-info'>
                    <div className='movie-network'>
                        <p>{props.network}</p>
                        <p>Network</p>
                    </div>
                    <div className='login-to-follow'>
                    <FontAwesomeIcon icon={faShareSquare} />
                    Login to follow
                    </div>
                </div>
            </div>
        </>
        )
}