import React from 'react';
import emailjs from 'emailjs-com'

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    
    emailjs
      .sendForm(
        'service_ho4u3ek', 'template_vky1poz', e.target, 'user_wQUR4E4vv5QUuzWtS4kFg'
      )
      .then(
        (result) => {
          console.log(result.text);
          this.setState({
            name: "",
            email: "",
            message: ""
          })
          
        },
        (error) => {
          alert("Please Try Again. If problem persists, please email sancusfin@gmail.com")
        }
      )
  }
  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <div id='contact'>
          <div className='container'>
            <div className='col-md-8'>
              <div className='row'>
                <div className='section-title'>
                  <h2>Join the waitlist!</h2>
                </div>
                <form name='sentMessage' validate onSubmit={this.handleSubmit}>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          value={name}
                          className='form-control'
                          placeholder='Name'
                          required
                          onChange={this.handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='form-control'
                          placeholder='Email'
                          value={email}
                          required
                          onChange={this.handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      placeholder='Message'
                      value={message}
                      required
                      onChange={this.handleChange}
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div id='success'></div>
                  <button type='submit' className='btn btn-custom btn-lg'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  
}
export default Contact;