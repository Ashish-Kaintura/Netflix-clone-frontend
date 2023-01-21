import React from 'react'
import '../App.css';
import Movie from './Movie';
import Trendng from './Trendng';
import TvShow from './TvShow';
import Banner from './Banner';
const Home = () => {

    return (
        <div>

            <section className='sec-home' id='home'>
              <div>
                <Banner/>
              </div>
            </section>
            <section id='trending'>
                <Trendng />
            </section >
            <section id='movies'>
                <Movie/>
               
            </section>
            <section id='tvshows' >


                <TvShow />

            </section >
        </div >
    )
}

export default Home
