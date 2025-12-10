import dynamic from "next/dynamic";
import React from "react";

const LabContent = dynamic(() => import("@/components/LabContent"), {
  ssr: false,
});

const LabPage: React.FC = () => {
  return <LabContent />;
};

export default LabPage;
