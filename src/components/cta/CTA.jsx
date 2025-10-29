import "./CTA.scss";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import { AnimatePresence, motion } from "framer-motion";
import LinkButton from "../buttons/linkButton/LinkButton";
import { CalendarDotsIcon, ScissorsIcon } from "@phosphor-icons/react/dist/ssr";

function CTA({ background, title, desc }) {
  return (
    <section className="sectionLight">
      <motion.div
        className="sectionWrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div
          className="sectionContent CTA1-background"
          style={{ backgroundImage: `url(${background})` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="promo-overlay">
            <motion.h2
              variants={fadeInWithEase}
              className="promo-overlay-text textRegular textXXXL"
            >
              {title}
            </motion.h2>
            {desc && (
              <motion.p variants={fadeInWithEase} className="textM textLight">
                {desc}
              </motion.p>
            )}
            <motion.div className="layoutsCtaWrapper" variants={fadeInWithEase}>
              <LinkButton
                name="Book Now"
                icon={CalendarDotsIcon}
                link="/contact"
                style="button"
              />
              <LinkButton
                name="Explore Services"
                icon={ScissorsIcon}
                link="/services"
                style="button buttonType4"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
export default CTA;
