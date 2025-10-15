import React from "react";
import heroimage from "/financeHero.svg";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center p-6"
      style={{
        backgroundImage: `url('/CoinPad-Hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="text-center lg:text-left flex-1 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
           Mutual Investment
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-xl mx-auto md:mx-0">
            At Finance we care about your future. We help you invest the way you want. So you can relax, have fun and let your fund grow.
          </p>

          <div>
            <Link
              to={"/analytics"}
              className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-xl transition-transform transform hover:scale-105 inline-flex items-center gap-2"
            >
               <span>Learn More</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={heroimage}
            alt="Crypto Illustration"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
