import React, { useEffect, useState } from 'react';
import '../Banner/Banner.css';
import axios from '../../axios';
import { API_KEY, imgUrl } from '../../Constants/Constants';

function Banner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const movieSelect = Math.round(Math.random() * (response.data.results.length - 1) + 1);
      console.log(movieSelect);
      setBanner(response.data.results[movieSelect]);
    })
  }, [])

  return (
    <div style={{ backgroundImage: `url(${banner ? imgUrl + banner.backdrop_path : ""})` }} className='banner'>
      <div className='content' >
        <h1 className='title'>{banner ? banner.title : ""}</h1>
        <div className='banner_buttons' >
          <button className='button' >Play</button>
          <button className='button' >My list</button>
        </div>
        <h1 className='description'>{banner ? banner.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner;
