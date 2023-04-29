import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique sollicitudin nibh sit amet commodo nulla. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar.
            Est ullamcorper eget nulla facilisi. Duis ut diam quam nulla porttitor massa. Ipsum a arcu cursus vitae congue mauris rhoncus.
            Malesuada proin libero nunc consequat interdum.
          </p>
          <p>
            Maecenas accumsan lacus vel facilisis volutpat. Est ullamcorper eget nulla facilisi.
            Pretium aenean pharetra magna ac placerat. Scelerisque varius morbi enim nunc. Sapien eget mi proin sed libero enim sed faucibus turpis.
            Integer feugiat scelerisque varius morbi enim. Risus in hendrerit gravida rutrum. Aliquet enim tortor at auctor urna nunc.
            Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus.
          </p>
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