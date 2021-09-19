import React from "react";
import Slider from "react-viewport-slider/dist/modules/Slider";
import Footer from "./Footer";
import Header from "./Header";
import robot from "../assets/robot.svg";
import Image from "../elements/Image";

const ResearchAndDevelopment = () => (
  <div className="flex flex-col min-h-screen overflow-hidden">
    {/*  Site header */}
    <Header />

    {/*  Page content */}
    <main className="flex-grow">

          <section className="relative">
            {/* Illustration behind hero content */}
          

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              {/* Hero content */}
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                {/* Section header */}
                <div className="text-center pb-12 md:pb-16">
                  <h1
                    className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                    data-aos="zoom-y-out"
                  >
                    Research &{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                      Development
                    </span>
                  </h1>
                  <div className="max-w-3xl mx-auto">
                    <p
                      className="text-xl text-gray-600 mb-8"
                      data-aos="zoom-y-out"
                      data-aos-delay="150"
                    >
                      <div>
                        <div
                          className="relative flex justify-center mb-8"
                          data-aos="zoom-y-out"
                          data-aos-delay="450"
                        >
                          <div className="flex flex-col justify-center">
                            <img
                              className="mx-auto"
                              src={require("../assets/robot.svg").default}
                              width="400"
                              height="180"
                              alt="Hero"
                            />
                            
                          </div>
                        </div>
                      </div>

                      <div>
                        <span>
                          <div>Visionary Farming? </div>Visionary Farming is a
                          complete farming solution for a farmer to track,
                          analyze and simulate the complete farming lifecycle.
                          Users can visualize either a scene of their farm or
                          their own farm in 2D or 3D.They will be able to
                          interact with the simulated farm and perform
                          activities on the farm like in real world. The tool
                          allows farmers to simulate the existing farm and
                          forecast the yield of crops, soil quality or threats
                          of bugs based on factors like fertilisers, water
                          cycle, pesticide and weather. Another add on product
                          of the visionary farm will be a self-driving drone
                          that can move in the farm on its own and keep track of
                          what is happening real-time with the help of various
                          cameras and sensors.
                        </span>
                      </div>
                    </p>
                    <div
                      className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                      data-aos="zoom-y-out"
                      data-aos-delay="300"
                    >
                     
                      {/* <div>
            <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
          </div> */}
                    </div>
                  </div>
                </div>

                {/* Hero image */}
              </div>
            </div>
          </section>
          );
        

<div id="contactus">

          <Footer />
          </div>

    </main>
  </div>
);

export default ResearchAndDevelopment;
