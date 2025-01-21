import React from 'react';
import './Contact.css';



const Contact = () => {
  return (
    <section className="Contact" id="contact">
      <h2>Kontakt</h2>
      <p>Fyll i formuläret nedan för att komma i kontakt med oss.</p>
      <form className="Contact-form">
        <input type="text" placeholder="Namn" required />
        <input type="email" placeholder="E-post" required />
        <textarea placeholder="Meddelande" required></textarea>
        <button type="submit">Skicka</button>
      </form>
    </section>
  );
};

export default Contact;
