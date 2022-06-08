import React, { ReactElement } from "react";
import ModalVideo from "react-modal-video";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Landing.module.scss";
import Image from "next/image";

interface Props {}

function AboutUs({}: Props): ReactElement {
  const [isOpen, setOpen] = React.useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
    id="about"
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      className="pt-120 pb-120"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3
                style={{
                  fontFamily: "Caveat, cursive",
                  fontWeight: "bolder",
                  letterSpacing: 1.3,
                  fontSize: "36px",
                }}
              >
                About us
              </h3>{" "}
              <h2>
                Transforming India through
                <br /> Rural Economic Transformation
              </h2>{" "}
              <p>
                Save Hasdeo is a nation-building movement of Global Vikas Trust started by 
                <a href="https://en.wikipedia.org/wiki/Mayank_Gandhi"><b> Mayank Gandhi </b></a>
                which works around the goals of Rural Economic Transformation 
                with a specific focus on the rural economy, environment and 360° 
                development of our farmers and their family.
              </p>
              <p><br/>
                <strong>The mission is to increase farmer incomes by Mass plantation of fruit trees at an unprecedented scale, speed and focus. So far we have planted 2 crore fruit trees benefitting thousands of farmers and greening the environment.</strong>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="NrdMg95tlFI"
          onClose={() => setOpen(false)}
        /> */}
        <div className="row">
          <div
            onClick={() => setOpen(true)}
            className="col-lg-6"
            style={{ height: "fit-content" }}
          >
            <div className="video-area style--two mb-50 mb-lg-0">
              {/* <img
                src="/assets/img/home/about/about.jpg"
                data-rjs={2}
                alt=""
                data-rjs-processed="true"
                width={540}
                height={500}
                style={{ borderRadius: "12px",borderBottomLeftRadius:'0px',borderBottomRightRadius:'0px' }}
              /> */}
              <Image
                src="/assets/img/home/about/Transforming_India.jpg"
                alt="About Save Hasdeo"
                width={540}
                height={305}
                style={{
                  width:"100%",
                  borderRadius: "12px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
              />
              <div className={styles.aboutUsVideoHelperText}>
                India can wait no more!
              </div>
              <div className="vdo-btn-two popup-video">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="100px"
                  height="100px"
                  className="svg replaced-svg"
                  viewBox="0 0 100px 100px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M50.000,99.989 C22.429,99.989 -0.000,77.558 -0.000,49.989 C-0.000,22.419 22.429,-0.009 50.000,-0.009 C51.122,-0.009 52.035,0.901 52.035,2.026 C52.035,3.144 51.122,4.060 50.000,4.060 C24.673,4.060 4.070,24.661 4.070,49.989 C4.070,75.317 24.673,95.919 50.000,95.919 C75.324,95.919 95.928,75.317 95.928,49.989 C95.928,42.576 94.220,35.508 90.848,28.971 C87.630,22.730 82.938,17.221 77.278,13.033 C76.375,12.367 76.183,11.086 76.852,10.189 C77.521,9.285 78.794,9.094 79.699,9.762 C85.858,14.315 90.963,20.312 94.464,27.103 C98.085,34.124 99.999,42.037 99.999,49.989 C99.999,77.558 77.569,99.989 50.000,99.989 ZM75.340,51.699 L50.423,67.755 C49.479,68.361 48.219,68.090 47.611,67.143 C47.001,66.201 47.276,64.938 48.219,64.331 L70.374,50.056 L40.245,32.121 L40.245,73.201 C40.245,74.324 39.334,75.236 38.212,75.236 C37.087,75.236 36.176,74.324 36.176,73.201 L36.176,28.541 C36.176,27.811 36.569,27.132 37.205,26.774 C37.843,26.411 38.623,26.421 39.251,26.789 L75.279,48.239 C75.884,48.597 76.259,49.250 76.273,49.951 C76.285,50.659 75.932,51.319 75.340,51.699 Z"
                  />
                </svg>{" "}
              </div>{" "}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-nav-tab">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="mission"
                  role="tabpanel"
                >
                  <ul className="list-unstyled list-check">
                    {" "}
                    <li
                      style={{
                        backgroundColor: "rgba(231, 76, 60,0.5)",
                        borderRadius: "12px",
                        padding: "12px",
                        color: "#000",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          fontFamily: "Caveat, cursive",
                          fontSize: "24px",
                          letterSpacing: 1.3,
                        }}
                      >
                        360° Development -
                      </span>{" "}
                      Winning hearts and restyling mindsets by creating a
                      movement for change through 360° development.
                    </li>
                    <li
                      style={{
                        backgroundColor: "rgba(52, 152, 219,0.5)",
                        borderRadius: "12px",
                        padding: "12px",
                        color: "#000",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          fontFamily: "Caveat, cursive",
                          fontSize: "24px",
                          letterSpacing: 1.3,
                        }}
                      >
                        Water Management -
                      </span>{" "}
                      Water harvesting and its management to ensure water
                      security. Reducing dependency on rain-fed agriculture.
                    </li>
                    <li
                      style={{
                        backgroundColor: "rgba(46, 204, 113,0.5)",
                        borderRadius: "12px",
                        padding: "12px",
                        color: "#000",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          fontFamily: "Caveat, cursive",
                          fontSize: "24px",
                          letterSpacing: 1.3,
                        }}
                      >
                        Mass Plantation -
                      </span>{" "}
                      Mass plantation by motivating farmers to change cropping
                      patterns to horticulture using training, knowledge, and
                      technology.
                    </li>
                    <li
                      style={{
                        backgroundColor: "rgba(230, 126, 34,0.5)",
                        borderRadius: "12px",
                        padding: "12px",
                        color: "#000",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          fontFamily: "Caveat, cursive",
                          fontSize: "24px",
                          letterSpacing: 1.3,
                        }}
                      >
                        Replication -
                      </span>{" "}
                      Use latest technology, innovative marketing, and value-
                      addition processes to magnify the increased incomes.
                    </li>
                  </ul>{" "}
                  <a href="/about" className="btn">
                    <span>SEE MORE</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
