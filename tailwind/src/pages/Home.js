import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import Slider from "react-viewport-slider";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Home() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <Slider>
          <Slider.Item buttonLabel={""}>
            <HeroHome />
          </Slider.Item>

          <FeaturesBlocks />

          <Testimonials />
          <div id="contactus"
          >
    <section className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.549192089781!2d-123.00591578441721!3d49.26598997987442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486772fd9749d55%3A0xcaa0739cb55a94ea!2s2025%20Willingdon%20Ave%2C%20Burnaby%2C%20BC%20V5C%200J3%2C%20Canada!5e0!3m2!1sen!2sin!4v1631999083045!5m2!1sen!2sin"
                width="400"
                height="350"
             
          
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </section>
          </div>

          <Footer />
        </Slider>
      </main>
    </div>
  );
}

export default Home;
