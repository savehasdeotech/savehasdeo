import React, { ReactElement } from "react";
import TeamData from "./../../../data/TeamData.json";
import styles from "./Advisory.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {isMobile} from 'react-device-detect';

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

interface Props {}

function AdvisoryBoard({}: Props): ReactElement {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.section
      ref={ref}
      id="advisory"
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      className="pt-50 section bg-img"
      
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
                Advisory Board
              </h3>
              <h2>Our Advisors</h2>
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={0}
          slidesPerView={isMobile ? 1 : 3}
          navigation
          // pagination={{ clickable: true }}
          autoplay
        >
          {TeamData.advisory.map((advisor) => {
            return (
              <SwiperSlide className="col-lg-4 col-sm-6">
                <div className={styles.singleAdvisor}>
                  <h3 style={{ fontSize:"22px", marginBottom: "10px", textAlign: "center" }}>
                    {advisor.heading}
                  </h3>
                  <Image
                    src={advisor.imagePath}
                    alt={advisor.name}
                    height={140}
                    width={140}
                  />
                  <div className="info-front text-center">
                    <h3 className={"mb-10 mt-20"}>{advisor.name}</h3>
                    <p> {advisor.designation} </p>

                    <p style={{ textAlign: "justify", textJustify: "inter-word", opacity: 0.65, fontSize: '14px' }}> {advisor.bio} </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
}

export default AdvisoryBoard;
