import { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Link as ScrollLink } from "react-scroll"; // Alias react-scroll's Link
import { Link, useLocation } from "react-router-dom"; // Import react-router-dom's Link

const navItems = [
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  // { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 6, name: "Services", url: "services" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-soft-white border-b border-gray-300"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black`}
            >
              {navItems.map((item) => (
                <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
                  {item.name === "Home" || item.name === "Contact" ? (
                    <Link
                      onClick={handleMenuClick}
                      to={item.url}
                      className={`hover:text-picto-primary px-5 py-3`}
                      activeStyle={{
                        backgroundColor: "#9929fb",
                        color: "white",
                      }}
                    >
                      {item.name}
                    </Link>
                  ) : isHomePage ? (
                    <ScrollLink
                      onClick={handleMenuClick}
                      to={item.url.toLowerCase()}
                      smooth={true}
                      duration={1000}
                      spy={true}
                      offset={-140}
                    >
                      {item.name}
                    </ScrollLink>
                  ) : (
                    <Link
                      onClick={handleMenuClick}
                      to={{ pathname: "/", state: { scrollTo: item.url.toLowerCase() } }}
                      className={`hover:text-picto-primary px-5 py-3`}
                      activeStyle={{
                        backgroundColor: "#9929fb",
                        color: "white",
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Link // Use react-router-dom Link for the logo to go to the base path
            to={`/`}
            className="flex items-center border-0 lg:max-xxl:ps-5"
          >
            <p className="text-2xl sm:text-[32px] my-auto font-semibold">
              Andrii Danylevych
            </p>
          </Link>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {navItems.map((item) => (
              <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
                {item.name === "Home" || item.name === "Contact" ? (
                  <Link
                    onClick={handleMenuClick}
                    to={item.url}
                    className={`hover:text-picto-primary px-5 py-3`}
                    activeStyle={{
                      backgroundColor: "#9929fb",
                      color: "white",
                    }}
                  >
                    {item.name}
                  </Link>
                ) : isHomePage ? (
                  <ScrollLink
                    onClick={handleMenuClick}
                    to={item.url.toLowerCase()}
                    smooth={true}
                    duration={1000}
                    spy={true}
                    offset={-140}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <Link
                    onClick={handleMenuClick}
                    to={{ pathname: "/", state: { scrollTo: item.url.toLowerCase() } }}
                    className={`hover:text-picto-primary px-5 py-3`}
                    activeStyle={{
                      backgroundColor: "#9929fb",
                      color: "white",
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <p className="">
            <Link // Use react-router-dom Link for the Contact button
              className="btn btn-sm xs:btn-md sm:btn-lg btn-primary"
              to={{ pathname: "/", state: { scrollTo: 'portfolio' } }}
            >
              Portfolio
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
