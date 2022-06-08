import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialMediaAccounts from "./../../data/SocialMediaAccounts.json";
export default function Footer(props: any) {
  const FooterLinks = [
    { id: 1, link: "/about", title: "About us" },
    { id: 2, link: "/ourproject", title: "Our Project" },
    { id: 3, link: "/farmers", title: "Farmers" },
    { id: 4, link: "/gallery", title: "Gallery" },
    { id: 5, link: "/achievements", title: "Achievements" },
    { id: 6, link: "/media", title: "Media" },
    { id: 7, link: "/joinus", title: "Join Us" },
    { id: 8, link: "https://blog.globalparli.org", title: "Blog" },
    { id: 8, link: "/joinus#contactus", title: "Contact Us" },
  ];
  return (
    <>
      {/* Footer Begin */}
      <div
        className="footer section-pattern footer-bg text-white"
        id="appointmentModalForm"
        // data-bg-img="assets/img/section-pattern/footer-pattern.png"
        style={{ backgroundColor: "#388E3C" }}
      >
        <div className="footer-top pt-60">
          <div className="container border-bottom">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_contact_info">
                  <div className="widget-logo d-flex justify-content-center">
                    <Image
                      src={"/logocircle.png"}
                      alt="Logo"
                      height={72}
                      width={72}
                    />
                    <div style={{ width: "24px" }}></div>
                    <Image
                      src={"/mglogo.png"}
                      alt="Logo"
                      height={72}
                      width={72}
                    />
                  </div>
                  <div className="info-content  text-center">
                    <div className="single-info">
                      <span>Phone</span>
                      <p>
                        <a href="tel:+919619075733">+91 91522 34047</a>
                      </p>
                      <span>Contact mail</span>
                      <p>
                        <a href="mailto:connect@globalparli.org" target="_top">
                          connect@globalparli.org
                        </a>
                      </p>
                    </div>
                    <br />
                    <div className="widget widget_social_icon">
                      <ul
                        className="social_icon_list list-inline d-flex justify-content-center"
                        style={{ flexWrap: "wrap" }}
                      >
                        {SocialMediaAccounts.map((link) => {
                          return (
                            <a href={link.link} key={link.id} target="_blank">
                              <li
                                style={{
                                  width: "48px",
                                  height: "48px",
                                  backgroundColor: "rgba(255,255,255,0.3)",
                                  borderRadius: "24px",
                                  textAlign: "center",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  marginBottom: "12px",
                                  marginRight: "12px",
                                }}
                              >
                                <i
                                  className={link.iconClass}
                                  aria-hidden="true"
                                  style={{ color: "white" }}
                                />
                              </li>
                            </a>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="widget widget_nav_menu">
                  <div className="widget-title">
                    <h4>Quick Links</h4>
                  </div>
                  <ul className="menu">
                    {FooterLinks.map((link) => {
                      return (
                        <li key={link.id}>
                          <Link href={link.link}>
                            <a>{link.title}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "48px",
                  }}
                >
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fglobalparli&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                    style={{
                      border: "none",
                      overflow: "hidden",
                      width: "360px",
                      height: "500px",
                    }}
                    scrolling="no"
                    frameBorder={0}
                    allowTransparency
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright-text text-center">
                  <div style={{ marginBottom: "24px" }}>
                    <a
                      href="https://enrootmumbai.in/"
                      target="_blank"
                      style={{
                        backgroundColor: "white",
                        width: "fit-content",
                        padding: "16px 36px",
                        borderRadius: "36px",
                        margin: "auto",
                      }}
                    >
                      
                      <img
                        src={"/emlogo.png"}
                        alt="Logo"
                        style={{ height: "36px" }}
                      />
                    </a>
                  </div>

                  <span>
                    <a href="https://enrootmumbai.in/"
                      target="_blank">Made with ♥ by Enroot Mumbai</a>
                  </span>
                  {/* <span style={{ display: "block" }}>
                    Made with ♥ in Mumbai for Mumbai
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
