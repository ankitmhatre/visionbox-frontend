import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../utils/SectionProps";
import SectionHeader from "../components/sections/partials/SectionHeader";


const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const About = ({
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
  const outerClasses = classNames(
    "about section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "about-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "About Us",
    paragraph: "What we do.",
  };

  return (
    <section {...props} id="about" className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />


          <span>
        "Our intelligence is what makes us human, and AI is an extension of that
        quality.” Drashti Patel, CEO of VisionBox, helping companies to reach
        their A.I. Dream with an experienced team of Data scientists and AI
        Researcher. VisionBox has helped more than 10 companies so far all
        around the world in less than a year by advising, implementing, and
        giving a complete end-to-end solution for AI problems." We are a team of
        highly enthusiastic professionals with each one bringing unique things
        to the table of expertise. A right mix of skillset and vision to help
        you fly higher and achieve the goals you have set."
      </span>



          
        </div>
      </div>
    </section>
  );
};

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;
