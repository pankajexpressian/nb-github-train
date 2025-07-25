/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/male-with-tablet.jpg";

const imageAltText =
  "Adult male in office setting holding a tablet";

const Home = ({ name, title }) => {
  React.useEffect(() => {
    const arrow = document.getElementById("scroll-arrow");
    if (arrow) {
      arrow.addEventListener("click", () => {
        const nextSection = document.getElementById("about");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
    // Cleanup
    return () => {
      if (arrow) {
        arrow.replaceWith(arrow.cloneNode(true));
      }
    };
  }, []);

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div
        style={{
          position: "absolute",
          top: "5rem",
          left: "2rem",
          width: "17rem",
          color: "#fff",
          textShadow: "0 2px 8px rgba(0,0,0,0.7)",
          fontWeight: 700,
        }}
      >
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img
          src={arrowSvg}
          style={{ height: "3rem", width: "3rem", cursor: "pointer" }}
          alt={imageAltText}
          id="scroll-arrow"
        />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
