import React, { useState, useEffect } from 'react'
import Tvshowdetails from '../CardsDetails/Tvshowdetails';
const API_URL = "https://api.themoviedb.org/3/tv/popular/?api_key=f29b6fd771253286db780b08d92449de";
const TvShow = () => {
  const [tvshows, setTshows] = useState([]);
  useEffect(() => {

    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        // console.log(data)
        setTshows(data.results);

      })

  }, []);

  return (
    <div>


      <div className='tv-show-title'>
        <h2 style={{ color: "white" }}>TV Shows</h2>


      </div>

      <section style={{ display: "flex", overflow: "hidden" }}>
        <div className='ex1' style={{}} >


          {
            tvshows.map(tvshow =>
              <Tvshowdetails tvshow={tvshow} key={tvshow.id} />

            )
          }

        </div>


      </section>
    </div>
  )
}

export default TvShow
