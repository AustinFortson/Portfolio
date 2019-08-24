import React from 'react';
import './form.css'

class Form extends React.Component {
    render () {
    return (
        <div>
        <form name="contact" id="contactForm" method="POST" netlify data-netlify="true">
        <label>Name</label>
        <input name="name" type="text" id="name"  placeholder="Enter Your Name Here"></input>

        <label>Email</label>
        <input name="email" type="email" id="email" placeholder="Enter Your Email Here"></input>

        <label>Message</label>
        <textarea name ="message" type="message" id="message" placeholder="Enter Your Message Here"></textarea>

        <div id="recaptcha" data-netlify-recaptcha="true"/>
        <input id="submit" name="submit" type="submit"></input>
      </form>    
    </div>
    );
    }
}


export default Form;
