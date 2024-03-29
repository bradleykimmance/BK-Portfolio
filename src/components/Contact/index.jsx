import './index.scss';
import Loader from 'react-loaders'
import React, { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailJS from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const contactArray = "Contact me".split("")
  const refForm = useRef()

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailJS
      .sendForm(
        'service_4n3f7a9',
        'template_pwvkk3g',
        refForm.current,
        'M5MIU9AkaeMBQ-7H-'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

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
            Please get in contact me with the form below!
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type="text" name="user_name" placeholder="Name" required />
                </li>
                <li className='half'>
                  <input type="email" name="user_email" placeholder="Email Address" required />
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
        <div className="info-map">
          Bradley Kimmance,
          <br />
          England, United Kingdom,
          <br />
          Bedfordshire, <br />
          Stotfold <br />
          <span>bradleykimmance@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[52.0162, -0.23218]} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[52.0162, -0.23218]}>
              <Popup>
                Bradley Kimmance lives here
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-pulse"  active/>
    </>
  )
}

export default Contact