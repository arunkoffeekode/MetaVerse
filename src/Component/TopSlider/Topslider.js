import React from 'react'
import './TopSlider.css'
import Fade from 'react-reveal/Fade';
function Topslider() {

    return (
        <div>

            <div id="video-carousel-example2" class="carousel slide carousel-fade" data-ride="carousel">


                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">

                        <div class="view hm-black-strong">
                            <video width="100%" class="elVideo" loop="loop" autoPlay playsInline muted src="images/animate.mp4" id='video-slider-1'>
                            </video>
                            <div class="mask"></div>
                        </div>


                        <div class="carousel-caption col-lg-4">
                            {/* <Fade bottom big>
                                <div class="animated fadeInDown">
                                    <ul>
                                        <li>
                                            <h1 class="h1-responsive cursor-scale">VR Dating App
                                                for the
                                                Metaverse</h1></li>

                                    </ul>
                                </div>
                            </Fade> */}
                            <Fade bottom big>
                                <div class="animated fadeleft">
                                    <ul>
                                        <li>
                                            <h2 class="h1-responsive cursor-scale">Now Get The
                                                <strong> Real Dating </strong>
                                                Experience </h2></li>

                                        <li>
                                            <button href="#" class="explore">Explore</button>
                                            <button href="#" class="more">Learn More</button>
                                        </li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>

                    </div>


                    <div class="carousel-item">

                        <div class="view hm-black-light">
                            <img src='images/slide-2.png' class="w-100" id='video-slider-1'></img>
                            {/* <video width="100%" class="elVideo" loop="loop" autoPlay playsInline muted src="https://video.wixstatic.com/video/2b2e29_67857aa3bb16417ea7909ddc8d01b6e0/720p/mp4/file.mp4" id='video-slider-1'></video> */}
                            <div class="mask"></div>
                        </div>


                        <div class="carousel-caption col-lg-4">
                            <Fade bottom big>
                                <div class="animated fadeInDown">
                                    <ul>
                                        <li>
                                            <h1 class="h1-responsive cursor-scale">Hi, <strong> first </strong>  time at
                                                <strong> World </strong>?</h1>
                                        </li>
                                        <li>
                                            <p className='cursor-scale small'>Take your friendships to a whole new level! Chat with your friends in interactive virtual rooms and meet new people from all over the world.</p>
                                        </li>

                                    </ul>
                                </div>
                            </Fade>
                        </div>

                    </div>
                    <div class="carousel-item">

                        <div class="view hm-black-strong">
                            <img src='images/slide-3.png' class="w-100" id='video-slider-1'></img>
                            <div class="mask"></div>
                        </div>


                        <div class="carousel-caption col-lg-4">
                            <Fade bottom big>
                                <div class="animated fadeInDown">
                                    <ul>
                                        <li>
                                            <h1 class="h1-responsive cursor-scale">VR <strong> Dating App </strong>
                                                for the
                                                <strong> Metaverse </strong> </h1></li>

                                    </ul>
                                </div>
                            </Fade>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Topslider