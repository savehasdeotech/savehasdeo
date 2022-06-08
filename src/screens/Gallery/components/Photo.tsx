import React, { ReactElement } from 'react'
import Link from "next/link";
import GalleryData from '../../../data/Gallery.json'
interface Props {

}


function Photo({ }: Props): ReactElement {
    return (
        <section className="pt-120 pb-90" id="photos">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Section Title Begin */}
                        <div className="section-title text-center">
                            <h3 style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '36px' }}>Gallery</h3>
                            <h2>Wonderful moments captured</h2>
                            <h3 className="pt-30" style={{ color: "#3f3f3f", fontWeight: 'bolder' }}>Photos</h3>
                            <p>Pictures are the easy way to relive your memories</p>
                        </div>
                        {/* Section Title End */}
                    </div>
                </div>
                <div className="masonry">
                    {GalleryData.map((gallery) => {
                        const path = `/gallery/${gallery.path}`;
                        return (
                            <div className="masonry-item">
                                <Link href="/gallery/[id]" as={path}>
                                    <div style={{ position: "relative", marginBottom: "30px" }}>
                                        <div className="masonry-img">
                                            <img
                                                src={`assets/img/gallery/${gallery.path}/image1.jpg`}
                                                alt=""
                                                className="masonry-content"
                                            />
                                        </div>
                                        <div
                                            // className="project-body"
                                            style={{
                                                position: "absolute",
                                                bottom: "0px",
                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                width: "100%",
                                                padding: "12px",
                                                color: "white",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    color: "white!important",
                                                    bottom: "12px",
                                                    left: "12px",
                                                    fontFamily: '"Rubik", sans-serif',
                                                    fontWeight: 700,
                                                    fontSize: "26px",
                                                }}
                                            >
                                                {gallery.title}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Photo;
