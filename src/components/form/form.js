import React from 'react';
import './form.css'

class Form extends React.Component {
  
    render () {
      return (
        <div>
        <form name="contact" id="contactForm" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <label>Name</label>
        <input name="name" type="text" id="name" placeholder="Enter Your Name Here" required></input>

        <label>Email</label>
        <input name="email" type="email" id="email" placeholder="Enter Your Email Here"></input>

        <label>Message</label>
        <textarea name ="message" type="message" id="message" placeholder="Enter Your Message Here"></textarea>

        <input id="submit" name="submit" type="submit"></input>
      </form>    
    </div>
    );
    }
}


export default Form;
