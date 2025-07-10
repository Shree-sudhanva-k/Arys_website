import React, { Fragment } from "react";

import Script from "dangerous-html/react";
import PropTypes from "prop-types";

import "./hero.css";

const Hero = (props) => {
  return (
    <div className={`hero-header78 ${props.rootClassName} `}>
      <div
        className="hero-column thq-section-padding thq-section-max-width"
        style={{ paddingTop: "0px" }} // adjust value as needed
      >
        <div className="hero-content1">
          <p className="hero-text1 thq-body-large">
            {props.text ?? (
              <Fragment>
                <span className="hero-text3">
                  We are dedicated to revolutionizing the way people think about
                  electric vehicles. Stay tuned for exciting updates and
                  innovations.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero-actions"></div>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  image3Src:
    "https://images.unsplash.com/photo-1708422932063-151a7395fb20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA0Mzk1OXw&ixlib=rb-4.1.0&q=80&w=1080",
  image8Alt: "Hero Image",
  image2Src:
    "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA0Mzk2MHw&ixlib=rb-4.1.0&q=80&w=1080",
  image6Alt: "Hero Image",
  image11Src:
    "https://images.unsplash.com/photo-1595094238521-e109e2d763b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA0Mzk2MXw&ixlib=rb-4.1.0&q=80&w=1080",
  image5Alt: "Hero Image",
  image1Alt: "Hero Image",
  image7Src:
    "https://images.unsplash.com/photo-1744131291043-807879e99936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA0Mzk2Mnw&ixlib=rb-4.1.0&q=80&w=1080",
  image7Alt: "Hero Image",
  image12Alt: "Hero Image",
  image2Alt: "Hero Image",
  image6Src:
    "https://images.unsplash.com/photo-1613233785685-0223b255e2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA0Mzk2Mnw&ixlib=rb-4.1.0&q=80&w=1080",
  image12Src:
    "https://images.unsplash.com/photo-1650802218122-a8de4e071a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA0Mzk2M3w&ixlib=rb-4.1.0&q=80&w=1080",
  image3Alt: "Hero Image",
  image9Src:
    "https://images.unsplash.com/photo-1627526674977-4cccbca2791b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA0Mzk2M3w&ixlib=rb-4.1.0&q=80&w=1080",
  image11Alt: "Hero Image",

  image8Src:
    "https://images.unsplash.com/photo-1711107756332-969b891d22c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA0Mzk2M3w&ixlib=rb-4.1.0&q=80&w=1080",
  image5Src:
    "https://images.unsplash.com/photo-1634289207979-bde023721a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA0Mzk2M3w&ixlib=rb-4.1.0&q=80&w=1080",
  image4Src:
    "https://images.unsplash.com/photo-1623056470769-d755f2721ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA0Mzk2NHw&ixlib=rb-4.1.0&q=80&w=1080",
  image10Alt: "Hero Image",
  image4Alt: "Hero Image",
  image10Src:
    "https://images.unsplash.com/photo-1586720832417-8a3d3de53604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA0Mzk2NHw&ixlib=rb-4.1.0&q=80&w=1080",
  image9Alt: "Hero Image",
  image1Src:
    "https://images.unsplash.com/photo-1724859078784-375af9d7db3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MjA0Mzk2NHw&ixlib=rb-4.1.0&q=80&w=1080",
  text: undefined,
  rootClassName: "",
};

Hero.propTypes = {
  image3Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Src: PropTypes.string,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
};

export default Hero;
