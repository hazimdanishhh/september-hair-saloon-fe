import ContactForm from "../contactForm/ContactForm";
import "./ContactSection.scss";
import background from "/src/assets/image6.webp";

function ContactSection() {
  return (
    <section className="sectionDark" id="contact">
      <div className="sectionContent contactSectionContent">
        <div
          className="sectionBackground contactSectionBackground"
          style={{
            backgroundImage: `url(${background})`,
          }}
        />
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
