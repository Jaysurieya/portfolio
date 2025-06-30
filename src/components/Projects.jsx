import React from 'react'
import "./CSS/Projects.css"
import "./SpotlightCard/SpotlightCard"
import SpotlightCard from './SpotlightCard/SpotlightCard'
import { MdConstruction } from 'react-icons/md';
import ShinyText from './TextAnimations/ShinyText/ShinyText';



const Projects = () => {
  return (
    <div Class="card">
        <div Class="shine-1">
          <ShinyText text={"Projects"} speed={2} />
        </div><br/><br/>
        <div Class="box">
          <SpotlightCard spotlightColor={"#00ff97"} >
            <div Class="pad-1">
              <MdConstruction size={50}/>
              <p>UNDER CONSTRUCTION</p>
            </div>
          </SpotlightCard>
          <SpotlightCard spotlightColor={"#00ff97"} >
            <div Class="pad-1">
              <MdConstruction size={50}/>
              <p>UNDER CONSTRUCTION</p>
            </div>
          </SpotlightCard>
          <SpotlightCard spotlightColor={"#00ff97"} >
            <div Class="pad-1">
              <MdConstruction size={50}/>
              <p>UNDER CONSTRUCTION</p>
            </div>
          </SpotlightCard>
        </div>
    </div>
  )
}
  
export default Projects
