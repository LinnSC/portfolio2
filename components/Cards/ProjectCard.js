import styles from "../../styles/Cards.module.scss";
import Heading from "../Typography/Heading";
import Paragraph from "../Typography/Paragraph";
import Button from "../common/Button";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";

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
  return (
    <div key={id} className={styles.projectCard}>
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
        <div className={styles.headingContainer}>
          <Heading size="3">{title}</Heading>
        </div>
        <div className={styles.btnContainer}>
          <Button href={linkGithub} className={styles.projectBtn}>
            <AiFillGithub className={styles.icon} />
            <div> Github repository</div>
          </Button>

          <Button href={linkWebsite} className={styles.projectBtn}>
            <IoIosArrowDroprightCircle className={styles.icon} />
            <div>Look at the website</div>
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

// ProjectCard.propTypes = {
//   id: PropTypes.number,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   href: PropTypes.string.isRequired,
// };
