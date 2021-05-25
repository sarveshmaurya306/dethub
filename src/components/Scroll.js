import React, { useEffect } from 'react'
import './Scroll.css'
import AOS from 'aos';
import "aos/dist/aos.css"


function Scroll({ images }) {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    },[])
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} data-aos="fade-up">

            {
                images?.map(url => {
                    return (
                        <span className="main_card">
                            <img src={url} alt="img" height="350" />
                            <span className="card_content">
                                Why does the world need another design agency?
                                </span>
                        </span>
                    )
                })
            }

            <br />
            <br />

        </div>
    )
}

export default Scroll
