import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import styles from "../Layout.module.css";

export const GOOGLE_KEY = "AIzaSyDHemVuq3g79DORRCpDoNNqqEpY4dVIu08";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 50.447731, lng: 30.542721 }}
    >
      <Marker
        position={{
          lat: 50.427659,
          lng: 30.482127,
        }}
        name="My Marker"
      />
    </GoogleMap>
  );
}
export const MapWrapped = withScriptjs(withGoogleMap(Map));

export function GoogleMapCase() {
  return (
    <div className={styles.stayInTouch}>
      <div stayInTouch={styles.data}>
        <h1>sign up for the latest deals</h1>
        <hr />
        <br />
        <div className={styles.mainData}>
          <input placeholder="name" type={"text"} />
          <input placeholder="surname" type={"text"} />
          <input placeholder="email address" type={"text"} />
          <input placeholder="phone" type={"text"} />
        </div>
        <button className={styles.button}>Sing up</button>
      </div>
      <div className={styles.cityMap}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />{" "}
      </div>
      <style jsx>{`
        hr {
          float: left;
          margin-left: 0;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
