import React from 'react'
import './Sole.css'
import sole from '../../img/sole.png'
import Bounce from 'react-reveal/Bounce';
function Sole() {
    return (
        <div>

            <section className='Sole c-section'>
                <div className='container'>
                    <div className='row align'>
                        <div className='col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-sm-12'>
                            <Bounce left>
                                <div className='sole-img'>
                                    <img src={sole}></img>
                                </div>
                            </Bounce>
                        </div>
                        <div className='col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-sm-12'>
                            <Bounce right>
                                <div className='Sole-details'>
                                    <h2 class="cursor-scale">Collect your Sole?</h2>
                                    <p class="cursor-scale small">Lorem ipsum dolor sit amet consectetur. Vitae magna purus massa magna justo a sit interdum dictum. Sodales aliquet ornare a consectetur egestas nulla. Ut quis egestas iaculis eu lorem enim. Risus scelerisque.</p>
                                    <button type='button' className='sole-btn'>Get your sole</button>
                                </div>
                            </Bounce>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Sole