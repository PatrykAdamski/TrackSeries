import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCalendarAlt, faStar, faMountain } from '@fortawesome/free-solid-svg-icons'

export default function Home(){
    return(
        <>
            <header className='home-site'>
                <div className='background'></div>
                <div className='container-title'>
                    <FontAwesomeIcon icon={faVideo} />
                    <h1 className='title'>Track<span>Series</span></h1>
                    <h2 className='subtitle'>Avoid spoiles, keep up to date</h2>
                    <button className='btn-primary'>Get Started!</button>
                </div>
            </header>
            <section className='section-benefits'>
                <div className='benefit'>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <h3 className='section-title'>Don't miss any episode</h3>
                    <p className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi est fugit, provident laborum aut.</p>
                </div>
                <div className='benefit'>
                    <FontAwesomeIcon icon={faMountain} />
                    <h3 className='section-title'>Keep track of your progress</h3>
                    <p className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi est fugit, provident laborum aut.</p>
                </div>
                <div className='benefit'>
                    <FontAwesomeIcon icon={faStar} />
                    <h3 className='section-title'>follow all your favorite shows</h3>
                    <p className='description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea commodi est fugit, provident laborum aut.</p>
                </div>
            </section>
        </>
    )
}