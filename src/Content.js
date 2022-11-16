import {FaGithubSquare, FaLinkedin, FaRegFileAlt} from 'react-icons/fa';
import {Link} from 'react-scroll';

import './Content.css';

function Content() {

    return (
        <div>
          <div id="content-top" className="content">
            <p>
              Hi, nice to meet you! I'm
            </p>
            <h1 className="content-header">
                Rachel White
            </h1>
            <h2 className="content-slogan">
                Web &amp; App developer
            </h2>
            <p>
              After finishing my Bachelor's in 2015 I worked in fisheries data research for 5 years.
            </p>
            <p>
            I wanted a change so I went to TAFE to study programming where I discovered an interest in the creative side of web &amp; application development.
            </p>
            <p>
              I am a hard worker, adaptable to many different workplaces. 
              My friendly demeanor and calm presence even when under pressure allows for smooth teamwork and great client service.
            </p>
            <p>Scroll down to explore my <Link to="portfolio" smooth={true} duration={500}>portfolio</Link></p>
            <div className="connect">
              <button><a href='https://github.com/rae-el'><FaGithubSquare/></a></button>
              <button><a href='https://www.linkedin.com/in/rachel-white-5470b4102/'><FaLinkedin/></a></button>
              <button><a href='https://drive.google.com/file/d/1SfaBvTOrEvwz8btVMvobGl_dRbdAntLD/view?usp=sharing'><FaRegFileAlt/></a></button>
            </div>
          </div>
        </div>
        )
}
export default Content
 