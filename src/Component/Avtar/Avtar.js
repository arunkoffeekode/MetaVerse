import React from 'react'
import './Avtar.css'
function Avtar() {
    return (
        <div>
            <section className='avtar-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12 col-xxl-12'>
                            <div className='avtar-box'>
                                <div className='avtar-inner-box'>
                                    <div class="fp-nav">
                                        <ul>
                                            <li><a href="#panelBlock1" class="active"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                                            <li><a href="#panelBlock1" class="active"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                                            <li><a href="#panelBlock1" class="active"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                                            <li><a href="#panelBlock1" class="active"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                                            <li><a href="#panelBlock1" class="active"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                                            {/* <li><a href="#panelBlock1" class="active"><i class="fa fa-home" aria-hidden="true"></i></a></li> */}
                                        </ul>
                                    </div>
                                    <div className='avtar-courasel'>
                                        <ul>
                                            <li>
                                                <div className='courasel-inner-box'>
                                                    <img src="images/avtar.png"></img>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='courasel-inner-box'>
                                                    <img src="images/avtar.png"></img>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='courasel-inner-box'>
                                                    <img src="images/avtar.png"></img>
                                                </div>
                                            </li>
                                            
                                        </ul>


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

export default Avtar