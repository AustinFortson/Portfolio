import React from 'react';
import './App.css';

import ButtonAppBar from "./components/appbar/appbar"
import Card from './components/card/card'
import Form from './components/form/form'


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
          <p>Experienced In <span id="redhighlight">HTML</span>, <span id="redhighlight">CSS</span>, <span id="redhighlight">Javascript</span>, <span id="redhighlight">ReactJS</span>, <span id="redhighlight">MongoDB</span>, <span id="redhighlight">MySql</span> And Able To <span id="redhighlight">Learn More</span></p>
        </div> 
        {/*DISPLAYS ON LESS THAN 800PX*/}
        <div id="bio3Alt">
          <p>Experienced In <span id="redhighlight">HTML</span>, <span id="redhighlight">CSS</span>, <span id="redhighlight">Javascript</span>, <span id="redhighlight">ReactJS</span>, <span id="redhighlight">MongoDB</span>, <span id="redhighlight">MySql</span> And Able To <span id="redhighlight">Learn More</span></p>
        </div> 

      </div>
      
      {/*PORTFOLIO*/}
       {/*LAYER 4*/}
      <div id="layer4" class="scroll" data-rate="-2" data-direction="vertical">
        {/*PORTFOLIO TITLE*/}

        <h1 id="portfolioHeader" class="scroll" data-rate="-2" data-direction="vertical">Portfolio<span id="orangehighlight">.</span></h1>


      {/*PORTFOLIO CONTENT*/}
    
      <div className="container" id="worksContainer" class="scroll" data-rate="-2" data-direction="vertical">

        {/*RESTURANT CARD*/}
        <Card image="https://cdn.britannica.com/s:300x300/77/170477-004-B774BDDF.jpg" title="Resturant Website" technologies="React, CSS, Materialize" description="A website for a resturant showcasing the establishment, it's menu, and operation info."></Card>

        {/*HTML EMAIL CARD*/}
        <Card image="https://cms-assets.tutsplus.com/uploads/users/30/posts/9386/final_image/preview.jpg" title="HTML EMAIL" technologies="HTML, CSS, Photoshop" description="A promotional HTML Email for a clothing brand"></Card>
  
        {/*Coming Soon*/}
        <Card image="https://halffullmarketing.site/wp-content/uploads/2017/07/coming-soon.png" title="Coming Soon" technologies="Unavaliable" description="Unavaliable"></Card>        

        {/*Coming Soon*/}
        <Card image="https://halffullmarketing.site/wp-content/uploads/2017/07/coming-soon.png" title="Coming Soon" technologies="Unavaliable" description="Unavliable"></Card>

      </div>
      </div>

      {/*CONTACT*/}
      {/*Layer 5*/}
      <div id="layer5" class="scroll" data-rate="-2" data-direction="vertical">
        <div id="contactMe" class="scroll" data-rate="-1" data-direction="vertical">Contact Me</div>

        <div class="scroll" data-rate="-2" data-direction="vertical" id="phoneDiv">
          <img src="https://mail.google.com/mail/u/0?ui=2&ik=744a95a85f&attid=0.2&permmsgid=msg-a:r-3961478655416566239&th=16bddadfd2b06eaf&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8WV-Sv9McJRkPAkDPTPBxPQaoOyx3K_1fMKcNT47F_CfdiD1vEys-0vTmtgxysmtTVhG9uM3RAWMUe1GmtB8opewzW9JcULZx_d7QugIhyTP2KhhvrRHqFXns&disp=emb&realattid=ii_jxxq5zo71" alt="none" id="phone"/>

          <a href="https://www.linkedin.com/in/austin-fortson-916b17170" target="_blank"><img src="https://image.flaticon.com/icons/png/512/34/34227.png" alt="LinkedIn" id="linkedIn"/></a>

          <a href="https://github.com/AustinFortson" target="_blank">
          <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" id="gitHub"/></a>

          <img src="https://mail.google.com/mail/u/0?ui=2&ik=744a95a85f&attid=0.1&permmsgid=msg-a:r-3961478655416566239&th=16bddadfd2b06eaf&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_zWYxaEFRugfG7Mas7CQUem6EzGXNfNf6Ba5hEX-uc7zSZyFqJAHeWhybh1tbPBx0mll6ag-Qt9DPCOlscVsD7Bne-K0GLX3IraRt3iAw0_uRZwXEQVraELLk&disp=emb&realattid=ii_jxxq5znm0" alt="none" id="phoneAlt"/>
          </div>

        <div id="phoneDiv2">
          <img src="https://mail.google.com/mail/u/0?ui=2&ik=744a95a85f&attid=0.3&permmsgid=msg-a:r-3961478655416566239&th=16bddadfd2b06eaf&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_LZY6UNwNdmOs0lFJqkDiEIbL0LHAmPr-7sFjv6ywd3nViKc1bfV3x314Oa8AECqA-1AwQ043O-O4BNBvGUfCIdA0V7bEFco-kT-_YGP1IZW05sTTHmKSoRsM&disp=emb&realattid=ii_jxxq63mu2" alt="none" id="phone2"/>


        <Form>

        </Form>
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
