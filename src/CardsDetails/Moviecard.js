import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// const API_IMG = 'https://image.tmdb.org/t/p/w500/';
const Moviecard = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()
    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [])
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f29b6fd771253286db780b08d92449de`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }

    return (

        <div >
            <div className="movie">
                <div className="movie__intro">
                    <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt=" " />
                </div>
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        <div className="movie__posterBox">
                            <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt="" />
                        </div>
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                            <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                            <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                            <div className="movie__rating">
                                {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i class="fas fa-star" />
                                <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                            </div>
                            <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                            <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                            <div className="movie__genres">
                                {
                                    currentMovieDetail && currentMovieDetail.genres
                                        ?
                                        currentMovieDetail.genres.map(genre => (
                                            <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                        ))
                                        :
                                        ""
                                }
                            </div>
                        </div>
                        <div className="movie__detailRightBottom">
                            <div className="synopsisText">Overview</div>
                            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                        </div>

                    </div>
                </div>
                <div className="movie__links">
                    <div className="movie__heading">Useful Links</div>
                    {
                        currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Homepage </span></p></a>
                    }
                    {
                        currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb</span></p></a>
                    }
                </div>

            </div>

        </div>
    )
}

export default Moviecard
