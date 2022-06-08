import React, { ReactElement, useState } from "react";
import FarmerTestimonials from "../Farmers/components/FarmerTestimonials";
import AboutUs from "./components/AboutUs";
import Achievements from "./components/Achievements";
import AdvisoryBoard from "./components/AdvisoryBoard";
import FarmerAchievements from "./components/FarmerAchievements";
import Landing from "./components/Landing";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import TrickleDown from "./components/TrickleDown";
import { Button, Modal} from "react-bootstrap";

interface Props {}

export default function HomePage({}: Props): ReactElement {

  const [modalShow, setModalShow] = React.useState(true);

  return (
    <>
      <Achievements />
      <AboutUs />
      <TrickleDown />
      <FarmerAchievements />
      <FarmerTestimonials />
      <AdvisoryBoard />
      <Testimonials />
      {/* <Partners /> */}


    </>
  );
}
