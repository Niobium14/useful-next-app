import React from "react";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Home.module.css";
import homeScreen from "../images/home-screen.jpg";
import mainLogo from "../images/main-logo.png";
import { connect } from "react-redux";
import { AboutUs } from "../components/home/AboutUs";
import { TopMenu } from "../components/home/TopMenu";
import MainLayout from "../components/MainLayout";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";
import { GoogleMapCase } from "../components/home/GoogleMapCase";

function Home(props) {
  return (
    <MainLayout className={styles.homePage}>
      <img className={styles.imageScreen} src={homeScreen} />
      <img className={styles.mainLogo} src={mainLogo} />
      {AboutUs()}
      {TopMenu(props)}
      {GoogleMapCase()}
    </MainLayout>
  );
}

const mapStateToProps = (state) => ({
  topMenu: state.homePage.topMenu,
});

export default connect(mapStateToProps)(Home);

