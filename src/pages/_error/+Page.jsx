import { HouseIcon } from "@phosphor-icons/react/dist/ssr";
import LinkButton from "../../components/buttons/linkButton/LinkButton";
import "./Error.scss";
import background from "/src/assets/image1.webp";

function Page({ is404 }) {
  return (
    <>
      <section className="sectionLight">
        <div
          className="sectionBackground"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="sectionBackgroundBlur">
            <div className="sectionWrapper">
              <div className="sectionContent errorContent">
                <h1 className="textRegular">
                  {is404 ? "404 - Page Not Found" : "Something went wrong"}
                </h1>
                <p className="textLight textM">
                  {is404
                    ? "Sorry, we couldn’t find that page."
                    : "An unexpected error occurred."}
                </p>
                <LinkButton
                  name="Go to Homepage"
                  link="/"
                  style="button"
                  icon={HouseIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
