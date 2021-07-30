import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import {
    NavLink,
    HashRouter,
  } from 'react-router-dom';


export default function Navigation(){
    return(
        <HashRouter>
            <nav className='main-nav'>
                <div className='logo'>
                    <FontAwesomeIcon icon={faVideo} />
                    <p>Track<span>Series</span></p>
                </div>
                <ul>
                    <NavLink exact to='/' className='link'><li>Home</li></NavLink>
                    <NavLink exact to='/TopSeries' className='link'><li>Top Series</li></NavLink>
                </ul>
            </nav>
        </HashRouter>
    )
}