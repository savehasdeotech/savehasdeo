import React, { ReactElement } from "react";
import TestimonialsData from "./../../../data/Testimonials.json";
import styles from "./Testimonials.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

interface Props {}

function Testimonials({}: Props): ReactElement {
  return (
    <div id="testimonials" className="container mt-80">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center">
            <h2>Testimonials</h2>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {TestimonialsData.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="container"
              style={{
                width: "100%",
                padding: "0 48px",
                backgroundColor: "white",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className={`banner-image mt-50 mt-lg-0 text-center ${styles.testimonialContainer}`}>
                    {/* <img
                      src={item.imagePath}
                      data-rjs={2}
                      alt=""
                      data-rjs-processed="true"
                      style={{
                        borderRadius: "50%",
                        border: "8px solid #388E3C",
                        height: "300px",
                        width: "300px",
                        marginBottom: "24px",
                      }}
                    /> */}
                    <Image
                      src={item.imagePath}
                      alt={item.name}
                      className={styles.testimonialImage}
                      height={300}
                      width={300}
                    />
                    <h1 style={{ marginBottom: "18px",marginTop:'20px' }}> {item.name}</h1>
                    <h3>
                      {item.designation}, {item.organization}
                    </h3>
                  </div>
                </div>
                <div className="col-lg-6" style={{ marginTop: "24px" }}>
                  <div className="banner-content text-lg-left">
                    <h3 style={{ marginTop: "24px", fontSize: "26px" }}>
                      “
                      <span style={{ fontStyle: "italic", lineHeight: 1.3 }}>
                        {" "}
                        {item.quote}{" "}
                      </span>
                      ”{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;
