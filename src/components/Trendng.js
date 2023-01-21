import React, { useState, useEffect } from 'react'
import TrandingMovieDetails from '../CardsDetails/TrandingMovieDetails';
const API_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=f29b6fd771253286db780b08d92449de";
// const API_IMG = 'https://image.tmdb.org/t/p/w500/';
const Trendng = () => {
    const [trending, setTtrending] = useState([]);
    useEffect(() => {

        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                // console.log(data)
                setTtrending(data.results);

            })

    }, []);
    return (
        <div>


            <div className='tv-show-title'>
                <h2 style={{ color: "white" }}>Trendng</h2>


            </div>
            <section style={{ display: "flex", overflow: "hidden" }}>

                <div className='ex1' style={{}} >

                    {
                        trending.map(trend =>

                            <TrandingMovieDetails trend={trend} key={trend.id} />
                        )
                    }

                </div>


            </section>
        </div>
    )
}

export default Trendng
