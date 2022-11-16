import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Images from './Images';
import Portfolio from './Portfolio';
import Experience from './Experience';

import {BsFillSunFill, BsFillMoonStarsFill, BsToggleOff, BsToggleOn} from 'react-icons/bs';


function App() {
    
  const [mood, setMood] = useState(false)
  const changeMood = () => setMood(!mood)

  return (
    <div className={!mood ? 'heroDark' : 'heroLight'}>
      <Header/>
      <div className='moodIcon' onClick={changeMood}>
        <div className='toggle'>{!mood ? <BsToggleOn/> : <BsToggleOff/>}</div>
        <div className='sunmoon'>{!mood ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}</div>
      </div>
      <div className="headerSection">
        <Content/>
      </div>
      <div className='images'>
        <Images/>
      </div>
      <div className='portfolioSection'>
        <Portfolio/>
      </div>
      <div className='experienceSection'>
        <Experience/>
      </div>
      <div className='footerSection'>
      </div></div>      
  );
}

export default App;
