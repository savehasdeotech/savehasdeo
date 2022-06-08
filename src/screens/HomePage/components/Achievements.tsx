import React, { ReactElement } from "react";
import styles from "./Achievements.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image'

interface Props {}

function Achievements({}: Props): ReactElement {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const AchievementsData = [
    {
      id: 6,
      title: "2021",
      content: "70 lakh fruit trees planted with a goal to increase annual farmer incomes to over 1 lakh Rs. per acre",
      imagePath: "/assets/img/home/achievements/2021.jpg",
    },
    {
      id: 5,
      title: "2020",
      content: "20 lakh fruit trees planted across Maharashtra & Madhya Pradesh",
      imagePath: "/assets/img/home/achievements/2020.jpg",
    },
    {
      id: 4,
      title: "2019",
      content: "11.75 lakh fruit trees planted.",
      imagePath: "/assets/img/home/achievements/2019.jpg",
    },
    {
      id: 3,
      title: "2018",
      content: "222 cr total water storage capacity created.",
      imagePath: "/assets/img/home/achievements/water.jpg",
    },
    {
      id: 2,
      title: "2017",
      content: "360 Degrees - All Round Development.",
      imagePath: "/assets/img/home/achievements/elearning.jpg",
    },
   
     {
      id: 1,
      title: "2016",
      content: "1.54 cr litre Water supplied via tankers.",
      imagePath: "/assets/img/WaterTanker.jpg",
    }, 
  ];


  return (
    <section
      id="achievements"
      className="pt-90 pb-0 section-pattern bg-img"
      style={{
        backgroundImage:
          'url("assets/img/section-pattern/feature-pattern.png")',
      }}
    >
      <div className="container">
        <div className="row justify-content-center" ref={ref}>
          {AchievementsData.map((item) => {
            return (
              <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
                key={item.id}
                className="col-lg-4 col-md-6"
                style={{maxWidth:'380px'}}
              >
                <motion.div
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="single-feature text-center p-0"
                >
                  <div className="image">
                    {/* <img
                      src={item.imagePath}
                      data-rjs={2}
                      alt=""
                      data-rjs-processed="true"
                      className={styles.achievementImage}
                    /> */}
                     <Image
                        src={item.imagePath}
                        alt={item.content}
                        width={350}
                        height={200}
                        className={styles.achievementImage}
                      />
                  </div>
                  <div className={`content ${styles.contentContainer}`}>
                    <h1
                      style={{
                        fontFamily: "Caveat, cursive",
                        fontWeight: "bolder",
                        fontSize: "72px",
                      }}
                    >
                      {item.title}
                    </h1>
                    <h3>{item.content}</h3>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
