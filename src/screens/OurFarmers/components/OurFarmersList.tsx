import React, { ReactElement } from "react";
import OurFarmers from "./../../../data/OurFarmers.json";
import styles from "./FarmerAchievements.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {}

function OurFarmersList({}: Props): ReactElement {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
      controls2.start("visible");
    }
  }, [controls, controls2, inView]);
  return (
    <section
      className="pt-60 pb-60 section-pattern bg-img"
      style={{
        backgroundImage:
          'url("assets/img/section-pattern/feature-pattern.png")',
      }}
      id="farmerAchievements"
    >
      <motion.div
        initial="hidden"
        animate={controls2}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        ref={ref}
        className="container"
      >
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
                Our Farmers
              </h3>
              <h2>Fruits of Joy!</h2>
              <p style={{ marginTop: "16px" }}>
                The fruits that you are enjoying are hand-picked with love from our farms, specially for you!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {OurFarmers.map((farmer) => {
            return (
              <div
                key={farmer.id}
                className="col-lg-4 col-md-6"
                style={{ maxWidth: "380px" }}
              >
                <div className="single-feature text-center p-0">
                  <div className={styles.achievementImageContainer}>
                    {/* <img
                      src={farmer.farmImage}
                      data-rjs={2}
                      alt=""
                      data-rjs-processed="true"
                      className={styles.achievementImage}
                    /> */}
                    <Image
                      src={farmer.farmImage}
                      alt={farmer.name}
                      className={styles.achievementImage}
                      height={200}
                      width={350}
                    />
                    <div className={styles.achievementImageOverlay} />
                    <h1 className={styles.farmerName}>{farmer.name}</h1>
                  </div>
                  <div className={`content ${styles.contentContainer}`}>
                    {/* <img
                      src={farmer.farmerImage}
                      className={styles.farmerImage}
                    /> */}
                    <div className={styles.farmerImage}>
                      <Image
                        src={farmer.farmerImage}
                        alt={farmer.name}
                        height={80}
                        width={80}
                      />
                    </div>

                    {/* <h1
                      className={styles.multipliedBy}
                      style={{
                        fontFamily: "Caveat, cursive",
                        fontWeight: "bold",
                        letterSpacing: 1.3,
                        fontSize: "64px",
                      }}
                    >
                      {farmer.multipliedBy}x
                      <p className={styles.multipliedByText}>income</p>
                      <p className={styles.multipliedByText}>increased</p>
                    </h1> */}

                    {/* <div className={styles.incomeStats}>
                      <h2 className={styles.earlierIncome}>
                        ₹{farmer.earlierIncome}
                      </h2>
                      <div
                        style={{
                          marginLeft: "9px",
                          marginRight: "9px",
                          alignSelf: " center",
                        }}
                      >
                        <Image
                          src={"/assets/img/icons/angle-right.svg"}
                          height={20}
                          width={26}
                          alt="Right arrow"
                        />
                      </div>
                      <img src={"/assets/img/icons/angle-right.svg"} />
                      <h2 className={styles.newIncome}>₹{farmer.newIncome}</h2>
                    </div>
                    <p>Annual Income per acre</p> */}

                    { <h3>
                      <span>{farmer.newCrop}</span> 
                      {/* instead of{" "}
                      {farmer.originalCrops[0]}{" "} */}
                    </h3>}

                    <p>Plantation in {farmer.location}</p>
                    <h3>
                      <span style={{ fontWeight: "bold" }}>Mobile Number</span>{" "}
                      - {farmer.mobileNumber}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default OurFarmersList;
