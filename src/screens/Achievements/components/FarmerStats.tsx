import React, { ReactElement } from "react";

interface Props {}

function FarmerStats({}: Props): ReactElement {
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
                <span>2300+</span>
              </h2>{" "}
              <p>FARMERS IMPACTED</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            {" "}
            <div className="single-counter text-center text-white">
              {" "}
              <h2 className="count">
                <span>40x</span>
              </h2>{" "}
              <p>INCREASE IN INCOME</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            {" "}
            <div className="single-counter text-center text-white">
              {" "}
              <h2 className="count">
                <span>50+</span>
              </h2>{" "}
              <p>TRAININGS AND FIELD VISITS CONDUCTED</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            {" "}
            <div className="single-counter text-center text-white">
              {" "}
              <h2 className="count">
                <span>2727acres</span>
              </h2>{" "}
              <p>AREA BROUGHT UNDER HORTICULTURE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FarmerStats;
