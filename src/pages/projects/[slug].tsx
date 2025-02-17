import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="container">
      <h1>Projet: {slug}</h1>
      <p>Contenu à venir...</p>
    </div>
  );
};

export default ProjectPage;
