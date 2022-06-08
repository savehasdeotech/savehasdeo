import React, { ReactElement } from "react";

interface Props {}

function TrickleDown({}: Props): ReactElement {

  return (
    <div
      id="rural-economic-transformation"      
      className="pt-60 pb-60 section-pattern bg-img"
      style={{
        backgroundImage:
          'url("/assets/img/home/Papnashi.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
        backgroundSize: "cover",
        padding:'24px'
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      ></div>
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center text-white">
            <h3
              style={{
                fontFamily: "Caveat, cursive",
                fontWeight: "bolder",
                letterSpacing: 1.3,
                fontSize: "36px",
              }}
            >
              Trickle down effect
            </h3>
            <h2>Rural Economic Transformation</h2>
            <br />
            <img
              style={{ marginTop: "24px", maxHeight: "70vh" }}
              src={"/assets/img/home/TrickleDownWhite.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrickleDown;
