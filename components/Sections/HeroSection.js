import TextAnimation from "../../animation/TextAnimation";
import styles from "../../styles/Hero.module.scss";
import Heading from "../Typography/Heading";
import animationStyles from "../../styles/Animation.module.scss";
import { useInView } from "react-intersection-observer";

export default function HeroSection() {
  const [ref, inView] = useInView();

  return (
    <div className={styles.heroSect}>
      <div className={styles.center}>
        <div ref={ref} className={styles.container}>
          <Heading size="1">
            <div className={styles.heading1}>
              <TextAnimation
                className={`${
                  inView ? animationStyles.animatedText : animationStyles.text
                }`}
                text="My"
              />
            </div>
            <div className={styles.heading2}>
              <TextAnimation
                className={`${
                  inView ? animationStyles.animatedText : animationStyles.text
                }`}
                text="Portfolio"
              />
            </div>
          </Heading>
        </div>
      </div>
    </div>
  );
}
