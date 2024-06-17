import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='sb__footer section__padding'>
                <div className='sb__footer-links'>
                    <div className='sb__footer-links-div'>
                        <h4>Pages</h4>
                        <a href='/login'>
                            <p>Login</p>
                        </a>

                        <a href='/register'>
                            <p>Sign Up</p>
                        </a>

                        <a href='/about-us'>
                            <p>About Us</p>
                        </a>

                    </div>
                    <div className='sb__footer-links-div'>
                        <h4>Legal</h4>
                        <a href='/terms-and-conditions'>
                            <p>Terms and Conditions</p>
                        </a>

                        <a href='/privacy-policy'>
                            <p>Privacy Policy</p>
                        </a>
                    </div>
                    <div className='sb__footer-links-div'>
                        <h4>Contact Us</h4>
                        <a href='/contact-us'>
                            <p>Contact Us</p>
                        </a>
                    </div>
                    {/* <div className='sb__footer-links-div'>
                        <h4>Follow Us</h4>
                        <a href='/facebook'>
                            <p>Facebook</p>
                        </a>

                        <a href='/twitter'>
                            <p>Twitter</p>
                        </a>

                        <a href='/instagram'>
                            <p>Instagram</p>
                        </a>
                    </div> */}
                    <div className='sb__footer-links-div'>
                        <h4>Follow Us</h4>
                        <div className='socialmedia'>
                            <a href='https://www.facebook.com/'>
                            <p className='mx-1'><img src="assets/icons/facebook.ico" height={"30px"} width={"40px"}/></p>
                            </a>
                            <a href='https://www.instagram.com/'>
                            <p><img src="assets/icons/instagram.ico" height={"30px"} width={"40px"}/></p>
                            </a>
                            <a href='https://x.com/home'>
                            <p><img src="assets/icons/twitter.ico" height={"30px"} width={"50px"} /></p>
                            </a>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='sb__footer-below'>
                    <div className='sb__footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} FitHeal. All Rights Reserved.
                        </p>
                    </div>
                    <div className='sb__footer-below-links'>
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
