import React, { useState, useEffect } from 'react'
import MovieDetails from '../CardsDetails/MovieDetails';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=f29b6fd771253286db780b08d92449de`;
// const API_IMG = 'https://image.tmdb.org/t/p/w500/';
const Movie = () => {
    const [movies, setMovies] = useState([]);


    useEffect(() => {

        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                // console.log(data)
                setMovies(data.results);

            })

    }, []);


    return (
        <div>
            {/* <MovieRow setMovies={setMovies}/> */}
      
            <div className='tv-show-title'>
                <h2 style={{ color: "white" }}>Movies</h2>

            </div>
            <section style={{ display: "flex", overflow: "hidden" }}>


                <div className='ex1' style={{}} >


                    {
                        movies.map(movie =>



                            <MovieDetails movie={movie} key={movie.id}  />

                        )
                    }


                </div>

            </section>
        </div>
    )
}

export default Movie;
