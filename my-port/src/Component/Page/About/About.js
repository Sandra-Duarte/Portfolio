import React from 'react'
import "./About.css"
import {TbCloudDownload} from "react-icons/tb";
import Sandra from  "../sandra.jpg"



const About = () => {
  return (
  <section id="about" className='about sectionContainer'>
 About Componenent
 <div className='sectionTitle'>
  <span className='titleNumber'> 01.</span>
  <h5 className='titleText'> About Me
  <div className='underline'><span></span></div>
  </h5>

 </div>
<div className='sectionContent grid'>
  <div className='textSection'>
    <h4>Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
      <br/>
      Strapi is an open-source headless CMS based on Node.js, where you can host and manage content. Strapi supports Jamstack technology, and it is easy to serve content to the front-end across different platforms via restful API calls. Strapi has made it easy for developers to manage their application content without writing complex code.<br/>
      React is also an open-source JavaScript front-end framework for creating interactive user interfaces. React allows developers to create reusable components that, when combined, form the entire application user interface.
    </h4>
    <div className='aboutBtn'>
      <a href = "Sandra Duarte.pdf" download="Sandra Duarte.pdf" className="flex">
        Download CV<TbCloudDownload className="icon"/>
      </a>
    </div>
 </div>
 <div className='aboutImgDiv'>
  <img src={Sandra} alt="sandra" className='aboutImg'/>
 </div>
</div>

  </section>
  )
}

export default About;