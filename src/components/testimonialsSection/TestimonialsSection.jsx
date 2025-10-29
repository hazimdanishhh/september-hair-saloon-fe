// src/components/testimonialsSection/TestimonialsSection.jsx
import "./TestimonialsSection.scss";
import { motion } from "framer-motion";
import { testimonialsData } from "../../data/testimonialsData";
import {
  CaretRightIcon,
  MinusIcon,
  PlusIcon,
} from "@phosphor-icons/react/dist/ssr";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import Tag from "../tag/Tag";

export default function TestimonialsSection() {
  return (
    <section className="sectionLight">
      <motion.div
        className="sectionWrapper"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="sectionContent testimonialsSection">
          <motion.div className="sectionHeader" variants={fadeInWithEase}>
            <Tag tag="What Our Clients Say" />
            <h2 className="sectionTitle textXXXL textRegular">
              Trusted by locals, loved by regulars
            </h2>
          </motion.div>

          <motion.div className="testimonialsList" variants={staggerContainer}>
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonialCard"
                variants={fadeInWithEase}
                whileHover={{ scale: 1.02 }}
              >
                <div className="quoteIcon">
                  <MinusIcon size={24} weight="bold" />
                </div>
                <p className="testimonialText">“{testimonial.text}”</p>
                <div className="testimonialAuthor">
                  <CaretRightIcon size={18} />
                  <span>{testimonial.author}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
