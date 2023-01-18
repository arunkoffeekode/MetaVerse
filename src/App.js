import Footer from "./Component/Footer/Footer";
import Sole from "./Component/SoleSection/Sole";
import gsap from "gsap";
import { useEffect } from "react";
import Header from "./Component/Header/Header";
import Login from "./Component/Login/Login";
function App() {

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
      {/* <Sole></Sole> */}
      {/* <Header></Header> */}
      <Login></Login>
      <main class="c-main">
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
