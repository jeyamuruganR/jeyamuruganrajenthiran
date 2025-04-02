import React, { useEffect, useRef } from 'react'


const About = () => {

  const imgref = useRef(null);
  const Contentref = useRef(null);

  

  useEffect(() =>{
      if(location.pathname === "/jeyamuruganrajenthiran/about"){

        imgref.current.style.animationName ="imgref";
        imgref.current.style.animationDuration = "2s";
        imgref.current.style.animationFillMode = "forwards"; 
        imgref.current.style.opacity = "0";

        Contentref.current.style.animationName ="Contentref";
        Contentref.current.style.animationDuration = "2s";
        Contentref.current.style.animationFillMode = "forwards"; 
        Contentref.current.style.opacity = "0";

      }


  },[])
  return (
    <section id="about">
   
      <div className="container">
        <div className="heading"><h1>ABOUT</h1></div>
        <div className="inner_container">
            
            <div className="content">
              <div className="img" ref={imgref}></div>
              <div className="text" ref={Contentref}>
                <h2>Hi, I'm Jeyamurugan Rajenthiran</h2>
                <p>I am a passionate web developer with a strong foundation in HTML, CSS, and JavaScript. I have a keen interest in creating dynamic and responsive web applications that provide an excellent user experience. I am constantly learning and exploring new technologies to enhance my skills and stay updated with the latest trends in web development.</p>
                <p>My goal is to build innovative and efficient solutions that solve real-world problems. I enjoy collaborating with teams and contributing to projects that make a positive impact.</p>
                <p>Feel free to reach out to me for any opportunities or collaborations!</p>
                <p>Thank you for visiting my portfolio!</p>
                <p>Best regards,</p>
                <p>Jeyamurugan Rajenthiran</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
