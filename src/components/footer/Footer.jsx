import "./Footer.scss";
import {
  CalendarDotsIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { navigationLinks } from "../../data/navigationLinkData";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainerFast,
} from "../../functions/motionUtils";
import { useState } from "react";
import PrivacyPolicy from "../privacyPolicy/PrivacyPolicy";

function Footer() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  return (
    <footer className="sectionDark">
      <div className="sectionWrapper footerWrapper">
        <motion.div
          className="sectionContent footerContent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainerFast}
        >
          <div className="footerSegment">
            <motion.p
              className="textBold footerHeading"
              variants={fadeInWithEase}
            >
              SEPTEMBER
              <span className="textLight textXXXL">Hair Saloon</span>
            </motion.p>

            <motion.div variants={fadeInWithEase}>
              <a href="tel:+60341436266" className="textLight textXXL">
                +03-4143 6266
              </a>
            </motion.div>
          </div>

          <div className="footerSegment">
            <a
              href="https://www.google.com/maps/place/September+Hair+Saloon/data=!4m2!3m1!1s0x0:0x8998dfdfe588be4a?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.p variants={fadeInWithEase} className="textLight">
                <span className="textBold">Opens 10:30AM - 7PM</span>
                <br />
                KLSC Bandar Wangsa, 5,
                <br />
                Jalan Wangsa Delima 5,
                <br />
                Pusat Bandar Wangsa Maju,
                <br />
                53300 Kuala Lumpur
              </motion.p>
            </a>
          </div>

          <div className="footerLinkWrapper">
            <ul className="footerLinkLayout">
              {navigationLinks.map((link, index) => (
                <motion.li key={index} variants={fadeInWithEase}>
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
              <motion.li variants={fadeInWithEase}>
                <button onClick={() => setShowPrivacyPolicy(true)}>
                  Privacy
                </button>
              </motion.li>
            </ul>
            <ul className="socialsLayout">
              <motion.li variants={fadeInWithEase}>
                <a
                  className="socialLogo"
                  href="https://www.instagram.com"
                  aria-label="Visit our instagram page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogoIcon size={24} />
                </a>
              </motion.li>
              <motion.li variants={fadeInWithEase}>
                <a
                  className="socialLogo"
                  href="https://www.facebook.com"
                  aria-label="Visit our facebook page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookLogoIcon size={24} />
                </a>
              </motion.li>
              <motion.li variants={fadeInWithEase}>
                <a
                  className="socialLogo"
                  href="/contact"
                  aria-label="Book an Appointment"
                >
                  <CalendarDotsIcon size={24} />
                </a>
              </motion.li>
            </ul>
          </div>

          <hr />

          <small>© 2025 All Rights Reserved</small>
        </motion.div>
      </div>

      {/* PRIVACY POLICY */}
      <AnimatePresence mode="wait">
        {showPrivacyPolicy && (
          <PrivacyPolicy onClick={() => setShowPrivacyPolicy(false)} />
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;
