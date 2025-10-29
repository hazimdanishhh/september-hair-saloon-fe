import { motion } from "framer-motion";
import CTA from "../../components/cta/CTA";
import PhotoGallery from "../../components/photogallery/PhotoGallery";
import "./About.scss";
import background1 from "/src/assets/image11.webp";
import background2 from "/src/assets/image14.webp";
import background from "/src/assets/image10.webp";
import image1 from "/src/assets/portrait1.webp";
import image2 from "/src/assets/portrait2.webp";
import image3 from "/src/assets/portrait3.webp";

import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import Tag from "../../components/tag/Tag";

export default function Page() {
  return (
    <>
      <div style={{ height: 70 }}></div>

      <section className="sectionPrimary">
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
            <Tag tag="About Us" style="tag1" />
            <motion.h2
              className="textRegular textXXXL"
              variants={fadeInWithEase}
            >
              Crafting Confidence
              <br />
              One Hairstyle at a Time
            </motion.h2>
            <motion.p className="textLight textM" variants={fadeInWithEase}>
              At September Hair Saloon, we believe great hair starts with great
              care. From everyday looks to special occasions, our mission is
              simple; to help you look and feel your best,{" "}
              <span className="textRegular">every single day</span>.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section
        className="sectionBackground"
        style={{ backgroundImage: `url(${background2})` }}
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
                A neighbourhood salon built on passion and precision
              </motion.h2>
              <motion.p className="textLight textL" variants={fadeInWithEase}>
                Founded in <span className="textBold">Wangsa Maju</span>,
                September Hair Saloon began with a vision to bring high-quality
                hairstyling and personalised care to the local community. We’re
                not just about cutting hair, we’re about building confidence and
                relationships.
                <br />
                <br />
                Over the years, our talented stylists have helped hundreds of
                clients discover new looks that truly reflect who they are.
                Whether you’re going for a bold transformation or a subtle
                refresh, we’ll make sure your style feels{" "}
                <span className="textBold">uniquely you</span>.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="sectionLight">
        <div className="sectionWrapper">
          <motion.div
            className="sectionContent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="sectionHeading teamSectionHeading">
              <Tag tag="Meet Our Stylists" />
              <motion.h2
                className="textRegular textXXXL"
                variants={fadeInWithEase}
              >
                Experienced hands, passionate hearts
              </motion.h2>
            </div>

            <ul className="teamSectionLayout">
              <motion.li variants={fadeInWithEase} whileHover={{ scale: 1.03 }}>
                <div className="teamSectionImage">
                  <img src={image1} alt="Lily" />
                </div>
                <p className="textRegular textXL">Lily</p>
                <div className="separator" />
                <p className="textRegular textM">Senior Stylist</p>
                <p className="textLight textS">
                  Specialises in women’s cuts & balayage colouring.
                </p>
              </motion.li>
              <motion.li variants={fadeInWithEase} whileHover={{ scale: 1.03 }}>
                <div className="teamSectionImage">
                  <img src={image2} alt="James" />
                </div>
                <p className="textRegular textXL">James</p>
                <div className="separator" />
                <p className="textRegular textM">Creative Stylist</p>
                <p className="textLight textS">
                  Known for men’s modern cuts & texture styling.
                </p>
              </motion.li>
              <motion.li variants={fadeInWithEase} whileHover={{ scale: 1.03 }}>
                <div className="teamSectionImage">
                  <img src={image3} alt="Sue" />
                </div>
                <p className="textRegular textXL">Sue</p>
                <div className="separator" />
                <p className="textRegular textM">Treatment Specialist</p>
                <p className="textLight textS">
                  Expert in scalp and hair restoration treatments.
                </p>
              </motion.li>
            </ul>

            <div className="sectionHeading teamSectionHeading">
              <motion.p className="textLight textL" variants={fadeInWithEase}>
                Our stylists aren’t just trained, they’re{" "}
                <span className="textRegular">passionate</span> about helping
                clients express themselves.
                <br />
                With years of salon experience and ongoing education in the
                latest trends, we stay ahead while keeping your needs front and
                centre.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      <PhotoGallery />

      <CTA
        background={background1}
        title="Ready for a new look? Let our stylists craft a style that’s uniquely yours."
        desc="Walk-ins are welcome, but appointments are recommended to secure your preferred time."
      />
    </>
  );
}
