import React from 'react';
// import sections
import Cta from '../components/sections/Cta';
import ContactUsSection from '../components/sections/ContactUsSection';

const ContactUs = () => {

  return (
    <>
   
      <ContactUsSection  invertMobile  imageFill className="illustration-section-02" />
      
      <Cta split />
    </>
  );
}

export default ContactUs;