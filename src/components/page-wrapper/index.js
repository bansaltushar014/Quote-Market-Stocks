import React from "react";
import Nav from "../navigation";
import Screen from "../stock-screen";
import Footer from "../footer";
import StockTV from "../screener-widget";
import styles from "./index.module.css";

function PageWrapper(props) {
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <Nav />
        <StockTV />
        <Screen />
        <div className={styles.content}>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default PageWrapper;
