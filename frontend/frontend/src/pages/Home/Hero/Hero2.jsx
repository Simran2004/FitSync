import React from "react";
import bgImg2 from "../../../assets/home/banner-2.jpg";
const Hero2 = () => {
  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${bgImg2})` }}
    >
      <div className="min-h-screen flex justify-start items-center pl-11 text-white bg-black bg-opacity-60">
        <div>
          <div className="space-y-4">
            <p className="md:text-4xl text-2xl">Best Online</p>
            <h1 className="md:text-7xl text-4xl font-bold">
              Courses From Home
            </h1>
            <div className="md:w-1/2">
              <p>
                Transform your home into a sanctuary of peace and fitness with
                FitSync’s live, expert-led yoga classes. Enjoy the flexibility
                to practice anytime, anywhere, with personalized sessions
                designed for all levels. Start your journey to better health and
                mindfulness today—because true wellness begins at home!
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <button className="px-7 py-3 rounded-lg bg-secondary font-bold uppercase">
                Join Today
              </button>
              <button className="px-7 py-3 rounded-lg border hover:bg-secondary font-bold uppercase">
                View Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
