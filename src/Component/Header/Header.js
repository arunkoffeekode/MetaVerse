import React from 'react'
import './Header.css'
import logo from '../../img/logo.png'
import { useEffect } from "react";
function Header() {
    useEffect(() => {
        window.onscroll = function () { myFunction() };

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }, [])
    return (
        <div>
            <div className='container-fluid' >
                <div id="navbar">
                    <div className='row'>

                        <div className='col-lg-12'>
                            <div className='row' style={{ alignItems: 'center' }}>
                                <div className='col-lg-2 col-2 col-md-6'>
                                    <div className='logo-section'>
                                        <a href='#'><img src={logo} alt="Logo" title='Logo'></img></a>
                                    </div>
                                </div>
                                <div className='col-lg-10 col-10 col-md-6'>
                                    <div className='right-sec'>
                                        <ul>
                                            <li>
                                                <a href='#'>launch app</a>
                                            </li>
                                            <li>
                                                <a href='#'>Log in</a>
                                            </li>
                                            <li>
                                                <a href='#' className='ico'><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header