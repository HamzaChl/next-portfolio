"use client";

import React, { useRef } from "react";
import VariableProximity from "./VariableProximity";

const TextAnim1: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <VariableProximity
        label="UI/UX Design"
        className="variable-proximity"
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="linear"
      />
    </div>
  );
};

export default TextAnim1;
