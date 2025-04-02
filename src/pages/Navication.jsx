import React, { useRef, useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import '../styles/navication.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faChessKing } from '@fortawesome/free-solid-svg-icons';
import { faContactCard } from '@fortawesome/free-solid-svg-icons';
import Logo from "../assets/logo.png"

const Navication = () => {

  const divRef = useRef(null);
  const barRef = useRef(null);
  const leRef = useRef(null);
  console.log(window.innerWidth);


  const change = () => {

    divRef.current.classList.toggle("active");

    const display_val = window.getComputedStyle(barRef.current).getPropertyValue("display");
    console.log(display_val);
    if (window.innerWidth <= 1023) {
      if (display_val === "none") {
        barRef.current.style.display = "flex";
        barRef.current.style.opacity = "1";
        console.log(window.getComputedStyle(barRef.current).getPropertyValue("display"));
      } else {

        barRef.current.style.display = "none";
        barRef.current.style.opacity = "0";




      }
    }
  }
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log(scrollY + "px");
    if (scrollY >= 50) {
      barRef.current.style.backgroundColor = "#1f1f1f";
      barRef.current.style.transition = "0";
      console.log("murugan");
      
    }
  }, [scrollY]);
    return (

      <section className='nav'>

        <div className="logo">

          <img src={Logo} alt="" width={100} />
        </div>
        <div className="list" ref={leRef}>
          <div ref={divRef} className="navbar" onClick={change}>
            <span></span>
          </div>
          <ul ref={barRef}>
            <li onClick={change}><Link to="/" > <span> <FontAwesomeIcon icon={faHome} /></span><span>Home</span></Link></li>
            <li onClick={change}><Link to="/about" > <span> <FontAwesomeIcon icon={faUser} /></span><span>About</span></Link></li>
            <li onClick={change}><Link to="/project" > <span> <FontAwesomeIcon icon={faProjectDiagram} /></span><span>Project</span></Link></li>
            <li onClick={change}><Link to="/skils" > <span> <FontAwesomeIcon icon={faChessKing} /></span><span>Skils</span></Link></li>
            <li onClick={change}><Link to="/education" > <span> <FontAwesomeIcon icon={faBookOpen} /></span><span>Education</span></Link></li>
            <li onClick={change}><Link to="/contact" > <span> <FontAwesomeIcon icon={faContactCard} /></span><span>Contact</span></Link></li>


          </ul>

        </div>
        <Outlet />
      </section>
    )
  }

export default Navication
