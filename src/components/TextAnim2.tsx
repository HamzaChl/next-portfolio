import RotatingText from "./RotatingText";

import React, { useRef } from "react";

const TextAnim2 = () => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <RotatingText
        texts={["UI/UX", "Programming", "Design"]}
        mainClassName="rotating-main"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="rotating-split"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </div>
  );
};

export default TextAnim2;
