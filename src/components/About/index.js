import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import SqlDatabase from '../../assets/images/SQL-database.png'
import ImageGallery from '../ImageGallery';

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

  const images = [
    { src: SqlDatabase },
    { src: SqlDatabase },
    { src: SqlDatabase },
  ];

  return(
    <>
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
            I started off my interest in computing from an early age, taking apart my computer towers, laptops and games consoles to just see how they all fit together.
            Xbox 360 Red Ring of Death was a fond memory of mine, replacing thermal paste and tinkering with components to keep my xbox functioning for as long
            as I could. Although I think that even Microsoft couldn't defeat that phenomenon.
          </p>
          <p>
            I studied to become a Master of Engineering in Computer Science at the University of Hertfordshire between the years of 2014-2018. My final year Dissertation
            consisted of the development and implementation of a Sales and Invoice management system that I then went on to use for my job at a Video Games Distribution
            Company. It was developed using the M*EAN stack, this gave me an extensive knowledge into many areas of web development. I made an in-depth SQL database
            that was controlled by a NodeJS frontend, allowing for real-time updating of stock levels and sales. I then further developed upon this database to
            design one to work with an API that would send stock into the database for sending out directly to the customer.
          </p>
          <ImageGallery images={images} />
          <img className="aboutImages" src={SqlDatabase} alt="SQL Database" />
          <p>
            Mauris commodo quis imperdiet massa. Facilisis leo vel fringilla est.
            Amet nisl purus in mollis nunc sed id semper risus. Leo vel orci porta non pulvinar neque laoreet.
            Duis at consectetur lorem donec massa. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi.
            Ac felis donec et odio pellentesque diam volutpat.
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
      <Loader type="ball-pulse" />
    </>
  )
}

export default About