import React from "react";
import "./CSS/LeetCodeHeatmap.css";
import { SiLeetcode } from "react-icons/si";
import ShinyText from "./TextAnimations/ShinyText/ShinyText";

const LeetCodeHeatmap = () => {
  const LEETCODE_USERNAME = "Jaysurieya";

  return (
    <div
      className="leet-heatmap"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "100px"
      }}
    >
      <div className="shine-2">
        <ShinyText text={"LeetCode Heatmap"} speed={2} />
      </div>
      <br />
      <br />

      <div
        style={{
          width: "475px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
          target="_blank"
        >
          <img
            src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?ext=heatmap`}
            alt="LeetCode Stats Card"
            loading="lazy"
            style={{ width: "100%", height: "auto" }}
          />
        </a>
      </div>
    </div>
  );
};

export default LeetCodeHeatmap;
