import React, { ReactElement } from "react";
import styles from "./Landing.module.scss";
import ModalVideo from "react-modal-video";
import { isMobile, MobileView, BrowserView } from "react-device-detect";

interface Props {}

export default function Landing({}: Props): ReactElement {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="NrdMg95tlFI"
        onClose={() => setOpen(false)}
      /> */}
      <div className={styles.videoContainer}>
        <video
          autoPlay
          loop
          muted
          style={{
            // position: "absolute",
            width: "100%",
            // height: "100%",
            objectFit: "cover",
            // top: "80px",
            // left: "0px",
          }}
        >
          <source src={"/assets/videos/2cr-globalparli-promo-31-May-2022.mp4"} type="video/mp4"></source>
        </video>
        
        

        <a className={styles.landingButton} onClick={() => setOpen(true)}>
          Movement to Transform India
          <i
            className={"fa fa-play"}
            style={{ marginLeft: "15px" }}
            aria-hidden="true"
          />
        </a>
      </div>
    </>
  );
}
