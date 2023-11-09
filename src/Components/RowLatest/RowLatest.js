import React, { useEffect, useState } from 'react';
import { imgUrl } from '../../Constants/Constants';
import '../RowLatest/RowLatest.css';
import axios from '../../axios';

function RowLatest(props) {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios.get(props.url).then(response => {
      setRows(response.data.results);
    }).catch(err => {
      alert('Network Error');
    })
  }, [props.url])
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {rows.map((movie) =>
          <img className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imgUrl + movie.backdrop_path}`} />
        )}
      </div>
    </div>
  )
}

export default RowLatest;
