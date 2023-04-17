import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutArray = "About me".split("")

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return(
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={aboutArray}
            idx={15}
          />
        </h1>
        <p>
          lorem epsum
        </p>
        <p>
          lorem epsum
        </p>
        <p>
          lorem epsum
        </p>
      </div>

      <div className='stage-cube-content'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faNodeJs} color="#68a063" />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color="#5Ed4F4" />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About