import React from "react";
import '..//responsive.css';
import { useNavigate } from "react-router-dom";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";

const Signin = () => {
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
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email, password, tac);

        let result = await fetch("https://netflix-clone-backend-dcg7.onrender.com/login", {
            method: "post",
            body: JSON.stringify({ email, password, tac }),

            headers: {
                "content-type": "application/json",
            },
        });
        result = await result.json();
        console.warn(result);
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate("/");
        } else {
            alert("worng value");
        }
    };
    return (
        <div>
            <div className="div-background">
                <section>
                    <nav>
                        <div className="head-flex">
                            <img
                                className="img-left"
                                src="\img\netflixlogo.png"
                                alt="netflix logo"
                            />
                        </div>
                    </nav>
                    <form className="signin-form-1" action="" onSubmit={handleLogin}>
                        <div className="signin-from-2">
                            <div style={{ textAlign: "left" }}>
                                <h2
                                    style={{
                                        fontSize: "30px",
                                        color: "#ffff",
                                        marginLeft: "75px",
                                    }}
                                >
                                    Sign In
                                </h2>
                            </div>
                            <input
                                className="signin-input-field"
                                type="text"
                                onChange={(e) => { setEmail(e.target.value) }}
                                required={true}
                                name=""
                                id="name"
                                placeholder="Enter email "
                            />
                            <br />
                            <input
                                className="signin-input-field"
                                onChange={(e) => { setPassword(e.target.value) }}
                                required={true}
                                type="password"
                                name=""
                                id="password"
                                placeholder="Enter password"
                            />
                            <br />
                            <button style={{cursor:"pointer"}} className="signin-btn">Sign in</button>
                            <br />
                            <input className="rembermecheckbox"
                               
                                onChange={(e) => { setTac(e.target.value) }}
                                type="checkbox"
                                name=""
                                id="checkbox"
                            />
                            <span style={{ color: "#8c8c8c", float: "left" }}>Remember me</span>
                            <a style={{ color: "#8c8c8c" }} href="http://">
                                Need help?
                            </a>
                            <br />
                            <div>
                                <div className="signin-contain-sub-div">
                                    <h3 className="new-account">New to Netflix?</h3>{" "}
                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            color: "#ffff",
                                            float: "left",
                                            fontWeight: "500",
                                            cursor: "pointer",
                                        }}
                                        to="/signup"
                                    >
                                        {" "}
                                        Sign up Now.
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Signin;
