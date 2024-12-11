// AboutUs.js
import React from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: valuesRef, inView: valuesInView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="about-us">
      <div className="hero">
        <h1>Welcome to Our Food Delivery Service</h1>
        <p>
          Discover the best meals delivered to your doorsteps with ease and
          convenience.
        </p>
      </div>
      <div className="content">
        <section>
          <h2>Our Values</h2>
          <div
            className={`values-list ${valuesInView ? "animate" : ""}`}
            ref={valuesRef}
          >
            <div className="value-item">
              <i className="fas fa-star"></i>
              <h3>Quality</h3>
              <p>We ensure the highest quality ingredients in every meal.</p>
            </div>
            <div className="value-item">
              <i className="fas fa-truck"></i>
              <h3>Fast Delivery</h3>
              <p>
                Our delivery is quick and efficient to get your food to you
                fast.
              </p>
            </div>
            <div className="value-item">
              <i className="fas fa-smile"></i>
              <h3>Customer Satisfaction</h3>
              <p>Your satisfaction is our top priority, always.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
