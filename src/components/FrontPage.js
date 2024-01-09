import React from 'react'

import { AiFillCaretRight } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import { BiPowerOff, } from 'react-icons/bi'
import '../App.css';
import '../responsive.css';
const FrontPage = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    // useEffect(() => {
    //     const auth = localStorage.getItem("user");
    //     if (auth) {
    //         navigate("/");
    //     }
    // });
    //get clear data from user storage  
    const logout = () => {
        localStorage.clear();
        navigate("/signup")
    }
    return (
        <div >
            <section className='div-background'>
                <nav>
                    <div className='head-flex'>
                        <img className='img-left' src={require("../images/netflixlogo.png")} alt="netflix logo" />
                        <div>
                            <div className='div-right'>
                                <select className='div-right-select'>

                                    <option style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }} value="English"> English </option>
                                    <option style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }} value="Hindi"> Hindi </option>
                                </select>
                                {auth ? <Link onClick={logout} to='/logout'><BiPowerOff style={{ color: "red", fontWeight: "bold", cursor: "pointer" }} /> ({JSON.parse(auth).name})</Link> :
                                    <Link to="/login" ><button className='Login-btn' >Sign in</button> </Link>}
                            </div>
                        </div>
                    </div>
                </nav>
                <div>
                    <div className='card-background'>
                        <div className='head-text'>
                            <h1 >Unlimited movies,
                                TV shows and more.</h1>
                        </div>
                        <div className='sub-head'>
                            <h2>Watch anywhere. Cancel anytime. </h2>
                        </div>

                        <form className='' >
                            <h3 className='form-head'>
                                Ready to watch? Enter your email to create or restart your membership.
                            </h3>
                            <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                                <input className='signup-input' type="" id="" placeholder='Enter email Address ' />

                                <Link className='getstart-link' to="/signup"><button className='getstart' >Get Started </button> </Link><AiFillCaretRight className='getstartlogo' />
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className='section2'>
                <div className='sec-div'>
                    <div className='sec-div-2' >
                        <h1 className='sec-head-div' >Enjoy on your TV.</h1>
                        <h2 className='sec-subhead-div'>Watch on smart TVs, PlayStation, Xbox,<br></br>Chromecast, Apple TV, Blu-ray players and<br></br>
                            more.</h2>
                    </div>
                    <div className='sec-img'>
                        <img className='sec-img-style' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                        <div className='video-div'>
                            <video className="sec-video1" loop autoPlay playsInline muted>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" /></video>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sec-div-3' style={{ borderBottom: "8px solid #222" }}>
                <div className='sec-div'>
                    <div>
                        <img className='sec-img-child'
                            src="https://occ-0-2152-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" alt="" />
                    </div>
                    <div className='sec-div-2' >
                        <h1 className='sec-head-div' >Create profiles for children.</h1>
                        <h2 className='sec-subhead-div'>Send children on adventures with their<br></br>favourite characters in a space made just for them—free with your membership.<br></br>
                            more.</h2>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <div className='sec-div'>
                    <div className='sec-div-2' >
                        <h1 className='sec-head-div' >Watch everywhere.</h1>
                        <h2 className='sec-subhead-div'>Stream unlimited movies and TV shows on,<br></br>your phone, tablet, laptop, and TV.<br></br>
                            more.</h2>
                    </div>
                    <div className='sec-img'>
                        <img className='sec-img-style' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="img2" />
                        <div className='video-div1'>
                            <video className="sec-video2" loop autoPlay playsInline muted>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" /></video>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default FrontPage;
