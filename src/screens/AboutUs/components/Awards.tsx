import React, { ReactElement } from "react";
import AwardsData from "./../../../data/AwardsData.json";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {}

function Awards({}: Props): ReactElement {
  return (
    <section id="awards" className="pt-60">
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
                Recognition
              </h3>{" "}
              <h2>Awards</h2>{" "}
              {/* <p>
                We highest ye friends is exposed equally in. Ignorant had too
                strictly followed. Astonished as travelling assistance or
                unreserved oh pianoforte ye.
              </p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper
            spaceBetween={0}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
          >
            {AwardsData.map((award) => {
              return (
                <SwiperSlide key={award.id} className="col-lg-4 col-sm-6">
                  <div className="single-service text-center">
                    <div className="icon">
                      <img
                        src={award.imagePath}
                        data-rjs={2}
                        alt=""
                        data-rjs-processed="true"
                        style={{ height: "180px" }}
                      />
                    </div>
                    {/* <div className="content">
                        <h4>Financial Planning</h4>{" "}
                        <p>
                        Saved he do fruit woody of to. Met defective are allowance
                        two.
                        </p>
                        <a href="#" className="btn-inline">
                        Read More
                        </a>
                    </div> */}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Awards;
