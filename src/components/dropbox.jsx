import React from "react";
import "./styles/web.css"; // Adjust the path as necessary
import "./styles/font.css";
import "./styles/dropbox.css";

const Dropbox = () => {
  return (
    <div className="body">
      {/* <div className="header">
        <div className="left-section">
          <div className="menu-sect">
            <button className="menu-button">
              <div className="menu-inside">
                <div className="menu1"></div>
                <div className="menu2"></div>
                <div className="menu3"></div>
              </div>
            </button>
          </div>
          <div className="web-logo">
            <img className="logo-picture" src="pic/logo.png" alt="Logo" />
          </div>
        </div>
        <div className="middle-section">
          <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
            <p className="web-name">Food Arrangement Service</p>
          </div>
        </div>
        <div className="right-section">
          <button className="setting-button">
            <img className="setting" src="pic/setting-icon.png" alt="Settings" />
          </button>
        </div>
      </div> */}
      <div className="content">
        <div className="box1">
          <p className="welcome">Let's get started</p>
          <ul className="drop1">
            <li className="flavour">
              Choose your flavour &#x25BE;
              <ul className="drop2">
                <li className="choice">
                  <a className="c">Flavour 1</a>
                </li>
                <li className="choice">
                  <a className="c">Flavour 2</a>
                </li>
                <li className="choice">
                  <a className="c">Flavour 3</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="drop1">
            <li className="flavour">
              Choose your flavour &#x25BE;
              <ul className="drop2">
                <li className="choice">
                  <a className="c">Flavour 1</a>
                </li>
                <li className="choice">
                  <a className="c">Flavour 2</a>
                </li>
                <li className="choice">
                  <a className="c">Flavour 3</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="drop1">
            <li className="flavour">
              Choose your flavour &#x25BE;
              <ul className="drop2">
                <li className="choice">
                  <a className="c">Flavour 1</a>
                </li>
                <li className="choice">
                  <a className="c">Flavour 2</a>
                </li>
                <li className="choice">
                  <a className="c">Flavour 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropbox;
