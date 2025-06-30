import React from 'react'
import ShinyText from './TextAnimations/ShinyText/ShinyText'
import RollingGallery from './RollingGallery/RollingGallery'
import Dock from './Dock/Dock'
import { FaTrophy, FaCertificate } from "react-icons/fa";

const Achievements = () => {
  const dockItems = [
    {
      icon: <FaTrophy />,
      label: "Achievements",
      onClick: () => {
        // Handle achievements click
        console.log("Achievements clicked");
      },
      className: "dock-achievements", // Optional
    },
    {
      icon: <FaCertificate />,
      label: "Certifications",
      onClick: () => {
        // Handle certifications click
        console.log("Certifications clicked");
      },
      className: "dock-certifications", // Optional
    },
  ];
  return (
    <div>
      <div style={{fontSize: "30px"}}>
        <ShinyText text={"Achievements/Certifications"} speed={2} />
      </div>
      <div style={{position: "relative"}}>
        <Dock items={dockItems} />
      </div>
      <div>
        <RollingGallery />
      </div>
    </div>
  )
}

export default Achievements
