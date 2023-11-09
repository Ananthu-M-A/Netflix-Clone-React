import React, { useEffect, useState } from 'react';
import { API_KEY, imgUrl } from '../../Constants/Constants';
import '../RowLatest/RowLatest.css';
import axios from '../../axios';
import YouTube from 'react-youtube';

function RowLatest(props) {
  const [rows, setRows] = useState([]);
  const [trailerId, setTrailerId] = useState();
  useEffect(() => {
    axios.get(props.url).then(response => {
      setRows(response.data.results);
    }).catch(err => {
      alert('Network Error');
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const playTrailer = (movieId)=>{
    console.log(movieId);
    // axios.get(`movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
    //   if(response.data.results.length !== 0){
    //     setTrailerId(response.data.results);
    //   }else{
    //     console.log("Array Empty");
    //   }
    // })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {rows.map((movie) =>
          <img onClick={playTrailer(movie.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imgUrl + movie.backdrop_path}`} />
        )}
      </div>
      { trailerId && <YouTube videoId={trailerId.key} opts={opts} />}
    </div>
  )
}

export default RowLatest;
