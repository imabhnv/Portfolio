// import React from "react";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Loader from "./components/Loader";
// import ScrollToTop from './components/ScrollToTop';
// import Footer from "./components/Footer"; 

// const App = () => {
//   return (
//     <>
//       <ScrollToTop />
//       <Loader />
//       <Hero />
//       <About />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Contact />
//       <Footer />
//     </>
//   );
// };

// export default App;
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import ScrollToTop from './components/ScrollToTop';
import Footer from "./components/Footer";
import "./App.css"; 

const App = () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <ScrollToTop />
      <Loader />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
