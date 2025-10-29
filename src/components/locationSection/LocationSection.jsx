import "./LocationSection.scss";
import Tag from "../tag/Tag";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import image1 from "/src/assets/image11.webp";
import image2 from "/src/assets/image5.webp";
import mapPreview from "/src/assets/location/mapPreview.webp";
function LocationSection() {
  const [showMap, setShowMap] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowMap(true);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sectionDark locationSection" id="location">
      <motion.div
        className="sectionWrapper locationWrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="sectionContent">
          <Tag tag="Our Location" style="tag1" />

          <div className="locationContent">
            <div className="locationSectionHeading">
              <motion.h2 className="textRegular" variants={fadeInWithEase}>
                Professional hairstyling and colouring in Wangsa Maju, Kuala
                Lumpur.
              </motion.h2>
              <motion.p variants={fadeInWithEase}>
                Open daily from 10:30AM – 7PM.
              </motion.p>
              <div className="googleMapStyle" ref={ref}>
                {showMap ? (
                  <iframe
                    title="Google Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: 15 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.606107223793!2d101.7448962!3d3.1977213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc382e58b0e7d7%3A0x8998dfdfe588be4a!2sSeptember%20Hair%20Saloon!5e0!3m2!1sen!2smy!4v1761296536201!5m2!1sen!2smy"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                ) : (
                  <img src={mapPreview} alt="Map Preview" loading="lazy" />
                )}
              </div>
            </div>
            <motion.div
              variants={fadeInWithEase}
              className="locationSectionImage"
            >
              <motion.img
                src={image1}
                alt="Location Image"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="locationContent">
            <motion.div
              variants={fadeInWithEase}
              className="locationSectionImage"
            >
              <motion.img
                src={image2}
                alt="Location Image"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </motion.div>

            <div className="locationSectionHeading">
              <motion.h2 className="textRegular" variants={fadeInWithEase}>
                An Extraordinary Journey
              </motion.h2>
              <motion.p variants={fadeInWithEase}>
                We’re not just about cutting hair — we’re about building
                confidence and relationships. Over the years, our talented
                stylists have helped hundreds of clients discover new looks that
                truly reflect who they are. Whether you’re going for a bold
                transformation or a subtle refresh, we’ll make sure your style
                feels uniquely you.
                <br />
                <br />
                Every client is different — and so is every haircut. We take
                time to understand your hair texture, face shape, and lifestyle
                before creating a look that suits you perfectly.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default LocationSection;
