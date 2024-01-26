import Image from "next/image";

import search from "../../../assets/img/search.svg";

const Navigation = () => {
  return (
    <nav className="nav" role="navigation">
      <div className="max-centered">
        <h1 className="nav__logo">Rule of thumb.</h1>
        <button
          className="nav__hamburger icon-button"
          aria-description="Open Menu"
        >
          <svg width={25} height={20} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </svg>
        </button>
        <ul className="nav__links">
          <li>
            <a href="#">Past Trials</a>
          </li>
          <li>
            <a href="#">How It Works</a>
          </li>
          <li>
            <a href="#">Login / Sign Up</a>
          </li>
          <li>
            <form action="javascript:void(0)">
              <input
                className="nav__search-input"
                aria-label="search"
                type="text"
              />
              <button
                className="nav__search icon-button"
                aria-description="Search"
                type="submit"
              >
                <Image src={search} alt="search" />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
