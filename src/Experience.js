import React from 'react';
import './Experience.css';
import {FaCss3, FaHtml5, FaJsSquare, FaPhp, FaReact, FaPython} from 'react-icons/fa';
import {SiTailwindcss, SiXamarin, SiCsharp} from 'react-icons/si';

function Experience(){
    return(
        <div>
            <h2 id="experience-top">Skills</h2>
            <section className='underlineSkills'></section>
            <div className="experience">
                    <div className="exp">
                        <div className="exicon"><FaHtml5/></div>
                        <div className="exdesc">HTML</div>
                    </div>
                    <div className="exp">
                        <div className="exicon"><FaCss3/></div>
                        <div className="exdesc">CSS</div>
                    </div>
                    <div className="exp">
                        <div className="exicon"><FaJsSquare/></div>
                        <div className="exdesc">JavaScript</div>
                    </div>
                    <div className="exp">
                        <div className="exicon"><FaPhp/></div>
                        <div className="exdesc">PHP</div>
                    </div>
                    <div className="exp">
                        <div className="exicon"><FaPython/></div>
                        <div className="exdesc">Python</div>
                    </div>
                    <div className="exp">
                        <div className="exicon"><SiCsharp/></div>
                        <div className="exdesc">C#</div>
                    </div>
                    <div className="exp">
                        <div className="exicon"><FaReact/></div>
                        <div className="exdesc">React</div>
                    </div>
                    <div className="exp">
                        <div className="exicon"><SiXamarin/></div>
                        <div className="exdesc">Xamarin</div>
                    </div>
                    <div className="exp">
                        <div className="exicon"><SiTailwindcss/></div>
                        <div className="exdesc">Tailwind</div>
                    </div>
            </div>
        </div>
    )
}
export default Experience