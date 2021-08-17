import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import fire from '../config/fbConfig'; 

export default function TopSeriesElement(props){

    const addItem = async () => {

        const item = await fire.firestore().collection("Series").add({
            authorId: fire.auth().currentUser.uid,
            image: props.image,
            name: props.showName,
            country: props.country,
            year: props.year,
            network: props.network,
        })
    };

    const handleUnfollow = async (id) => {
        await fire.firestore().collection("Series").doc(id).delete();
    }

    const checkFollow = () => {
        if(props.user==="a"){
            return <div onClick = {() => handleUnfollow(props.itemId)} className='login-to-follow'>Unfollow</div>
        } if(props.user){
            return <div onClick = {addItem}className='login-to-follow'>Follow</div>
        } if(!props.user){
            return  <div className='login-to-follow'>
            <FontAwesomeIcon icon={faShareSquare} />
            Login to follow
            </div>
        } 
    }
    
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
                    {checkFollow()}
                </div>
            </div>
        </>
        )
}