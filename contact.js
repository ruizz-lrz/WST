import React from 'react';
import ContactForm from './conform';

function Contact() {
  return (
    <> 
      <h1>Contact Me</h1>
      <main>
        <section className="contact-form">
        <ContactForm />
        </section>
        <section>
          <div className="contact-info-column"> 
            <p>Phone: 09030936632</p>
            <p>Address: Brgy. Canitoan, Cagayan de Oro City</p>
            <p>Email: diannelcabanilla@gmail.com</p>
            <div className="social-links"> 
              <a href="https://www.facebook.com/share/14uQ1UVunh/" target="_blank"><img src="images/facebook.png" alt="Facebook" /></a>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdiannel-cabanilla-138032257%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app%26fbclid%3DIwZXh0bgNhZW0CMTAAAR2-1-Flh1hLmPQyPc_6-3gTk3zrvm2nlhowAEkOxyx0YPpXL6pJrDUY8H0_aem_Qlueke3f18mzFk4-EjDgAw&h=AT1wZRL01rT9dTeoIQ25kJoywKYItJjSV4PW5D9K5tLleeAvyPn2bkhDkovbmRdGjEmmJKFjm_FgZZIKOCydv6ovT3JgnMsYuS_VoThrj4wnaFhrihxGT96Wp8lsqOBdiNk7kA" target="_blank"><img src="images/linked.png" alt="Linkedin" /></a> 
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F_u%2Furdynela%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR2-1-Flh1hLmPQyPc_6-3gTk3zrvm2nlhowAEkOxyx0YPpXL6pJrDUY8H0_aem_Qlueke3f18mzFk4-EjDgAw&h=AT1SqtiKm2KVq-Q7EfsyKWQOZx_T5iB47QepE3MRmnjHa9lnATWB_bSPKN9HzRbIze6DxBRC1AwGB7NUxsvRfZyDo-aqVdmgvlTqt77blEqc50lVwzNvDh3hFbb4h7Dc" target="_blank"><img src="images/instagram.png" alt="Instagram" /></a> 
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; Copyright All Rights Reserved 2025 by Diannel Cabanilla</p>
      </footer>
    </>
  );
}

export default Contact;