import "./PhotoGallery.scss";
import Tag from "../tag/Tag";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import { AnimatePresence, motion } from "framer-motion";
import image1 from "/src/assets/image8.webp";
import image2 from "/src/assets/image12.webp";
import image3 from "/src/assets/image7.webp";
import image4 from "/src/assets/image9.webp";
import { useState } from "react";
import { InstagramLogoIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import { photoGalleryImages } from "../../data/photoGalleryData";
import PhotoGalleryModal from "../photoGalleryModal/PhotoGalleryModal";
import LinkButton from "../buttons/linkButton/LinkButton";

function PhotoGallery() {
  const [galleryIsOpen, setGalleryIsOpen] = useState(false);

  return (
    <section className="sectionLight" id="gallery">
      <div className="sectionWrapper">
        <motion.div
          className="sectionContent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="gallerySectionHeading">
            <Tag tag="Our Gallery" />
            <h2 className="textRegular textXXXL">
              Real styles.
              <br />
              Real transformations.
            </h2>
            <p className="textLight textS">
              See how we bring creativity and confidence to every client.
            </p>
            <LinkButton
              name="Follow us on Instagram"
              icon={InstagramLogoIcon}
              style="button"
              link="https://www.instagram.com"
              blank
            />
          </div>

          <div className="gallerySectionLayout">
            <div className="gallerySegment left">
              <motion.div className="galleryImage" variants={fadeInWithEase}>
                <img src={image1} alt="Gallery Image 1" loading="lazy" />
              </motion.div>
            </div>
            <div className="gallerySegment middle">
              <motion.div className="galleryImage" variants={fadeInWithEase}>
                <img src={image2} alt="Gallery Image 2" loading="lazy" />
              </motion.div>
              <motion.div className="galleryImage" variants={fadeInWithEase}>
                <img src={image3} alt="Gallery Image 3" loading="lazy" />
              </motion.div>
            </div>
            <div className="gallerySegment right">
              <motion.div className="galleryImage" variants={fadeInWithEase}>
                <img src={image4} alt="Gallery Image 4" loading="lazy" />
              </motion.div>
              <motion.button
                className="view-btn"
                onClick={() => setGalleryIsOpen(true)}
                variants={fadeInWithEase}
              >
                View All Photos
                <span className="count">{photoGalleryImages.length}</span>
              </motion.button>
            </div>
          </div>

          {/* PHOTO GALLERY MODAL */}
          <AnimatePresence mode="wait">
            {galleryIsOpen && (
              <PhotoGalleryModal
                galleryIsOpen={galleryIsOpen}
                setGalleryIsOpen={setGalleryIsOpen}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default PhotoGallery;
