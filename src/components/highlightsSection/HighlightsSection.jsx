import { motion } from "framer-motion";
import Tag from "../tag/Tag";
import "./HighlightsSection.scss";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import HighlightsCard from "../highlightsCard/HighlightsCard";
import { highlights } from "../../data/highlightsData";
import {
  RectangleDashedIcon,
  ScissorsIcon,
  PaletteIcon,
  HairDryerIcon,
  LeafIcon,
} from "@phosphor-icons/react/dist/ssr";
function HighlightsSection() {
  return (
    <section className="sectionLight" id="highlights">
      <div className="sectionWrapper">
        <motion.div
          className="sectionContent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="highlightsSectionHeading">
            <Tag tag="Expert Hairstylists" />
            <motion.h2 className="textRegular" variants={fadeInWithEase}>
              Haircuts that speak your personal language
            </motion.h2>
            <motion.p variants={fadeInWithEase} className="textLight textM">
              We understand hair is more than a style. It's personal expression.
              Our stylists listen, then create.
            </motion.p>
          </div>

          <div className="highlightsLayout">
            <div className="highlightsTopHalf">
              <div className="highlightsOuterInnerTopHalfLeft">
                <HighlightsCard
                  name={highlights[0].name}
                  image={highlights[0].image}
                  description={highlights[0].description}
                  Icon={ScissorsIcon}
                  className="featureCardLarge"
                />
                <div className="highlightsInnerInnerTopHalf">
                  <HighlightsCard
                    name={highlights[2].name}
                    image={highlights[2].image}
                    description={highlights[2].description}
                    className="featureCardSplit"
                    Icon={HairDryerIcon}
                  />
                  <HighlightsCard
                    name={highlights[3].name}
                    image={highlights[3].image}
                    description={highlights[3].description}
                    className="featureCardSplit"
                    Icon={LeafIcon}
                  />
                </div>
              </div>
              <div className="highlightsOuterInnerTopHalfRight">
                <HighlightsCard
                  name={highlights[1].name}
                  image={highlights[1].image}
                  description={highlights[1].description}
                  Icon={PaletteIcon}
                  className2="classNameImage"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HighlightsSection;
