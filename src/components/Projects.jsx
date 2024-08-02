import { useRef, React } from 'react';
import './styles/Projects.css'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img from './images/mockups/macbook 1.png'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Projects = () => {
    const container = useRef();


    useGSAP(
        () => {
            const info = gsap.utils.toArray('.description:not(:first-child')
            const photos = gsap.utils.toArray('.images:not(:first-child')
            gsap.set(photos, { opacity: 0, scale: 0.5 })
            const clientHeight = document.body.querySelector('.scroll-wrap').clientHeight + 600
            let t3 = gsap.timeline(
                {
                    scrollTrigger: {
                        trigger: '#main',
                        start: "top top",
                        end: `${clientHeight}px top `,
                        // end: '800% top',
                        // markers: true,
                        scrub: true,
                        pin: true,
                    }
                })

            t3.to('.our-work-text', {
                height: "60vh",
                // opacity:'1'
            }, 'c')
            t3.to('#Our', {
                marginLeft: "0"
            }, 'c')
            t3.to('#work', {
                marginLeft: "95%"
            }, 'c')
            t3.to('.our-text-img', {
                height: "60vh",
                opacity: '1'
                // overflow: "hidden",

            }, 'c')

            let h1 = document.body.querySelector('.description:first-child').clientHeight
            t3.to('.description:first-child', {
                // yPercent : -100
                y: `-${h1 + 150}px`
            })


            info.forEach((element, index) => {
                ScrollTrigger.create({
                    trigger: element,
                    start: `top top`,
                    end: "bottom top",
                    animation: gsap.timeline()
                        .to(info[index - 1], { yPercent: -100 }, 'a')
                        .to(element, { y: `-${h1}px` }, 'a')
                        .to(photos[index], { opacity: 1, scale: 1, duration: 0.2, stagger: 1 }, 'a')
                    ,
                    pinSpacing: true,
                    scrub: true,
                    markers: false,
                })
                h1 = h1 + element.clientHeight


            })
        },
        { scope: container }

    );

    return (
        <div  ref={container} >
            <div id="main">
                <div className="part-3">
                    <div className="our-work-text">
                        <div id="Our">My</div>
                        <div id="work">Work</div>
                    </div>
                    <div className="our-text-img" >
                        <div className="scroll-wrap" >
                            <div className="project-images">

                                <div className="images">
                                    {/* <img src={img1}  alt="project1" className="img-pro1" /> */}
                                </div>

                                <div className="images">

                                    {/* <div className='images-overlay'>
                                    <img src={img} alt="" />
                                    <img src={img1} alt="" className='"imtip"' />
                                </div> */}
                                    <img src={img} alt="project1" className="img-pro" />

                                    {/* <Laptop  fill={img1}  width='100%' height="100%"     alt="project2" className="img-pro" /> */}

                                </div>

                                <div className="images">
                                    {/* <Laptop   width='100%' height="100%"   alt="project3" className="img-pro" /> */}
                                    <img src={img} alt="project1" className="img-pro" />


                                </div>

                                <div className="images">
                                    {/* <Laptop width='100%' height="100%"   alt="project4" className="img-pro" /> */}
                                    <img src={img} alt="project1" className="img-pro" />


                                </div>

                                <div className="images">

                                    {/* <Laptop   width='100%' height="100%"   alt="project5" className="img-pro" /> */}
                                    <img src={img} alt="project1" className="img-pro" />

                                </div>
                            </div>
                            <div className="project-details">
                                <div className="description">
                                    <div className="tittle">MY PROJECTS</div>
                                </div>
                                <div className="description">
                                    <div className="tittle"> <b>iNoteBook</b> </div>
                                    <ul className='project-skills'>
                                        <li>Reactjs</li>
                                        <li>Expressjs</li>
                                        <li>Node.js</li>
                                        <li>MongoDb</li>
                                        <li>MERN </li>
                                    </ul>
                                    <div className="info">A website in which User can store his Notes and access it anytime and also User can add Events ,Update and Delete his Notes,Every
                                        user should login with credentials to access their notes </div>
                                </div>

                                <div className="description">
                                    <div className="tittle"> DailyNews</div>
                                    <ul className='project-skills'>
                                        <li>React.js</li>
                                        <li>Express.js</li>
                                        <li>Real-Time API</li>
                                        <li> Node.js</li>
                                    </ul>
                                    <div className="info">Daily News is an Website Where one can get access to daily updated News, can read News Category Wise, Can Search for desired
                                        News and also Designed a user-friendly interface</div>
                                </div>
                                <div className="description">
                                    <div className="tittle"> Spotify Data Analysis - DBMS</div>
                                    <ul className='project-skills'>
                                        <li>Numpy</li>
                                        <li>MatPlot</li>
                                        <li>Pandas</li>
                                        <li>Seaborn</li>
                                    </ul>
                                    <div className="info">The spotify data was taken from kaggle and used to analyze/visualize in different ways using python libraries</div>
                                </div>
                                <div className="description">
                                    <div className="tittle"> Complete Dynamic Weather Website</div>
                                    <ul className='project-skills'>
                                        <li>Javascript</li>
                                        <li>Express.js</li>
                                        <li>Real-Time API</li>
                                        <li>Node.js</li>
                                    </ul>
                                    <div className="info"> This will provide the weather of any city and its behaviour using Real-Time API</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>  
         </div>
    )
}

export default Projects
