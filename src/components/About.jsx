import React, {useRef, useState } from 'react'
import './styles/About.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from './Button';


const About = () => {
  const container = useRef(null)

  const [copy, setCopy] = useState(' Click to Copy')

  const toCopy = () => {

    var copyText = document.getElementById("myMail").innerText;
    const words = copyText.split(/\s+/);
    // Get the first word
    const firstWord = words[0];
    navigator.clipboard.writeText(firstWord);
    setCopy(' Copied')
  }

  // useEffect(()=>{
  //   var Text = document.getElementById("myMail").innerText;

  //   if (navigator.clipboard) {
  //     navigator.clipboard.readText().then(text => {
  //         if(text === Text){
  //           // setCopy('copied')
  //           console.log(text,Text);
  //         }
  //         // else{
  //         //   setCopy('Click to Copy')
  //         // }
  //     }).catch(err => {
  //         console.error('Failed to read clipboard contents: ', err);
  //         setCopy('Click to Copy')
  //     });
  // }
  // })

  useGSAP(() => {




    const marquee = document.body.querySelector('.marquee')

    const marqueeContent = marquee.firstChild

    const marqueeClone = marqueeContent.cloneNode(true)
    marquee.appendChild(marqueeClone)

    // const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue("width"), 10)



    const marqueeAnimation = gsap.fromTo(marquee.children,
      {
        // x:0
        xPercent: 0
      },
      {
        // x : -width ,
        xPercent: -100,
        repeat: -1,
        duration: 15,
        ease: 'none'
      })



      document.querySelector('.marquee').addEventListener('mousemove', () => {
        // document.querySelector('.marquee').style.cursor = 'pointer'
        marqueeAnimation.pause()
      })
      document.querySelector('.marquee').addEventListener('mouseleave', () => {
        marqueeAnimation.play()


      })
  }, { scope: container })


  return (
    <div className='about' ref={container}>
      <div className="marquee">
        <div className="marquee-wraper">
          <div className='underLine'></div>
          " LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING?"
          <div className='underLine'></div>
        </div>
      </div>
      <div className="contact">
        <div className="text">
          <div>Got a question, proposal or project or want to work together on something? Feel free to reach out.</div>
        </div>
        <div className="mail">
          <div className="email" id='myMail' onClick={toCopy}>
            <span className='mailSpan'>ksanjeev0359@gmail.com</span>
            <div className="to-copy" ><Button  text ={copy}/></div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
