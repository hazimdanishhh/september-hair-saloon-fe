import "./ServicesSection.scss";
import Tag from "../tag/Tag";
import ServicesCard from "../servicesCard/ServicesCard";
import { services } from "../../data/servicesData";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import { useState } from "react";
import { ScissorsIcon } from "@phosphor-icons/react/dist/ssr";
import LinkButton from "../buttons/linkButton/LinkButton";

function ServicesSection() {
  const [cardIsActive, setCardIsActive] = useState(0);

  return (
    <section className="sectionPrimary facilitiesSection" id="services">
      <div className="sectionWrapper facilitiesWrapper">
        <motion.div
          className="sectionContent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="facilitiesSectionHeading">
            <Tag tag="Our Services" style="tag1" />
            <motion.h2 className="textRegular" variants={fadeInWithEase}>
              From classic cuts to bold colours. We do it all
            </motion.h2>
            <motion.p variants={fadeInWithEase}>
              Whether you’re looking for a fresh haircut, professional
              colouring, or a total makeover, our services are tailored to your
              lifestyle and personality.
            </motion.p>
          </div>

          <div className="facilitiesSectionLayout">
            <ul className="facilitiesCardLayout">
              {services.slice(0, 2).map((service, index) => (
                <ServicesCard
                  key={index}
                  index={service.id}
                  icon={service.icon}
                  tag={service.tag}
                  image={service.image}
                  onClick={() => setCardIsActive(service.id)}
                  cardIsActive={cardIsActive}
                  href={service.href}
                />
              ))}
            </ul>

            <ul className="facilitiesCardLayout">
              {services.slice(2, 4).map((service, index) => (
                <ServicesCard
                  key={index}
                  index={service.id}
                  icon={service.icon}
                  tag={service.tag}
                  image={service.image}
                  onClick={() => setCardIsActive(service.id)}
                  cardIsActive={cardIsActive}
                  href={service.href}
                />
              ))}
            </ul>
          </div>

          <LinkButton
            name="Explore Services"
            icon={ScissorsIcon}
            link="/services"
            style="button buttonType4"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
