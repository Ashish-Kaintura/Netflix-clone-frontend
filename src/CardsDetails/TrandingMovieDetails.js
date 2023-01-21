import React from 'react'
import { Link } from 'react-router-dom';
const API_IMG = 'https://image.tmdb.org/t/p/w500/';
const TrandingMovieDetails = ({trend}) => {
    return (
        <div>
            <section>
                <div className='tv-row-content' >

                    <Link to={`/moviecard/${trend.id}`}><div className='tv-row-content-link'>

                        <img className='tv-img-width' src={API_IMG + trend.poster_path} alt="" /></div></Link>
                    <div className='title-height' >
                        <span style={{ color: "white", fontWeight: "500" }} >{trend.title}{trend.name}</span>
                    </div>
                   

                </div>

            </section>
        </div>
    )
}

export default TrandingMovieDetails
