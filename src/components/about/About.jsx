import "./About.scss";
import {
  BuildingApartmentIcon,
  HouseLineIcon,
  AddressBookIcon,
  TagIcon,
  KeyholeIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import background from "/src/assets/image1.webp";
import Tag from "../tag/Tag";
import { motion } from "framer-motion";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";

export default function About() {
  return (
    <section
      className="sectionBackground"
      style={{ backgroundImage: `url(${background})` }}
      id="about"
    >
      <div className="sectionBackgroundBlur">
        <div className="sectionWrapper">
          <motion.div
            className="sectionContent aboutContent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Tag tag="Our Story" style="tag1" />
            <motion.h2
              className="textRegular textXXXL"
              variants={fadeInWithEase}
            >
              Passionate stylists with a love for transformation
            </motion.h2>
            <motion.p className="textLight textS" variants={fadeInWithEase}>
              Founded in the heart of Wangsa Maju, September Hair Saloon was
              built on a simple idea; everyone deserves a look that reflects who
              they truly are. With years of professional experience and a
              passion for detail, our team ensures every client leaves confident
              and refreshed.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
