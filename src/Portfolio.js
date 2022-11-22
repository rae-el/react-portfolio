import React from 'react';
import './Portfolio.css';
import Grid from '@mui/material/Grid';
import realestate from './images/realestate.png';
import milehighyoga from './images/yoga.png';
import {FaCss3, FaDocker, FaHtml5, FaJsSquare, FaLaravel, FaPhp, FaUbuntu, FaWordpressSimple, FaDatabase} from 'react-icons/fa';
import {SiTailwindcss, SiLaragon, SiXamarin, SiCsharp} from 'react-icons/si';

function Portfolio(){
    return(
        <div>
            <div className="portfolio">
                <h2 id="portfolioTop">Portfolio</h2>
                <section className='underlinePortfolio'></section>
                <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid item xs={12} s={12} md={6} lg={6} xl={6}>
                <div id="proj1" className="proj1">
                    <div id="projVideo1">
                     <img id="realestate" src={realestate} alt="Real Estate Website Homepage"></img>
                    </div>
                    <div className="projText">
                        <div className='projTitle'>
                            <h2>Real Estate Website</h2>
                        </div>
                        <div className='projDesc'>
                            <p>An original WordPress theme which pulls real estate data through an external API, primarily written in JavaScipt with some PHP and AJAX to connect to WordPress.</p>
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
                        <button className="liveLink"><a href="https://real-estate.dev.screencraft.net.au/" target="_blank" rel="noreferrer noopener">Live</a></button>
                        <button className="projLink"><a href="https://github.com/rae-el/realestate-wordpress" target="_blank" rel="noreferrer noopener">Code</a></button>
                    </div>
                </div>
                </Grid>
                <Grid item xs={12} s={12} md={6} lg={6} xl={6}>
                <div className="proj4">
                    <div id="projVideo4">
                        <img id="milehighyoga" src={milehighyoga} alt="Yoga Website Homepage"></img>
                    </div>
                    <div className="projText">
                        <div className='projTitle'>
                            <h2>Yoga Website</h2>
                        </div>
                        <div className='projDesc'>
                            <p>Website for a yoga teacher built with base HTML and CSS</p>
                            <p>Certificate IV of Programming, Semester 2 Project</p>
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
                        <button className="liveLink"><a href="https://rae-el.github.io/website-yoga/index.html" target="_blank" rel="noreferrer noopener">Live</a></button>
                        <button className="projLink"><a href="https://github.com/rae-el/website-yoga" target="_blank" rel="noreferrer noopener">Code</a></button>
                    </div>
                </div>
                </Grid>
                <Grid item xs={12} s={12} md={6} lg={6} xl={6}>
                <div className="proj2">
                    <div id="projImg2"></div>
                    <div className="projText">
                        <div className='projTitle'>
                            <h2>Weather Application</h2>
                        </div>
                        <div className='projDesc'>
                            <p>Small weather application using Xamarin C# and an external API.</p>
                            <p>You can change locations and toggle between light and dark mode.</p>
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
                        <button className="projLink"><a href="https://github.com/rae-el/weather-app-xamarin" target="_blank" rel="noreferrer noopener">Code</a></button>
                    </div>
                </div>
                </Grid>
                <Grid item xs={12} s={12} md={6} lg={6} xl={6}>
                <div className="proj3">
                    <div id="projImg3"></div>
                    <div className="projText">
                        <div className='projTitle'>
                            <h2>Car Collector Application</h2>
                        </div>
                        <div className='projDesc'>
                            <p>Car Collector Application where you can view, add, edit, and delete cars from a database.</p>
                            <p>This app was built with Laravel that develops and pulls from a MariaDB SQL database.</p>
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
                        <button className="projLink"><a href="https://github.com/rae-el/LaravelMariadbApp" target="_blank" rel="noreferrer noopener">Code</a></button>
                    </div>
                </div>
                </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Portfolio