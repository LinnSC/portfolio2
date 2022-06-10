import styles from "../../styles/Layout.module.scss";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Head from "./Head";

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Head />
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
