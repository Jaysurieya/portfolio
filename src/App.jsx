import React from 'react';
import NASAParticles from './components/NASAParticles';
import './App.css';
import GooeyNav from "./components/GooeyNav/GooeyNav"
import ClickSpark from "./Animations/ClickSpark/ClickSpark.jsx"
import Front from "./components/Front.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import LeetCodeHeatmap from "./components/LeetCodeHeatmap.jsx"
import Achievements from "./components/Achievements.jsx"

function App() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div>
      <NASAParticles />
      <div Class="center-content">
        <GooeyNav items={navItems}/>
        <ClickSpark sparkColor="#00ff97">
          <Front />
          <About />
          <Projects />
          <LeetCodeHeatmap />
          <Achievements />
        </ClickSpark>
      </div>
      
    </div>
  );
}

export default App;
