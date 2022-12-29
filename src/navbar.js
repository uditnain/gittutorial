import logo from './logo.svg';
import './App.css';
import gym from './image/img2.jpg'
function navbar() {
  return (
    <div>
     <div div className='nav' >
        <div className='left'>
          <img className="img2" src={gym} alt="Girl in a jacket" />

        </div>
        <div className='mid'>
          <ul className='navbar'>
            <li><a href="/" >Home</a></li>
            <li><a href="/About">About Us</a></li>
            <li><a href="/Fitness">Fitness Center</a></li>
            <li><a href="Contact">Contact Us</a></li>
          </ul>

        </div>
        <div className='right'>
          <button className='btn'>Call Us</button>
          <button className='btn'>Email Us</button>
        </div>
      </div>
    </div>

  );
}

export default navbar;
