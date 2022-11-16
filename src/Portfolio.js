import React from 'react';
import './Portfolio.css';
import realestate from './videos/realestate-sm.mp4';
import milehighyoga from './videos/milehighyoga.mp4';
import {FaCss3, FaDocker, FaHtml5, FaJsSquare, FaLaravel, FaPhp, FaUbuntu, FaWordpressSimple, FaDatabase} from 'react-icons/fa';
import {SiTailwindcss, SiLaragon, SiXamarin, SiCsharp} from 'react-icons/si';

function Portfolio(){
    return(
        <div>
            <div className="portfolio">
                <h2 id="portfolioTop">Portfolio</h2>
                <section className='underlinePortfolio'></section>
                <div id="proj1" className="proj1">
                    <div id="projVideo1">
                     <video id="realestate" src={realestate} autoPlay loop muted></video>
                    </div>
                    <div className="projText">
                        <div className='projTitle'>
                            <h2>Real Estate Website</h2>
                        </div>
                        <div className='projDesc'>
                            <p>WordPress theme developed for a client using an external API to pull real estate properties</p>
                            <p>Diploma of BackEnd Web Development, Project.</p>
                        </div>
                        <div className='skillsUsed'>
                            <div className='skill'>
                                <div className='skillIcon'><FaWordpressSimple/></div>
                                <div className='skillDesc'>WordPress</div>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaJsSquare/></div>
                                <div className='skillDesc'>JavaScript</div>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaPhp/></div>
                                <div className='skillDesc'>PHP</div>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaHtml5/></div>
                                <div className='skillDesc'>HTML</div>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaCss3/></div>
                                <div className='skillDesc'>CSS</div>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><SiLaragon/></div>
                                <div className='skillDesc'>Laragon</div>
                            </div>
                        </div>
                        <div className="projLink"><a href="https://github.com/rae-el/realestate-wordpress">GitHub Repository</a></div>
                    </div>
                </div>
                <div className="proj2">
                    <div id="projImg2"></div>
                    <div className="projText">
                        <div className='projTitle'>
                            <h2>Weather Application</h2>
                        </div>
                        <div className='projDesc'>
                            <p>Small weather application using Xamarin C# and external API</p>
                            <p>Certificate IV of Programming, Semester 2 Project.</p>
                        </div>
                        <div className='skillsUsed'>
                            <div className='skill'>
                                <div className='skillIcon'><SiCsharp/></div>
                                <div className='skillDesc'>C#</div>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><SiXamarin/></div>
                                <div className='skillDesc'>Xamarin</div>
                            </div>
                        </div>
                        <div className="projLink"><a href="https://github.com/rae-el/weather-app-xamarin">GitHub Repository</a></div>
                    </div>
                </div>
                <div className="proj3">
                    <div id="projImg3"></div>
                    <div className="projText">
                        <div className='projTitle'>
                            <h2>Laravel Website</h2>
                        </div>
                        <div className='projDesc'>
                            <p>Application built with Laravel that develops and pulls from a SQL database.</p>
                            <p>Diploma of BackEnd Web Development, Semester 1 Project.</p>
                        </div>
                        <div className='skillsUsed'>
                            <div className='skill'>
                                <div className='skillIcon'><FaLaravel/></div>
                                <div className='skillDesc'>Laravel</div>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaDatabase/></div>
                                <div className='skillDesc'>SQL</div>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaPhp/></div>
                                <div className='skillDesc'>PHP</div>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><SiTailwindcss/></div>
                                <div className='skillDesc'>Tailwind</div>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaUbuntu/></div>
                                <div className='skillDesc'>Ubuntu</div>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaDocker/></div>
                                <div className='skillDesc'>Docker</div>
                            </div>
                        </div>
                        <div className="projLink"><a href="https://github.com/rae-el/LaravelMariadbApp">GitHub Repository</a></div>
                    </div>
                </div>
                <div className="proj4">
                    <div id="projVideo4">
                        <video id="milehighyoga" src={milehighyoga} autoPlay loop muted></video>
                    </div>
                    <div className="projText">
                        <div className='projTitle'>
                            <h2>Yoga Website</h2>
                        </div>
                        <div className='projDesc'>
                            <p>Website for a yoga teacher built from base HTML and CSS.</p>
                            <p>Certificate IV of Programming, Semester 2 Project.</p>
                        </div>
                        <div className='skillsUsed'>
                            <div className='skill'>
                                <div className='skillIcon'><FaHtml5/></div>
                                <div className='skillDesc'>HTML</div>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaCss3/></div>
                                <div className='skillDesc'>CSS</div>
                            </div>
                        </div>
                        <div className="projLink"><a href="https://github.com/rae-el/website-yoga">GitHub Repository</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio