import styles from "../../styles/Cards.module.scss";
import Heading from "../Typography/Heading";
import Paragraph from "../Typography/Paragraph";
import Button from "../common/Button";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import animationStyles from "../../styles/Animation.module.scss";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

export default function ProjectCard({
  id,
  title,
  linkGithub,
  linkWebsite,
  src,
  description,
  readMore,
}) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} key={id} className={styles.projectCard}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={src}
          width="700"
          height="396"
          alt={title}
          layout="responsive"
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <div
          ref={ref}
          className={`${styles.headingContainer} ${
            inView ? animationStyles.lineAnimation : ""
          }`}
        >
          <Heading size="3">{title}</Heading>
        </div>
        <div className={styles.btnContainer}>
          <Button href={linkGithub} className={styles.projectBtn}>
            <div className={styles.innerBtnContainer}>
              <div className={styles.btnDiv}>
                <AiFillGithub className={styles.icon} />
                <span>Github repository</span>
              </div>
            </div>
          </Button>

          <Button href={linkWebsite} className={styles.projectBtn}>
            <div className={styles.innerBtnContainer}>
              <div className={styles.btnDiv}>
                <IoIosArrowDroprightCircle className={styles.icon} />
                <span> Look at the website</span>
              </div>
            </div>
          </Button>
        </div>
        <div className={styles.descriptContainer}>
          <Paragraph>{description}</Paragraph>
          <Paragraph>{readMore}</Paragraph>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  readMore: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  linkGithub: PropTypes.string.isRequired,
  linkWebsite: PropTypes.string.isRequired,
};
