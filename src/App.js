import Footer from "./Component/Footer/Footer";
import Sole from "./Component/SoleSection/Sole";
import gsap from "gsap";
import { useEffect } from "react";
import Header from "./Component/Header/Header";
import Login from "./Component/Login/Login";
import Topslider from "./Component/TopSlider/Topslider";
import SocialSlider from "./Component/SliderSocial/SocialSlider";
import Slider1 from "./Component/Chatslider/Slider1";
import Watch from "./Component/Watch/Watch";
import AppSection from "./Component/App/AppSection";
import Subscribe from "./Component/Subscribe/Subscribe";
import ThreeDslider from "./Component/ThreeDslider/ThreeDslider";
import Avtar from "./Component/Avtar/Avtar";

function App() {

  // cursor start
  useEffect(() => {
    let cursor = document.querySelector('.cursor');
    let cursorScale = document.querySelectorAll('.cursor-scale');
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          }
        })
      }
    });

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    })

    cursorScale.forEach(link => {
      link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if (link.classList.contains('small')) {
          cursor.classList.remove('grow');
          cursor.classList.add('grow-small');
        }
      });

      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
      });
    })
  }, [])

  return (
    <>
      <div class="cursor"></div>

      <main class="c-main">
        {/* <ThreeDslider/> */}
        <Topslider></Topslider>
        <Header></Header>
        {/* <Avtar></Avtar> */}
        <SocialSlider></SocialSlider>
        <Watch></Watch>
        <Slider1></Slider1>
        <AppSection></AppSection>
        <Sole></Sole>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
