import "./HighlightsCard.scss";
import { motion } from "framer-motion";
import { fadeInWithEase } from "../../functions/motionUtils";

function HighlightsCard({
  image,
  name,
  description,
  navOverlay,
  style,
  className = "",
  classNameImage,
  Icon,
}) {
  return (
    <motion.div
      className={`feature-card ${className}`}
      style={style}
      variants={fadeInWithEase}
    >
      <div className="image-wrapper">
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
        <div className="image-shade" />
        <div className="overlay-text">
          <div className="overlay-heading">
            {Icon && <Icon size={22} />}
            <h3 className="textRegular textS">{name}</h3>
          </div>
          <p className="textLight textXS">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default HighlightsCard;
