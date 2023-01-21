import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
const API_IMG = 'https://image.tmdb.org/t/p/w500/';
const MovieDetails = ({ movie }) => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
<>
{
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={500} duration={3} />
            </SkeletonTheme>
        </div>
        :
    <div className='tv-row-content' key={movie.id}>
    
          <Link to={`/moviecard/${movie.id}`}><div className='tv-row-content-link'>
            <img className='tv-img-width' src={API_IMG + movie.poster_path} alt="" /></div></Link>
          <div className='title-height'>
            <span style={{ color: "white", fontWeight: "500", fontSize: "14px" }} >{movie.title}</span>
          </div>
      
    </div>
    
}
    </>



  )
}

export default MovieDetails
