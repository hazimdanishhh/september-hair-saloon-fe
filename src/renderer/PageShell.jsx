// src/renderer/PageShell.jsx
import ".././styles/main.scss";
import ".././styles/font.scss";
import ".././styles/section.scss";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export function PageShell({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
