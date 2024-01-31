import React, { useEffect, useState } from 'react';
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
  }, [props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const playTrailer = (movieId) => {
    console.log(movieId);
    axios.get(`movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMD_API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setTrailerId(response.data.results);
      } else {
        console.log("Array Empty");
      }
    }).catch(error => {
      console.error('Error fetching trailer:', error.message);
    });
  }


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {rows.map((movie) => (
          <div className=''>
            <img key={movie.id} onClick={() => playTrailer(movie.id)} className={props.isSmall ? 'smallPoster' : 'poster'}
              alt='poster' src={`${process.env.REACT_APP_IMG_URL + movie.backdrop_path}`} />
            <p className='movieName'>{movie.title}</p>
          </div>
        ))}
      </div>
      {trailerId && <YouTube videoId={trailerId[0].key} opts={opts} />}
    </div>
  )
}

export default RowLatest;
