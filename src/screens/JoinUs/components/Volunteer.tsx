import React, { ReactElement } from "react";

interface Props {}

function Volunteer({}: Props): ReactElement {
  return (
    <section
      className="banner section-pattern bg-img"
      style={{
        backgroundImage: 'url("assets/img/section-pattern/slider-pattern.png")',
        paddingTop: "120px",
        paddingBottom: "0px",
      }}
    >
      <div className="banner-slider d-flex align-items-center justify-content-center owl-loaded owl-drag">
        <div>
          <div className="owl-stage">
            <div className="owl-item cloned" style={{ width: "100%" }}>
              <div className="single-banner-slider">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-content">
                        <h1
                          style={{
                            fontFamily: "Caveat, cursive",
                            fontWeight: "bolder",
                            letterSpacing: 1.3,
                            fontSize: "36px",
                          }}
                        >
                          Join us
                        </h1>
                        <h1>
                          <span>Volunteer Now</span>
                        </h1>
                        <p>
                          Each and every contribution matters, Join us to know
                          how you can participate in serving the nation.
                        </p>

                        <a
                          href="tel:+918591314651"
                          target="_blank"
                          data-toggle="modal"
                          data-target="#appointmentModalForm"
                          className="btn"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "fit-content",
                            padding:'0px 18px'
                          }}
                        ><i
                        className={"fa fa-phone fa-lg"}
                        aria-hidden="true"
                        style={{ color: "green" }}
                      />
                          <span> +91 8591314651</span>
                        </a>
                        <br />
                        <a
                          href="https://chat.whatsapp.com/Bum0wSw4T9QLmTc6nVwMHx"
                          target="_blank"
                          data-toggle="modal"
                          data-target="#appointmentModalForm"
                          className="btn"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "fit-content",
                            padding:'0px 18px'
                          }}
                        >
                          <i
                            className={"fa fa-whatsapp fa-lg"}
                            aria-hidden="true"
                            style={{ color: "green"}}
                          />
                          <span>Join Whatsapp Group</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="banner-image mt-50 mt-lg-0 text-center text-lg-right">
                        <img
                          src="/assets/img/events/visit2020.jpg"
                          data-rjs={2}
                          alt=""
                          data-rjs-processed="true"
                          width={510}
                          height={578}
                          style={{ borderRadius: "50%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Volunteer;
