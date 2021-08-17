import React, {useEffect, useState} from 'react';
import TopSeriesElement from './TopSeriesElement';
import fire from '../config/fbConfig';


export default function Followed(props){

    const [items, setItems] = useState([]);

    // useEffect(() =>{
    //     const fetchItem = async () => {
    //         const results = await fire.firestore().collection("Series").get();
    //         const allFollowItem = [];
    //         results.docs.map(doc => {
    //             allFollowItem.push({...doc.data()})
    //         })
    //         setItems(allFollowItem)
    //     }

    //     fetchItem();
    // }, [])

    useEffect(() => {
        const unsubscribe = fire.firestore().collection("Series").onSnapshot(snapshot => {
            if(snapshot.size){
                const allFollowItem = [];
                snapshot.forEach(doc => allFollowItem.push({id: doc.id, ...doc.data()}));
                setItems(allFollowItem);
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <>  
            <section className='wrapper-movie-elements'>
            {items.map(item => <TopSeriesElement itemId = {item.id} user = {"a"} image = {item.image} showName = {item.name} country = {item.country} year = {item.year} network = {item.network}/>)}
            </section>
        </>
    )
}