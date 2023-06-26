
import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY,imageUrl,baseUrl } from '../../Constants/Constants'
function Banner() {
  console.log('baner.renderd')
    const [movie,setMovie]=useState()
        useEffect(()=>{
      
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{

            console.log('api called')
            console.log(response.data.results[0])
            setMovie(response.data.results[4])

        })

    },[])

    return (

        <div 
         className='banner'>
            <div className='content' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`,height:310}} >
                {console.log('hmmmm')}
                <h1 className='title'>{movie ? movie.title:'ajmal'}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie?movie.overview:''}</h1>
            </div>
        {/* <div className="fade_bottom"></div> */}
        </div>
    )
}

export default Banner