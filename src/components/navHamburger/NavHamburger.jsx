import "./NavHamburger.scss";

function NavHamburger({ isActive, toggleMenu }) {
  return (
    <button
      className={`hamburgerIcon ${isActive ? "active" : ""}`}
      onClick={toggleMenu}
      aria-label="Toggle navigation"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 70"
        width="24"
        height="24"
        className="hamburgerSvg"
      >
        <rect className="line top" width="100" height="10" rx="5"></rect>
        <rect
          className="line middle"
          y="30"
          width="100"
          height="10"
          rx="5"
        ></rect>
        <rect
          className="line bottom"
          y="60"
          width="100"
          height="10"
          rx="5"
        ></rect>
      </svg>
    </button>
  );
}

export default NavHamburger;
