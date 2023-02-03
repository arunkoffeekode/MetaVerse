import React from 'react'
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
function AppSection() {
  return (
    <div>

      <section className="app c-section">
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
                    <Bounce left>
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
                    </Bounce>
                  </div>
                  <div className='col-lg-5 col-md-6 col-xl-5 col-xxl-5 col-sm-12'>
                    <Flip right>
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
                    </Flip >
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

export default AppSection