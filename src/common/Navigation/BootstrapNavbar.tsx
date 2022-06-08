import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
// import "bootstrap-hover-dropdown";
import styles from "./Navbar.module.css";

export default function NavbarComponent(props: any) {
  const [showDropdownId, setShowDropdownId] = useState(null);
  const router = useRouter();
  let menuItems = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "About Us", path: "/about" },
    {
      id: 2, name: "Project", path: "/ourproject",
  },
    { id: 3, name: "Farmers", path: "/farmers"
    },
    { id: 4, name: "Gallery", path: "/gallery", 
      dropDownLinks: [
        { id: 1, name: "Photos", path: "/gallery#photos" },
        { id: 2, name: "Videos", path: "/gallery#videos" },
      ],
    },
    { id: 6, name: "Media", path: "/media" },
    { id: 7, name: "Join us", path: "/joinus", 
      dropDownLinks: [
        { id: 1, name: "Volunteer", path: "/joinus"},
        { id: 2, name: "Career", path: "/joinus#careers" },
        { id: 3, name: "Contact Us", path: "/joinus#contactus" },
      ],
    },
    { id: 8, name: "Donate", path: "/donate" },
  ];

  const closeMenu = () => {
    const menu = document.getElementById("responsive-navbar-nav");
    menu.classList.remove("show");
    setShowDropdownId(null)
  }

  const openMenu = (dropdownId) => {

    setShowDropdownId(dropdownId)
    
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={styles.top_nav}
        fixed={"top"}
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand>
          <Link href="/">
            <a>
              <img
                alt="Logo"
                style={{
                  height: 64,
                  position: "absolute",
                  left: "10px",
                  top: "10px",
                }}
                src={props.level === 1 ? "./../GlobalParliLogo.png" : "GlobalParliLogo.png"}
              />
            </a>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle style={{ color: 'white' }} aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          className={styles.nav_container}
          id="responsive-navbar-nav"
        >
          <Nav>
            {menuItems.map((item) => {
              return (
                <>
                  {item.dropDownLinks ? (
                    <NavDropdown
                      title={item.name}
                      className={styles.dropdown_main_link}
                      id={"basic-nav-dropdown-"+item.id}
                      show={showDropdownId === item.id}
                      onMouseEnter={(event) => openMenu(item.id)}
                      onMouseLeave={closeMenu}
                    // data-toggle="dropdown"
                    // data-hover="dropdown" 
                    >
                      {item.dropDownLinks.map((subitem) => {
                        return (
                          <NavDropdown.Item
                            key={subitem.id}
                            onClick={() => closeMenu()}
                          // show={show}
                          >
                            {/* {item.id === 0 && subitem.id === 3 ? 
                            <NavDropdown
                              className="dropdown-menu-right"
                              title="About Us"
                              id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/about#advisory">Advisory</NavDropdown.Item>
                            </NavDropdown>
                            : <a href={subitem.path}>
                                <p>{subitem.name}</p>
                              </a>
                            } */}

                            <Link href={subitem.path}>
                              <p>{subitem.name}</p>
                            </Link>
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  ) : (
                      <Nav.Link key={item.id} onClick={() => closeMenu()}>
                        <Link href={item.path}>
                          <div className={styles.nav_link}>
                            <p>{item.name}</p>
                          </div>
                        </Link>
                      </Nav.Link>
                    )}
                </>
              );
            })}
            {/* <Nav.Link>
              <a
                onClick={() =>
                  window.open("https://blog.enrootmumbai.in/", "_blank")
                }
                href="https://blog.enrootmumbai.in/"
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.nav_link}>
                  <p>Blogs</p>
                </div>
              </a>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  );
}
