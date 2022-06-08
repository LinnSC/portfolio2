import styles from "../../styles/Nav.module.scss";
import NextLink from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul>
          <li>
            <Link
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
              <AiFillGithub className={styles.icon} />
            </NextLink>
            <NextLink href="https://www.linkedin.com/in/linn-corneliussen-246b0b56/">
              <FaLinkedinIn className={styles.icon} />
            </NextLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
