import React,{useState} from 'react';
import './Contact.css';
import Resume from '../Resume/Resume';


function Contact() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the email submission, e.g., send it to an API.
    console.log('Submitted email:', email);
  };

  return (
    <section className='contact' id="contact">
      <h4>Contact</h4>
      <form onSubmit={handleSubmit}>
        <div className='emailWrap'>
        <label>
          <input 
            type="email" 
            value={email} 
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {/* <button className="btn btn-outline-primary" type="submit">
          <i class="bi bi-arrow-right-circle"></i>
        </button> */}
         <button class="btn"><i class="bi bi-arrow-right-circle"></i></button>
         </div>
      </form>
      <div className='wrapContact'>
        <a href='https://www.linkedin.com/in/izzuan-zawawi-81b67b209'>
        <i class="bi bi-linkedin"></i>
        </a>
        <a href='#'>
        <i class="bi bi-whatsapp"></i>
        </a>
      </div>
      <div className='resumeContainer'>
        <Resume />
      </div>
      {/* Add more contact information */}
    </section>
  );
}

export default Contact;
