import React from 'react';
import './form.css'
import axios from 'axios'

const API_PATH = 'http://localhost:3000/portfolio-austinfortson/api/contact/index.php';

class Form extends React.Component {
    constructor (props) {
        super(props)

    this.state = {
        name: '',
        email: '',
        message: '',
        mailSent: false,
        error: null,
      }
    }

 handleFormSubmit = e => {

    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  };

  

    render () {
    return (
        <div>
        <form id="contactForm" method="post" action="./index.php">
        <label>Name</label>
        <input type="name" id="name"  placeholder="Enter Your Name Here" value={this.state.name} onChange={e => this.setState({name: e.target.value})}></input>

        <label>Email</label>
        <input type="email" id="email" placeholder="Enter Your Email Here" value={this.state.email} onChange={e => this.setState({email: e.target.value})}></input>

        <label>Message</label>
        <textarea type="message" id="message" placeholder="Enter Your Message Here" value={this.state.message} onChange={e => this.setState({message: e.target.value})}></textarea>

        <input id="submit" name="submit" type="submit" onClick={e => this.handleFormSubmit(e)} value="submit"></input>

        <div>
        {this.state.mailSent &&
        <div>Thank you for Contacting me.</div>}
        </div>

      </form>

    
    </div>
    );
    }
}


export default Form;
