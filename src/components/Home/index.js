import LogoTitle from '../../assets/images/logo-b.png';
import { Link } from 'react-router-dom'
import './index.scss';

const Home = () => {


  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br /> I'm
        <img src={LogoTitle} alt="developer" />
        radley Kimmance
        <br />
        software developer
        </h1>
        <h2>Software Developer / JSON Expert</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home