import React, { useEffect } from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import Slider from "react-viewport-slider";
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ContactUsSection from "../components/sections/ContactUsSection";
import GenericSection from "../components/sections/GenericSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Slider>
        <Slider.Item buttonLabel={<ArrowDownwardRoundedIcon />} >
          <Hero className="illustration-section-01" />
        </Slider.Item>
        <div id="services">
          <FeaturesTiles
            invertMobile
            imageFill
            className="illustration-section-02"
            
          />
        </div>
        <div id="testimonials">
          <Testimonial topDivider />
        </div>
        <div id="contact-us">
          <ContactUsSection topDivider/>
          <Cta split />
        </div>
        <div id="about">
          <GenericSection >
          <span>About</span>
          </GenericSection>
       
        </div>
      </Slider>
    </>
  );
};

export default Home;
