import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../src/sass/style.css";
import photo from '../src/sass/img/logo.png'
import photo1 from '../src/sass/img/thumb.png'
import photo2 from '../src/sass/img/2.png'

class App extends Component {
  render() {
    return (
      <div>
        <Headone />
        <Nav />
        <Hero />
        <Hero2 />
        <Hero3 />
      </div>
    );
  }
}


class Headone extends Component {
  render() {
    return (
      <div>
        <div className="head-one">
          <div className="container">
            <div className="leftbox">
              <span>Have any question? +123 456 7890</span>
              <span>
                {" "}
                <i class="fa-solid fa-envelope"></i> Info@gmail.com
              </span>
              <span>
                {" "}
                <i class="fa-solid fa-clock"></i> Sun - Thu 8:00 - 16:00
              </span>
            </div>
            <div className="rightbox">
              <button className="btn btn-warning">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Nav extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
             <img src={photo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a  className="nav-link dropdown-toggle" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a  className="nav-link dropdown-toggle" href="#">
                    Pages
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Courses
                  </a>
                </li>
                <li className="nav-item">
                  <a  className="nav-link dropdown-toggle">Event</a>
                </li>
                <li className="nav-item">
                  <a  className="nav-link dropdown-toggle">Blog</a>
                </li>
                <li className="nav-item">
                  <a  className="nav-link dropdown-toggle"  id="navbarDropdown">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


class Hero extends Component{
  render(){
    return(
      <div>
        
        <div className="hero">
          <div className="container">
            <div className="leftbox1"><img src={photo1} alt="" /></div>
            <div className="rightbox1">
              <span className="text1">Own Your Future Learning New Skills Online</span>
              <span className="text2"><h1>Learn From Best Online <br /> Training Course</h1></span>
              <div className="btn-hero">
                <button className="btn btn-outline-light">Learn More</button>
                <button className="btn btn-light">View Courses</button>
              </div>
              
            </div>

          </div>
        </div>
        </div>
      
    )
  }
}


class Hero2 extends Component{
  render(){
    return(
      <div>
          <div className="hero2">
            <div className="container">
              <div className="leftbox2"><img src={photo2} alt="" /></div>
              <div className="rightbox2">
                <span><h1>REGISTER TODAY</h1></span>
                <span>Get 50s of online Courses For Free!</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A harum quibusdam sapiente nobis hic. Quaerat aperiam ad, fuga assumenda facere tempora? Amet quod debitis, sed, nam impedit eius ab atque.</span>
                <div className="clock">
                  <div className="clock1"><h1>54</h1> <span><p>days</p></span></div>
                  <div className="clock2"><h1>09</h1> <span><p>hours</p></span></div>
                  <div className="clock3"><h1>16</h1> <span><p>minutes</p></span></div>
                  <div className="clock4"><h1>21</h1> <span><p>seconds</p></span></div>
                </div>
                <button className="btn btn-warning btn-2">Register Now</button>
              </div>
          </div>
          </div>
      </div>
      
    )
  }
}



class Hero3 extends Component{
  render(){
    return(
      <div>
        <div className="section">
          <div className="blur">
            <div className="container">
              <div className="box1">
                <span>salam</span>
                <span>
                <h1>212</h1></span>
                <span>National Awards</span>
              </div>
              <div className="box1">
              <span>salam</span>
                <span><h1>128</h1></span>
                <span>Best Teachers</span>
              </div>
              <div className="box1">
              <span>salam</span>
                <span><h1>8970</h1></span>
                <span>Students Enrolled</span>
              </div>
              <div className="box1">
              <span>salam</span>
                <span><h1>640</h1></span>
                <span>Cources</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
