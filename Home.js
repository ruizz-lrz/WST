import React from 'react';
import ContactForm from './conform';

function Home() {
  return (
    <div> 
      <main> 
        <section className="hero"> 
          <h1>Hello, nice to see you🤍</h1>
          <p>It's me future web developer.</p>
          <img src="images/profile.jpg" alt="Your Profile Picture" className="profile-img" /> 
        </section>
        <section className="about-preview"> 
          <h2>About Me</h2>
          <p> Do you want to know me a little more about myself? <a href="./About">Read More</a></p>
        </section>
        <section className="contact-form"> 
          <h2>Contact Me</h2>
          <form id="contactForm">
          <ContactForm />
          </form>
        </section>

        
      </main>
      <footer>
        <p>&copy; Copyright All Rights Reserved 2025 by Diannel Cabanilla</p>
      </footer>
    </div>
  );
}

export default Home;