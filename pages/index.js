import styles from "../styles/Index.module.scss";
import Layout from "../components/layout/Layout";
import HeroSection from "../components/Sections/HeroSection";
import ProjectCard from "../components/Cards/ProjectCard";

import { projectData } from "../data/projectData";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <div id="projectSection" className={styles.projectSection}>
        {projectData.map((project) => {
          const {
            id,
            title,
            linkGithub,
            linkWebsite,
            src,
            description,
            readMore,
          } = project;

          return (
            <ProjectCard
              key={id}
              title={title}
              linkGithub={linkGithub}
              linkWebsite={linkWebsite}
              src={src}
              description={description}
              readMore={readMore}
            />
          );
        })}
      </div>
    </Layout>
  );
}
