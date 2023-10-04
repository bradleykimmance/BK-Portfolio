import './index.scss';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Back from '../../assets/images/chevrons-left.svg'
import Next from '../../assets/images/chevrons-right.svg'
import Exit from '../../assets/images/minimize-2.svg'
import { useSwipeable } from 'react-swipeable';

const ImageGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Function for opening the gallery in fullscreen
  const openFullscreen = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling on the body when fullscreen is open
    document.documentElement.classList.add('fullscreen'); // Add fullscreen class to the document element
  };

  // Function for closing the gallery
  const closeFullscreen = () => {
    setIsOpen(false);
    document.body.style.overflow = ''; // Enable scrolling on the body when fullscreen is closed
    document.documentElement.classList.remove('fullscreen'); // Remove fullscreen class from the document element
  };

  // Function for setting which image comes next
  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function for setting which image comes previous
  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Function for handling Mobile swipes
  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    onSwipedDown: () => closeFullscreen(),
  });

  if (isOpen) {
    return ReactDOM.createPortal(
      <div className="fullscreen-window" {...handlers}>
        <div className="fullscreen-content">
          <img src={images[currentImage].src} alt={`${currentImage + 1}`} className="fullscreen-image" />
          <button className="prev-btn" onClick={prevImage}>
            <img src={Back} alt="Back" />
          </button>
          <button className="next-btn" onClick={nextImage}>
            <img src={Next} alt="Next" />
          </button>
          <button className="close-btn" onClick={closeFullscreen}>
            <img src={Exit} alt="Exit" />
          </button>
        </div>
      </div>,
      document.body
    );
  }

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={`${index + 1}`} onClick={() => openFullscreen(index)} className="gallery-image" />
      ))}
    </div>
  );
};

export default ImageGallery;
