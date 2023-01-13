import React from 'react'
import footerlogo from '../../img/footer-logo.png'
import man from '../../img/man.gif'
import applogo from '../../img/aap-logo.png'
import woman from '../../img/women-app-logo.png'
import './Footer.css'
import Sole from '../SoleSection/Sole'
import SocialSlider from '../SliderSocial/SocialSlider'
import Slider1 from '../Chatslider/Slider1'
import Tilt from 'react-parallax-tilt';
function Footer() {
    return (
        <div>

            <SocialSlider></SocialSlider>

            <section className='watch-now'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8 col-xl-8 col-xxl-8 col-md-8 col-sm-12'>
                            <div className='watch-title cursor-scale'>
                                <strong>JOIN US</strong>   TO GET <strong>INCREDIBLE</strong>  DATING <strong>EXPERIENCE</strong>  IN NEW ERA OF <strong>METAVERSE</strong>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10 col-xl-10 col-xxl-10 col-md-12 col-sm-12'>
                            <div className='watch-box'>
                                <div className='video-play position-relative'>
                                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="play-btn" data-fancybox="video-gallery">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<Slider1></Slider1>
            <section className="app">
                <div className='container'>
                    <div className='row mb-3 justify-content-center'>

                        <div className='col-lg-7 col-xl-7 col-xxl-7 col-md-12 col-sm-12'>
                            <div className='app-title'>
                                <h1 class="cursor-scale">Come & explore a Human center metaverse</h1>
                                <p class="cursor-scale small">Our Aim is to bring people together through a virtual reality.
                                    Our intricate, rich worlds are social by design and built to last for decades.</p>
                            </div>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-xl-12 col-xxl-12 col-md-12 col-sm-12'>
                            <div className='app-box'>
                                <div className='app-bg'></div>
                                <div className='row app-center'>
                                    <div className='col-lg-7 col-md-12 col-sm-12 col-xl-7 col-xxl-7'>
                                        <div className='app-padding'>
                                        <div className='app-detils'>
                                            <h2 class="cursor-scale">download our app</h2>
                                            <p class="cursor-scale small">Metaverse to provide a comprehensive experience for a human and the whole world for anyone and everyone. Explore the virtual world and start your journey with your <strong>Social-e</strong> </p>
                                            <div className='google-app'>
                                                <button className='app-btn' type='button'>
                                                    <img src='images/playstore.png'></img>
                                                    <div className='d-block'>
                                                        <p>GET IT ON</p>
                                                        <div className='app-name'>Google Play</div>
                                                    </div>
                                                </button>
                                                <button className='app-btn' type='button'>
                                                    <img src='images/apple.png'></img>
                                                    <div className='d-block'>
                                                        <p>Download on the</p>
                                                        <div className='app-name'>App Store</div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-md-6 col-xl-5 col-xxl-5 col-sm-12'>

                                        <div className='mobile-img'>
                                        <Tilt>
                                            <video muted autoPlay playsInline loop preload="auto" width={'220px'}>
                                                <source type="video/mp4" src="images/Mobile-video.mp4" />
                                            </video>
                                            </Tilt>
                                            {/* <div class="smartphone">
                                                <div class="content">
                                                    <iframe src="https://wpcoder.co.uk/links/mixkit-man-holding-neon-light-1238-large.mp4" style={{ width: '100%', height: '100%', border: 'none' }} />
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Sole></Sole>
            <section className='subscribe'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-xl-12 col-xxl-12 col-md-12 col-sm-12'>
                            <div className='subscribe-box'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-xl-6 col-xxl-6 col-sm-12'>
                                        <div className='subscribe-details'>
                                            <h2 class="cursor-scale">Ready to be a part of <br />our journey?</h2>
                                            <p class="cursor-scale small">We're building the future of social experiences. Register now to be the first to know about Social-e</p>
                                            <div className='subscribe-form'>
                                                <div class="searchbox-wrap">
                                                    <input type="text" placeholder="Enter your Email" />
                                                    <button><span>Subscribe</span> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-xl-6 col-xxl-6 col-sm-12'>
                                        <div className='icon-img'>
                                            <img src={man}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-xl-12 col-xxl-12 col-md-12 col-sm-12'>
                            <div className='footer-content'>
                                <div className='footer-title'>
                                    <div className='title cursor-scale'>Following us yet?</div>
                                </div>
                                <p class="cursor-scale small">Our social media channels provides various updates on our journey, <br />Please follow us and stay up to date.</p>
                                <div className='footer-logo'>
                                    <img src={footerlogo}></img>
                                </div>
                                <div class="socialfoot">
                                    <ul>
                                        <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-youtube-play fb"></i></span></a></li>
                                        <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-linkedin fb"></i></span></a></li>
                                        <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-paper-plane fb"></i></span></a></li>
                                        <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-skype fb"></i></span></a></li>
                                        <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-instagram fb"></i></span></a></li>
                                        <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-facebook-square fb"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='copy-wright'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12 col-xxl-12'>
                        <p>© 2022 Social-e. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer