import LogoTitle from '../../assets/images/logo-b.png';
import { Link } from 'react-router-dom'
import './index.scss';
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = "radley Kimmance".split("")
  const jobArray = "software engineer.".split("")

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3200)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass}
                             strArray={nameArray}
                             idx={15}/>
            <br />
            <AnimatedLetters letterClass={letterClass}
                             strArray={jobArray}
                             idx={30}/>
          </h1>
          <h2>(and sometimes web developer)</h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
      </div>
      <Loader type="ball-pulse"  active/>
    </>
  );
}

export default Home