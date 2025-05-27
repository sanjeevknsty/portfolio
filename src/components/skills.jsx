import React, { useEffect, useRef } from 'react'
import './styles/Skills.css'
// import '../components/styles/WindowHoverEffect.css';

import {
    Table, TableBody, TableRow, Box
} from '@mui/material';
import { gsap } from "gsap";



import { ReactComponent as Express } from './images/skills/express-svgrepo-com.svg';
import { ReactComponent as Python } from './images/skills/icons8-python-250.svg';
import { ReactComponent as Node } from './images/skills/icons8-node-js (1).svg';
import { ReactComponent as Js1 } from './images/skills/icons8-javascript.svg';
import { ReactComponent as Mern } from "./images/skills/mern.svg"
import { ReactComponent as React1 } from './images/skills/reactjs-fill-svgrepo-com.svg';
import { ReactComponent as Sql } from './images/skills/mysql-svgrepo-com.svg';
import { ReactComponent as Mongo } from './images/skills/mongodb-svgrepo-com.svg';
import { ReactComponent as Html } from './images/skills/html5-02-svgrepo-com.svg';
import { CustomTableCell, CustomTableContainer } from './Font';
const Skills = () => {
 const windowRef = useRef(null);
  const hoverContainerRef = useRef(null);
    //      useEffect(()=>{
    // document.addEventListener('mousemove', (tip) => {
    //         document.querySelector('.window').style.top = `${tip.clientY}px`
    //         document.querySelector('.window').style.left = `${tip.clientX}px`
    //         document.querySelector('.window').style.transform = `translate(${-tip.clientX * 0.21}px,${-tip.clientY * 0.5}px)`
    //         // console.log(tip)
    //     })

    //     document.querySelector('.semi-container').addEventListener('mousemove', () => {
    //         document.querySelector('.window').style.opacity = 1
    //         document.querySelector('.window').style.display = 'initial'
    //     })
    //     document.querySelector('.semi-container')
    //         .addEventListener('mouseleave', () => {
    //             document.querySelector('.window').style.display = 'none'
    //             document.querySelector('.window').style.opacity = 0
    //         })

    //     document.querySelector('.text-1').addEventListener('mousemove', () => {
    //         document.querySelector('.hover-container').style.marginTop = "0vh"
    //     })
    //     document.querySelector('.text-1').addEventListener('mouseleave', () => {
    //         document.querySelector('.hover-container').style.marginTop = "initial"
    //     })
    //     document.querySelector('.text-2').addEventListener('mousemove', () => {
    //         document.querySelector('.hover-container').style.marginTop = "-50vh"
    //     })
    //     document.querySelector('.text-2').addEventListener('mouseleave', () => {
    //         document.querySelector('.hover-container').style.marginTop = "initial"
    //     })
    //     document.querySelector('.text-3').addEventListener('mousemove', () => {
    //         document.querySelector('.hover-container').style.marginTop = "-100vh"
    //     })
    //     document.querySelector('.text-3').addEventListener('mouseleave', () => {
    //         document.querySelector('.hover-container').style.marginTop = "initial"
    //     })
    //     document.querySelector('.text-4').addEventListener('mousemove', () => {
    //         document.querySelector('.hover-container').style.marginTop = "-150vh"
    //     })
    //     document.querySelector('.text-4').addEventListener('mouseleave', () => {
    //         document.querySelector('.hover-container').style.marginTop = "initial"
    //     })
    //     })
//     useEffect(() => {
//     const windowEl = windowRef.current;
//     const hoverEl = hoverContainerRef.current;

//     const handleMouseMove = (e) => {
//       if (!windowEl) return;
//       windowEl.style.top = `${e.clientY}px`;
//       windowEl.style.left = `${e.clientX}px`;
//       windowEl.style.transform = `translate(${-e.clientX * 0.21}px,${-e.clientY * 0.5}px)`;
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     const handleEnter = () => {
//       if (!windowEl) return;
//       gsap.to(windowEl, { opacity: 1, display: 'initial', duration: 0.2 });
//     };

//     const handleLeave = () => {
//       if (!windowEl) return;
//       gsap.to(windowEl, { opacity: 0, display: 'none', duration: 0.2 });
//     };

//     const rows = tableRowRefs.current;

//     rows.forEach((row, i) => {
//       row?.addEventListener('mouseenter', () => {
//         if (hoverEl) {
//           gsap.to(hoverEl, {
//             marginTop: `${-50 * i}vh`,
//             duration: 0.5,
//             ease: 'power2.out'
//           });
//         }
//       });
//       row?.addEventListener('mouseleave', () => {
//         if (hoverEl) {
//           gsap.to(hoverEl, {
//             marginTop: '0vh',
//             duration: 0.5,
//             ease: 'power2.out'
//           });
//         }
//       });
//     });

//     const semiCon = document.querySelector('.semi-conductor');
//     semiCon?.addEventListener('mouseenter', handleEnter);
//     semiCon?.addEventListener('mouseleave', handleLeave);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       semiCon?.removeEventListener('mouseenter', handleEnter);
//       semiCon?.removeEventListener('mouseleave', handleLeave);
//     };
//   }, []);

 const rowRefs = useRef([]);
const setRefs = useRef([]);

useEffect(() => {
  const windowEl = windowRef.current;
  const hoverEl = hoverContainerRef.current;

  const handleMouseMove = (e) => {
    if (!windowEl) return;
    windowEl.style.top = `${e.clientY}px`;
    windowEl.style.left = `${e.clientX}px`;
    windowEl.style.transform = `translate(${-e.clientX * 0.21}px,${-e.clientY * 0.5}px)`;
  };

  document.addEventListener('mousemove', handleMouseMove);

  const handleEnter = () => {
    if (!windowEl) return;
    gsap.to(windowEl, { opacity: 1, display: 'initial', duration: 0.2 });
  };

  const handleLeave = () => {
    if (!windowEl) return;
    gsap.to(windowEl, { opacity: 0, display: 'none', duration: 0.2 });
  };

  rowRefs.current.forEach((row, i) => {
    row?.addEventListener('mouseenter', () => {
      const slideContainer = hoverEl?.querySelector('.div-fitter');
      if (slideContainer) {
        gsap.to(slideContainer, {
          marginTop: `${-10 * i}vh`,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    });
    row?.addEventListener('mouseleave', () => {
      const slideContainer = hoverEl?.querySelector('.div-fitter');
      if (slideContainer) {
        gsap.to(slideContainer, {
          marginTop: `0vh`,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    });
  });

  const semiCon = document.querySelector('.semi-conductor');
  semiCon?.addEventListener('mouseenter', handleEnter);
  semiCon?.addEventListener('mouseleave', handleLeave);

  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    semiCon?.removeEventListener('mouseenter', handleEnter);
    semiCon?.removeEventListener('mouseleave', handleLeave);
  };
}, []);

    const projects = [
        { name: 'JAVA' },
        { name: 'SPRINGBOOT' },
        { name: 'JAVASCRIPT' },
        { name: 'REACT JS' },
        { name: 'EXPRESS JS' },
        { name: 'NODE JS' },
        { name: 'JWT AUTHENTICATION' },
        { name: 'PYTHON' },
        { name: 'SQL' },
        { name: 'MONGO DB' },
    ];

    return (
        <>
            <div className="containerSkills" >
                <div className='top-content'>
                    {/* <img src={images1} alt="" /> */}
                    <table className="equal-size-table">
                        <tbody>
                            <tr>
                                <td><Html id='svg-image' fill='#ccc' width='65%' height="100%" /></td>
                                <td><Js1 id='svg-image' fill='#ccc' width='80%' height="100%" /></td>
                                <td><React1 id='svg-image' fill='#ccc' width='90%' height="100%" /></td>
                            </tr>
                            <tr>
                                <td><Node id='svg-image' fill='#ccc' width='80%' height="100%" /></td>
                                <td><Mern id='svg-image' fill='white' width='80%' height="100%" /></td>
                                <td><Express id='svg-image' fill='#ccc' width='80%' height="100%" /></td>
                            </tr>
                            <tr>
                                <td><Mongo id='svg-image' fill='#ccc' width='80%' height="100%" /></td>
                                <td><Sql id='svg-image' fill='#ccc' width='80%' height="100%" /></td>
                                <td><Python id='svg-image' fill='#ccc' width='70%' height="100%" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>




                <Box className="container1" sx={{ backgroundColor: 'rgb(34, 34, 34)', width: "100%", marginTop: "5%" }}>
                    <Box ref={windowRef} className="window" sx={{ position: 'absolute', display: 'none', opacity: 0 }}>
                        <Box ref={hoverContainerRef} className="hover-container">
                            <Box className="div-fitter">
                                 {projects.map((_, index) => (
                                    <Box key={index} width={"100%"} height={"100%"} className={`set${index + 1}`}   
                                   ref={(el) => (setRefs.current[index] = el)}>
                                    </Box>
                                ))}
                            </Box>
                           
                        </Box>
                    </Box>
                    <CustomTableContainer className="" >
                        <Table className="semi-conductor">
                            <TableBody className="">
                                {projects.map((project, index) => (
                                    <TableRow key={index} className={`text-${index + 1}`}   ref={(el) => (rowRefs.current[index] = el)}>
                                        <CustomTableCell >{project.name}</CustomTableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CustomTableContainer>
                </Box>


            </div>
        </>

    )
}

export default Skills
