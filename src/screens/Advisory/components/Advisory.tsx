import React, { ReactElement } from "react";
import TeamData from "../../../data/TeamData.json";
import styles from "./Advisoryboard.module.scss";
import { Container, Row, Col } from "react-bootstrap";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { isMobile } from 'react-device-detect';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import invitees from "../../../data/Invitees.json";

interface Props {}

function Advisory() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center">
            <h3
              className="mt-100"
              style={{
                fontFamily: "Caveat, cursive",
                fontWeight: "bolder",
                letterSpacing: 1.3,
                fontSize: "36px",
              }}
            >
              Advisory Board
            </h3>
            <h2>Our Advisors</h2>
          </div>
        </div>
      </div>

      <div className="row">
        {TeamData.advisory.map((advisor, i) => {
          var id1 = "collapseExample" + i;
          var id2 = "#" + id1;
          // var vp = viewport
          return (
            //<SwiperSlide className="col-lg-4 col-sm-6">
            <>
              <div className="col-lg-3 col-md-4">
                <div className="text-center">
                  <img
                    src={advisor.imagePath}
                    alt={advisor.name}
                    height="210px"
                    width="210px"
                    className="mt-20"
                  />

                  <button
                    className="btn btn-primary mb-10"
                    type="button"
                    data-toggle="collapse"
                    data-target={id2}
                    aria-expanded="false"
                    aria-controls={id1}
                    style={{ width: "210px" }}
                  >
                    <div className="row">
                      <div className="col-9">
                        <p
                          style={{
                            fontSize: "11px",
                            float: "left",
                            paddingLeft: "10px",
                          }}
                        >
                          {advisor.name}
                        </p>
                      </div>
                      <div className="col-3">
                        <i
                          className="fa fa-angle-down"
                          aria-hidden="true"
                          style={{ marginRight: "5px" }}
                        ></i>
                      </div>
                    </div>
                  </button>

                  {/* <div className={styles.singleAdvisor}>
                                    <h3 style={{ marginBottom: "50px", textAlign: "center" }}>
                                        {advisor.heading}
                                    </h3>
                                    <Image
                                        src={advisor.imagePath}
                                        alt={advisor.name}
                                        height={140}
                                        width={140}
                                    />
                                    <div className="info-front text-center">
                                        <h2 className={"mb-10 mt-20"}>{advisor.name}</h2>
                                        <p style={{ margin: "20px" }}> {advisor.designation} </p>

                                        <p style={{ margin: "auto", width: "70%", textAlign: "justify", textJustify: "inter-word", opacity: 0.65, fontSize: '14px' }}> {advisor.bio} </p>
                                    </div>
                                    </div> */}
                </div>
              </div>

              <div className="collapse col-12" id={id1}>
                <div className="card card-body">
                  <div className={styles.singleAdvisor}>
                    <h3 style={{ marginBottom: "50px", textAlign: "center" }}>
                      {advisor.heading}
                    </h3>

                    <div className="info-front text-center">
                      <p> {advisor.designation} </p>
                      <p
                        style={{
                          margin: "auto",
                          width: "70%",
                          textAlign: "justify",
                          textJustify: "inter-word",
                          opacity: 0.75,
                          fontSize: "14px",
                        }}
                      >
                        {" "}
                        {advisor.bio}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
            //  </SwiperSlide>
          );
        })}
      </div>

      <div className="row justify-content-center">
        <div className="col-12">
          <div className="section-title text-center">
            <h3
              className="mt-100"
              style={{
                fontFamily: "Caveat, cursive",
                fontWeight: "bolder",
                letterSpacing: 1.3,
                fontSize: "36px",
              }}
            >
              Advisory Board
            </h3>
            <h2>Invitees</h2>
          </div>
        </div>
        <div className="col-12 align-self-center mb-80">
          {invitees.map((invitee:any, i:number) => {
            return (
            <div className={`row ${styles.row}`}>
              <div className={styles.name}><span>{i+1}.{" "}</span> {invitee.name}</div>
              <div className={styles.designation}>{invitee.designation}</div>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}
export default Advisory;
