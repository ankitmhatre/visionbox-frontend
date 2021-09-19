


import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
    import Button from "../elements/Button";
    import Image from "../elements/Image";
    import Modal from "../elements/Modal";
import video_placeholder from "../../assets/images/video-placeholder.jpg";
import Particles from "react-tsparticles";
const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const ProductHero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "productHero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "productHero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} 
         className={outerClasses} style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '100vh'
       }}>
      <div className={innerClasses}>
     
          <h1
            className="mt-0 mb-16 reveal-from-bottom"
            // style={{ fontWeight: 900, fontSize: 64, lineHeight: 1.19 }}
            data-reveal-delay="200"
          >
            Research & <span className="text-color-primary">Development</span>
          </h1>
          <div className="container-xs">
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
            Visionary Farming? Visionary Farming is a complete farming solution for
a farmer to track, analyze and simulate the complete farming lifecycle.
Users can visualize either a scene of their farm or their own farm in 2D
or 3D.They will be able to interact with the simulated farm and perform
activities on the farm like in real world. The tool allows farmers to
simulate the existing farm and forecast the yield of crops, soil quality
or threats of bugs based on factors like fertilisers, water cycle,
pesticide and weather. Another add on product of the visionary farm will
be a self-driving drone that can move in the farm on its own and keep
track of what is happening real-time with the help of various cameras
and sensors.
            </p>
    
         
              <ButtonGroup>
              <buts href="/"    >
		<span></span>
		<span></span>
		<span></span>
		<span></span>
   Home</buts>
                
              </ButtonGroup>
            </div>
          </div>
 
    </section>
  );
};

ProductHero.propTypes = propTypes;
ProductHero.defaultProps = defaultProps;

export default ProductHero;
