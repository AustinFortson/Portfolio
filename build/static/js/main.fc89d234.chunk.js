(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,a){e.exports=a(94)},56:function(e,t,a){},57:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(12),r=a.n(l),o=(a(56),a(117)),c=a(113),s=a(114),d=a(116);a(57);function m(){window.scrollTo(0,490)}function p(){window.scrollTo(0,710)}function h(){window.scrollTo(0,1070)}function u(){window.scroll(0,0)}var E=function(){return i.a.createElement("div",null,i.a.createElement(o.a,{id:"appBar"},i.a.createElement(c.a,{id:"toolBar"},i.a.createElement(s.a,{variant:"h6",id:"appBarHeader",onClick:u},"Austin Fortson"),i.a.createElement(d.a,{id:"appBarButtons",onClick:m},"About Me"),i.a.createElement(d.a,{id:"appBarButtons",onClick:p},"Portfolio"),i.a.createElement(d.a,{id:"appBarButtons",onClick:h},"Contact"))))},g=a(20),f=a(21),v=a(23),b=a(22),w=a(24),C=a(115),k=(a(75),function(e){function t(){return Object(g.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"innerCard"},i.a.createElement("div",{className:"frontCard"},i.a.createElement(C.a,{item:!0,xs:12},i.a.createElement("img",{id:"image",src:this.props.image,alt:"portfolioImg"})),i.a.createElement(C.a,{item:!0,xs:12},i.a.createElement("h1",{id:"frontTitle"},this.props.title))),i.a.createElement("div",{className:"backCard"},i.a.createElement(C.a,{item:!0,xs:12},i.a.createElement("h1",{id:"backTitle"},this.props.title)),i.a.createElement(C.a,{item:!0,xs:12},i.a.createElement("h3",{id:"technologies"},this.props.technologies)),i.a.createElement(C.a,{item:!0,xs:12},i.a.createElement("p",{id:"description"},this.props.description)),i.a.createElement(C.a,{item:!0,xs:12},i.a.createElement("div",{className:"buttons"},i.a.createElement("p",{id:"code",href:this.props.codeLink},"Code"),i.a.createElement("p",{id:"demo",href:this.props.demoLink},"Demo"))))))}}]),t}(i.a.Component)),A=(a(76),a(48)),x=a.n(A),S="http://localhost:3000/portfolio-austinfortson/api/contact/index.php",y=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(v.a)(this,Object(b.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),x()({method:"post",url:"".concat(S),headers:{"content-type":"application/json"},data:a.state}).then(function(e){a.setState({mailSent:e.data.sent})}).catch(function(e){return a.setState({error:e.message})})},a.state={name:"",email:"",message:"",mailSent:!1,error:null},a}return Object(w.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("form",{id:"contactForm",method:"post",action:"./index.php"},i.a.createElement("label",null,"Name"),i.a.createElement("input",{type:"name",id:"name",placeholder:"Enter Your Name Here",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}}),i.a.createElement("label",null,"Email"),i.a.createElement("input",{type:"email",id:"email",placeholder:"Enter Your Email Here",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}),i.a.createElement("label",null,"Message"),i.a.createElement("textarea",{type:"message",id:"message",placeholder:"Enter Your Message Here",value:this.state.message,onChange:function(t){return e.setState({message:t.target.value})}}),i.a.createElement("input",{id:"submit",name:"submit",type:"submit",onClick:function(t){return e.handleFormSubmit(t)},value:"submit"}),i.a.createElement("div",null,this.state.mailSent&&i.a.createElement("div",null,"Thank you for Contacting me."))))}}]),t}(i.a.Component);function M(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.addEventListener("scroll",function(e){for(var t=document.querySelectorAll(".scroll"),a=0,n=t.length;a<n;a++){var i=window.pageYOffset*t[a].dataset.rate;if("vertical"===t[a].dataset.direction)t[a].style.transform="translate3d(0px, "+i+"px, 0px)";else{var l=window.pageYOffset*t[a].dataset.ratex,r=window.pageYOffset*t[a].dataset.ratey;t[a].style.transform="translate3d("+l+"px, "+r+"px, 0px)"}}});var T=function(){return i.a.createElement("div",{className:"App",id:"app"},i.a.createElement("div",null,i.a.createElement(E,{id:"buttonAppBar"})),i.a.createElement("div",{id:"layer1"},i.a.createElement("ul",{id:"austinfortson"},i.a.createElement("li",{class:"scroll","data-rateY":"-2","data-rateX":"-2","data-direction":"hoizontal"},"Austin"),i.a.createElement("li",{class:"scroll","data-rateY":"-2","data-rateX":"2","data-direction":"horizontal"},"Fortson"))),i.a.createElement("div",{id:"layer2",class:"scroll","data-rate":"-2","data-direction":"vertical"},i.a.createElement("img",{src:"http://volunteeralberta.ab.ca/wp-content/uploads/2016/08/Laptop-cartoon.png",alt:"none",id:"laptop",class:"scroll","data-rate":"-2","data-direction":"vertical"}),i.a.createElement("h3",{class:"scroll","data-rate":"-3","data-direction":"vertical",id:"full"},"Full"),i.a.createElement("h3",{class:"scroll","data-rate":"-3","data-direction":"vertical",id:"stack"},"Stack"),i.a.createElement("h3",{class:"scroll","data-rate":"-3","data-direction":"vertical",id:"developer"},"Developer")),i.a.createElement("div",{id:"layer3",class:"scroll","data-rate":"-2","data-direction":"vertical"},i.a.createElement("div",{id:"aboutMe"},i.a.createElement("h3",null,"About Me")),i.a.createElement("div",{id:"aboutMeAlt"},i.a.createElement("h3",null,"About Me")),i.a.createElement("div",{id:"bio",class:"scroll","data-rateY":"-1","data-rateX":"-3","data-direction":"hoizontal"},i.a.createElement("p",null,"I'm Austin Fortson, a Full Stack Developer From Charlotte NC")),i.a.createElement("div",{id:"bioAlt"},i.a.createElement("p",null,"I'm Austin Fortson, a Full Stack Developer From Charlotte NC")),i.a.createElement("div",{id:"bio2",class:"scroll","data-rateY":"-1","data-rateX":"-2","data-direction":"hoizontal"},i.a.createElement("p",null,"I Have Earned a Full Stack Web Development Certificate from UNCC")),i.a.createElement("div",{id:"bio2Alt"},i.a.createElement("p",null,"I Have Earned a Full Stack Web Development Certificate from UNCC")),i.a.createElement("div",{id:"bio3",class:"scroll","data-rateY":"-1","data-rateX":"-2","data-direction":"hoizontal"},i.a.createElement("p",null,"Experienced In ",i.a.createElement("span",{id:"redhighlight"},"HTML"),", ",i.a.createElement("span",{id:"redhighlight"},"CSS"),", ",i.a.createElement("span",{id:"redhighlight"},"Javascript"),", ",i.a.createElement("span",{id:"redhighlight"},"ReactJS"),", ",i.a.createElement("span",{id:"redhighlight"},"MongoDB"),", ",i.a.createElement("span",{id:"redhighlight"},"MySql")," And Able To ",i.a.createElement("span",{id:"redhighlight"},"Learn More"))),i.a.createElement("div",{id:"bio3Alt"},i.a.createElement("p",null,"Experienced In ",i.a.createElement("span",{id:"redhighlight"},"HTML"),", ",i.a.createElement("span",{id:"redhighlight"},"CSS"),", ",i.a.createElement("span",{id:"redhighlight"},"Javascript"),", ",i.a.createElement("span",{id:"redhighlight"},"ReactJS"),", ",i.a.createElement("span",{id:"redhighlight"},"MongoDB"),", ",i.a.createElement("span",{id:"redhighlight"},"MySql")," And Able To ",i.a.createElement("span",{id:"redhighlight"},"Learn More")))),i.a.createElement("div",{id:"layer4",class:"scroll","data-rate":"-2","data-direction":"vertical"},i.a.createElement("h1",{id:"portfolioHeader",class:"scroll","data-rate":"-2","data-direction":"vertical"},"Portfolio",i.a.createElement("span",{id:"orangehighlight"},".")),i.a.createElement("div",{className:"container",id:"worksContainer",class:"scroll","data-rate":"-2","data-direction":"vertical"},i.a.createElement(k,{image:"https://cdn.britannica.com/s:300x300/77/170477-004-B774BDDF.jpg",title:"Resturant Website",technologies:"React, CSS, Materialize",description:"A website for a resturant showcasing the establishment, it's menu, and operation info."}),i.a.createElement(k,{image:"https://cms-assets.tutsplus.com/uploads/users/30/posts/9386/final_image/preview.jpg",title:"HTML EMAIL",technologies:"HTML, CSS, Photoshop",description:"A promotional HTML Email for a clothing brand"}),i.a.createElement(k,{image:"https://halffullmarketing.site/wp-content/uploads/2017/07/coming-soon.png",title:"Coming Soon",technologies:"Unavaliable",description:"Unavaliable"}),i.a.createElement(k,{image:"https://halffullmarketing.site/wp-content/uploads/2017/07/coming-soon.png",title:"Coming Soon",technologies:"Unavaliable",description:"Unavliable"}))),i.a.createElement("div",{id:"layer5",class:"scroll","data-rate":"-2","data-direction":"vertical"},i.a.createElement("div",{id:"contactMe",class:"scroll","data-rate":"-1","data-direction":"vertical"},"Contact Me"),i.a.createElement("div",{class:"scroll","data-rate":"-2","data-direction":"vertical",id:"phoneDiv"},i.a.createElement("img",{src:"https://mail.google.com/mail/u/0?ui=2&ik=744a95a85f&attid=0.2&permmsgid=msg-a:r-3961478655416566239&th=16bddadfd2b06eaf&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8WV-Sv9McJRkPAkDPTPBxPQaoOyx3K_1fMKcNT47F_CfdiD1vEys-0vTmtgxysmtTVhG9uM3RAWMUe1GmtB8opewzW9JcULZx_d7QugIhyTP2KhhvrRHqFXns&disp=emb&realattid=ii_jxxq5zo71",alt:"none",id:"phone"}),i.a.createElement("a",{href:"https://www.linkedin.com/in/austin-fortson-916b17170",target:"_blank"},i.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/34/34227.png",alt:"LinkedIn",id:"linkedIn"})),i.a.createElement("a",{href:"https://github.com/AustinFortson",target:"_blank"},i.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/25/25231.svg",alt:"github",id:"gitHub"})),i.a.createElement("img",{src:"https://mail.google.com/mail/u/0?ui=2&ik=744a95a85f&attid=0.1&permmsgid=msg-a:r-3961478655416566239&th=16bddadfd2b06eaf&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_zWYxaEFRugfG7Mas7CQUem6EzGXNfNf6Ba5hEX-uc7zSZyFqJAHeWhybh1tbPBx0mll6ag-Qt9DPCOlscVsD7Bne-K0GLX3IraRt3iAw0_uRZwXEQVraELLk&disp=emb&realattid=ii_jxxq5znm0",alt:"none",id:"phoneAlt"})),i.a.createElement("div",{id:"phoneDiv2"},i.a.createElement("img",{src:"https://mail.google.com/mail/u/0?ui=2&ik=744a95a85f&attid=0.3&permmsgid=msg-a:r-3961478655416566239&th=16bddadfd2b06eaf&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ_LZY6UNwNdmOs0lFJqkDiEIbL0LHAmPr-7sFjv6ywd3nViKc1bfV3x314Oa8AECqA-1AwQ043O-O4BNBvGUfCIdA0V7bEFco-kT-_YGP1IZW05sTTHmKSoRsM&disp=emb&realattid=ii_jxxq63mu2",alt:"none",id:"phone2"}),i.a.createElement(y,null)),i.a.createElement("h3",{id:"backToTop",href:"#layer1",onClick:M},"Back To The Top")))};r.a.render(i.a.createElement(T,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.fc89d234.chunk.js.map