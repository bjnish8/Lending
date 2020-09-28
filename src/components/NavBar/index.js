import React, { useState, useEffect, useRef } from "react";
import "./styles.scss";
import { MenuIcon } from "../Icons";
import Logo from "../../resources/logo.png"

const headerlinks = {login: 1, connect: 2, explore: 4, about: 3}

const NavBar = (props) => {
    const [isSidebarVisible, setSidebarVisible] = useState(false)
    const [activeSection, setActiveSection]  = useState(null)
    const [headerupdateClass, setHeaderupdateClass] = useState(null)
    const [lastScrollVal, setLastScrollVal] = useState(0)

    const sidebarRef = useRef();

    useEffect(() => {
        const handleSideBar = (e) => {
            e.preventDefault();
            if (e.target === sidebarRef.current) {
              setSidebarVisible(false);
            }
          };
            if (isSidebarVisible) {
              document.body.style.overflow = "hidden"
              window.addEventListener("click", handleSideBar);
            } else{
              document.body.style.overflow = "visible"
            }
      
          return () => {
            window.removeEventListener("click", handleSideBar);
          };
    }, [isSidebarVisible])

    useEffect(() => {
      const updateHashUrl = () => {
        setActiveSection(null)
        // if (window.scrollY > 0.65*window.innerHeight)
        //   setHeaderupdateClass("fix-element")
        //   else
        //   setHeaderupdateClass("")
        if (window.pageYOffset < lastScrollVal){
            setHeaderupdateClass("navbar-in")
        } else {
          setHeaderupdateClass("navbar-out")
        }
        setLastScrollVal(window.pageYOffset)
        if (window.scrollY < 0.90*window.innerHeight){
            props.history.push("/")
          } else if(window.scrollY < 1.80*window.innerHeight){
            props.history.push("/#connect")
          } else if(window.scrollY < 2.70*window.innerHeight){
            props.history.push("/#explore")
          }
      }
      if (activeSection==="home") {
        try {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } catch (error) {
          window.scrollTo(0, 0);
        }
      } else if (activeSection==="connect") {
        try {
          window.scroll({
            top: 0.90* window.innerHeight,
            left: 0,
            behavior: "smooth",
          });
        } catch (error) {
          window.scrollTo(0, 0);
        }
      } else if (activeSection==="explore") {
        try {
          window.scroll({
            top: 1.80 * window.innerHeight,
            left: 0,
            behavior: "smooth",
          });
        } catch (error) {
          window.scrollTo(0, 0);
        }
      }
      window.addEventListener("scroll", updateHashUrl)
      return (() => {
        window.removeEventListener("scroll", updateHashUrl)
      })
    })
  return (
    <React.Fragment>
        <nav className={`navbar ${headerupdateClass}`}>
         <div className="navbar-content">
         <ul>
          <li><img src={Logo} alt="logo"/></li>
          {Object.keys(headerlinks).map(linkname =><li onClick={() => setActiveSection(linkname)}><a className="main-link" key={linkname} href={"#"+linkname}>{linkname}</a></li>)}
          </ul>
        <button onClick={() => {setSidebarVisible(!isSidebarVisible)}}><MenuIcon /> </button>
         </div>
        </nav>
        {headerupdateClass && <div className="navbar-filler"></div>}
        <div ref={sidebarRef} className={`sidebar  ${isSidebarVisible?"slidein":"slideout"}`}>
        <nav className={`sidebar-content`}>
          <ul className="sidebar-links">
          {Object.keys(headerlinks).map(linkname =><li key={linkname} onClick={() => { setActiveSection(linkname);setSidebarVisible(false)}}><a className="side-link" href={"#"+linkname}>{linkname}</a></li>)}
          </ul>
        </nav>
        </div>
    </React.Fragment>
  );
};

export default NavBar;
