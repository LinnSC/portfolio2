import styles from "../../styles/Footer.module.scss";
import Paragraph from "../Typography/Paragraph";
import Heading from "../Typography/Heading";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Heading size="4">Footer</Heading>
      <Paragraph>This is my footer</Paragraph>
    </footer>
  );
}
