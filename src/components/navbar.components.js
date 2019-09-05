import React, { useState, useEffect } from 'reactn';
import { NavLink } from 'react-router-dom';
import './navbar.components.css';
import config from '../config';
import Logo from './g.path.logo.components';

const NavLinkStyle = {
  fontWeight: "bold",
  color: "white"
}

export default (props) => {
  const [left, setLeft] = useState("100%");
  useEffect(() => {
    console.log("history:", window.location.pathname);
  }, [props]);
  const onMenuClick = () => {
    //close
    if (left === "35%") {
      // setHeight("0%");
      setLeft("100%");
      document.getElementById("menuburger").classList.toggle('is-active');
    }
    //open
    if (left === "100%") {
      // setHeight("100%");
      setLeft("35%");
      document.getElementById("menuburger").classList.toggle('is-active');
    }
  }
  const handleClickNav = () => {
    setLeft("100%");
    document.getElementById("menuburger").classList.toggle('is-active');
  }
  return (
    <>
      {/* modal */}
      <div id="myNav" className="overlay" style={{ left: left }}>
        {/* <span className="top-0 text-center cursor-pointer ml-2 text-4xl self-center text-white lg:text-white xl:text-white" onClick={() => { setHeight("0%") }}>&times; close</span> */}
        <div className="overlay-content">
          <nav>
            <NavLink to={config.routes.homepage} activeStyle={NavLinkStyle} exact>
              <span onClick={() => { handleClickNav() }}>
                Home
              </span>
            </NavLink>
            <NavLink to={config.routes.topnews} activeStyle={NavLinkStyle} exact>
              <span onClick={() => { handleClickNav() }}>
                Top News
              </span>
            </NavLink>
            <NavLink to={config.routes.about} activeStyle={NavLinkStyle} exact>
              <span onClick={() => { handleClickNav() }}>
                About
              </span>
            </NavLink>
            <NavLink to={config.routes.setting} activeStyle={NavLinkStyle} exact>
              <span onClick={() => { handleClickNav() }}>
                Setting
              </span>
            </NavLink>
            {/* <NavLink to={config.routes.singlenews} activeStyle={NavLinkStyle} exact>
              <span onClick={() => { handleClickNav() }}>
                Single News
              </span>
            </NavLink> */}
          </nav>
        </div>
      </div>
      {/* back button */}
      {
        (props.history.location.pathname !== "/") &&
        <div className="absolute ml-1 mt-3 visible sm:visible md:invisible lg:invisible xl:invisible">
          <button className="absolute" onClick={() => { props.history.goBack() }}>
            <svg className="absolute fill-current text-gray-400" height="2rem" width="2rem" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
              <g>
                <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
              </g>
            </svg>
            {/* {props.history.location.pathname} */}
          </button>
        </div>

      }

      {/* Logo */}
      <div className="flex bg-white lg:bg-dark-blue-800 xl:bg-dark-blue-800">
        <div style={{ position: 'absolute', left: '50%' }}>
          <span className="flex relative mt-1" style={{ left: '-50%' }}>
            <svg className="self-center" id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0, 0, 400,247.808105872622">
              <Logo />
            </svg>
          </span>
        </div>
        {/* Menu */}
        <button id="menuburger" class="absolute top-0 z-50 hamburger hamburger--squeeze text-center cursor-pointer ml-2 text-4xl self-center text-gray-400 lg:text-white xl:text-white"
          type="button"
          style={{ right: '1%' }}
          onClick={() => { onMenuClick() }}>
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>

      </div>
      <div className="bg-white w-screen" style={{ height: '3.5rem' }}>
      </div>
      <div className="bg-gray-300 w-screen shadow" style={{ height: '0.05rem' }} />

    </>
  )
}