import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import slider1 from '../../img/slider-1.png'
import slider2 from '../../img/slider-2.png'
import slider3 from '../../img/slider-3.png'
import slider4 from '../../img/slider-4.png'
import slider5 from '../../img/slider-5.png'
import './Slider.css'
function SocialSlider() {
    //Owl Carousel Settings Responsive
    const options1 = {
        loop: true,
        dots: false,
        items: 1,
        // stagePadding: 150,
        stageElement: 'div',
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        center: true,
        smartSpeed: 1030,
        responsiveClass: true,
        // navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navigation: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 20,
                nav: true,
            },
            600: {
                items: 2,
                stagePadding: 50,
                nav: true,
            },
            1000: {
                items: 3,
                stagePadding: 150,
                nav: true,
                loop: true,
            },

        },
    };

    return (
        <div>
            <section className='social-slider'>
                <div className='row justify-content-center'>
                    <div className='col-lg-7 col-md-8 col-xl-7 col-xxl-7 col-sm-12'>
                        <div className='slider-title'>
                            <h1>Enter into a massive
                                social experience.</h1>
                            <p>Social-e is a Decentralized Dating App, as a part of Social-e Dating Network. With great technological advantage and an AI driven system, Social-e aims to be the Top Dating App and Network in the World.</p>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12'>
                        <OwlCarousel className='owl-carousel owl-theme' loop items={1} nav autoplay={true} {...options1}>

                            <div class="item">
                                <div className='social-box'>
                                    <img src={slider1} alt="" />
                                    <div className='slider-item-details'>
                                        <h6>spend fantasy in the garden</h6>
                                        <p>Going to a park and doing something together is one of the most beautiful days.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div className='social-box'>
                                    <img src={slider2} alt="" />
                                    <div className='slider-item-details'>
                                        <h6>spend fantasy in the garden</h6>
                                        <p>Going to a park and doing something together is one of the most beautiful days.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div className='social-box'>
                                    <img src={slider3} alt="" />
                                    <div className='slider-item-details'>
                                        <h6>spend fantasy in the garden</h6>
                                        <p>Going to a park and doing something together is one of the most beautiful days.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div className='social-box'>
                                    <img src={slider4} alt="" />
                                    <div className='slider-item-details'>
                                        <h6>spend fantasy in the garden</h6>
                                        <p>Going to a park and doing something together is one of the most beautiful days.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div className='social-box'>
                                    <img src={slider5} alt="" />
                                    <div className='slider-item-details'>
                                        <h6>spend fantasy in the garden</h6>
                                        <p>Going to a park and doing something together is one of the most beautiful days.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div className='social-box'>
                                    <img src={slider1} alt="" />
                                    <div className='slider-item-details'>
                                        <h6>spend fantasy in the garden</h6>
                                        <p>Going to a park and doing something together is one of the most beautiful days.</p>
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SocialSlider