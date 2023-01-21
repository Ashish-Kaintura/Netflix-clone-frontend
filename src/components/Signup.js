import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tac, setTac] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/");
        }
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email, password, tac);
        let result = await fetch("https://netflix-clone-backend-dcg7.onrender.com/register", {
            method: "post",
            body: JSON.stringify({ name, email, password,tac }),

            headers: {
                "content-type": "application/json",
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth));
        navigate("/");
    }
    return (
        <div>
            <section className='div-background'>
                <nav>
                    <div className='head-flex'>
                        <img className='img-left' style={{ height: "15vh" }} src="\img\netflixlogo.png" alt="netflix logo" />

                    </div>
                </nav>
                <div>
                    <div className='signin-form' >
                        <form className='signin-form-1' action="" onSubmit={handleSubmit}>
                            <div className='signin-from-2'>
                                <div style={{ textAlign: "left", }}>
                                    <h2 style={{ fontSize: "30px", color: "#ffff", marginLeft: "75px" }}>Sign Up</h2>
                                </div>
                                <input className='signin-input-field' type="text" placeholder='Name' required={true} onChange={(e) => { setName(e.target.value) }} />
                                <br />
                                <input className='signin-input-field' type="email" placeholder='Email or Phone Number' required={true} onChange={(e) => { setEmail(e.target.value) }} />
                                <br />
                                <input className='signin-input-field' type="password" placeholder='Password' required={true} onChange={(e) => { setPassword(e.target.value) }} />
                                <br />
                                <button style={{cursor:"pointer"}} className='signin-btn' >Sign Up</button>
                                <br />
                                <input
                                    style={{
                                        float: "left",
                                        marginTop: "0.38rem",
                                        marginLeft: "5rem",
                                        marginRight: "5px",
                                    }}
                                    onChange={(e) => { setTac(e.target.value) }}
                                    type="checkbox"
                                    name=""
                                    id="checkbox"
                                />
                                 <span style={{ color: "#8c8c8c", float: "left" }}>Remember me</span>
                               
                                <div>
                                    <div className='signin-contain-sub-div'>
                                        <h3 className='new-account' >Allready have a Account</h3> <Link style={{ textDecoration: "none", color: "#ffff", float: "left", fontWeight: "500", cursor: "pointer" }}
                                            to="/login"> Sign In.</Link>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup
