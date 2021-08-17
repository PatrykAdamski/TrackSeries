import TopSeriesElement from './TopSeriesElement';
import React, {useEffect, useState} from "react";

export default function TopSeries(props){

    const [inputValue, setinputValue] = useState('');
     const [allShows, setallShows] = useState([]);

  
        const handleChange = e => {
            setinputValue(e.target.value);
        }
    

     useEffect(()=>{
         fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
         .then((response)=> {
             return response.json();
         })
         .then((show) => {
             console.log(show);
            setallShows(show);
         })
         
     }, [inputValue])  

     return(
        <>
        <div className='container-search'>
        <input type = 'search' placeholder = 'Search...' value={inputValue} onChange={handleChange} className='search'></input>
        </div>
        <section className='wrapper-movie-elements'>
            { allShows.map((el)=>{
                let image = "images/camera.png";
                let webChannel = "undefined";
                let year = "undefined";
                let name = "undefined";
                let country = "undefined";
                if(el.show.image !== null){
                     image = el.show.image.original;
                }if(el.show.network !==null){
                     country = el.show.network.country.name;
                }if(el.show.webChannel !== null){
                     webChannel = el.show.webChannel.name;
                }if(el.show.name !== null){
                     name = el.show.name;
                }if(el.show.premiered !== null){
                     year = el.show.premiered;
                }

                return <TopSeriesElement user={props.user} key={el.show.id} network={webChannel} year = {year}country={country} showName={name} image={image}/>;
            
            })}
        </section>
        </>
    )
}