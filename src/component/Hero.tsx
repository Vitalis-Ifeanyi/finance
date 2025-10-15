import React from "react";
import hero from "/financeHero.svg";

const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between pl-6 md:pl-16 py-8 bg-white mt-2">
      <div className="max-w-xl mb-10 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-semibold text-[#263238] mb-4 ">
          Mutual Investment
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed md:text-[24px]">
          At Finance we care about your future. We help you invest the way you
          want. So you can relax, have fun and let your fund grow.
        </p>

        <button className="bg-green-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-green-600 transition-all">
          Learn more
        </button>
      </div>

      <div className="w-full md:w-[760px] flex justify-center">
        <img
          src={hero}
          alt="Mutual Investment Illustration"
          className="w-full "
        />
      </div>
    </section>
  );
};

export default Hero;
