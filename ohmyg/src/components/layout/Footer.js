import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <div className='footerContainer'>

      <div className={props.color}>
        <Link to="/" className="footer-link">
          <div className="footer-aboutUs">
            <svg width="55px" height="40px" viewBox="0 0 180.7 118">
              <g>
                <path
                  d="M103.6,16.8l-2.1-2c-4.6-4.5-10.7-8.1-18-10.7c-7.2-2.6-15.2-4-23.6-4c-8.1,0-15.9,1.2-23,3.8c-7.1,2.6-13.5,6.4-18.8,11.3
                                    c-5.4,4.9-9.6,11-12.7,18C3.2,38.4,0.1,46.6,0,56.4c-0.1,9.4,1.1,16.8,3.8,23.2C7.3,88,11.4,94.5,16,98.9
                                    c5.9,5.6,11.4,9.4,17.9,12.1c8.7,3.6,19.2,5.2,26.5,5.8l1.6,0.1l5.8-6.3l2,6.7l2.2,0.2c2.5,0.3,5.8,0.4,9.2,0.4
                                    c8.4,0,17.7-0.6,18.3-0.6l3.1-0.2l0.4-63.6L77,53.3L103.6,16.8z M96.3,60.2l-0.4,50.7c-5,0.2-14.7,0.6-21.1,0.3l-4.1-13.6L59.3,110
                                    c-6.7-0.7-15.5-2.1-22.8-5.1c-5.7-2.4-10.6-5.7-15.8-10.7C16.7,90.3,13.1,84.5,10,77c-2.3-5.6-3.3-11.9-3.3-20.6
                                    c0-6.6,1.6-13,4.9-20.7C14.3,29.6,18,24.3,22.7,20c4.7-4.3,10.2-7.6,16.5-9.9c6.3-2.3,13.3-3.5,20.6-3.4c7.7,0.1,14.8,1.3,21.4,3.6
                                    c5.3,1.9,9.8,4.4,13.4,7.3L63.9,59.9L96.3,60.2z"
                />
                <path
                  d="M69,35.5c2-2.7,2.8-6.1,2.3-9.5c-0.5-3.4-2.3-6.3-5.1-8.3h0c-5.7-4.1-13.7-2.9-17.8,2.8s-2.9,13.7,2.8,17.8
                                    c2.2,1.6,4.8,2.5,7.5,2.5c0.7,0,1.3-0.1,2-0.2C64,40.1,67,38.3,69,35.5z M54.1,34.4c-3.5-2.6-4.3-7.5-1.7-11
                                    c1.5-2.1,3.9-3.2,6.4-3.2c1.6,0,3.2,0.5,4.6,1.5h0c1.6,1.2,2.7,2.9,3.1,4.9c-0.2-0.2-0.4-0.4-0.7-0.6c-2.6-1.9-6.3-1.3-8.2,1.3
                                    c-1.9,2.6-1.3,6.3,1.3,8.2c0.2,0.2,0.5,0.3,0.8,0.5C57.7,36,55.7,35.5,54.1,34.4z"
                />
              </g>
              <g>
                <path
                  d="M136.9,116.1c9.6,0,17.4-6.9,17.4-15.5s-7.8-15.5-17.4-15.5c-9.6,0-17.4,6.9-17.4,15.5
                                    S127.3,116.1,136.9,116.1z M136.9,91.9c5.9,0,10.7,3.9,10.7,8.8c0,4.8-4.8,8.8-10.7,8.8c-5.9,0-10.7-3.9-10.7-8.8
                                    C126.2,95.8,131,91.9,136.9,91.9z"
                />
                <path
                  d="M180.7,35.3c0-10.4-3.2-18.6-9.5-24.3c-6.2-5.6-14.5-8.5-24.8-8.5c-7.6,0-14.1,1.5-19.6,4.4
                                    c-5.6,2.9-9.8,7.1-12.5,12.3c-2.7,5.1-4,10.8-3.8,16.9l0.1,3.2h28.1V36c0-2.2,0.6-4,1.9-5.3c0.7-0.8,2.1-1.9,5.1-1.9
                                    c2.5,0,3.7,0.9,4.4,1.6c1.1,1.1,1.6,2.8,1.6,5.1c0,4.8-1.9,6.4-3.6,7.3c-3,1.6-7.5,2.5-13.3,2.5h-12.3v34.4h28.2V67.1l0.5,0
                                    c8.2-0.8,15.1-3.6,20.4-8.5C177.6,52.9,180.7,45.1,180.7,35.3z M166.9,53.6c-4.9,4.5-11.4,6.8-19.7,6.9l-3.3,0.1v12.3h-14.8v-21
                                    h5.6c7,0,12.4-1.1,16.5-3.3c3.2-1.7,7.1-5.4,7.1-13.2c0-4-1.2-7.3-3.5-9.7c-2.3-2.4-5.5-3.7-9.2-3.7c-4.2,0-7.6,1.4-10,4.1
                                    c-1.6,1.7-2.7,3.8-3.2,6.1l-0.1,0.4h-15l0.1-0.6c0.3-3.5,1.3-6.7,2.9-9.8c2.1-4,5.3-7.1,9.7-9.5c4.5-2.4,10-3.6,16.4-3.6
                                    c8.6,0,15.3,2.2,20.3,6.7c4.9,4.4,7.3,10.7,7.3,19.3C174,43.2,171.6,49.2,166.9,53.6z"
                />
              </g>
            </svg>
            <p>A propos de Nous</p>
          </div>
        </Link>
        <Link to="/" className="footer-link">
          <div className="footer-contactUs">
            <svg width="40px" height="40px" viewBox="0 0 114 114">
              <path
                d="M112.6,41.3l-9.7-6.4V14.4c0-1.8-1.5-3.3-3.3-3.3H72.8L59,0.6c-1.2-0.9-2.8-0.9-4,0L41.3,11.1H14.4c-1.8,0-3.3,1.5-3.3,3.3
                            v20.5l-9.7,6.4C0.5,41.9,0,43,0,44v59.3c0,5.9,4.8,10.7,10.7,10.7h92.6c5.9,0,10.7-4.8,10.7-10.7V44C114,42.9,113.5,41.9,112.6,41.3
                            z M102.9,42.8l1.9,1.3l-1.9,1.3V42.8z M57,7.4l4.8,3.7h-9.7L57,7.4z M17.7,17.7h78.6v32.1l-30.9,21l-6.8-3.8c-1-0.6-2.2-0.6-3.2,0
                            l-6.8,3.8L17.7,49.8V17.7z M11.1,42.8v2.5L9.3,44L11.1,42.8z M6.6,50.2l35.6,24.3L6.6,94.1V50.2z M107.4,103.3
                            c0,2.3-1.8,4.1-4.1,4.1H10.7c-2.3,0-4.1-1.8-4.1-4.1v-1.6L57,73.7l50.4,27.8V103.3z M107.4,94L71.9,74.4l35.5-24.1V94z"
              />
            </svg>
            <p>Contacte-Nous!</p>
          </div>
        </Link>
        <Link to="/" className="footer-link">
          <div className="footer-terms">
            <svg width="40px" height="40px" viewBox="0 0 122.2 115.5">
              <path
                d="M104.6,0H32.2c-9.7,0-17.6,7.8-17.6,17.3v63.8c-4.3,0.7-8,2.9-10.7,6.3c-2.9,3.6-4.2,8.1-3.7,12.6c1,8.8,8.5,15.4,17.5,15.4
                            c0,0,0,0,0.1,0h59c9.7,0,17.6-7.8,17.6-17.3V34.6h10.3c9.7,0,17.6-7.8,17.6-17.3S114.3,0,104.6,0z M62.3,108.2H17.7
                            c-5.6,0-10.2-4.5-10.2-10c0-5.5,4.6-10,10.2-10h44.6c-2.1,2.9-3.2,6.4-3.2,10S60.2,105.3,62.3,108.2z M86.9,17.3v80.9
                            c0,5.5-4.6,10-10.2,10c-5.6,0-10.2-4.5-10.2-10c0-5.5,4.6-10,10.2-10c2,0,3.7-1.7,3.7-3.7c0-2-1.7-3.7-3.7-3.7H22.1V17.3
                            c0-5.4,4.5-9.9,10.1-10h57.9C88,10.2,86.9,13.7,86.9,17.3z M107.8,26.8l-1.1,0.3c-0.9,0.2-1.9,0.3-3,0.3c-3.6,0-7.4-0.1-9.4-0.1
                            c0-2.6-0.1-8.3,0-10c0-2.6,1-5.1,2.9-7c1.9-1.9,4.5-3,7.3-3c0,0,0,0,0,0c2.7,0,5.3,1.1,7.2,2.9c1.9,1.9,3,4.4,3,7.1
                            C114.7,21.7,111.9,25.4,107.8,26.8z"
              />
              <rect x="29.2" y="18" width="48.1" height="6.8" />
              <rect x="29.2" y="33.2" width="48.1" height="6.8" />
              <rect x="29.2" y="48" width="48.1" height="6.8" />
              <rect x="29.2" y="63.2" width="48.1" height="6.8" />
            </svg>
            <p>Mentions Légales</p>
          </div>
        </Link>
        <a href="https://www.instagram.com/" className="footer-link" target="_blank" rel="noopener noreferrer">
          <div className="footer-follow">
            <svg width="50" height="40" viewBox="0 0 80 83">
              <path
                d="M45.7,16.5c9.6,0,10.7,0,14.5,0.2c2.3,0,4.5,0.4,6.7,1.2c3.1,1.2,5.6,3.7,6.8,6.8c0.8,2.1,1.2,4.4,1.2,6.7
                                c0.2,3.8,0.2,4.9,0.2,14.5s0,10.7-0.2,14.5c0,2.3-0.4,4.5-1.2,6.7c-1.2,3.1-3.7,5.6-6.8,6.8c-2.1,0.8-4.4,1.2-6.7,1.2
                                c-3.8,0.2-4.9,0.2-14.5,0.2s-10.7,0-14.5-0.2c-2.3,0-4.5-0.4-6.7-1.2c-3.1-1.2-5.6-3.7-6.8-6.8c-0.8-2.1-1.2-4.4-1.2-6.7
                                c-0.2-3.8-0.2-4.9-0.2-14.5s0-10.7,0.2-14.5c0-2.3,0.4-4.5,1.2-6.7c1.2-3.1,3.7-5.6,6.8-6.8c2.1-0.8,4.4-1.2,6.7-1.2
                                C35,16.5,36.1,16.5,45.7,16.5 M45.7,10c-9.8,0-11,0-14.8,0.2c-3,0.1-5.9,0.6-8.7,1.7c-2.4,0.9-4.6,2.3-6.4,4.1
                                c-1.8,1.8-3.2,4-4.2,6.4c-1,2.8-1.6,5.8-1.7,8.8c-0.2,3.8-0.2,5-0.2,14.8s0,11,0.2,14.8c0.1,3,0.6,5.9,1.7,8.7
                                c1.9,4.8,5.7,8.7,10.5,10.6c2.8,1,5.7,1.6,8.7,1.7c3.8,0.2,5,0.2,14.8,0.2s11,0,14.8-0.2c3-0.1,5.9-0.6,8.7-1.7
                                c2.4-0.9,4.6-2.3,6.4-4.2c1.8-1.8,3.2-4,4.1-6.4c1-2.8,1.6-5.7,1.7-8.7c0.2-3.8,0.2-5,0.2-14.8s0-11-0.2-14.8
                                c-0.1-3-0.6-5.9-1.7-8.7c-1.9-4.8-5.7-8.6-10.5-10.5c-2.8-1-5.7-1.6-8.7-1.7C56.7,10,55.5,10,45.7,10z M45.7,27.5
                                c-10.2,0-18.5,8.3-18.5,18.4s8.3,18.5,18.5,18.5s18.5-8.3,18.5-18.5l0,0C64.1,35.7,55.9,27.5,45.7,27.5z M45.7,57.9
                                c-6.6,0-12-5.4-12-12s5.4-12,12-12s12,5.4,12,12S52.3,57.9,45.7,57.9L45.7,57.9z M69.2,26.7c0,2.4-1.9,4.3-4.3,4.3
                                c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3l0,0C67.3,22.4,69.2,24.4,69.2,26.7z"
              />
            </svg>
            <p>Suis-Nous!</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
