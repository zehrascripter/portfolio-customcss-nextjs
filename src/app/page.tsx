import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <Image
          src="/accets/images/dummy.avif"
          alt="Profile"
          width={500}
          height={500}
        />
      </div>
      <div className="hero-content">
        <h1>Hello, I am Zehra</h1>
        <p>
          I specialize in building responsive and interactive websites with a
          focus on seamless user experiences. With skills in HTML, CSS,
          JavaScript, and modern frameworks like React and Next.js, I bring
          ideas to life on the web. Let create something impactful together.
        </p>
        <button className="hero-button">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
