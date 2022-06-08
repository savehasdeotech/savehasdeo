import React, { ReactElement } from "react";

interface Props {}

function index({}: Props): ReactElement {
  return (
    <section
      className="banner section-pattern bg-img"
      style={{
        backgroundImage: 'url("assets/img/section-pattern/slider-pattern.png")',
        paddingTop: "90px",
        paddingBottom: "0px",
      }}
    >
      <div
        className="banner-slider d-flex align-items-center justify-content-center owl-loaded owl-drag"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <div className="owl-stage">
            <div className="owl-item cloned" style={{ width: "100%" }}>
              <div className="single-banner-slider">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="banner-content">
                        <h1>
                          <span> Donate us</span>
                        </h1>
                        <p>
                          Each and every contribution matters, donate us to give
                          a boost to this movement of transforming India.
                        </p>
                        <br />
                        <h3>
                          <span>Account Details:</span>
                        </h3>
                        <p>
                          <b>Global Vikas Trust</b>
                          <br />
                          ICICI Bank
                          <br />
                          Vile Parle East Branch
                          <br />
                          Current A/c: 0211 0500 5514
                          <br />
                          IFSC: ICIC0000211
                        </p>
                        <div>
                          {" "}
                          <a
                            style={{
                              width: "150px",
                              backgroundColor: "#1CA953",
                              textAlign: "center",
                              fontWeight: 800,
                              padding: "11px 0px",
                              color: "white",
                              fontSize: "12px",
                              display: "inline-block",
                              textDecoration: "none",
                            }}
                            href="https://pmny.in/tIiKroo3klmw"
                          >
                            {" "}
                            Donate Now{" "}
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="banner-image mt-50 mt-lg-0 text-center text-lg-right">
                        {" "}
                        <img
                          src="assets/img/illustrations/Donate.svg"
                          data-rjs={2}
                          alt=""
                          data-rjs-processed="true"
                          width={510}
                          height={578}
                        />{" "}
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

export default index;
