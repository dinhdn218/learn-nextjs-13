import React from "react";
import styles from "./footer.module.css";
import Container from "react-bootstrap/esm/Container";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className="text-center mb-0">Learn NextJS v13</p>
      </Container>
    </footer>
  );
};

export default Footer;
