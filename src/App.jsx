import React from 'react';
import {Link} from 'react-scroll'
import './App.css';
import mountains from './images/mountains.png';
import yoopin from './images/yoopin.png';
import pinterest from './images/c-pinterest.png';
import google from './images/c-google.png';
import facebook from './images/c-facebook.png';
import twitter from './images/c-twitter.png';
import forward16Copy from './images/forward-16_copy.png';
import forward16 from './images/forward-16.png';
import write from './images/write.png';
import simonSays from './images/simon_says.png';
import searchAndThouShallFind from './images/search_and_thou_shall_fin.png';
import ceoSignature from './images/ceo_signature.png';
import rectangle1Copy3 from './images/rectangle_1_copy_3.png';
import rectangle1Copy from './images/rectangle_1_copy.png';
import layer1 from './images/1.png';
import layer2 from './images/2.png';
import play from './images/play.png';
import facebookLogo from './images/facebook_logo.png';
import twitterLogo from './images/twitter_logo.png';
import dribbbleLogo from './images/dribbble_logo.png';
import linkedinIcon from './images/linkedin_icon.png';

function App() {
  return (
    <>
      <div className="global_container_" id='hero'>
        <header className="header">
          <div className="main-banner">
            <div
              className="main-header"
              style={{
                padding: 20,
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                backgroundColor: "black",
                position:"fixed",
                zIndex:"1"
              }}
            >
              <div className="col-12" style={{}}>
                <img
                  className="mountains"
                  src={mountains}
                  alt=""
                  width={54}
                  height={21}
                />
                <img
                  className="yoopin"
                  src={yoopin}
                  alt="yoopin"
                  width={150}
                  height={30}
                  title="yoopin"
                />
              </div>
              <div className="Main-links">
                <ul
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "20px !important"
                  }}
                >
                  <Link style={{ marginLeft: "10px", cursor: "pointer" }} to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                  <Link style={{ marginLeft: "10px", cursor: "pointer" }} to="welcome" spy={true} smooth={true} offset={50} duration={500}>Pages</Link>
                  <Link style={{ marginLeft: "10px", cursor: "pointer" }} to="products" spy={true} smooth={true} offset={50} duration={500}>Features</Link>
                  <Link style={{ marginLeft: "10px", cursor: "pointer" }} to="news" spy={true} smooth={true} offset={50} duration={500}>Extensions</Link>
                  <Link style={{ marginLeft: "10px", cursor: "pointer" }} to="video" spy={true} smooth={true} offset={50} duration={500}>Tutorials</Link>
                  <Link style={{ marginLeft: "10px", cursor: "pointer" }} to="footer" spy={true} smooth={true} offset={50} duration={500}>Contact us</Link>

                </ul>
              </div>
              <div
                c=""
                style={{ justifyContent: "space-around", gap: "20px !important" }}
              >
                <img
                  className="c-pinterest"
                  src={pinterest}
                  alt=""
                  width={25}
                  height={25}
                />
                <img
                  className="c-google"
                  src={google}
                  alt=""
                  width={25}
                  height={25}
                />
                <img
                  className="c-facebook"
                  src={facebook}
                  alt=""
                  width={25}
                  height={25}
                />
                <img
                  className="c-twitter"
                  src={twitter}
                  alt=""
                  width={25}
                  height={25}
                />
              </div>
            </div>
            <div className="main-banner-text group" style={{marginTop:"10%"}}>
              <div className="forme-62-copie-2-copy-holder">
                <img
                  className="forward-16-copy"
                  src={forward16Copy}
                  alt=""
                  width={8}
                  height={14}
                />
              </div>
              <div className="col-11">
                <div className="row-9 group">
                  <div className="col-13">
                    <p className="text-2">
                      delivering the quality
                      <br />
                      work Affordable
                    </p>
                    <p className="text-3">Power by PSDfreebies.com</p>
                    <p className="text-4">
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                      eget lacinia odio sem nec elit. Aenean eu leo quam.
                    </p>
                  </div>
                  <div className="forme-62-copie-2-holder">
                    <img
                      className="forward-16"
                      src={forward16}
                      alt=""
                      width={8}
                      height={14}
                    />
                  </div>
                </div>
                <div className="row-7 match-height group">
                <div className="rounded-rectangle-1-copy-8-holder" style={{ cursor: "pointer" }}>View more</div>
                <div className="rounded-rectangle-1-copy-9-holder" style={{ cursor: "pointer" }}>Contact us</div>

                </div>
              </div>
            </div>
          </div>
          <div className="welcome-text-and-feature group" id="welcome">
            <p className="text-7">
              <span className="text-style">Welcome </span>to the YooPin Services
            </p>
            <div className="shape-1-copy-2" />
            <p className="text-8">
              Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus
              vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a
              ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta
              gravida at eget metus.Aenean lacinia bibendum nulla sed consectetur.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
            <div className="row-3 group">
              <div className="group-1">
                <img
                  className="write"
                  src={write}
                  alt=""
                  width={59}
                  height={59}
                />
                <p className="text-9">Feature one</p>
                <p className="text-10">
                  Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis
                  lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit
                  non mi porta gravida at eget metus.
                </p>
              </div>
              <div className="group-3">
                <img
                  className="simon-says"
                  src={simonSays}
                  alt=""
                  width={51}
                  height={58}
                />
                <p className="text-13">Feature three</p>
                <p className="text-14">
                  Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis
                  lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit
                  non mi porta gravida at eget metus.
                </p>
              </div>
              <div className="shape-1-copy" />
              <div className="group-2">
                <img
                  className="search-and-thou-shall-find"
                  src={searchAndThouShallFind}
                  alt=""
                  width={59}
                  height={59}
                />
                <p className="text-11">Feature two</p>
                <p className="text-12">
                  Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis
                  lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit
                  non mi porta gravida at eget metus.
                </p>
              </div>
              <div className="shape-1" />
            </div>
          </div>
        </header>
        <div className="main-content-wrapper">
          <div className="ceo-message group">
            <p className="text-15">“</p>
            <div className="col-10">
              <p className="text-16">
                Welcome to Fitness Center, where our goal is to transform your life
                into a healthy one. We are equipped with top notch staff and the best
                equipment to `
              </p>
              <p className="text-17">”</p>
            </div>
            <img
              className="text-18"
              src={ceoSignature}
              alt="Ceo Signature"
              width={187}
              height={95}
              title="Ceo Signature"
              id='news'
            />
          </div>
          <div className="news-and-event-area" >
            <div className="l-constrained-3">
              <p className="text-19">Latest News and Event</p>
              <div className="shape-1-copy-3" />
              <div className="row match-height group">
                <img
                  src={rectangle1Copy3}
                  alt=""
                  width={390}
                  height={262}
                />
                <div className="group-7">
                  <p className="text-20">Akita Inu Dog</p>
                  <p className="text-21">
                    Cum sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur
                    adipiscing
                  </p>
                  <div className="rounded-rectangle-1-copy-7-holder" style={{ cursor: "pointer" }}>View more</div>
                </div>
                <img
                  src={rectangle1Copy}
                  alt=""
                  width={390}
                  height={262}
                />
              </div>
            </div>
          </div>
          <div className="our-products" id='products'>
            <div className="l-constrained-4">
              <p className="text-23">Our Products</p>
              <div className="shape-1-copy-4" />
              <p className="text-24">
                Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus
                vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a
                ante venenatis dapibus posuere velit aliquet.
              </p>
              <div className="row-2 match-height group">
                <div className="group-4 group">
                  <div className="col-8">
                    <p className="text-25">Akita Inu Dog</p>
                    <div className="shape-2" />
                    <p className="text-26">
                      Cum sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel
                      augue laoreet rutrum
                    </p>
                    <div className="rounded-rectangle-1-copy-5-holder" style={{ cursor: "pointer" }}>View more</div>
                  </div>
                  <img
                    className="layer"
                    src={layer1}
                    alt=""
                    width={202}
                    height={258}
                  />
                </div>
                <div className="group-5 group">
                  <div className="col-9">
                    <p className="text-28">Akita Inu Dog</p>
                    <div className="shape-2-copy" />
                    <p className="text-29">
                      Cum sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Donec sed odio dui. Vivamus sagittis lacus vel
                      augue laoreet rutrum
                    </p>
                    <div className="rounded-rectangle-1-copy-6-holder" style={{ cursor: "pointer" }}>View more</div>
                  </div>
                  <img
                    className="layer-2"
                    src={layer2}
                    alt=""
                    width={202}
                    height={258}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="video-area" id="video">
            <div className="l-constrained">
              <p className="text-31">
                <strong className="text-style-2">Watch </strong>our new video
              </p>
              <div className="shape-1-copy-5" />
              <div className="layer-74-holder">
                <div className="clock-holder">
                  <img
                    className="play"
                    src={play}
                    alt=""
                    width={13}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer group" id='footer'>
            <div className="social-media-link">
              <p className="text-32">about PSDfreebies.com</p>
              <p className="text-33">
                Looking cautiously round, to ascertain that they were not overheard,
                the
                <br />
                two hags cowered nearer to the fire, and chuckled heartily.
              </p>
              <div className="row-4 match-height group">
                <div className="rectangle-3-copy-3-holder group">
                  <img
                    className="facebook-logo"
                    src={facebookLogo}
                    alt=""
                    width={6}
                    height={14}
                  />
                  <p className="text-34">136</p>
                </div>
                <div className="rectangle-3-copy-2-holder group">
                  <img
                    className="twitter-logo"
                    src={twitterLogo}
                    alt=""
                    width={14}
                    height={11}
                  />
                  <p className="text-35">68</p>
                </div>
                <div className="rectangle-3-copy-holder group">
                  <img
                    className="dribbble-logo"
                    src={dribbbleLogo}
                    alt=""
                    width={14}
                    height={14}
                  />
                  <p className="text-36">16</p>
                </div>
                <div className="rectangle-3-holder group">
                  <img
                    className="linkedin-icon"
                    src={linkedinIcon}
                    alt=""
                    width={12}
                    height={12}
                  />
                  <p className="text-37">13</p>
                </div>
              </div>
            </div>
            <div className="link group">
              <div className="col-5">
                <p className="text-38">About Us</p>
                <p className="text-39" style={{ cursor: "pointer" }}>
                  Company
                  <br />
                  Our Team
                  <br />
                  Testimonials
                  <br />7
                  Contacts
                </p>
              </div>
              <div className="col-6" >
                <p className="services">Services</p>
                <p className="text-40" style={{ cursor: "pointer" }}>
                  Branding
                  <br />
                  UX Design
                  <br />
                  Prototype
                  <br />
                  UI Design
                </p>
              </div>
              <div className="col-7">
                <p className="contact">CONTACT</p>
                <p className="text-41">
                  (415) 496-9612
                  <br />
                  920 Reserve
                  <br />
                  Roseville, CA 95678
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-2">
          <div className="bottom-link">
            <div className="l-constrained-2 group">
              <p className="text-42">© 2016 PSDfreebies.com – All Right Reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
