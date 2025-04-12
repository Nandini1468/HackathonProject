import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const HomePage = ({ isLoggedIn }) => {
  const navigate=useNavigate();

  const handleClick =()=>{
    if(isLoggedIn){
      navigate("/input-form");
    }else{
      navigate("/input-form");
    }
  }
  return (
    <div className="flex flex-col min-h-screen bg-gray-200 ">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-5 text-center flex flex-col items-center justify-center py-20 px-4 bg-blue-500 dark:bg-gray-800">
        <div className="absolute inset-0 bg-opacity-40 backdrop-blur-md"></div>
        <h2 className="text-5xl font-extrabold mb-4 text-white z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          Your Personalized Learning Roadmap
        </h2>
        <p className="text-xl mb-8 max-w-2xl text-white z-10">
          Whether you're just starting out or want to switch careers — we’ll guide you step by step.
        </p>
        <button 
        onClick={handleClick}
          // {isLoggedIn ? navigate('/input-form') : navigate('/register')}
          className="z-10 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/70 transition duration-300"
        >{isLoggedIn ? "Continue Learning" : "Start Learning"}
          
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 pt-5 pb-5 bg-slate-400 dark:bg-gray-900">
        <h3 className="text-3xl text-center font-bold mb-8 dark:text-white drop-shadow-md">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "AI-Powered", desc: "Smart suggestions tailored to your interests." },
            { title: "Progress Tracking", desc: "Keep track of what you’ve learned." },
            { title: "Goal-Oriented", desc: "Set a goal and get a clear path to achieve it." },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-gray-300 dark:bg-gray-800 rounded-xl p-6 "
            >
              <h5 className="text-xl font-bold text-blue-600 dark:text-blue-700 mb-2">{f.title}</h5>
              <p className="text-gray-700 dark:text-white">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Previews */}
      <section className="py-16 px-4 pt-5 pb-5 bg-slate-400 dark:bg-gray-900 ">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Popular Roadmaps</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Full Stack Developer", desc: "HTML, CSS, JS, React, Node, MongoDB" },
            { name: "Blockchain Enthusiast", desc: "Solidity, Ethereum, Web3.js" },
            { name: "Data Structures & Algorithms", desc: "Master problem-solving and coding rounds" },
          ].map((roadmap, i) => (
            <div
              key={i}
              className="p-6 bg-gray-300 dark:bg-gray-800  rounded-lg shadow-lg hover:shadow-blue-500/30 transition duration-300"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-700">{roadmap.name}</h5>
              <p className="mb-3 text-gray-700 dark:text-white">{roadmap.desc}</p>
              <button
                
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl"
              >
                Start Learning
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-slate-400 dark:bg-gray-900">
        <p className="dark:text-white text-center">© 2025 RoadMapr. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
