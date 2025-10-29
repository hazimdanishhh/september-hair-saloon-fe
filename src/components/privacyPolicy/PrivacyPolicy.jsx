import { motion } from "framer-motion";
import "./PrivacyPolicy.scss";
import { EnvelopeIcon, PhoneIcon, XIcon } from "@phosphor-icons/react/dist/ssr";

function PrivacyPolicy({ onClick }) {
  return (
    <motion.div
      className="privacyPolicyModal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="privacyPolicyWrapper">
        <div className="sectionContent PrivacySectionHeader">
          <button className="closeButton" onClick={onClick}>
            <XIcon />
          </button>
        </div>

        <div className="sectionContent privacySectionContent">
          <h2>Privacy Policy — September Hair Saloon</h2>
          <p>Last Updated: 24 October 2025</p>
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">1. Who We Are</h2>
          <p>
            This website (“September Hair Saloon” / “we” / “us”) is operated by
            September Hair Saloon, a professional hair salon based in Wangsa
            Maju, Kuala Lumpur. We provide haircutting, colouring, styling, and
            hair care services for men and women.
            <br />
            <br />
            This Privacy Policy explains how we collect, use, disclose, and
            protect your personal data when you visit our website, contact us,
            or make a booking through our communication channels (such as phone,
            WhatsApp, or our booking form).
            <br />
            <br />
            For any questions about this Privacy Policy or your data rights,
            please contact us via our website{" "}
            <a
              href="https://septemberhairsaloon.com/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Page
            </a>
            .
          </p>

          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">2. Our Commitment</h2>
          <p>
            We are committed to protecting your privacy and complying with
            applicable data protection laws, including:
          </p>

          <ul>
            <li>
              Malaysia’s Personal Data Protection Act 2010 (“PDPA”), including
              its amendments which came into force in 2024–2025.
            </li>
            <li>
              Where relevant, the General Data Protection Regulation (“GDPR”)
              for EU residents.
            </li>
          </ul>

          <p>
            We follow the principles of lawful, fair, transparent processing;
            purpose limitation; data minimization; accuracy; storage limitation;
            integrity and confidentiality; and accountability.
          </p>

          <p>
            We are committed to protecting your privacy and ensuring that your
            personal data is handled responsibly, transparently, and securely.
          </p>

          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">
            3. What Data We Collect &amp; Why
          </h2>
          <p>
            We collect different kinds of personal data in order to provide and
            improve our services, maintain safety, comply with legal
            obligations, and fulfill business operations. The categories
            include:
          </p>

          <table className="privacyDataTable">
            <thead>
              <tr>
                <th>Source / Interaction</th>
                <th>Type of Data Collected</th>
                <th>Purpose(s) for Collection / Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Website Visits &amp; Analytics</td>
                <td>
                  IP address, browser and device information, operating system,
                  general location (city/country), pages visited, duration on
                  site, referring URLs, clicks, and cookies or similar tracking
                  technologies.
                </td>
                <td>
                  To monitor website performance, understand visitor behaviour,
                  enhance user experience, and ensure site security and
                  functionality.
                </td>
              </tr>

              <tr>
                <td>Contact or Enquiry Forms</td>
                <td>
                  Name, email address, phone number, subject or property of
                  interest, and message details provided by you.
                </td>
                <td>
                  To respond to your enquiries, provide relevant information,
                  schedule consultations or viewings, and connect you with
                  authorised team members or partners.
                </td>
              </tr>

              <tr>
                <td>Appointment Bookings &amp; Client Communications</td>
                <td>
                  Name, contact number, preferred date/time, and any notes
                  shared during the booking or communication process.
                </td>
                <td>
                  To confirm and manage appointments, provide service reminders,
                  and maintain a consistent and personalised client experience.
                </td>
              </tr>

              <tr>
                <td>Marketing &amp; Promotional Communications</td>
                <td>
                  Email address or phone number, communication preferences,
                  consent status, and interaction data with newsletters or
                  campaigns.
                </td>
                <td>
                  To send updates, offers, or promotional content relevant to
                  your interests, in accordance with your selected preferences
                  or consent.
                </td>
              </tr>

              <tr>
                <td>Third-Party Coordination (e.g., Partners or Co-Agents)</td>
                <td>
                  Basic contact details and enquiry information, shared only
                  when necessary and authorised by you.
                </td>
                <td>
                  To facilitate legitimate business activities such as
                  appointment scheduling, service delivery, or follow-up
                  communications.
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            <strong>Note:</strong> We only collect{" "}
            <em>sensitive personal data</em> (e.g. health, biometric) where
            strictly necessary (e.g. for safety or regulatory reasons), and
            always with explicit consent.
          </p>

          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">4. Legal Basis for Processing</h2>
          <p>
            Depending on the situation, we rely on one or more of the following
            lawful bases:
          </p>
          <ul>
            <li>
              <strong>Consent</strong> – when you give us permission (e.g. for
              marketing emails, special services).
            </li>
            <li>
              <strong>Performance of a contract</strong> – to fulfill our
              obligations under contracts with you (e.g. order fulfillment,
              service provision).
            </li>
            <li>
              <strong>Legal obligation</strong> – to comply with
              laws/regulations (e.g. health & safety, tax laws).
            </li>
            <li>
              <strong>Legitimate interests</strong> – such as improving our
              products/services, preventing fraud, securing our systems,
              provided that such interests are not overridden by your rights.
            </li>
            <li>
              <strong>Vital interests</strong> – in rare cases (e.g. to protect
              someone’s life).
            </li>
          </ul>

          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">5. Cookies &amp; Tracking</h2>
          <p>
            We use cookies, web beacons, tracking pixels, and similar
            technologies to:
          </p>
          <ul>
            <li>Enable basic website functionality (session cookies).</li>
            <li>
              Monitor and analyze website performance and user behaviour
              (analytics cookies).
            </li>
            <li>
              Deliver targeted or relevant content (if permitted by your
              consent).
            </li>
          </ul>
          <p>
            You can manage or disable cookies via your browser settings. Some
            parts of the website may not work properly if cookies are disabled.
          </p>

          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">
            6. How We Store &amp; Protect Your Data
          </h2>
          <ul>
            <li>
              Encryption of data in transit (HTTPS/TLS) and at rest where
              feasible.
            </li>
            <li>
              Access controls – only authorised personnel and service providers
              who need the data to perform their functions have access.
            </li>
            <li>
              Regular security reviews, penetration testing, and vulnerability
              assessments.
            </li>
            <li>Secure data backups.</li>
            <li>
              Security policies and procedures, staff training in data
              protection.
            </li>
          </ul>

          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">
            7. Data Sharing &amp; Third-Parties
          </h2>
          <p>We may share your personal data with:</p>
          <ul>
            <li>
              <strong>Service providers</strong> – such as booking platforms,
              website hosting, analytics, and marketing tools used to operate
              our business.
            </li>
            <li>
              <strong>Payment processors</strong> – if online payment features
              are used.
            </li>
            <li>
              <strong>Regulatory authorities</strong> – where required by law.
            </li>
          </ul>

          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">8. Cross-Border Transfers</h2>
          <p>
            If we transfer your personal data outside Malaysia (or EU, if
            applicable), we ensure adequate protection through applicable laws,
            Standard Contractual Clauses, or your explicit consent.
          </p>

          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">9. Data Retention</h2>
          <p>
            We retain personal data only as long as necessary for the purposes
            for which it was collected, taking into account legal, regulatory,
            tax, or accounting obligations. Typical retention periods include:
          </p>
          <ul>
            <li>
              Enquiry and booking records — up to 24 months after last contact.
            </li>
            <li>
              Transaction-related documents — as required by law, typically up
              to 7 years.
            </li>
            <li>
              Marketing subscription data — until you unsubscribe or withdraw
              consent.
            </li>
          </ul>

          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">10. Your Rights</h2>
          <p>
            You have the following rights under applicable data protection laws:
            access, correction, erasure, objection/restriction, withdrawal of
            consent, and the right to lodge a complaint with the Malaysian
            Personal Data Protection Department. To exercise these rights,
            please contact us through our website{" "}
            <a
              href="https://septemberhairsaloon.com/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Form
            </a>
            .
          </p>

          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">11. Data Protection Enquiries</h2>
          <p>
            For any privacy-related questions or to exercise your data
            protection rights, please contact our appointed data protection
            representative via the website{" "}
            <a
              href="https://septemberhairsaloon.com/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Form
            </a>
            . We will respond in accordance with applicable data protection
            laws.
          </p>
          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">12. Data Breach Notification</h2>
          <p>
            In the unlikely event of a data breach that compromises personal
            data, we will assess the breach, notify affected individuals where
            required, notify the relevant authority within the timeframe
            mandated by law, and take corrective actions.
          </p>

          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">13. Children &amp; Minors</h2>
          <p>
            Our services and website are not directed to children under the age
            of 18. We do not knowingly collect personal data from minors without
            parental or guardian consent.
          </p>

          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">14. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, legal requirements, or operations. We will
            revise the “Last Updated” date at the top and notify users of
            material changes.
          </p>

          <hr />
        </div>

        <div className="sectionContent privacySectionContent">
          <h2 className="textRegular textXXL">
            15. Miscellaneous / Additional Provisions
          </h2>
          <ul>
            <li>
              <strong>Language</strong>: This policy is written in English; if
              translated, the English version will prevail in case of
              discrepancies.
            </li>
            <li>
              <strong>Security Logging and Monitoring</strong>: We may log
              system access and monitor systems to prevent unauthorised access.
            </li>
            <li>
              <strong>Third-party Links and Partner Sites</strong>: Our website
              may link to third-party platforms, partner salons, or
              service-related sites. We are not responsible for their privacy
              practices or content.
            </li>

            <li>
              <strong>No Waiver</strong>: Failure to enforce any right or
              provision in this policy shall not constitute a waiver of such
              right.
            </li>
          </ul>

          <hr />
        </div>
      </div>
    </motion.div>
  );
}

export default PrivacyPolicy;
