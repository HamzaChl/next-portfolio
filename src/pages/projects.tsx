import ProjectGrid2 from "@/components/ProjectGrid2";
import Sorting from "@/components/Sorting";
import Technologies from "@/components/Technologies";
import React from "react";

const projects = () => {
  return (
    <>
      <div className="container">{/* <h5>Mes projets</h5> */}</div>

      <ProjectGrid2 />
      <div className="container">{/* <h5>Mes projets</h5> */}</div>
    </>
  );
};

export default projects;
