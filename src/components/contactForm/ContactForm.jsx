import { useState } from "react";
import "./ContactForm.scss";
import { AnimatePresence, motion } from "framer-motion";
import {
  CaretDownIcon,
  PaperPlaneRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import PrivacyPolicy from "../privacyPolicy/PrivacyPolicy";
import { services } from "../../data/servicesData";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    interest: "Haircut & Styling",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    // Actual API Call
    console.log("Submitting form data:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setIsSubmitting(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="contactForm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div>
        <motion.h2 className="textRegular" variants={fadeInWithEase}>
          Book Your Appointment
        </motion.h2>
        <motion.p className="textLight textS" variants={fadeInWithEase}>
          Choose your preferred date and service, and we’ll confirm your
          appointment as soon as possible.
        </motion.p>
      </div>

      <motion.div className="contactFormInput" variants={fadeInWithEase}>
        <label htmlFor="interest" className="textRegular textXS">
          I’m interested in*
        </label>
        <div className="selectWrapper">
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
            className="contactFormSelect"
          >
            {services.map((service, index) => (
              <option key={index} value={service.tag}>
                {service.tag}
              </option>
            ))}
          </select>
          <CaretDownIcon size={20} weight="bold" className="selectIcon" />
        </div>
      </motion.div>

      <motion.div className="contactFormInput" variants={fadeInWithEase}>
        <label htmlFor="name" className="textRegular textXS">
          Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </motion.div>

      {/* Form */}
      <div className="contactFormHalf">
        <motion.div className="contactFormInput" variants={fadeInWithEase}>
          <label htmlFor="email" className="textRegular textXS">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div className="contactFormInput" variants={fadeInWithEase}>
          <label htmlFor="phone" className="textRegular textXS">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            placeholder="Enter your phone number"
            onChange={handleChange}
          />
        </motion.div>
      </div>

      <motion.div className="contactFormInput" variants={fadeInWithEase}>
        <label htmlFor="date" className="textRegular textXS">
          Preferred Appointment Date*
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </motion.div>

      <motion.div className="contactFormInput" variants={fadeInWithEase}>
        <label htmlFor="time" className="textRegular textXS">
          Preferred Time (optional)
        </label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </motion.div>

      <motion.button
        type="submit"
        className="contactFormSubmitButton"
        disabled={isSubmitting}
        variants={fadeInWithEase}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <PaperPlaneRightIcon size="20" />
      </motion.button>

      <motion.div
        className="contactFormNote textLight textXXS"
        variants={fadeInWithEase}
      >
        *By submitting this form, you confirm that you have read and agree to
        our{" "}
        <button
          className="textRegular textXXS"
          onClick={() => setShowPrivacyPolicy(true)}
        >
          Privacy Policy
        </button>
      </motion.div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="formSubmittedCard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="textRegular formSubmittedMessage formSubmittedHeading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#4ddf14"
                viewBox="0 0 256 256"
              >
                <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
              </svg>
              Message sent successfully.
            </p>
            <p className="textLight formSubmittedMessage">
              We'll review it and get back to you within 1–2 business days.
            </p>
            <p className="textLight formSubmittedMessage">
              Thanks for reaching out to us.
            </p>
          </motion.div>
        )}
        {error && (
          <motion.div
            className="formErrorCard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ❌ {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* PRIVACY POLICY */}
      <AnimatePresence mode="wait">
        {showPrivacyPolicy && (
          <PrivacyPolicy onClick={() => setShowPrivacyPolicy(false)} />
        )}
      </AnimatePresence>
    </motion.form>
  );
}

export default ContactForm;
