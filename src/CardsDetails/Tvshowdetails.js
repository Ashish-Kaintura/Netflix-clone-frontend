import {React} from "react"
import { Link } from 'react-router-dom';
const API_IMG = 'https://image.tmdb.org/t/p/w500/';
const Tvshowdetails = ({ tvshow }) => {


  return (
    <div>

      
          <div className='tv-row-content' key={tvshow.id}>
            <Link to={`/tvshowcard/${tvshow.id}`}><div className='tv-row-content-link'>
              <img className='tv-img-width' src={API_IMG + tvshow.poster_path} alt="" /></div></Link>
            <div className='title-height'>
              <span style={{ color: "white", fontWeight: "500" }} >{tvshow.name}</span>
            </div>



          </div>
      
    </div>


  )
}

export default Tvshowdetails
