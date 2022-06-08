import styles from "../../styles/Layout.module.scss";
import Footer from "./Footer";
import PropTypes from "prop-types";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Nav />
      <main className={styles.main}>
        <div className="container">{children}</div>
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
