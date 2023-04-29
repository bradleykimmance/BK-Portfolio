import './index.scss';
import Loader from 'react-loaders'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const contactArray = "Contact me".split("")

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique sollicitudin nibh sit amet commodo nulla. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar.
            Est ullamcorper eget nulla facilisi. Duis ut diam quam nulla porttitor massa. Ipsum a arcu cursus vitae congue mauris rhoncus.
            Malesuada proin libero nunc consequat interdum.
          </p>
          <div className='contact-form'>
            <form>
              <ul>
                <li className='half'>
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className='half'>
                  <input type="email" name="email" placeholder="Email Address" required />
                </li>
                <li>
                  <input type="text" name="subject" placeholder="Subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse" />
    </>
  )
}

export default Contact