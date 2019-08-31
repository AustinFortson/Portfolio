import React from 'react';
import './App.css';
import ResturantIMG from './images/resturantAppImg.jpg';
import HTMLEmailIMG from './images/HTMLEmailImg.jpg';
import StreetsIMG from './images/StreetsIMG.jpg';
import Laptop from './images/Laptop.png'
import Phone1 from './images/Phone1.png';
import PhoneAlt from './images/phoneAlt.png';
import Phone2 from './images/Phone2.png';
import WhiteLinkedIn from './images/LinkedInIMGWhite.png';
import WhiteGitHub from './images/GitHubIMGWhite.png';
import ButtonAppBar from "./components/appbar/appbar";
import Card from './components/card/card';
import Form from './components/form/form';
import Grid from '@material-ui/core/Grid';
import SkillTable from './components/skilltable/skilltable';


function App() { 

  return (
    /*App Div*/
    <div className="App" id="app">
      <React.Fragment>

      {/*Nav BAR*/}
      
      <ButtonAppBar id="buttonAppBar"/>


      {/*AUSTIN FORTSON*/}
      {/*Layer 1*/}
      <div id="layer1">
        <Grid container>
          <Grid item xs={12}>
            <ul id="austinfortson">
            <li className="scroll" data-rateY="-2" data-rateX="-2" data-direction="hoizontal">Austin</li>
            <li className="scroll" data-rateY="-2" data-rateX="2" data-direction="horizontal">Fortson</li>
            </ul>
          </Grid>
        </Grid>
      </div>

      {/*FULL STACK DEVELOPER*/}
      {/*Layer 2*/}
      <div id="layer2">
        <Grid container>
          <img src={Laptop} alt="" id="laptop" />
          <h3 id="full" className="rellax" data-rellax-speed="2" data-rellax-percentage="0.4">Full</h3>
          <h3 id="stack" className="rellax" data-rellax-speed="2" data-rellax-percentage="0.4">Stack</h3>
          <h3 id="developer" className="rellax" data-rellax-speed="2" data-rellax-percentage="0.4">Developer</h3>
        </Grid>
      </div>

      {/*ABOUT ME*/}
      {/*Layer 3*/}
      <div id="layer3">
        <Grid container>
        <div id="aboutMe">
          <h3>About Me</h3>
        </div>
        
        <div id="bio" className="rellax" data-rellax-speed="2" data-rellax-percentage="1">
          <p>I'm Austin Fortson, a developer passionate about <span id="bluehighlight">creating </span>
          and <span id="bluehighlight">learning</span> new skills to do so from Charlotte NC</p>
        </div>
        
        <div id="bio2" className="rellax" data-rellax-speed="2" data-rellax-percentage="0.9">
          <p>Graduated from <span id="greenhighlight">UNCC</span> Coding Bootcamp</p>
        </div>
        
        <div id="bio3" className="rellax" data-rellax-speed="2" data-rellax-percentage="0.7">
          <SkillTable
          header1={"Experienced In"}
          header2={<span id="redhighlight">Front End</span>}   
          header3={<span id="redhighlight">Back End</span>} 
          header4={<span id="redhighlight">Source Control</span>}
          header5={<span id="redhighlight">Frameworks & Libraries</span>}  
          header6={<span id="redhighlight">Learn More</span>}    
          />
        </div> 
        </Grid>

        {/*DISPLAYS ON LESS THAN 800PX*/}
        <Grid container>
        <div id="aboutMeAlt">
          <Grid item xs={12}>
          <h3>About Me</h3>
          </Grid>
        </div>

        {/*DISPLAYS ON LESS THAN 800PX*/}
        <Grid container>
        <div id="bioAlt" className="rellax" data-rellax-speed="2" data-rellax-percentage="0.3">
          <Grid item xs={12}>
          <p>I'm Austin Fortson, a developer passionate about <span id="bluehighlight">creating </span> and <span id="bluehighlight">learning </span> new skills to do so from Charlotte NC</p>
          </Grid>
        </div>
        </Grid>

        {/*DISPLAYS ON LESS THAN 800PX*/}
        <Grid container>
        <div id="bio2Alt" className="rellax" data-rellax-speed="2" data-rellax-percentage="0.3">
          <Grid item xs={12}>
          <p>Graduated from UNCC Coding Bootcamp</p>
          </Grid>
        </div>
        </Grid>

        {/*DISPLAYS ON LESS THAN 800PX*/}
        <Grid container>
        <div id="bio3Alt" className="rellax" data-rellax-speed="2" data-rellax-percentage="0.3">
          <Grid item xs={12}>
          <p>Experienced In <span id="redhighlight">HTML</span>, <span id="redhighlight">CSS</span>, <span id="redhighlight">Javascript</span>, <span id="redhighlight">JQuery</span>, <span id="redhighlight">React/Redux</span>, <span id="redhighlight">MongoDB</span>, <span id="redhighlight">MySql</span> And Able To <span id="redhighlight">Learn More</span></p>
          </Grid>
        </div>
        </Grid>
        </Grid>
      </div>
      
      
      {/*PORTFOLIO*/}
       {/*LAYER 4*/}
      <div id="layer4">
        <Grid container>
        {/*PORTFOLIO TITLE*/}
        <Grid item xs={12}>
        <h1 id="portfolioHeader" className="rellax" data-rellax-speed="2" data-rellax-percentage="0.7">Portfolio<span id="orangehighlight">.</span></h1>
        </Grid>

      {/*PORTFOLIO CONTENT*/}    
      <div className="container" id="worksContainer" className="rellax" data-rellax-speed="4" data-rellax-percentage="0.5">
        <Grid container spacing={3}>

        {/*Music Discovery App*/}
        <Grid item xs>
        <Card image={StreetsIMG} 
              title="Music Discovery App"
              name="Streets" 
              technologies="React, Node Express Server, MySQL, Material UI, Multiple API's" 
              description="An app designed to find local musicians in any city using Soundcloud's API, find local shows using Ticketmaster's API, and keep up to date with new releases through Spotify's API"
              codeLink="https://github.com/AustinFortson/Streets-app" 
              demoLink="https://streets-app.herokuapp.com">
          </Card>
          </Grid>  

        {/*RESTURANT CARD*/}
        <Grid item xs>
        <Card image={ResturantIMG} 
              title="Resturant Website" 
              name="Seaside Seafood" 
              technologies="React, Materialize, CSS Animations & Media Queries" 
              description="A single page website for a restaurant showcasing about them, a menu, operation hours and contact information" 
              codeLink="https://github.com/AustinFortson/restaurant-app" 
              demoLink="https://seasideseafood.netlify.com/">
          </Card>
          </Grid>

        {/*HTML EMAIL CARD*/}
        <Grid item xs>
        <Card image={HTMLEmailIMG} 
              title="HTML Email" 
              name="Corner Store Clothing Brand" 
              technologies="HTML, Inline-CSS, Photoshop, PutsMail" 
              description="A promotional HTML Email tested with PutMail for previewing across 50+ different platforms and devices." 
              codeLink="https://github.com/AustinFortson/HTML-Email" 
              demoLink="https://austinfortson.github.io/HTML-Email/">
          </Card>   
          </Grid>

        {/*Coming Soon*/}
        <Grid item xs>
        <Card image="https://halffullmarketing.site/wp-content/uploads/2017/07/coming-soon.png" 
              title="Coming Soon" 
              technologies="Unavaliable" 
              description="Unavliable">
          </Card>
          </Grid>

        </Grid>
      </div>
      </Grid>
      </div>

      {/*CONTACT*/}
      {/*Layer 5*/}
      <div id="layer5">
        <Grid container>
        <div id="contactMe">Contact Me</div>

        <div id="phoneDiv">
          <img src={Phone1} alt="" id="phone"/>

          <a href="https://www.linkedin.com/in/austin-fortson-916b17170" 
              target="_blank" 
              rel="noopener noreferrer">
              <img src={WhiteLinkedIn} alt="LinkedIn" id="linkedIn"/>
            </a>

          <a href="https://github.com/AustinFortson" 
              target="_blank" 
              rel="noopener noreferrer">
              <img src={WhiteGitHub} alt="github" id="gitHub"/>
            </a>

          <img src={PhoneAlt} alt="" id="phoneAlt"/>
          </div>

        <div id="phoneDiv2">
          <img src={Phone2} alt="" id="phone2"/>

        {/*DISPLAYS ON LESS THAN 900PX*/}
        <img src={Phone2} alt="" id="phone2Alt"/>
         

        {/*Contact Form*/}
        <Form/>

        </div>
        </Grid>
      </div>

      {/*Back To Top Button*/}
      {/*LAYER 6*/}
      <div id="layer6">      
      <Grid container>
        <Grid item xs={12}>
          <h3 id="backToTop" href="#layer1" onClick={topFunction}>Back To The Top</h3>
        </Grid>
      </Grid>
      </div>

      {/*End of Render*/}  
      </React.Fragment>  
    </div>
  );
}

/*Back To Top Function*/
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*Manual PARALLAX SCROLLING LOGIC*/
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

export default App;
