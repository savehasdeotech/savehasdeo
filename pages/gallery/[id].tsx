import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import LazyLoad from "react-lazyload";
import NavbarComponent from "../../src/common/Navigation/BootstrapNavbar";
// import GalleryLoader from "./../../src/common/ContentLoaders/Gallery/Gallery";
import GalleryData from "./../../src/data/Gallery.json";
import Lightbox from 'react-image-lightbox';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [dirName, setDirName] = React.useState(null);
  const [imageCount, setImageCount] = React.useState(0);
  const [title, setTitle] = React.useState("");

  const [imageIndex,setImageIndex] = React.useState(0);
  const [isOpen,setIsOpen] = React.useState(false)

  React.useEffect(() => {
    for (let i = 0; i < GalleryData.length; i++) {
      if (GalleryData[i].path === id) {
        setDirName(`./../assets/img/gallery/${id}`);
        setImageCount(GalleryData[i].imageCount);
        setTitle(GalleryData[i].title);
        break;
      }
    }
  }, [id]);

  const Images = [];
  let i = 1;

  const imageSourceArray = [];

  const openLightBox=(i)=>{
    setImageIndex(i);
    setIsOpen(true);    
  }

  for (i; i <= imageCount; i++) {
    imageSourceArray.push(`${dirName}/image${i}.jpg`)
  }

  return !dirName ? (
    <>
      <NavbarComponent level={1} />
      {/* <GalleryLoader /> */}
    </>
  ) : (
    <div>
      <Head>
        <title>Save Hasdeo | {title}</title>
      </Head>
      <NavbarComponent level={1} />
      {isOpen && (
          <Lightbox
            mainSrc={imageSourceArray[imageIndex]}
            nextSrc={imageSourceArray[(imageIndex + 1) % imageSourceArray.length]}
            prevSrc={imageSourceArray[(imageIndex + imageSourceArray.length - 1) % imageSourceArray.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setImageIndex((imageIndex + imageSourceArray.length - 1) % imageSourceArray.length)
            }
            onMoveNextRequest={() =>
              setImageIndex((imageIndex + 1) % imageSourceArray.length)
            }
            reactModalStyle={{overlay:{zIndex:1500}}}
          />
        )}
      <section className="pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h3>Gallery</h3>
                <h2>{title}</h2>
                {/* <p>Pictures are the easy way to relive your memories</p> */}
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="masonry">
            <LazyLoad>
              {imageSourceArray.map((image,i)=>{
                return(
                  <div className="masonry-item" onClick={()=> openLightBox(i)}>
                    <div style={{ position: "relative", marginBottom: "30px" }}>
                      <div className="masonry-img">
                        <img
                          src={`${dirName}/image${i+1}.jpg`}
                          alt="Gallery Image"
                          className="masonry-content"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
              </LazyLoad>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post;
