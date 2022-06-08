import styles from "../../styles/Hero.module.scss";
import Heading from "../Typography/Heading";

export default function HeroSection() {
  return (
    <div className={styles.heroSect}>
      <div className={styles.center}>
        <div className={styles.container}>
          <Heading className={styles.heading1} size="1">
            My
          </Heading>
          <Heading className={styles.heading2} size="2">
            Portfolio
          </Heading>
        </div>
      </div>
    </div>
  );
}
