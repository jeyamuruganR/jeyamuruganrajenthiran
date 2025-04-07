import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
const Skils = () => {

  const Language = [

    {
      name: "Java",
      parstange: "72%",
      icon: <FontAwesomeIcon icon={faHtml5} />,
      backgroundColor: "red"
    },
    {
      name: "pyhton",
      parstange: "53%",
      icon: <FontAwesomeIcon icon={faHtml5} />,
      backgroundColor: "green",
    },
    {
      name: "C#",
      parstange: "40%",
      icon: <FontAwesomeIcon icon={faHtml5} />,
      backgroundColor: "yellow",
    },
    {
      name: "SQL",
      parstange: "77%",
      icon: <FontAwesomeIcon icon={faHtml5} />,
      backgroundColor: "gray",
    },

    {
      name: "HTML",
      parstange: "91%",
      icon: <FontAwesomeIcon icon={faHtml5} />,
      backgroundColor: "violet",
    },

    {
      name: "CSS",
      parstange: "80%",
      icon: <FontAwesomeIcon icon={faHtml5} />,
      backgroundColor: "orange",
    },
    {
      name: "JS",
      parstange: "80%",
      icon: <FontAwesomeIcon icon={faHtml5} />,
      backgroundColor: "coral",
    },

  ]

  useEffect(() => {
    const drawAnimatedArc = (canvasId, color, finalAngle) => {
      const canvas = document.getElementById(canvasId);
      const ctx = canvas.getContext("2d");

      let currentAngle = 0;
      const startAngle = 0;
      const radius = 50;
      const centerX = 55;
      const centerY = 55;

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, currentAngle);
        ctx.lineWidth = 7;
        ctx.strokeStyle = color;
        ctx.stroke();

        if (currentAngle < finalAngle) {
          currentAngle += 0.03;
          requestAnimationFrame(animate);
        }
      };

      animate();
    };

    // delay animation after 2 seconds
    const timer = setTimeout(() => {
      drawAnimatedArc("myCanvas", "red", 1.5 * Math.PI);
      drawAnimatedArc("myCanvas2", "coral", 1.2 * Math.PI);
      drawAnimatedArc("myCanvas3", "green", 0.8 * Math.PI);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);




  return (
    <section id="skils">
      <div className="project-container">
        <div className="language" style={{
          gridArea: "box-1",
        }}>
          <div className="subhead">
            <h2 style={{
              fontSize: "1rem",
              color: "white",
              fontWeight: "800",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "1px",


            }}>Programing language</h2>
          </div>
          <div className="barLine">
            {
              Language.map((item, index) => (
                <div key={index} className='bar' style={{
                  width: "3%",
                  height: item.parstange,
                  backgroundColor: item.backgroundColor,
                  borderRadius: "0",
                  "--LogName": `"${item.name}"`,
                  "--color": item.backgroundColor,

                }
                }></div>

              ))
            }
          </div>
        </div>
        <div className="feramwork" style={{
          gridArea: "box-2",
        }}>
          <div className="subHead">
            <h3>FrameWorks</h3>
          </div>
          <div className="circle1">
            <div className="innercicl">
              <canvas
                id="myCanvas"
                width="200"
                height="110"></canvas>

              <div className="ico">
                <FontAwesomeIcon icon={faReact}  spin className='frione' />
              </div>

            </div>

          </div>
          <div className="circle2">

            <div className="innercicl">
              <canvas
                id="myCanvas2"
                width="200"
                height="110"></canvas>
              <div className="ico">
                <FontAwesomeIcon icon={faLeaf} spin className='frione' />
              </div>
            </div>
          </div>
          <div className="circle3">

            <div className="innercicl">
              <canvas
                id="myCanvas3"
                width="200"
                height="110"></canvas>
              <div className="ico">
                <FontAwesomeIcon icon={faTerminal} spin className='frione' />
              </div>
            </div>
          </div>

          <div className="list">
            <ul>
              <li>React</li>
              <li>SprinBoot</li>
              <li>.Net</li>
            </ul>
          </div>
        </div>

        <div className="personalSkil" style={{
          gridArea: "box-3",
        }}>

        </div>

        <div className="work" style={{
          gridArea: "box-4",
        }}>

        </div>
      </div>
    </section>
  )
}

export default Skils
