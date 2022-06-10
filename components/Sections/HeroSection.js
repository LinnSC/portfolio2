import TextAnimation from "../../animation/TextAnimation";
import styles from "../../styles/Hero.module.scss";
import Heading from "../Typography/Heading";

export default function HeroSection() {
  return (
    <div className={styles.heroSect}>
      <div className={styles.center}>
        <div className={styles.container}>
          <Heading size="1">
            <div className={styles.heading1}>
              <TextAnimation text="My" />
            </div>
            <div className={styles.heading2}>
              <TextAnimation text="Portfolio" />
            </div>
          </Heading>
        </div>
      </div>
    </div>
  );
}
