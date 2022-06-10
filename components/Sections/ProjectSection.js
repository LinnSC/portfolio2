import styles from "../../styles/ProjectSection.module.scss";
import ProjectCard from "../Cards/ProjectCard";
import { projectData } from "../../data/ProjectData";

export default function ProjectSection() {
  return (
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
  );
}
