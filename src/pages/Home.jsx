import React, { useRef,useEffect } from 'react'

import '../styles/Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faJava, faReact} from "@fortawesome/free-brands-svg-icons"
import { faPython } from '@fortawesome/free-brands-svg-icons';
import {faJsSquare} from '@fortawesome/free-brands-svg-icons'
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
// import {fa}
import { Link } from 'react-router';
const Home = () => {
  
  const reurl = "./assets/jeyamuruganrajendiran_resume.docx";




  
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);

  const firstRef = useRef(null);
  const nameref = useRef(null);
  const posref = useRef(null);
  const pearref = useRef(null);
  const put1 = useRef(null);
  const put2 = useRef(null);
  
  const divs = Array.from({ length: 500 }, (_, index) => (
    <div key={index} className="item">
      
    </div>
  ));

  console.log(location.pathname);

  useEffect(() => {
    if (location.pathname === "/jeyamuruganrajenthiran") {
       div1Ref.current.style.animationName ="div1";
       div1Ref.current.style.animationDuration = "2s";
       div1Ref.current.style.animationFillMode = "forwards"; 
       div1Ref.current.style.opacity = "0";


       div2Ref.current.style.animationName ="div2";
       div2Ref.current.style.animationDuration = "2s";
       div2Ref.current.style.animationFillMode = "forwards"; 
       div2Ref.current.style.opacity = "0";

       div3Ref.current.style.animationName ="div3";
       div3Ref.current.style.animationDuration = "2s";
       div3Ref.current.style.animationFillMode = "forwards";
       div3Ref.current.style.opacity = "0";

       div4Ref.current.style.animationName ="div4";
       div4Ref.current.style.animationDuration = "2s";
       div4Ref.current.style.animationFillMode = "forwards";
       div4Ref.current.style.opacity = "0";

       div5Ref.current.style.animationName ="div5";
       div5Ref.current.style.animationDuration = "2s";
       div5Ref.current.style.animationFillMode = "forwards";
       div5Ref.current.style.opacity = "0";


       firstRef.current.style.animationName = "firstref";
       firstRef.current.style.animationDuration = "2s";
       firstRef.current.style.animationFillMode = "forwards";
       firstRef.current.style.opacity = "0";
       

       nameref.current.style.animationName = "firstref";
       nameref.current.style.animationDuration = "2s";
       nameref.current.style.animationFillMode = "forwards";
       nameref.current.style.animationDelay = "1s";
       nameref.current.style.opacity = "0";
       

       posref.current.style.animationName = "firstref";
       posref.current.style.animationDuration = "2s";
       posref.current.style.animationFillMode = "forwards";
       posref.current.style.animationDelay = "1.5s";
       posref.current.style.opacity = "0";
       
       pearref.current.style.animationDuration = "2s";
       pearref.current.style.animationName = "pearref";
       pearref.current.style.animationFillMode = "forwards";
       pearref.current.style.animationDelay = "1.5s";
       pearref.current.style.opacity = "0";


      put1.current.style.animationDuration = "2s";
      put1.current.style.animationName = "put1";
      put1.current.style.animationFillMode = "forwards";
      put1.current.style.animationDelay = "1.8s";
      put1.current.style.opacity = "0";

      put2.current.style.animationDuration = "2s";
      put2.current.style.animationName = "put1";
      put2.current.style.animationFillMode = "forwards";
      put2.current.style.animationDelay = "2s";
      put2.current.style.opacity = "0";
      



    }
  }, []);
  

  const developer = ['D','E','V','E','L','O','P','E','R'];
  return (
    <section id="home">
      <div className="container">
        <div className="background">
        {divs}
        </div>

      <div className="innerbox">
        <div className="left">
          <h4 ref={firstRef}>Hello, i am </h4>
          <h6 ref={nameref}>jeyamurugan <span>Rajenthiran</span>.BE.MBA</h6>
          <div className="devloper" ref={posref}>
            {developer.map((value, index) =>(
              <span  key={index}>{value}</span>
            ))}
          </div>
          <p ref={pearref}>I am Jeyamurugan, a developer. I know languages like Java, Python, React, HTML, CSS, and JavaScript.

I am eager to work for a good job. Please consider my profile. For more information, click the 'About' button.
          </p>

          <div className="button">
            <button ref={put1}> <a href={reurl} download={"jeyamuruganrajenthiran.docx"}>Resume</a></button>
            <button ref={put2}><Link to='/about'>About</Link></button>
          </div>


        </div>
        <div className="right">
              <div ref={div1Ref}><h1>PS</h1></div>
              <div ref={div2Ref}><FontAwesomeIcon icon={faJsSquare} size="4x" color="white" /></div>
              <div ref={div3Ref}><FontAwesomeIcon icon={faReact} size="5x" color="white" /></div>
              <div ref={div4Ref}><h1>SQL</h1></div>
              <div ref={div5Ref}><FontAwesomeIcon icon={faPython} size="4x" color="white" /></div>
              <div ref={div6Ref}> <FontAwesomeIcon icon={faJava} size="5x" color="white" /></div>
        </div>
      </div>

      </div>
    </section>
  )
}

export default Home
