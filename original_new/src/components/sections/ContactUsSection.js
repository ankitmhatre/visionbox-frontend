import React, { useEffect } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const ContactUsSection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Contact Us",
    paragraph: "    ",
  };

  return (
    <section id="contact-us" {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    {/* <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} /> */}
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Address</h4>
                  <p className="m-0 text-sm">
                    2025 Willingdon Avenue, Unit 900, Burnaby, BC, V5C 0J3
                  </p>
                </div>
                <br />
                <br />
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Whatsapp</h4>
                  <p className="m-0 text-sm">
                    <a href="https://wa.me/17787232410">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#5658DD"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.0568848 24L1.74388 17.837C0.702885 16.033 0.155885 13.988 0.156885 11.891C0.159885 5.335 5.49488 0 12.0499 0C15.2309 0.001 18.2169 1.24 20.4629 3.488C22.7079 5.736 23.9439 8.724 23.9429 11.902C23.9399 18.459 18.6049 23.794 12.0499 23.794C10.0599 23.793 8.09888 23.294 6.36188 22.346L0.0568848 24V24ZM6.65388 20.193C8.32988 21.188 9.92988 21.784 12.0459 21.785C17.4939 21.785 21.9319 17.351 21.9349 11.9C21.9369 6.438 17.5199 2.01 12.0539 2.008C6.60188 2.008 2.16688 6.442 2.16488 11.892C2.16388 14.117 2.81588 15.783 3.91088 17.526L2.91188 21.174L6.65388 20.193V20.193ZM18.0409 14.729C17.9669 14.605 17.7689 14.531 17.4709 14.382C17.1739 14.233 15.7129 13.514 15.4399 13.415C15.1679 13.316 14.9699 13.266 14.7709 13.564C14.5729 13.861 14.0029 14.531 13.8299 14.729C13.6569 14.927 13.4829 14.952 13.1859 14.803C12.8889 14.654 11.9309 14.341 10.7959 13.328C9.91288 12.54 9.31588 11.567 9.14288 11.269C8.96988 10.972 9.12488 10.811 9.27288 10.663C9.40688 10.53 9.56988 10.316 9.71888 10.142C9.86988 9.97 9.91888 9.846 10.0189 9.647C10.1179 9.449 10.0689 9.275 9.99389 9.126C9.91889 8.978 9.32488 7.515 9.07788 6.92C8.83588 6.341 8.59088 6.419 8.40889 6.41L7.83888 6.4C7.64088 6.4 7.31888 6.474 7.04688 6.772C6.77488 7.07 6.00688 7.788 6.00688 9.251C6.00688 10.714 7.07188 12.127 7.21988 12.325C7.36888 12.523 9.31488 15.525 12.2959 16.812C13.0049 17.118 13.5589 17.301 13.9899 17.438C14.7019 17.664 15.3499 17.632 15.8619 17.556C16.4329 17.471 17.6199 16.837 17.8679 16.143C18.1159 15.448 18.1159 14.853 18.0409 14.729V14.729Z" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    {/* <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} /> */}
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Visit us</h4>
                  <div className="m-0 text-sm">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <b>Days</b>
                          </td>
                          <td>
                            <b>Open time</b>
                          </td>
                        </tr>
                        <tr>
                          <td>Monday</td>
                          <td>09:00 a.m. – 05:00 p.m.</td>
                        </tr>
                        <tr>
                          <td>Tuesday</td>
                          <td>09:00 a.m. – 05:00 p.m.</td>
                        </tr>
                        <tr>
                          <td>Wednesday</td>
                          <td>09:00 a.m. – 05:00 p.m.</td>
                        </tr>
                        <tr>
                          <td>Thursday</td>
                          <td>09:00 a.m. – 05:00 p.m.</td>
                        </tr>
                        <tr>
                          <td>Friday</td>
                          <td>09:00 a.m. – 05:00 p.m.</td>
                        </tr>
                        <tr>
                          <td>Saturday</td>
                          <td>Closed</td>
                        </tr>
                        <tr>
                          <td>Sunday</td>
                          <td>Closed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.549192089781!2d-123.00591578441721!3d49.26598997987442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486772fd9749d55%3A0xcaa0739cb55a94ea!2s2025%20Willingdon%20Ave%2C%20Burnaby%2C%20BC%20V5C%200J3%2C%20Canada!5e0!3m2!1sen!2sin!4v1631999083045!5m2!1sen!2sin"
        width="100%"
        height="350"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

ContactUsSection.propTypes = propTypes;
ContactUsSection.defaultProps = defaultProps;

export default ContactUsSection;
