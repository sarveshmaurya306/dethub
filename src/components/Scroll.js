import React from 'react'
import './Scroll.css'

function Scroll({ images }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

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
