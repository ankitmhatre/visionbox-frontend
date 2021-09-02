import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";
import visionbox_v from "../../../assets/images/visionbox_v.svg";
import visionbox_text from "../../../assets/images/visionbox_text.svg";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={visionbox_v}
            alt="Visionbox"
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              
            }}
            width={48}
            height={48}
          />

          <div style={{ marginTop: 12 }}>
            <Image src={visionbox_text} alt="Open" width={72} height={72} />
          </div>
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
