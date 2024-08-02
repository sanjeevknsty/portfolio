import React, { useRef } from 'react'
import './styles/Button.css'
// import { type } from '@testing-library/user-event/dist/type'
import SplitType from 'split-type'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);



const Button = ({ text }) => {



  const container = useRef(null)
  useGSAP(() => {
    const splitWord = new SplitType('#target', { types: 'chars' })
    var moveButton = document.querySelector('.btn-52');

    moveButton.addEventListener('mouseover', () => {
      gsap.fromTo(splitWord.chars, {
        y: -20,
        opacity: 0,
        transformOrigin: 'top',
      },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
        });
    })

    moveButton.addEventListener('mouseout', () => {
      gsap.to(splitWord.chars, {
        // scaleY : 0,
        opacity: 0,
        y: -15,
      });
    });
  },
    { scope: container }
  )



  return (
    <div ref={container}>
      <button className="btn-52">
        <div className="original">{text}</div>
        <div className="letters" id='target'>{text}</div>
      </button>

    </div>
  )
}

export default Button
