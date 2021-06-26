import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"
import Navbar from './components/Navbar';
import Scroll from './components/Scroll'
import Footer from './components/Footer'
import vdo from "./Pexels Videos 946147.mp4"
import './App.css'

const images = [
  "https://images.ctfassets.net/b62jgkkofmz2/3vqmAu6CHwYEIrBpPFR45/2683e3dd64de4de5c36adea9bc3c6e0e/logo-construction-blog-thumbnails.png?w=1000&h=1000&q=100&fm=webp",
  "https://images.ctfassets.net/b62jgkkofmz2/3EEniwFhvVivYOBi7xMS9B/1c57f3d06d6383f690400c034d264bf0/why-the-rebrand-5-whys-blog-thumbnails.png?w=1000&h=1000&q=100&fm=webp",
  "https://images.ctfassets.net/b62jgkkofmz2/3vqmAu6CHwYEIrBpPFR45/2683e3dd64de4de5c36adea9bc3c6e0e/logo-construction-blog-thumbnails.png?w=1000&h=1000&q=100&fm=webp",
  
]


function App() {
  const [isscroll, setIsscroll] = useState(0);
  useEffect(() => {
    AOS.init({
      duration:500,
    });
  }, [])

  //listening scrll


  useEffect(() => {
    const x = () => {
      if (window.pageYOffset > 40)
        setIsscroll(1);
      else
        setIsscroll(0);
    };
    window.addEventListener("scroll", x, { passive: true });

    return () => window.removeEventListener("scroll", x);
  }, []);

  return (
    <div style={{
      backgroundColor: "#19191C",
    }}>
      
      <div style={{ height: '80vh' }}>
        <Navbar scrolled={isscroll} />
        <div className="container d-flex " data-aos="fade-up" style={{ justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
          <span className="content">Great Ideas</span>
          <span className="content gray">Deserve Great Products</span>
        </div>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '40px 40px 0px 0px',
        padding: 25
      }} >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 invisible"></div>
            <div data-aos="fade-up" className="col-12 col-lg-6" style={{ margin: '16rem 0px' }}>
              <h2 style={{
                letterSpacing: ' -0.05em',
                fontSize: '4.5vw',
              }}>Strategic UX Design & Brand Studio.</h2>
              <p className="gray" style={{ fontSize: '2rem' }}>We help entrepreneurs and businesses achieve ambitious dreams by building design centric products and brands.</p>
            </div>
          </div>
          {/* //start mid */}
          <div className="row">
            <h3 className="col-4" style={{ fontSize: '2.1rem' }}>Featured Work. </h3>
            <span className="col-8 d-lg-inline d-none" > <hr style={{ borderTop: '2px solid  rgb(148, 150, 169)' }} /></span>
          </div>

          {/* //middle content */}
          <div className="row">

            <span className="col-12 col-md-5" data-aos="fade-up">
              <div className="mt-4">
                <img src="https://images.ctfassets.net/b62jgkkofmz2/6JGmTe13I2f9bNnXptsos0/c6c78158d3395686edbbeb2566abe7e5/zyppysCaseStudyCardBanner_2x.png?w=954&h=1292&q=100" alt="img" className="img-fluid responsive_image " />
              </div>
              <br />
              <span className="row">
                <span className="col-12 col-5">
                  <img src="https://images.ctfassets.net/b62jgkkofmz2/53QqxmKvGdR14P2C8z3q2X/805effeb1876ec61214663bd80684fde/logo-with-text.svg" alt="logo" width="110px" />
                  <p className="mt-2 gray" >Building India's first ever rental car marketplace</p>
                </span>
              </span>
            </span>
            <span className="col-12 col-md-7" data-aos="fade-up">
              <video src={vdo} muted={true} loop={true} autoPlay={true} className="col-12 animate" style={{ marginTop: 60, padding: 0, borderRadius: 15 }}></video>
              <br />
              <span className="row">
                <span className="col-12 col-5">
                  <img src="https://images.ctfassets.net/b62jgkkofmz2/4taqxDkC14IjVNKhbVkYE8/aa3814a58b3a976dd293b4b581b08a6c/black.svg" alt="logo" width="90px" />
                  <p className="mt-2 gray" >A decade old news channel's makeover</p>
                </span>
              </span>
            </span>
          </div>

        </div>
      </div>
      {/* //brains */}
      <div style={{backgroundColor: 'whitesmoke' }}>
        <div className="container" >
          <div style={{ padding: '8rem 0px' }}>
            <h1 className="display-4" style={{ fontWeight: 'bolder' }} data-aos="fade-up">Pick Our Brains</h1>
            <p className="gray" style={{ fontSize: '2rem' }} data-aos="fade-up">News, Blogs, Good Intentions etc.</p>
          </div>
          <div style={{ padding: '0px 0px 8rem 0px' }}>
            <Scroll images={images} />
          </div>
        </div>
      </div>
      
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0px 0px 40px 40px ',
        padding: 25
      }} >
        <div className="container">
          <div style={{ padding: '8rem 0px' }}>
            <svg height="61" viewBox="0 0 72 61" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M-147-5271h1440v6532H-147z"></path><path d="M17.429 34.776C7.803 34.776 0 26.99 0 17.388 0 7.785 7.803 0 17.429 0c9.625 0 17.428 7.785 17.428 17.388 0 9.603-7.803 17.388-17.428 17.388zm50.364-6.418l.034.034-32.584 32.583-10.792-10.792L44.524 30.11c-.319-.274-.63-.562-.933-.865-6.457-6.457-6.476-16.906-.043-23.34 6.434-6.433 16.883-6.414 23.34.043 6.155 6.154 6.46 15.936.905 22.41z" fill="#33343E"></path></g></svg>
            <p className="gray" style={{ fontSize: '2rem' }}>Lesser bullshit leads to larger impact.</p>
            
              <button className="slide">Know More About Us</button>
            
          </div>
        </div>
      </div>

      {/* //footer */}
      <Footer />
      {/* <div style={{ padding: '4rem 0px' }}> */}

      {/* </div> */}
    </div>
  )
}

export default App
