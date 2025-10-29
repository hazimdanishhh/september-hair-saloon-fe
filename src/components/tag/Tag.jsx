import { motion } from "framer-motion";
import "./Tag.scss";
import { fadeInWithEase } from "../../functions/motionUtils";

function Tag({ tag, style }) {
  return (
    <motion.span className={`tag textXXS ${style}`} variants={fadeInWithEase}>
      {tag}
    </motion.span>
  );
}

export default Tag;
