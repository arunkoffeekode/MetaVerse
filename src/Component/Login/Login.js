import React from 'react'
import './Login.css'
function Login() {
    return (
        <div>
            <section className='login'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-6 col-xl-7 col-xxl-7 col-sm-12'>
                            <div className='login-desktop'>
                                <h6>Meet your new</h6>
                                <h1 className='cursor-scale'>Dating Network</h1>
                                <div className='system-section'>
                                    <img src='images/system.png' className='topBottom'></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-6 col-xl-5 col-xxl-5 col-sm-12'>
                            <div className='login-box'>
                                <div className='login-inner-box'>
                                    <h3 className='cursor-scale small'>Continue with </h3>
                                    <div className='login-btn-section'>
                                        <ul>
                                            <li>
                                                <button type='button' className='login-btn'>
                                                    <img src='images/wallete.png'></img>
                                                    Wallet</button>
                                            </li>
                                            <li>
                                                <button type='button' className='login-btn'><img src='images/google.png'></img>Google</button>
                                            </li>
                                            <li>
                                                <button type='button' className='login-btn'>
                                                    <img src='images/apple.png'></img>
                                                    Apple</button>
                                            </li>
                                            <li>
                                                <button type='button' className='login-btn'>
                                                    <img src='images/mail.png'></img>
                                                    Email</button>
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

export default Login