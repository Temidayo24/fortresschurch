import { easeIn, motion, Variants } from "framer-motion";
import UpdatesCard from "./components/UpdatesCard";
import Services from "./components/Services";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import { useState } from "react";
// import React, { useState, useClient } from 'react'

const Home = () => {
  const [hasViewed, setHasViewed] = useState(false);

  return (
    <div className="all-container">
      <Header />
      <main>
        <section className="banner_section">
          <div className="intro">
            <img
              src="/Fortress-Logo.png"
              alt="logo"
              width="100px"
              height="100px"
              // className="logo"
            />
            <motion.div className="welcome">
              <motion.div
                initial={{ x: 10 }}
                whileInView={{
                  x: 0,
                  transition: {
                    type: "spring",
                    duration: 3,
                    bounce: 0.4,
                    // delay: 0.5,
                  },
                }}
                className="name"
              >
                The Fortress
              </motion.div>
              <motion.div
                initial={{ x: -10 }}
                whileInView={{
                  x: 0,
                  transition: {
                    type: "spring",
                    duration: 3,
                    bounce: 0.4,
                    // delay: 0.5,
                  },
                }}
                className="name"
              >
                Int&#39;l Church
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: -200 }}
              whileInView={{
                x: 0,
                transition: {
                  type: "spring",
                  duration: 1.5,
                  bounce: 0.4,
                  delay: 0.2,
                },
              }}
              viewport={{ once: true }}
            >
              Bringing Divinity to Humanity...
            </motion.div>
            {/* <div className="b_img"></div> */}
          </div>
          <div className="banner_buttons">
            <Link
              to="https://www.youtube.com/@thefortresschurch"
              target="_blank"
            >
              <button className="sermon">WATCH A SERMON</button>
            </Link>
          </div>
        </section>
        {/* <div className="updates_section">
          <motion.div
            initial={{ y: 50 }}
            whileInView={{
              y: 0,
              transition: {
                type: "spring",
                duration: 1,
                bounce: 0.4,
                // delay: 0.5,
              },
            }}
            className="title"
          >
            <h3>Recent Updates</h3>
            <span>Stay up to date with our programs and events</span>
          </motion.div>
          <motion.div
            initial={{ y: 90 }}
            whileInView={{
              y: 0,
              transition: {
                type: "spring",
                duration: 1,
                bounce: 0.4,
                // delay: 0.5,
              },
            }}
            className="updates_container"
          >
            <div className="updates">
              <Image
                src="/kingdom.jpg"
                alt="image1"
                width={300}
                height={300}
                className="updates-img"
              />
            </div>
            <div className="updates">
              <Image
                src="/kingdom.jpg"
                alt="image1"
                width={300}
                height={300}
                className="updates-img"
              />
            </div>
            <div className="updates">
              <Image
                src="/kingdom.jpg"
                alt="image1"
                width={300}
                height={300}
                className="updates-img"
              />
            </div>
          </motion.div>
        </div> */}
        <section className="about_section">
          <motion.div
            initial={{ y: 100 }}
            animate={
              hasViewed
                ? {
                    y: 0,
                    transition: { type: "spring", duration: 1.5, bounce: 0.4 },
                  }
                : {}
            }
            onViewportEnter={() => {
              if (!hasViewed) {
                setHasViewed(true);
              }
            }}
            className="about_us"
          >
            <div className="">
              <h3>Who We Are</h3>
            </div>
            <div className="about_text_container">
              <div className="about_text">
                <p>
                  The Fortress International Church is a present-truth apostolic
                  church community of Life Fort International Ministry, founded
                  on biblical principles, recognizing Jesus Christ as its head.
                  Life Fort International Ministry was founded on Saturday 27th
                  June 2009. While The Fortress International Church was
                  commissioned on Saturday, Sept.6th, 2009 with Apostle Desmond
                  and Pst. Jumoke Oladimeji as the Founding Pastors.
                </p>
                <p>
                  The Fortress International Church has the mandate of training,
                  equipping, and mobilising men to Discover, Develop and Deploy
                  their graces to fulfill God’s agenda for their lives. Everyone
                  who becomes a member of our church joins a mobile train en
                  route their prophetic destiny. We are committed to the
                  teaching and practice of God’s present truth in its
                  progressive state. Our ultimate dream is to make ready a
                  people prepared for the Lord.
                </p>
              </div>
              <Link to="/about" className="about_button">
                <button>Read More</button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            animate={
              hasViewed
                ? {
                    x: 0,
                    transition: { type: "spring", duration: 1.5, bounce: 0.4 },
                  }
                : {}
            }
            onViewportEnter={() => {
              if (!hasViewed) {
                setHasViewed(true);
              }
            }}
            className="about_images"
          >
            <div className="people_img_container">
              <div className="img-top"></div>
              <div className="img-middle"></div>
              <div className="img-bottom"></div>
            </div>
          </motion.div>
        </section>
        <section className="services-section-skew">
          <section className="services_section" id="services">
            {/* <div className="title">
              <h3>Worship With US</h3>
            </div> */}
            <motion.div
              initial={{ x: -200 }}
              animate={
                hasViewed
                  ? {
                      x: 0,
                      transition: {
                        type: "spring",
                        duration: 1.5,
                        bounce: 0.4,
                      },
                    }
                  : {}
              }
              onViewportEnter={() => {
                if (!hasViewed) {
                  setHasViewed(true);
                }
              }}
              className="services_flex"
            >
              <div className="services first-card">
                <div className="title">
                  <h3>Worship With US</h3>
                </div>
                <span>
                  Experience a profound encounter with the word of God that will
                  forever transform your life.
                </span>
              </div>
              <div className="services">
                <Services
                  title1="Sunday"
                  title2="Service"
                  days="Sundays"
                  time="8:30 am"
                  text1="2nd Floor, 10 Coker Rd, Opposite Chicken Republic, Ilupeju, Lagos."
                  text2="@thefortresschurch"
                  text3="The Fortress International Church"
                  path={[
                    {
                      to: "https://maps.app.goo.gl/tbnrx6FzBw2URBWs6",
                      src: "/icons/location.png",
                      tooltip: "Location",
                    },
                    {
                      to: "https://www.youtube.com/@thefortresschurch",
                      src: "/icons/youtube.png",
                      tooltip: "Youtube",
                    },
                    {
                      to: "https://thefortresschurch.mixlr.com",
                      src: "/icons/mixlr.png",
                      tooltip: "Mixlr",
                    },
                  ]}
                  classname="services_container"
                />
              </div>
              <div className=" services">
                <Services
                  title1="Fresh"
                  title2="Word"
                  days="Tuesdays and Thursdays"
                  time="12:00 pm"
                  text3="@thefortresschurch"
                  path={[
                    {
                      to: "https://thefortresschurch.mixlr.com",
                      src: "/icons/mixlr.png",
                      tooltip: "Mixlr",
                    },
                  ]}
                  classname="services_container"
                />
              </div>
              <div className=" services">
                <Services
                  title1="Midweek"
                  title2="Service"
                  days="Wednesdays"
                  time="6:00 pm"
                  text1="2nd Floor, 10 Coker Rd, Opposite Chicken Republic, Ilupeju, Lagos."
                  text2="@thefortresschurch"
                  text3="The Fortress International Church"
                  path={[
                    {
                      to: "https://maps.app.goo.gl/tbnrx6FzBw2URBWs6",
                      src: "/icons/location.png",
                      tooltip: "Location",
                    },
                    {
                      to: "https://www.youtube.com/@thefortresschurch",
                      src: "/icons/youtube.png",
                      tooltip: "Youtube",
                    },
                    {
                      to: "https://thefortresschurch.mixlr.com",
                      src: "/icons/mixlr.png",
                      tooltip: "Mixlr",
                    },
                  ]}
                  classname="services_container"
                />
              </div>
              <div className="services">
                <Services
                  title1="Apostolic"
                  title2="Prayer Meeting"
                  days="Fridays"
                  time="6:30 pm"
                  text3="@thefortresschurch"
                  path={[
                    {
                      to: "https://thefortresschurch.mixlr.com",
                      src: "/icons/mixlr.png",
                      tooltip: "Mixlr",
                    },
                  ]}
                  classname="services_container"
                />
              </div>
              <div className="services">
                <Services
                  title1="Fresh"
                  title2="Dew"
                  days="Saturdays"
                  time="6:00 am"
                  text3="@thefortresschurch"
                  path={[
                    {
                      to: "https://thefortresschurch.mixlr.com",
                      src: "/icons/mixlr.png",
                      tooltip: "Mixlr",
                    },
                  ]}
                  classname="services_container"
                />
              </div>
            </motion.div>
          </section>
        </section>
        <section className="confession">
          <div className="confession_text">
            <span className="say_with_us">Say with Us</span>
            <p>
              God has gone ahead of me; He will make my crooked places straight.
              He has gone ahead of me to make my rough places smooth. He has
              gone ahead of me to level every mountain. In the name of Jesus,
              nothing dies within me; nothing dies around me; nothing dies in my
              hands. It can never get worse with me, in the name of Jesus it
              will only get better.
            </p>
          </div>
        </section>
        <section className="elixir_section" id="elixir-of-life">
          <h3>Daily Devotional</h3>
          <span>ELIXIR OF LIFE</span>
          <Link to="">
            <button>Read</button>
          </Link>
        </section>
        <section className="give_section" id="give">
          <div className="give-head-text">
            <h3>Want to expand God's kingdom?</h3>
            <span className="give-sub-text">
              Join us in advancing God's kingdom by faithfully giving your
              <span> offerings</span>,<span> tithes</span>, <span>pledges</span>
              , and <span>donations</span> through the following mediums.
            </span>
          </div>
          <div className="give_card_container">
            <div className="give_card">
              <div className="give_card_img">
                <img alt=" " src="/icons/first_bank.svg" />
              </div>
              <div className="bank-details">
                <div>
                  <span>Bank:</span>
                  <span>First Bank</span>
                </div>
                <div>
                  <span>A/C Number:</span>
                  <span>2022269209</span>
                </div>
                <div>
                  <span>A/C Name:</span>
                  <span>Lifefort International Ministry</span>
                </div>
              </div>
            </div>
            <div className="give_card">
              <div className="give_card_img">
                <img alt=" " src="/icons/first_bank.svg" />{" "}
              </div>
              <div className="bank-details">
                <div>
                  <span>Bank:</span>
                  <span>First Bank</span>
                </div>
                <div>
                  <span>A/C Number:</span>
                  <span>2022269209</span>
                </div>
                <div>
                  <span>A/C Name:</span>
                  <span>Lifefort International Ministry</span>
                </div>
              </div>
            </div>
            <div className="give_card">
              <div className="give_card_img">
                <img alt=" " src="/icons/first_bank.svg" />{" "}
              </div>
              <div className="bank-details">
                <div>
                  <span>Bank:</span>
                  <span>First Bank</span>
                </div>
                <div>
                  <span>A/C Number:</span>
                  <span>2022269209</span>
                </div>
                <div>
                  <span>A/C Name:</span>
                  <span>Lifefort International Ministry</span>
                </div>
              </div>
            </div>
            <div className="give_card">
              <div className="give_card_img">
                <img alt=" " src="/icons/first_bank.svg" />
              </div>
              <div className="bank-details">
                <div>
                  <span>Bank:</span>
                  <span>First Bank</span>
                </div>
                <div>
                  <span>A/C Number:</span>
                  <span>2022269209</span>
                </div>
                <div>
                  <span>A/C Name:</span>
                  <span>Lifefort International Ministry</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
