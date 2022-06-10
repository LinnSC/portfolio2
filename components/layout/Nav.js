import styles from "../../styles/Nav.module.scss";
import NextLink from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul>
          <li>
            <Link
              to="/"
              className={styles.scrollLink}
              onClick={() => scroll.scrollToTop()}
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={styles.scrollLink}
              to="projectSection"
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
          </li>
          <li className={styles.some}>
            <NextLink href="https://github.com/LinnSC">
              <a target="_blank" rel="noreferrer">
                <AiFillGithub className={styles.icon} />
              </a>
            </NextLink>

            <NextLink href="https://www.linkedin.com/in/linn-corneliussen-246b0b56/">
              <a target="_blank" rel="noreferrer">
                <FaLinkedinIn className={styles.icon} />
              </a>
            </NextLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
