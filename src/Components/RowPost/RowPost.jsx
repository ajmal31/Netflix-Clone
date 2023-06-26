 

import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import axios from '../../axios'
import YouTube from 'react-youtube'
function RowPost(props) {

    const [post,setPost]=useState([])
    const [videoId,setvideoId]=useState('')
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }

    useEffect(()=>{
      
        axios.get(props.url).then((response)=>{

            console.log('row posts')
            console.log(response.data)
            setPost(response.data.results)
        })
        
    },[])

    const showMovie=(id)=>{


        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}###`).then((response)=>{


            console.log(response.data.results)
            if(response.data.results.length!==0)
            {
                setvideoId(response.data.results[0])
            }else{
                console.log('array is empty');
            }
            

        })
    }


    

    return (
        <div className="div">
          <p className='poster-title'>{props.title}</p>
        <div className='row' style={{"overflowX":"scroll","width":"1200px"}}>
        <div className='posters'>
           {post.map((obj)=>
   
                <img onClick={()=>showMovie(obj.id)} className={props.className} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />

          ) }
            </div>
          
        </div>
        {console.log('key'+videoId.key)}
        {videoId.key?<button onClick={()=>setvideoId('')}  >close tab</button>:''}
        { videoId.key && <YouTube videoId={videoId.key} opts={opts} /> }
        </div>
    )
}

export default RowPost