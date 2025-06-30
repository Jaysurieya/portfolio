import React from "react";
import SplitText from "./TextAnimations/SplitText/SplitText";
import "./CSS/Front.css";
import ShinyText from "./TextAnimations/ShinyText/ShinyText";
import RotatingText from "./TextAnimations/RotatingText/RotatingText";
import { SiLeetcode } from "react-icons/si";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const Front = () => {
  return (
    <div Class="pad">
      <div Class="pad-col">
        <div Class="pad-row">
          <ShinyText text={"Hello,"} speed={2} />
          <SplitText text="I'm Jay Surieya" />
        </div>
        <div Class="pad-row" style={{ fontSize: "30px" }}>
          <ShinyText text={"I'm a,"} speed={2} />
          <RotatingText
            texts={["FullStack Developer", "AI Enthusiast", "Problem Solver"]}
            rotationInterval={3000}
            auto={true}
            loop={true}
            splitBy="characters"
          />
        </div>
        <div Class="pad-row" style={{ fontSize: "30px" }}>
          <ShinyText text={"I build, I solve, I innovate."} speed={2} />
        </div>
        <br />
        <div Class="pad-row-2">
          <div style={{cursor:"pointer"}}>
            <a Class="leet" href="https://leetcode.com/JaySurieya/" target="_blank">
              <SiLeetcode />
            </a>
          </div>
          <div Class="github" style={{cursor:"pointer"}}>
            <a href="https://github.com/JaySurieya" target="_blank">
              <SiGithub />
            </a>
          </div>
          <div Class="linkedin" style={{cursor:"pointer"}}>
            <SiLinkedin />
          </div>
          <div  style={{cursor:"pointer"}}>
            <a href="mailto:jaysurieyaty.23aid@kongu.edu" Class="envelope">
              <FaEnvelope size={60}/>
            </a>
          </div>
          <div style={{paddingBottom: "10px"}}>
            <div  Class="but" style={{cursor:"pointer"}}>
              <FaDownload />
              <ShinyText text={"Resume"} speed={2} className='resume'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
