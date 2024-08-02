import React, { useEffect ,useState} from 'react';
import './styles/Main.css'
import Header from './Header';
import Button from './Button';
import Sidebar from './Sidebar';
import { Link } from 'react-scroll';
// import { ReactComponent as Image } from './images/main/web-development-svgrepo-com.svg'
const Main = () => {
  const [event , setEvent] = useState(false)

  const handleEvent = (newEvent) => {
    setEvent(newEvent);
  };
  useEffect(() => {
    window.myFunction()
  }, [])
  return (
    <>

      <Sidebar event={event}  />
      <Header event={event} setEvent={handleEvent} />
      <div className='main-content'>
        <div className='container'>
          <div className="bubbles" id="wrapper-canvas"></div>

          <div className='text-container'>
            <div className='first-text'>HI I'M</div>
            <div className='second-text'>KONISETTY SANJEEV</div>
            <div className='third-text'>
              <p>MERN Developer</p>
              I make Creative, interactive and performant web apps.
              I love to build thing that stand out.</div>
          </div>

          <div className="scrollButton">
           <Link  activeClass='active' smooth={true} to="about" offset={0} duration={500} spy={true} > <Button text={'scroll Here'} /> </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
