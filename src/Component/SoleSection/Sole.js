import React from 'react'
import './Sole.css'
import sole from '../../img/sole.png'
function Sole() {
    return (
        <div>
            <section className='Sole'>
                <div className='container'>
                    <div className='row align'>
                        <div className='col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-sm-12'>
                            <div className='sole-img'>
                                <img src={sole}></img>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-sm-12'>
                            <div className='Sole-details'>
                                <h2>Collect your Sole?</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Vitae magna purus massa magna justo a sit interdum dictum. Sodales aliquet ornare a consectetur egestas nulla. Ut quis egestas iaculis eu lorem enim. Risus scelerisque.</p>
                                <button type='button' className='sole-btn'>Get your sole</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sole