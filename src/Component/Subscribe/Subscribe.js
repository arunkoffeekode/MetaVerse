import React from 'react'
import man from '../../img/man.gif'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';
function Subscribe() {
    return (
        <div>

            <section className='subscribe c-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-xl-12 col-xxl-12 col-md-12 col-sm-12'>
                            <div className='subscribe-box'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-xl-6 col-xxl-6 col-sm-12'>
                                        <Bounce left>
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
                                        </Bounce>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-xl-6 col-xxl-6 col-sm-12'>
                                        <Roll right>
                                            <div className='icon-img'>
                                                <img src={man}></img>
                                            </div>
                                        </Roll >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Subscribe