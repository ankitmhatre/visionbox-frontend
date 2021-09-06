import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import video_placeholder from './../../assets/images/video-placeholder.jpg'
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
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
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
        
    >
      <div className="container-sm" style={{background : '#a89379', 


alignItems  :'center',
justifyContent: 'center'
 }}>
        <div className={innerClasses}>
          
          <div className="hero-content" >
            <h1 className="mt-0 mb-16 reveal-from-bottom" 
           // style={{fontWeight :900, fontSize:64, lineHeight:1.19}}
             data-reveal-delay="200">
              Providing wings to your <br /><span className="text-color-primary">Vision</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              We help companies drive amazing business outcomes by delivering meaningful results using Artificial Intelligence and Machine Learning strategies.</p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile  onClick={()=>{
                    var rect = document.querySelector('#contact-us').getBoundingClientRect();
                  
                    window.scrollTo({
                      top: rect.top,
                      left: 0,
                      behavior: 'smooth',
                      
                    });
                  }}>
                    Contact us
                    </Button>
                 
                </ButtonGroup>
              </div>
            </div>
          </div>
       
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;