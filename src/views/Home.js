import React, { useEffect } from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import Slider from "react-viewport-slider";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import ContactUsSection from "../components/sections/ContactUsSection";
import GenericSection from "../components/sections/GenericSection";
import Particles from "react-tsparticles";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

      <Slider>
        <Slider.Item buttonLabel={""}>
          <Particles
            id="tsparticles"
            style={{
              zIndex: 0,
            }}
            options={{
              background: {
                color: {
                  value: "#000",
                },
              },
              fpsLimit: 120,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 500,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 1,
                  },
                  repulse: {
                    distance: 100,
                    duration: 1,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 5,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 1000,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 3,
                },
              },
              detectRetina: true,
            }}
          ></Particles>
          
          <Hero className="illustration-section-01" />
        </Slider.Item>
        <div id="services">
          <FeaturesTiles className="illustration-section-02" />
        </div>
        <div id="testimonials">
          <Testimonial />
        </div>
        <div id="contact-us">
          <ContactUsSection />
          <Cta split />
        </div>
        <div id="about">
          <GenericSection>
            <span>About</span>
          </GenericSection>
        </div>
      </Slider>
    </>
  );
};

export default Home;
