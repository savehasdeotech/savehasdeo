import React, { ReactElement } from "react";

interface Props {}

function ConstructionStats({}: Props): ReactElement {
  return (
    <section className="pt-120 pb-70 gradient-bg">
      {" "}
      <div className="container">
        {" "}
        <div className="row align-items-center">
          {" "}
          <div className="col-lg-3 col-sm-6">
            {" "}
            <div className="single-counter text-center text-white">
              {" "}
              <h2 className="count">
                <span>60km</span>
              </h2>{" "}
              <p>BUNDS CONSTRUCTED</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            {" "}
            <div className="single-counter text-center text-white">
              {" "}
              <h2 className="count">
                <span>20km</span>
              </h2>{" "}
              <p>WAT CONSTRUCTED</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            {" "}
            <div className="single-counter text-center text-white">
              {" "}
              <h2 className="count">
                <span>414+</span>
              </h2>{" "}
              <p>SOAK PITS CONSTRUCTED</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            {" "}
            <div className="single-counter text-center text-white">
              {" "}
              <h2 className="count">
                <span>2.4km</span>
              </h2>{" "}
              <p>DEEP CCT CONSTRUCTION</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConstructionStats;
