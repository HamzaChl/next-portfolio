import React from "react";
import ProjectGrid from "@/components/ProjectGrid";
import Nav from "@/components/Nav";
import Nav2 from "@/components/Nav2";
import styles from "@/styles/Labo.module.css"
import Technologies from "@/components/Technologies";
import ProjectGrid2 from "@/components/ProjectGrid2";

const Lab = () => {
  return (
    <>
      
        <div className="container">
          <h5>Laboratoire. 🏗</h5>
          <p>Juste en train de tester, ne pas faire attention.</p>
        </div>
        <div className="projectContainer">

        <ProjectGrid2/>
        </div>
    </>
  )
}

export default Lab;
