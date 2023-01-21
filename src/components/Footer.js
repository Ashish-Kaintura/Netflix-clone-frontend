import React from 'react'
import '../components/footer.css';
import '../responsive.css';
const Footer = () => {
    return (
        <div className='footer-background'>
            <div className='footer-head-div' >
                <div className='footer-head'>
                    <h3>Questions? Call 000-800-919-1694</h3>
                </div><br />

                <div className='footer-div-flex'>
                    <div className='footer-div-block'>
                        <span className='footer-span'> FAQ</span>
                        <span className='footer-span'> Investor Relations</span>
                        <span className='footer-span'> Privacy</span>
                        <span className='footer-span'> Speed Test</span>
                    </div>
                    <div className='footer-div-block' >
                        <span className='footer-span'>Help Centre</span>
                        <span className='footer-span'> Jobs</span>
                        <span className='footer-span'> Cookie Preferences</span>
                        <span className='footer-span'> Legal Notices</span>
                    </div>
                    <div className='footer-div-block' >
                        <span className='footer-span'> Account</span>
                        <span className='footer-span'> Ways to Watch</span>
                        <span className='footer-span'> Corporate Information</span>
                        <span className='footer-span'> Only on Netflix</span>
                    </div>
                    <div className='footer-div-block'>
                        <span className='footer-span'>Media Centre</span>
                        <span className='footer-span'> Ways to WatchTerms of Use</span>
                        <span className='footer-span'> Contact Us</span>
                    </div>
                </div>

                <div className='bottom-footer'>
                    <select style={{
                        marginRight: "40px", fontSize: "0.77rem", textAlign: "center", background: "rgba(0,0,0,.4)", border: "1px solid #aaa", color: "#ffff",
                        padding: ".25rem 1.375rem", overflow: "hidden", fontWeight: "bolder"
                    }} >

                        <option style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }} value="English"> English </option>
                        <option style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }} value="Hindi"> Hindi </option>
                    </select>
                </div>
                <div className='footer-end'>
                    <h4 style={{ marginBottom: "2rem" }}>Netflix India</h4>
                </div>
            </div>

        </div>
    )
}

export default Footer
