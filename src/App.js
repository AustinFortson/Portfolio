import React from 'react';
import './App.css';
import ResturantIMG from './images/resturantAppImg.jpg';
import HTMLEmailIMG from './images/HTMLEmailImg.jpg';
import StreetsIMG from './images/StreetsIMG.jpg';
import Phone1 from './images/Phone1.png';
import PhoneAlt from './images/phoneAlt.png';
import Phone2 from './images/Phone2.png';
import WhiteLinkedIn from './images/LinkedInIMGWhite.png';
import WhiteGitHub from './images/GitHubIMGWhite.png';
import ButtonAppBar from "./components/appbar/appbar";
import Card from './components/card/card';
import Form from './components/form/form';



function App() {
  return ( 
    
    <div className="App" id="app">
      {/*APP BAR*/}
      <div>
      <ButtonAppBar id="buttonAppBar"/>
      </div>


      {/*AUSTIN FORTSON*/}
          {/*Layer 1*/}
      <div id="layer1">

          <ul id="austinfortson">
            <li class="scroll" data-rateY="-2" data-rateX="-2" data-direction="hoizontal">Austin</li>
            <li class="scroll" data-rateY="-2" data-rateX="2" data-direction="horizontal">Fortson</li>
          </ul>

      </div>

      {/*FULL STACK DEVELOPER*/}
            {/*Layer 2*/}
      <div id="layer2" class="scroll" data-rate="-2" data-direction="vertical">

          <img src="http://volunteeralberta.ab.ca/wp-content/uploads/2016/08/Laptop-cartoon.png" alt="none" id="laptop" class="scroll" data-rate="-2" data-direction="vertical"/> 


          <h3 class="scroll" data-rate="-3" data-direction="vertical" id="full">Full</h3>


          <h3 class="scroll" data-rate="-3" data-direction="vertical" id="stack">Stack</h3>

          <h3 class="scroll" data-rate="-3" data-direction="vertical" id="developer">Developer</h3>

      </div>

      {/*ABOUT ME*/}
      {/*Layer 3*/}
      <div id="layer3" class="scroll" data-rate="-2" data-direction="vertical">

        <div id="aboutMe">
          <h3>About Me</h3>
        </div> 

        {/*DISPLAYS ON LESS THAN 800PX*/}

        <div id="aboutMeAlt">
          <h3>About Me</h3>
        </div> 



        <div id="bio" class="scroll" data-rateY="-1" data-rateX="-3" data-direction="hoizontal">
          <p>I'm Austin Fortson, a Full Stack Developer From Charlotte NC</p>
        </div>
        {/*DISPLAYS ON LESS THAN 800PX*/}
        <div id="bioAlt">
          <p>I'm Austin Fortson, a Full Stack Developer From Charlotte NC</p>
        </div>

        <div id="bio2" class="scroll" data-rateY="-1" data-rateX="-2" data-direction="hoizontal">
          <p>I Have Earned a Full Stack Web Development Certificate from UNCC</p>
        </div>
        {/*DISPLAYS ON LESS THAN 800PX*/}
        <div id="bio2Alt">
          <p>I Have Earned a Full Stack Web Development Certificate from UNCC</p>
        </div>

        <div id="bio3" class="scroll" data-rateY="-1" data-rateX="-2" data-direction="hoizontal">
          <p>Experienced In <span id="redhighlight">HTML</span>, <span id="redhighlight">CSS</span>, <span id="redhighlight">Javascript</span>, <span id="redhighlight">JQuery</span>, <span id="redhighlight">ReactJS</span>, <span id="redhighlight">MongoDB</span>, <span id="redhighlight">MySql</span> And Able To <span id="redhighlight">Learn More</span></p>
        </div> 
        {/*DISPLAYS ON LESS THAN 800PX*/}
        <div id="bio3Alt">
          <p>Experienced In <span id="redhighlight">HTML</span>, <span id="redhighlight">CSS</span>, <span id="redhighlight">Javascript</span>, <span id="redhighlight">JQuery</span>, <span id="redhighlight">ReactJS</span>, <span id="redhighlight">MongoDB</span>, <span id="redhighlight">MySql</span> And Able To <span id="redhighlight">Learn More</span></p>
        </div> 

      </div>
      
      {/*PORTFOLIO*/}
       {/*LAYER 4*/}
      <div id="layer4" class="scroll" data-rate="-2" data-direction="vertical">
        {/*PORTFOLIO TITLE*/}

        <h1 id="portfolioHeader" class="scroll" data-rate="-2" data-direction="vertical">Portfolio<span id="orangehighlight">.</span></h1>


      {/*PORTFOLIO CONTENT*/}
    
      <div className="container" id="worksContainer" class="scroll" data-rate="-2" data-direction="vertical">

        {/*Music Discovery App*/}
        <Card image={StreetsIMG} title="Music Discovery App" name="Streets" technologies="React, Material UI, React-Router, API's" description="An app designed to find local musicians in any city using Soundcloud's API, find local shows using LiveNation's API, and keep up to date with new releases through Spotify's API" codeLink="https://github.com/AustinFortson/Streets-app" demoLink="https://streets.netlify.com/#/"></Card>  

        {/*RESTURANT CARD*/}
        <Card image={ResturantIMG} title="Resturant Website" name="Seaside Seafood" technologies="React, Materialize, CSS Animations & Media Queries" description="A single page website for a restaurant showcasing about them, a menu, operation hours and contact information" codeLink="https://github.com/AustinFortson/restaurant-app" demoLink="https://seasideseafood.netlify.com/"></Card>

        {/*HTML EMAIL CARD*/}
        <Card image={HTMLEmailIMG} title="HTML Email" name="Corner Store Clothing Brand" technologies="HTML, Inline-CSS, Photoshop, PutsMail" description="A promotional HTML Email tested with PutMail for previewing across 50+ different platforms and devices." codeLink="https://github.com/AustinFortson/HTML-Email" demoLink="https://austinfortson.github.io/HTML-Email/"></Card>   

        {/*Coming Soon*/}
        <Card image="https://halffullmarketing.site/wp-content/uploads/2017/07/coming-soon.png" title="Coming Soon" technologies="Unavaliable" description="Unavliable"></Card>

      </div>
      </div>

      {/*CONTACT*/}
      {/*Layer 5*/}
      <div id="layer5" class="scroll" data-rate="-2" data-direction="vertical">
        <div id="contactMe" class="scroll" data-rate="-1" data-direction="vertical">Contact Me</div>

        <div class="scroll" data-rate="-2" data-direction="vertical" id="phoneDiv">
          <img src={Phone1} alt="" id="phone"/>

          <a href="https://www.linkedin.com/in/austin-fortson-916b17170" target="_blank" rel="noopener noreferrer"><img src={WhiteLinkedIn} alt="LinkedIn" id="linkedIn"/></a>

          <a href="https://github.com/AustinFortson" target="_blank" rel="noopener noreferrer">
          <img src={WhiteGitHub} alt="github" id="gitHub"/></a>

          <img src={PhoneAlt} alt="" id="phoneAlt"/>
          </div>

        <div id="phoneDiv2">
          <img src={Phone2} alt="" id="phone2"/>

        {/*Contact Form*/}
        <Form/>

        </div>


          <h3 id="backToTop" href="#layer1" onClick={topFunction}>Back To The Top</h3>

      </div>

      
    </div>
  );
}

{/*PARALLAX SCROLLING LOGIC*/}
window.addEventListener("scroll", function(e) {

  const target = document.querySelectorAll(".scroll");

  var index = 0, length = target.length;
  for (index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;

    if(target[index].dataset.direction === "vertical") {
    target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)'
    } else {
      var posX = window.pageYOffset * target[index].dataset.ratex;
      var posY = window.pageYOffset * target[index].dataset.ratey;

      target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)'
    }
  }

})

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

export default App;
