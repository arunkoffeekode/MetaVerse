
import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import cloud from '../../img/cloud.png'
import cloud1 from '../../img/cloud-1.png'
import cloud2 from '../../img/cloud-2.png'
import cloud3 from '../../img/cloud-3.png'
import cloud4 from '../../img/cloud-4.png'
import slider5 from '../../img/slider-5.png'
import './Slider1.css'
function Slider1() {
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
      <section className='social-slider-chat'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-xl-12 col-xxl-12 col-sm-12'>
                        <OwlCarousel className='owl-carousel owl-theme' loop items={1} nav autoplay={true} {...options1}>

                            <div class="item">
                                <div className='social-box-chat'>
                                    <div className='ctr'>
                                    <img src={cloud} alt="" />
                                    </div>
                                   
                                    <h6>Security and safety</h6>
                                    <div className='slider-item-details'>
                                        <p>Lorem ipsum dolor sit amet consectetur. Urna in tellus suspendisse ut sollicitudin quis. Viverra ac velit urna leo sodales viverra arcu enim. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div className='social-box-chat'>
                                <div className='ctr'>
                                    <img src={cloud1} alt="" />
                                    </div>
                                    <h6>Conection</h6>
                                    <div className='slider-item-details'>
                                        <p>Lorem ipsum dolor sit amet consectetur. Urna in tellus suspendisse ut sollicitudin quis. Viverra ac velit urna leo sodales viverra arcu enim. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div className='social-box-chat'>
                                <div className='ctr'>
                                    <img src={cloud2} alt="" />
                                    </div>
                                    <h6>Technology</h6>
                                    <div className='slider-item-details'>
                                        <p>Lorem ipsum dolor sit amet consectetur. Urna in tellus suspendisse ut sollicitudin quis. Viverra ac velit urna leo sodales viverra arcu enim. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div className='social-box-chat'>
                                <div className='ctr'>
                                    <img src={cloud3} alt="" />
                                    </div>
                                    <h6>Plan your visit</h6>
                                    <div className='slider-item-details'>
                                        <p>Lorem ipsum dolor sit amet consectetur. Urna in tellus suspendisse ut sollicitudin quis. Viverra ac velit urna leo sodales viverra arcu enim. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div className='social-box-chat'>
                                <div className='ctr'>
                                    <img src={cloud1} alt="" />
                                    </div>
                                    <h6>Meet your avatar</h6>
                                    <div className='slider-item-details'>
                                        <p>Lorem ipsum dolor sit amet consectetur. Urna in tellus suspendisse ut sollicitudin quis. Viverra ac velit urna leo sodales viverra arcu enim. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div className='social-box-chat'>
                                <div className='ctr'>
                                    <img src={cloud4} alt="" />
                                    </div>
                                    <h6>spend fantasy in the garden</h6>
                                    <div className='slider-item-details'>
                                        <p>Lorem ipsum dolor sit amet consectetur. Urna in tellus suspendisse ut sollicitudin quis. Viverra ac velit urna leo sodales viverra arcu enim. </p>
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

export default Slider1