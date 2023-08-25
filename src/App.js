// import './pages/Blog.js'

import Nav from './components/Nav';
import First_header from './components/First_header';
import Second_header from './components/Second_header';
// import react from 'react';
import { Link } from 'react-router-dom'
import image2 from './image/director.jpg'
import Home_slider from './components/Home_slider';
import './App.css';
import Second_footer from './components/Second_footer';
import Map from './pages/Map'
import Number from './components/Number'
import Visitor from './pages/Visitor';
import Scroll from './pages/Scroll';
function App() {
  const mystyle = {
    color: "#8B042D",
    fontWeight: "600"
  }
  return (
    <div className="App">
      <First_header />
      <Second_header />
      <Nav />
      <Home_slider />
      <Scroll/>
      <Number />
      <div>
        <div className="director">
         
          <div className="director-message">
            <h1>Message from the Director's Desk</h1>

            <p>
              Dear Parents/Guardians,
              <br /><br />
              I am delighted to extend a warm and heartfelt welcome to your child on behalf of the entire faculty and staff of CBSC Central School. Our school is driven by a steadfast determination to shape your child into a well-rounded global citizen, equipped with knowledge, skills, and values that will serve them throughout their lives. It is my privilege to share with you the essence of CBSC School's academic excellence, expansive campus, and nurturing atmosphere.
              <button className='btn1'><Link className='list ' to="/director" style={mystyle}>Read More</Link></button>
            </p>
          </div>
          <div className="director-img1">
            <img  src={image2} alt="" />
          </div>
        </div>

      </div>
      <div class="quo">
        <h1>WE BELIEVE THAT EDUCATION IS FOR EVERYONE</h1>
        <p>Education’s purpose is to replace an empty mind with an open one.</p>
      </div>
      <Map/>
      <Second_footer />
      {/* <Visitor/> */}
    </div>
  );
}

export default App;
