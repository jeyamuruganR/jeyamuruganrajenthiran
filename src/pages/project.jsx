import React, { useRef,useState,useEffect } from 'react'

import project1 from '../assets/project1.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import portfillo from '../assets/Designs/portfillo.jpeg'
import coffeStote from '../assets/Designs/coffeStore.jpg'
import Birthday from '../assets/Designs/jeyamuranBirthday1.jpg'
import Bithday2 from '../assets/Designs/jeyamuruganBirthday2.jpg'
import photoArt from '../assets/Designs/photoArt1.jpg'
import Christmas from '../assets/Designs/Christmas.jpg'

const project = () => {

  const progaramRef = useRef(null);
  const designRef = useRef(null);
  const navRef = useRef(null);
const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollY >= 100) {
      navRef.current.style.height= "100px";

    }
    else{
      
    }
  }, [scrollY]);

  const change = () => {
    const programcss = window.getComputedStyle(progaramRef.current).getPropertyValue("display");

    if (programcss === "none") {
      progaramRef.current.style.display = "flex";
      designRef.current.style.display = "none";
    } else {
      progaramRef.current.style.display = "flex";
    }
  };

  const change2 = () => {
    const designscss = window.getComputedStyle(designRef.current).getPropertyValue("display");

    if (designscss === "none") {
      designRef.current.style.display = "flex";
      progaramRef.current.style.display = "none";
    } else {
      designRef.current.style.display = "flex";
    }
  };


  const progaram = [
    {
      name: "portfillo responcive website",
      imgUrl: project1,
      description: "this is my first portfillo website",
      useLonguage: [faHtml5, faCss3, faJs, faReact],
      view:"https://jeyamuruganr.github.io/jeya/"


    },
    {
      name: "BookStore",
      imgUrl: project1,
      description: "this BookStore website",
      useLonguage: [faHtml5, faCss3, faJs, faReact],

    },
    {
      name: "sdutent addancss system",
      imgUrl: project1,
      description: "this is my first portfillo website",
      useLonguage: [faHtml5, faCss3, faReact],


    },
    {
      name: "sdutent addancss system",
      imgUrl: project1,
      description: "this is my first portfillo website",
      useLonguage: [faHtml5, faCss3, faReact],


    },
    {
      name: "sdutent addancss system",
      imgUrl: project1,
      description: "this is my first portfillo website",
      useLonguage: [faHtml5, faCss3, faReact],


    }
  ]

  
    


  return (
    <section id="project">

      <div className="project_container">

        <div className="heading">
          <h1>PROJECT</h1>
        </div>
        <div className="project_box">
          <div className="projectnav" ref={navRef}>
            <ul>
              <li onClick={change}>projects</li>
              <li onClick={change2}>Designs</li>
            </ul>
          </div>
          {/* projects */}
          <div className="projectList">

            <div className="progaram_box" ref={progaramRef}>
              {
                progaram.map((item, index) => (
                  <div className="progaram_item" key={index}>
                    <div className="progaram_img">
                      <img src={item.imgUrl} alt="" />
                    </div>
                    <div className="progaram_text">
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="icons">
                        {item.useLonguage.map((icon, i) => (
                          <FontAwesomeIcon key={i} icon={icon} className='i' />
                        ))}
                      </div>
                      <div className="button">
                        <button><a href={item.view} target='black'>view</a></button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>


            <div className="desion_box" ref={designRef}>
              <div className="row">
                <div className="column">
                  <img src={portfillo} alt="" className="imgani"  style={{
                    border:"2px solid black"
                  }}/>
                  <img src={coffeStote} className='imgani'  alt="" />
                  
                </div>
                <div className="column">
                  <img src={Birthday} className='imgani'  alt="" />
                  <img src={Bithday2} className='imgani'  alt="" />
                 
                </div>
                <div className="column">
                <img src={photoArt} className='imgani'  alt="" />
                <img src={Christmas}  className='imgani' alt="" />

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default project
