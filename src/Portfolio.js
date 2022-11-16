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
                                <p className='skillDesc'>WordPress</p>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaJsSquare/></div>
                                <p className='skillDesc'>JavaScript</p>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaPhp/></div>
                                <p className='skillDesc'>PHP</p>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaHtml5/></div>
                                <p className='skillDesc'>HTML</p>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaCss3/></div>
                                <p className='skillDesc'>CSS</p>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><SiLaragon/></div>
                                <p className='skillDesc'>Laragon</p>
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
                                <p className='skillDesc'>C#</p>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><SiXamarin/></div>
                                <p className='skillDesc'>Xamarin</p>
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
                                <p className='skillDesc'>Laravel</p>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaDatabase/></div>
                                <p className='skillDesc'>SQL</p>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaPhp/></div>
                                <p className='skillDesc'>PHP</p>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><SiTailwindcss/></div>
                                <p className='skillDesc'>Tailwind</p>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaUbuntu/></div>
                                <p className='skillDesc'>Ubuntu</p>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaDocker/></div>
                                <p className='skillDesc'>Docker</p>
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
                                <p className='skillDesc'>HTML</p>
                            </div>
                            <div className='skill'>
                                <div className='skillIcon'><FaCss3/></div>
                                <p className='skillDesc'>CSS</p>
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