import {FaGithubSquare, FaLinkedin, FaRegFileAlt} from 'react-icons/fa';

import './Content.css';

function Content() {

    return (
        <div>
          <div className="content">
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
              After finishing my Bachelor's of Science in 2015 I worked in fisheries data research for 5 years.
            </p>
            <p>
            I wanted to enhance my skills and develop my career so I went to TAFE to study programming where I discovered an interest in the creative side of web &amp; application development.
            </p>
            <p>
              I am a hard worker, adaptable to many different workplaces. 
              My friendly demeanor and calm presence even when under pressure allows for smooth teamwork and great client service.
            </p>
            <p>Scroll down to explore my portfolio</p>
            <div className="connect">
              <button><a href='https://github.com/rae-el' target="_blank" rel="noreferrer noopener"><FaGithubSquare/></a></button>
              <button><a href='https://www.linkedin.com/in/rachel-white-5470b4102/' target="_blank" rel="noreferrer noopener"><FaLinkedin/></a></button>
              <button><a href='https://drive.google.com/file/d/1SfaBvTOrEvwz8btVMvobGl_dRbdAntLD/view?usp=sharing' target="_blank" rel="noreferrer noopener"><FaRegFileAlt/></a></button>
            </div>
          </div>
        </div>
        )
}
export default Content
 