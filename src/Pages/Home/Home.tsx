import React from "react";
import { FaHeart } from "react-icons/fa";
import IntroImage from "../../Assets/Other/banner.jpg";
import wave from "../../Assets/Other/wave.svg";
import "./Home.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro-section">
        <div className="intro-text">
          <h2 className="intro-heading">Spare a Thought...</h2>
          <p className="intro-para">
            Charity is something which only the very rich can do or so we think.
            Look around your neighbourhood, observe the lives of people, and
            you'll be surprised at the number of ways in which you can make a
            difference or you could simply support Mahima in its endeavours.
          </p>
          <NavLink to="/causes" className="intro-donate-btn">
            <div className="heart">
              <FaHeart />
            </div>
            <p>
              <span className="mask">
                <div className="link-container">
                  <span className="link-title1 title">Donate Now!</span>
                  <span className="link-title2 title">Donate Now!</span>
                </div>
              </span>
            </p>
          </NavLink>
        </div>
        <div className="intro-image-container">
          <img
            src={IntroImage}
            className="intro-image"
            alt="children smiling"
          />
        </div>
      </section>
      <img src={wave} alt="" className="wave" />
      <section>
        2nd section
      </section>
    </div>
  );
};

export default Home;
