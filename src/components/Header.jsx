import React, { useEffect, useState } from 'react'
import './styles/Header.css'
import img1  from './images/main/hamburger.png'

import { Link } from 'react-scroll'

import { ReactComponent as Github } from './images/main/icons8-github.svg'
import { ReactComponent as Insta } from './images/main/icons8-instagram.svg'
import { ReactComponent as Gmail } from './images/main/gmail-svgrepo-com.svg'
import { ReactComponent as Leetcode } from './images/main/leetcode-svgrepo-com.svg'
import { ReactComponent as Linkedln } from './images/main/internet-linkedln-media-svgrepo-com.svg'

const Header = ({setEvent,event}) => {
  const [mode,setMode] = useState(true)
  const toggle = ()=>{
    setMode(!mode)
    setEvent(!event)
  }

  const [color ,setColor] = useState(Boolean)
  useEffect(() => {

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setColor(!color)        
      }
      else{
        setColor(color)
      }
    })
    // eslint-disable-next-line
  },[])


  return (
    <div>
      <div className={!color ? "nav" : "nav nav-color"}>
        <div className='nav-container'>
          <div className="left-section">
            <Link className="portfolio" smooth={true} spy={true} activeClass='active' offset={0} to="/">PORTFOLIO</Link>
          </div>

          <div className='right-section'>
            <div className="hamburger">
              <img src={img1} onClick={toggle} alt="hamburger" />
            </div>
            <ul className= "right-content">
              <li className="item">
                <a className="link"  rel="noreferrer"  target='_blank' href="https://www.instagram.com/sanjeev.k.10?igsh=MWtlOHljY2tlYmc5cQ=="><Insta fill="#ccc" width="100%" height="100%" /></a>
              </li>
              <li className="item">
                <a className="link" target='_blank' rel="noreferrer" href="https://github.com/sanjeevknsty"><Github fill='#ccc' width="100%" height="100%" /></a>
              </li>
              <li className="item">
                <a className="link" target='_blank' rel="noreferrer" href="https://leetcode.com/u/sanjeevk_10/"><Leetcode fill="#ccc" width="100%" height="100%" /></a>
              </li>
              <li className="item">
                <a className="link" target='_blank' rel="noreferrer" href="/"><Gmail fill="#ccc" width="100%" height="100%" /></a>
              </li>
              <li className="item">
                <a className="link" target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/sanjeev-konisetty-6a96b62a4/"><Linkedln fill="#ccc" width="100%" height="100%" /></a>
              </li>

            </ul>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Header
