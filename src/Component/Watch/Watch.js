import React from 'react'

import Bounce from 'react-reveal/Bounce';
function Watch() {
    return (
        <div>

            <section className='watch-now c-section'>
                {/* <model-viewer src="images/Character-standing.glb" alt="VR Headset" auto-rotate  ar ios-src="images/Character-standing.glb" style={{width:'100%',height:'100vh'}}></model-viewer> */}
                <div className='container'>

                    <Bounce right>
                        <div className='row justify-content-center'>
                            <div className='col-lg-8 col-xl-8 col-xxl-8 col-md-8 col-sm-12'>
                                <div className='watch-title cursor-scale'>
                                    <strong>JOIN US</strong>   TO GET <strong>INCREDIBLE</strong>  DATING <strong>EXPERIENCE</strong>  IN NEW ERA OF <strong>METAVERSE</strong>
                                </div>
                            </div>
                        </div>
                    </Bounce>
                    <Bounce left>
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
                    </Bounce>
                </div>
            </section>

        </div>
    )
}

export default Watch