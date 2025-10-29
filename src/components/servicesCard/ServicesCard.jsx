import { motion } from "framer-motion";
import "./ServicesCard.scss";
import { fadeInWithEase } from "../../functions/motionUtils";
import {
  CaretRightIcon,
  MinusIcon,
  PlusIcon,
} from "@phosphor-icons/react/dist/ssr";

function ServicesCard({
  icon,
  tag,
  image,
  onClick,
  cardIsActive,
  index,
  href,
}) {
  const Icon = icon;
  const isActive = index === cardIsActive;

  return (
    <motion.li>
      <motion.button
        className="facilitiesCard"
        variants={fadeInWithEase}
        whileHover={{ scale: 1.05, rotate: 0.8, transition: { duration: 0.3 } }}
        onClick={onClick}
      >
        <a
          className={
            isActive ? "facilitiesCardImage" : "facilitiesCardImage hidden"
          }
          href={href}
        >
          <img
            src={image}
            alt={tag}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
          <div className="servicesCardCTA">
            Learn More <CaretRightIcon />{" "}
          </div>
        </a>
        <div className="facilitiesCardDetails">
          <div className="facilitiesCardHeading">
            <Icon />
            <p>{tag}</p>
          </div>
          {isActive ? (
            <MinusIcon size={18} className="plusIcon" />
          ) : (
            <PlusIcon size={18} className="plusIcon" />
          )}
        </div>
      </motion.button>
    </motion.li>
  );
}

export default ServicesCard;
