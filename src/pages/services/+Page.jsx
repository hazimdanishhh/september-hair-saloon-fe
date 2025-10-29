import {
  CaretRightIcon,
  HairDryerIcon,
  MapPinAreaIcon,
  ScissorsIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";
import LinkButton from "../../components/buttons/linkButton/LinkButton";
import CTA from "../../components/cta/CTA";
import Tag from "../../components/tag/Tag";
import { services } from "../../data/servicesData";
import "./Services.scss";
import background1 from "/src/assets/image11.webp";
import { motion, scale } from "framer-motion";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import background from "/src/assets/image11.webp";

export default function Page() {
  return (
    <>
      <div style={{ height: 70 }}></div>

      <section className="sectionDark">
        <motion.div
          className="sectionContent heroSectionContent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            className="sectionBackground heroSectionBackground"
            style={{
              backgroundImage: `url(${background})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <div className="heroSectionHeading">
            <Tag tag="Our Services" style="tag1" />
            <motion.h2
              className="textRegular textXXXL"
              variants={fadeInWithEase}
            >
              Your Hair,
              <br />
              Your Style.
            </motion.h2>
            <motion.p className="textLight textM" variants={fadeInWithEase}>
              From classic cuts to creative colours, our services are designed
              to help you express your individuality. At September Hair Saloon,
              every service starts with a personal consultation to understand
              your hair type, lifestyle, and goals so you leave feeling
              completely <span className="textRegular">you</span>.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          className={index % 2 === 0 ? "sectionLight" : "sectionDark"}
          id={service.href.split("#")[1]} // auto generates ID like "haircut-styling"
        >
          <div className="sectionWrapper">
            <motion.div
              className="sectionContent servicesSectionContent"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="sectionHeading">
                {index % 2 === 0 ? (
                  <Tag tag={service.tag} />
                ) : (
                  <Tag tag={service.tag} style="tag1" />
                )}
                <motion.h2
                  className="textRegular textXXXL"
                  variants={fadeInWithEase}
                >
                  {service.name}
                </motion.h2>
                <motion.p className="textLight textS" variants={fadeInWithEase}>
                  {service.description}
                </motion.p>
              </div>

              <div className="servicesDetailsWrapper">
                {index % 2 === 0 && (
                  <motion.div
                    className="servicesImageWrapper"
                    variants={fadeInWithEase}
                  >
                    <img src={service.image} alt={service.name} />
                  </motion.div>
                )}

                <div className="servicesDetailsSection">
                  <ul className="servicesLayout">
                    {service.list.map((item, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInWithEase}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="servicesList">
                          <span className="textRegular textM">
                            {item.title}
                          </span>
                          <span className="textLight textS">{item.desc}</span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div className="sectionCTA" variants={fadeInWithEase}>
                    <LinkButton
                      name="Book an Appointment"
                      icon={CaretRightIcon}
                      link="/contact"
                      style="button"
                    />
                  </motion.div>
                </div>

                {index % 2 === 1 && (
                  <motion.div
                    className="servicesImageWrapper"
                    variants={fadeInWithEase}
                  >
                    <img src={service.image} alt={service.name} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="sectionLight">
        <div className="sectionWrapper">
          <motion.div
            className="sectionContent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="sectionHeading">
              <Tag tag="Why September Hair Saloon" />
              <motion.h2
                className="textRegular textXXXL"
                variants={fadeInWithEase}
              >
                Expert hands, trusted by the Wangsa Maju community
              </motion.h2>
              <motion.p variants={fadeInWithEase}>
                We combine technical expertise with genuine hospitality to make
                every visit memorable. Our commitment to care, consistency, and
                creativity is what keeps our clients coming back.
              </motion.p>
            </div>

            <ul className="ChooseUsLayout">
              <motion.li
                className="textRegular textS"
                variants={fadeInWithEase}
                whileHover={{ scale: 1.05 }}
              >
                <div className="icon">
                  <ScissorsIcon size={24} />
                </div>
                Professional stylists trained in modern techniques
              </motion.li>
              <motion.li
                className="textRegular textS"
                variants={fadeInWithEase}
                whileHover={{ scale: 1.05 }}
              >
                <div className="icon">
                  <UsersIcon size={24} />
                </div>
                Personalized consultation before every service
              </motion.li>
              <motion.li
                className="textRegular textS"
                variants={fadeInWithEase}
                whileHover={{ scale: 1.05 }}
              >
                <div className="icon">
                  <HairDryerIcon size={24} />
                </div>
                Relaxing salon atmosphere with premium care products
              </motion.li>
              <motion.li
                className="textRegular textS"
                variants={fadeInWithEase}
                whileHover={{ scale: 1.05 }}
              >
                <div className="icon">
                  <MapPinAreaIcon size={24} />
                </div>
                Conveniently located in Wangsa Maju, Kuala Lumpur
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </section>

      <CTA
        background={background1}
        title="Ready for a new look? Let our stylists craft a style that’s uniquely yours."
        desc="Walk-ins are welcome, but appointments are recommended to secure your preferred time."
      />
    </>
  );
}
