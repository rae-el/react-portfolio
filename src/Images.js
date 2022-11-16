import React from 'react'
import './Images.css' 
import fish from './images/pexels-asim.jpg'
import computer from './images/computer3.jpg'
import handshake from './images/handshake.jpg'

function Images(){
    return(
        <div>
            <div className="images">
                    <div className="pic1">
                        <img id="fish" src={fish} alt="fish"/>
                        <div className='picText'>
                            <p>5 years of fisheries research</p>
                        </div>
                    </div>
                <div className="pic2">
                    <img id="computer" src={computer} alt="computer"/>
                    <div className='picText'>
                        <p>Bachelor of Science</p>
                        <p>Cert IV in Advanced Programming</p>
                        <p>Diploma in Back End Web Development</p>
                    </div>
                </div>
                <div className="pic3">
                    <img id="handshake" src={handshake} alt="handshake"/>
                    <div className='picText'>
                        <p>Ready to dive into industry!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Images