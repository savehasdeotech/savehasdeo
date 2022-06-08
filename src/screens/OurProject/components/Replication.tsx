import React, { ReactElement } from "react";
import MapGL, {
  Marker,
  NavigationControl,
  Popup,
  StaticMap,
} from "react-map-gl";
import ProjectsData from "./../../../data/ProjectsData.json";
import styles from "./Replication.module.scss";

interface Props {}

function Replication({}: Props): ReactElement {
  let timer: NodeJS.Timeout;
  const [viewport, setViewPort] = React.useState({
    width: 600,
    height: 600,
    latitude: 22.594,
    longitude: 80.112,
    zoom: 3.6,
  });
  const [popupData, setPopupData] = React.useState({ show: false });

  const _onViewportChange = (view: any) => setViewPort({ ...view });

  return (
    <div>
      <section
      id=""
        className="services-section py-5 py-md-0 mt-60"
        style={{ minHeight: "100vh" }}
      >
        <div className="section-title text-center mb-0">
          <h3
            style={{
              fontFamily: "Caveat, cursive",
              fontWeight: "bolder",
              letterSpacing: 1.3,
              fontSize: "36px",
            }}
          >
            Our Experience
          </h3>{" "}
          <h2> Replication and Scaling up</h2>{" "}
          <p>
            Save Hasdeo is currently also working towards replicating the model
            across the Nation. We have initiated talks for planting fruit trees
            at many other places throughout India. These would be over and above
            3 million plantations.
          </p>
          <p>
            So far, we have began the discussions of replicating and scaling
            Save Hasdeo’s work in the following areas:
          </p>
          <br />
        </div>

        <div className={"row justify-content-center"}>
          <MapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/light-v10"
            mapboxApiAccessToken={process.env.MAPBOXGL_ACCESS_TOKEN}
            onViewportChange={_onViewportChange}
            scrollZoom={false}
            dragPan={false}
            dragRotate={false}
            doubleClickZoom={false}
            touchZoom={false}
            touchRotate={false}
          >
            {ProjectsData.map((project: any) => {
              return (
                <Marker
                  latitude={project.lat}
                  longitude={project.lon}
                  offsetLeft={5}
                  offsetTop={-16}
                  style={{ left: "28px" }}
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className={styles.marker}
                    onMouseOver={() => {
                      timer = setTimeout(() => {
                        setPopupData({
                          show: true,
                          lat: project.lat,
                          long: project.lon,
                          project: project,
                        });
                      }, 300);
                    }}
                    onMouseLeave={() => {
                      clearTimeout(timer);
                    }}
                    // onClick={() => {
                    //   setPopupData({
                    //     show: true,
                    //     lat: project.lat,
                    //     long: project.lon,
                    //     project: project,
                    //   });
                    // }}
                    // onBlur={() => {
                    //   setPopupData({ ...popupData, show: false });
                    // }}
                  />
                </Marker>
              );
            })}
            {popupData.show && (
              <Popup
                latitude={popupData.project.lat}
                longitude={popupData.project.lon}
                closeButton={false}
                closeOnClick={false}
                onClose={() => setPopupData({ ...popupData, show: false })}
                anchor="bottom"
                dynamicPosition={false}
                offsetTop={-40}
                tipSize={0}
                onMouseLeave={() => {
                  if (!open) {
                    setTimeout(() => {
                      setPopupData({ ...popupData, show: false });
                    }, 300);
                  }
                }}
              >
                <div>{popupData.project.name}</div>
              </Popup>
            )}
          </MapGL>
        </div>
      </section>
    </div>
  );
}

export default Replication;
