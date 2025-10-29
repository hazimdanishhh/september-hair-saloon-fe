import "./Navbar.scss";
import { motion } from "framer-motion";
import useNavbar from "/src/functions/useNavbar";
import { useEffect, useState } from "react";
import { CalendarDotsIcon } from "@phosphor-icons/react/dist/ssr";
import { navigationLinks } from "../../data/navigationLinkData";
import NavHamburger from "../navHamburger/NavHamburger";

function Navbar() {
  const {
    activePopup,
    setActivePopup,
    isActive,
    setIsActive,
    initialX,
    navOverlayRef,
    openOverlay,
    closeOverlay,
    toggleMenu,
  } = useNavbar();

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navbar Hide and Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isActive || activePopup) return; // 🚫 Skip hiding logic when modal is open

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Hide on scroll down
      } else {
        setShowNavbar(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isActive, activePopup]);

  return (
    <>
      <motion.nav
        className={`${isActive ? "active" : ""}`}
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : "-200%" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {/* LOGO */}
        <a href="/" className="navLogoContainer textBold textXL">
          SEPTEMBER
        </a>

        {/* NAVIGATION LINKS */}
        <ul className={`navList ${isActive ? "active" : ""}`}>
          {navigationLinks.map((navigation, index) => (
            <li
              onClick={() => {
                openOverlay(null);
                setIsActive(!isActive);
              }}
              key={index}
            >
              <a href={navigation.href}>{navigation.name}</a>
            </li>
          ))}
        </ul>

        {/* WHATSAPP BUTTON */}
        <div className={`navButtonWrapper`}>
          <a
            className="navButton"
            href="/contact"
            aria-label="Book an appointment"
          >
            <span>Book an Appointment</span>
            <CalendarDotsIcon size="24" />
          </a>
        </div>

        {/* MOBILE HAMBURGER ICON */}
        <NavHamburger isActive={isActive} toggleMenu={toggleMenu} />
      </motion.nav>
    </>
  );
}

export default Navbar;
