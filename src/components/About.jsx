import React from 'react'
import ShinyText from './TextAnimations/ShinyText/ShinyText';
import ScrollFloat from './TextAnimations/ScrollFloat/ScrollFloat';
import './CSS/About.css';

const About = () => {
  return (
    <div Class="text">
      <div Class="shine">
        <ShinyText text={"About me"} speed={2} />
      </div>
            <p>
                Hey, I'm Jay Surieya — a passionate Full Stack Developer
                with a spark for AI and a strong grip on problem solving. <br />

                I build everything from smart web apps to intelligent systems,
                blending creativity with logic.  <br />

                Whether it's designing interactive UIs,
                building scalable backends, or training AI models,
                I love turning ideas into real-world impact. <br />

                With a solid foundation in DSA,
                hands-on experience in the MERN stack,  <br />
                and a growing skillset in machine learning,
                I'm always pushing boundaries and building solutions that matter.
            </p>
    </div>
  )
}

export default About
