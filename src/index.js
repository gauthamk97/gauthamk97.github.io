import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group'
import './index.css';

class BigDaddy extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div id="container1">
          <Route path="/" exact component={Introduction} />
          <Route path="/about/" exact component={AboutMe} />
          <Route path="/work/" exact component={Work} />
          <Route path="/contact/" exact component={Contact} />
        </div>
        <div id="container2">
          <Navigation homeOnClick={() => {this.setState({activePage: "home"})}}
            aboutOnClick={() => {this.setState({activePage: "about"})}}
            workOnClick={() => {this.setState({activePage: "work"})}}
            contactOnClick={() => {this.setState({activePage: "contact"})}}
          />
        </div>
      </Router>
    )
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <div id="navigationBar" className = "inner-container">
        <Link to="/"><button className="navigation-button" onClick = {() => {this.props.homeOnClick();}}>Home</button></Link>
        <Link to="/about/"><button className="navigation-button" onClick={() => {this.props.aboutOnClick();}}>About Me</button></Link>
        <Link to="/work/"><button className="navigation-button" onClick={() => {this.props.workOnClick();}}>My Work</button></Link>
        <Link to="/contact/"><button className="navigation-button" onClick={() => {this.props.contactOnClick();}}>Contact</button></Link>
      </div>
    )
  }
}

class Introduction extends React.Component {
  render() {
    return (
      <CSSTransitionGroup 
      transitionName="fadeInUp"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
        <div id="sayHello" className="inner-container">
          <h1 id="helloMessage">Hi! My name is Gautham!</h1>
        </div>
      </CSSTransitionGroup>
    )
  }
}

class AboutMe extends React.Component {
  render() {
    return (
      <CSSTransitionGroup 
      transitionName="fadeInUp"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
        <div id="aboutMe" className="outer-container">
          <div id="dpContainer">
            <img id="myPic" src="/assets/DP2.jpg" alt="Thats me!"/>
          </div>
          <h1 id="aboutMeHeading" className="subtopic">About Me</h1> 
          <p>
            My name is Gautham Kumar, and I currently study Computer Science and Engineering at NIT Trichy.
            I spend most of my time coding and building things. I like to think that my work has the potential
            to help someone in some corner of the world and this thought is what motivates me everyday.
          </p>
          <p>
            When I'm not coding, I usually spend my spare time listening to and playing music. Music is a huge
            part of who I am. I'm a huge Coldplay and Ed Sheeran fan and I also play the piano and the guitar
            as much as I can.
          </p>
        </div>
      </CSSTransitionGroup>
    )
  }
}

class Work extends React.Component {
  render() {
    return (
      <CSSTransitionGroup 
      transitionName="fadeInUp"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
        <div id="workedOn" className="outer-container">
          <h1 className="subtopic">What I've Worked On</h1>
          <p>
              As a developer, I've worked on a wide range of platforms. Starting my journey as an algorithmic 
              programmer, I ventured into iOS Application Development during my fresher year of college.
          </p>
          <p>
              I've since worked on both frontend and backend web development as well. I like to think of myself
              as a budding full stack developer, always ready to pick up something new.
          </p>
          <p>
              To know more about my work, check out my resume!
          </p>
          <p className="paragraph-center"><a href="/assets/Gautham Kumar - Resume.pdf"><button id="resumeButton">Resume<i className="far fa-file-pdf resumeIcon"></i></button></a></p>
      </div>
    </CSSTransitionGroup>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <CSSTransitionGroup 
      transitionName="fadeInUp"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
        <div id="contactMe" className="outer-container">
          <h1 className="subtopic">Contact</h1>
            <p className="paragraph-center">Come and say hello!</p>
            <div className="inner-container" id="socialLinks">
              <span><a href="https://www.linkedin.com/in/gautham-kumar" target="_blank" rel="noopener noreferrer"><i id="linkedinLogo" className="fab fa-linkedin-in textLogo"></i></a></span>
              <span><a href="https://www.github.com/gauthamk97" target="_blank" rel="noopener noreferrer"><i id="githubLogo" className="fab fa-github textLogo"></i></a></span>
              <span><a href="https://www.facebook.com/heygautham" target="_blank" rel="noopener noreferrer"><i id="facebookLogo" className="fab fa-facebook-f textLogo"></i></a></span>
              <span><a href="mailto:kgautham1997@gmail.com" target="_blank" rel="noopener noreferrer"><i id="emailLogo" className="fas fa-envelope textLogo"></i></a></span>
              <span><a href="https://twitter.com/Gautham_Kumar97" target="_blank" rel="noopener noreferrer"><i id="twitterLogo" className="fab fa-twitter textLogo"></i></a></span>
            </div>
        </div>
      </CSSTransitionGroup>
    )
  }
}

ReactDOM.render(<BigDaddy />, document.getElementById("root"));
