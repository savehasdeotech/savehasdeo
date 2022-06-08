import React, { ReactElement } from "react";
import AchievementsData from "./../../../data/Achievements.json";
import styles from "../../HomePage/components/FarmerAchievements.module.scss";

interface Props {}

function Water({}: Props): ReactElement {
  return (
    <section
    id="water"
      className="pt-0 pb-60 section-pattern bg-img"
      style={{
        backgroundImage: 'url("assets/img/section-pattern/price-pattern.png")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3>2016 to 2018</h3>
              <h2>Water Conservation</h2>
              <p>
                Our team worked with local authorities to supply water tankers
                free of cost under the project Jal Aadhar 2016. We started the
                delivery of water tankers on April 27th 2016 with over 10,000
                litres of water being supplied to each of more than 25 villages
                and 35,000-40,000 people every day.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {AchievementsData.WaterConservation.map((item) => {
            return (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="single-feature text-center p-0">
                  <div className={styles.achievementImageContainer}>
                    <img
                      src={item.imagePath}
                      data-rjs={2}
                      alt=""
                      data-rjs-processed="true"
                      className={styles.achievementImage}
                    />
                    <div className={styles.achievementImageOverlay} />
                    <h1
                      className={styles.farmerName}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      {" "}
                      <span
                        style={{
                          fontSize: "48px",
                          marginBottom: "12px",
                          color: "white",
                        }}
                      ></span>{" "}
                      {item.name}
                    </h1>
                    {/* <h1 className={styles.farmerName}>{item.name}</h1> */}
                  </div>
                  <div className={`content ${styles.contentContainer}`}>
                    <h3 style={{ lineHeight: "1.5" }}>{item.description}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Water;
