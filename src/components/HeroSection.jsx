import React from "react";
import img1 from "../assets/2026-05-30-22-59-39-765.jpg";
import img2 from "../assets/Snapchat-1536731887.jpg";
import img3 from "../assets/WhatsApp Image 2025-07-26 at 15.06.42_a4fd3cd9.jpg";

const images = [img1, img2, img3];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="app-container pt-24 pb-12 overflow-hidden sm:overflow-visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="gradient-text">Artificial Intelligence</span>
            <br />
            For a Smarter Future
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Discover the transformative force of Artificial Intelligence, a
            groundbreaking technology that is reshaping industries and elevating
            human potential worldwide. By processing complex data at
            unprecedented speeds, AI turns bold ideas into smart, real-world
            solutions. Embracing this powerful tool is no longer just an
            option—it is the ultimate key to shaping the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a className="btn-primary" href="#">
              Explore Ai Solution
            </a>
            <a className="btn-outline" href="#">
              Learn More
            </a>
          </div>
          <div className="pt-4 flex items-center space-x-4">
            <div className="flex ">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="avatar"
                  alt={`user ${i + 1}`}
                />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-600">
              Trusted by <span className="text-primary font-bold">10,000+</span>{" "}
              people world life
            </p>
          </div>
        </div>

        {/* right image */}
        <div className="relative w-full h-80 md:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop"
            className="w-full h-full object-cover rounded-2xl"
            alt="hero-section"/>
          <div className="absolute w-32 h-32 rounded-full bg-secondary/20 -bottom-6 -left-6 blur-xl"></div>
          <div className="absolute w-32 h-32 rounded-full bg-accent/20 -top-6 -right-6 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;