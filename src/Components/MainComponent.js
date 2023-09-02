import React, {useEffect , useState, useRef} from 'react'
import '../Styles.css'
import '../fonts/WixMadeforDisplay-Bold.ttf';
import '../fonts/WixMadeforDisplay-ExtraBold.ttf';
import '../fonts/WixMadeforDisplay-Medium.ttf';
import '../fonts/WixMadeforDisplay-Regular.ttf';
import '../fonts/WixMadeforDisplay-SemiBold.ttf'
import divi from '../icons/div.png'
import coder from '../icons/Astro.jpg'
import port1 from '../icons/portfolio-widget1.jpg'
import port2 from '../icons/portfolio-widget2.jpg'
import astro  from '../icons/Astroo.jpg'
import open from '../icons/open.png'
import menu from '../icons/menu.png'

function MainComponent() {

    /* Dropdown Menu */
        const [isOpen , setIsOpen] = useState(false);
    
        const menuOptions = [
            {id:1, about: 'About'},
            {id:2, github : 'Github'},
            {id:3, project : 'Project'},
            {id:4, linkedin : 'Linkedln'},
            {id:5, skills : 'Skills'},
        ];

    /* Skills count component */

    const [count , setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            
           setCount(prevCount => prevCount < 90 ? prevCount + 1 : prevCount )

        }, 18);
        return () => clearInterval(interval)
    }, [])

    const [count2 , setCount2] = useState(0)

    useEffect(() => {
       const interval2 = setInterval(() => {
            
        setCount2(prevCount => prevCount < 75 ? prevCount + 1 : prevCount)

       }, 22); 
       return () => clearInterval(interval2)
    },[])

    const [count3 , setCount3] = useState(0)

    useEffect(() => {
       const interval2 = setInterval(() => {
            
        setCount3(prevCount => prevCount < 54 ? prevCount + 1 : prevCount)

       }, 30); 
       return () => clearInterval(interval2)
    },[])

    const [count4 , setCount4] = useState(0)

    useEffect(() => {
       const interval2 = setInterval(() => {
            
        setCount4(prevCount => prevCount < 50 ? prevCount + 1 : prevCount)

       }, 30); 
       return () => clearInterval(interval2)
    },[])

    /* Project background img*/

    const Projectbg = {
        backgroundImage : `url(${port1})`,
        backgroundPosition : 'center',
        backgroundSize : 'cover',
        boxShadow: '4px 1px 14px black',
    }

    const projectbg2 = {
        backgroundImage : `url(${port2})`,
        backgroundPosition : 'center',
        backgroundSize : 'cover',
        boxShadow: '4px 1px 14px black',
    }

  return (
    <div className = 'Astroo'>
    <div className = 'Main-container p-4 container-fluid'>
        <div className='navbar main-nav d-flex' >
            <div className = 'd-flex nav-wrapper'>
                <span id = 'rnavbrand' className = 'navbrand d-flex'>
                    <h6>
                    Unwana Michael
                    </h6>
                </span>
                <div className = 'd-flex p-1 right-nav-widget'>
                    <div className = 'dropdown-wrapper' onClick = {() => setIsOpen(!isOpen)}>
                        <span className = 'dropdown-widget'>
                          <img src = { menu} className = 'menupng'/>
                        </span>
                        {isOpen && (
                            <div className = 'Dropdown-menu'>
                                <ul className = 'Dropdown-list-wrapper'>
                                    {menuOptions.map(option => (
                                        <div className = 'd-flex Dropdown-list'>
                                           <li className = 'list-text' key = {option.id}>
                                             <a href = '#about'>
                                              {option.about}
                                            </a>
                                             <a href = 'https://github.com/godszn' target ='_blank' >
                                              {option.github}
                                            </a>
                                             <a href = '#project'>
                                              {option.project}
                                            </a>
                                             <a  href = 'https://www.linkedin.com/in/unwana-michael-30644025b'
                                              target = '_blank'>
                                              {option.linkedin}
                                            </a>
                                             <a href = '#skills'>
                                              {option.skills}
                                            </a>
                                            </li>
                                        </div>
                                    ))}
                                </ul>
                                <button className = 'btn Dropdown-button' onClick = {() => setIsOpen(isOpen)}>
                                    <a>
                                      close
                                    </a>
                                    </button>
                            </div>
                        )}
                    </div>
                   <div id = 'rnav' className = 'd-flex right-nav-links'>
                        <div className = 'd-flex link-wrapper'>
                        <a href = '#about'>About</a>
                        </div>
                        <div className = 'd-flex link-wrapper'>
                        <a href = 'https://github.com/godszn' target ='_blank'>Github</a>
                        </div> 
                        <div className = 'division'>
                        <img src = {divi} className = 'div' />
                        </div>
                        <div className = 'd-flex link-wrapper'>
                        <a href = '#projects'>Projects</a>
                        </div>
                        <div className = 'd-flex link-wrapper'>
                        <a href = 'https://www.linkedin.com/in/unwana-michael-30644025b' target = '_blank' >Linkedln</a>
                        </div>
                        <div className = 'd-flex link-wrapper'>
                        <a href = '#skills' >Skills</a>
                        </div>
                    </div>
                </div>
                <div className = 'd-flex hire-btn btn'>
                   <a href = '#connect'>
                     Let's - Connect
                   </a>
                </div>
            </div>
        </div>
         <div id ='about' className = 'd-flex developer-wrapper'>
            <div className = 'd-flex heading-wrapper p-2'>
                <span className = 'd-flex heading'>
                    <h2 className = 'show-headers' >
                        Hey, I'm Unwana
                    </h2>
                </span>
                <h2 className = 'show-headers'>
                    and I'm a frontend developer.
                </h2>
                <div className = 'd-flex about'>
                    <a className = 'show-paragraph'>
                        As a junior developer with skills in HTML, CSS, JavaScript, and Bootstrap, 
                        I bring a solid foundation in frontend development to any team.
                         I have experience in creating visually appealing and responsive web interfaces using these technologies.
                         While my knowledge of React is currently limited, I am eager to expand my skills and learn more about this popular frontend framework.
                          I am a quick learner and dedicated to staying up-to-date with the latest industry trends and best practices.
                           With a passion for clean code and attention to detail,
                            I am committed to contributing to the success of projects and continuously improving my abilities as a frontend developer.
                    </a>
                </div>
            </div>
        </div>
        <div id ='skills' className = 'd-flex p-3 Progress-section'>
            <section className = 'd-flex skills-headline'>
                <h3 className = 'show-headers'>
                    Skills
                </h3>
                <a className = 'show-paragraph'>
                  As a frontend developer, i possess a range of skills including proficient knowledge of HTML5, CSS3,
                  and JavaScript. I am skilled in developing dynamic user interfaces using React and have experience
                  with CSS frameworks.    
                </a>
            </section>
            <div id = 'rprogress' className = 'd-flex progress-wrapper'>
                <div className = 'p-1 d-flex Skills-wrapper'>
                    <div className = 'skills'>
                        <div className = 'd-flex inner-skills'>
                            <div className = 'number'>
                                    {count + '%'}
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000svg" version="1.1" width="120px" height="120px">
                        <defs>
                            <linearGradient id= "GradientColor">
                                <stop offset="0%" stop-color="#e91e63"/>
                                <stop offset="100%" stop-color="#673ab7"/>
                            </linearGradient>
                        </defs>
                        <circle cx="60" cy="60" r="50" stroke-linecap="round" />
                    </svg>
                    <div className = 'd-flex p-1 skill-header'>
                        <h5>
                            HTML
                        </h5>
                    </div>
                </div>
                <div className = 'd-flex p-1 Skills-wrapper'>
                    <div className = 'skills'>
                        <div className = 'd-flex inner-skills'>
                            <div className = 'number'>
                                    {count2 + '%'}
                            </div>
                        </div>
                    </div>
                        <svg xmlns="http://www.w3.org/2000svg" version="1.1" width="120px" height="120px">
                            <defs>
                                <linearGradient id= "GradientColor">
                                    <stop offset="0%" stop-color="#e91e63"/>
                                    <stop offset="100%" stop-color="#673ab7"/>
                                </linearGradient>
                            </defs>
                            <circle className = 'circle2' cx="60" cy="60" r="50" stroke-linecap="round" />
                        </svg>
                    <div className = 'd-flex p-1 skill-header'>
                        <h5>
                            CSS
                        </h5>
                    </div>   
                </div>
                <div className = 'd-flex p-1 Skills-wrapper'>
                    <div className = 'skills'>
                        <div className = 'd-flex inner-skills'>
                            <div className = 'number'>
                                    {count3 + '%'}
                            </div>
                        </div>
                    </div>
                        <svg xmlns="http://www.w3.org/2000svg" version="1.1" width="120px" height="120px">
                            <defs>
                                <linearGradient id= "GradientColor">
                                    <stop offset="0%" stop-color="#e91e63"/>
                                    <stop offset="100%" stop-color="#673ab7"/>
                                </linearGradient>
                            </defs>
                            <circle className = 'circle3' cx="60" cy="60" r="50" stroke-linecap="round" />
                        </svg>
                    <div className = 'd-flex p-1 skill-header'>
                        <h5>
                            JAVASCRIPT
                        </h5>
                    </div>
                </div>
                <div className = 'd-flex p-1 Skills-wrapper'>
                    <div className = 'skills'>
                        <div className = 'd-flex inner-skills'>
                            <div className = 'number'>
                                    {count4 + '%'}
                            </div>
                        </div>
                    </div>
                        <svg xmlns="http://www.w3.org/2000svg" version="1.1" width="120px" height="120px">
                            <defs>
                                <linearGradient id= "GradientColor">
                                    <stop offset="0%" stop-color="#e91e63"/>
                                    <stop offset="100%" stop-color="#673ab7"/>
                                </linearGradient>
                            </defs>
                            <circle className = 'circle4' cx="60" cy="60" r="50" stroke-linecap="round" />
                        </svg>
                    <div className = 'd-flex p-1 skill-header'>
                        <h5>
                            React.JS
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        <div id = 'projects' className ='Projects-container p-2 d-flex'>
            <div className ='Projects-wrapper p-3 d-flex'>
                <section id = 'Rp-headline' className = 'd-flex p-1 m-3 Projects-headline'>
                        <h3>
                            Projects
                        </h3>
                        <a>
                              Successfully developed two Responsive clone websites using HTML, 
                              CSS and javascript with the aid of frameworks like Bootstrap.
                              Showcasing versality and proficiency in replicating established systems.
                        </a>
                </section>
                <div id = 'Rrow' className = 'row'>
                    <div className = 'Projects d-flex p-1 col' style = {Projectbg}>
                        <div className = 'text-container'>
                            <span className = 'project-text d-flex'>
                                HangoutDAO Clone
                            </span>
                        </div>
                    </div>
                    <div className = 'link-wrap'>
                        <a href = 'https://hangout-dao-clone.vercel.app' target = '_blank'>
                            HangoutDAO Clone
                        </a>
                        <img src = {open} className = 'open'/>
                    </div>
                    <div className = 'Projects d-flex p-1 col' style = {projectbg2}>
                        <div className = 'text-container'>
                            <span className = 'project-text d-flex'>
                                Netflix Clone
                            </span>
                        </div>
                    </div>
                    <div className = 'link-wrap'>
                        <a href = 'https://netflix-code.vercel.app ' target = '_blank'>
                           Netflix Clone
                        </a>
                        <img src = {open} className = 'open'/>
                      </div>
                    <div id = 'Rweb-links' className = 'd-flex web-links'>
                      <div className = 'open-link-wrapper'>
                        <a href = 'https://hangout-dao-clone.vercel.app' target = '_blank'>
                            HangoutDAO Clone
                        </a>
                        <img src = {open} className = 'open'/>
                      </div>
                      <div className = 'open-link-wrapper'>
                        <a href = ' https://netflix-code.vercel.app ' target = '_blank'>
                           Netflix Clone
                        </a>
                        <img src = {open} className = 'open'/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <form>
            <div id = 'connect' className = 'd-flex connect-container p-3'>
                <section className = 'connect-headline p-4 d-flex'>
                   <div className = 'headline-gon-gon d-flex flex-column'>
                      <h3>
                        Get In Touch
                      </h3>
                      <a>
                        Get in touch with me.
                      </a>
                   </div>
                </section>
                <div className = 'contact-widget-wrapper'>
                    <div className = 'coder-widget-wrapper'>
                        <div className = 'coder-widget'>
                            <img src = {coder} className = 'coder'/>
                        </div>
                    </div>
                    <div className = 'contact-input-wrapper d-flex'>
                        <div className = 'row'>
                            <div className = 'col-3 m-1'>
                                <input className = 'inputfield form-control' type = 'text' placeHolder = 'First name'>
                                </input>
                            </div>
                            <div className = 'col-3 m-1'>
                                <input className = 'inputfield form-control' type = 'text' placeHolder = 'Last name'>
                                </input>
                            </div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-3 m-1'>
                                <input className = 'inputfield form-control' type = 'text' placeHolder = 'Email Address'>
                                </input>
                            </div>
                            <div className = 'col-3 m-1'>
                                <input className = 'inputfield form-control' type = 'text' placeHolder = 'Phone No.'>
                                </input>
                            </div>
                        </div>
                        <textarea className = 'message form-control m-1' placeHolder = 'Message'>
                        </textarea>
                        <div className = 'btn contact-btn'>
                           <a>
                            send
                           </a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div className = 'footer-wrap'>
    <div id = 'Rfooter' className = 'footer-container p-4 d-flex '>
        <div id = 'rAstroo' className = 'd-flex Astroo-wrapper p-3'>
            <img src = {astro} className = 'footer-img'/>
            <h4>
                Unwana Michael Inyangudo
            </h4>
        </div>
    </div>
    </div>
  </div>
  )
}

export default MainComponent
