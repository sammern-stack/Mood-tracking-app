import SiteLogo from "../../assets/images/logo.svg?react";
import NoProfileIcon from "../../assets/images/avatar-placeholder.svg?react";
import DropdownArrowIcon from "../../assets/images/icon-dropdown-arrow.svg?react";
import "./HomePage.scss";

const HomePage = () => {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__top-bar">
          <SiteLogo />

          <div className="home__profile">
            <NoProfileIcon width="40" height="40" />

            <DropdownArrowIcon />
          </div>
        </div>

        <div className="home__greeting">
          <div className="home__greeting-user">Hello, Guest!</div>

          <div className="home__question-user">How are you feeling today?</div>

          <div className="home__current-date">{today}</div>
        </div>

        <button className="home__log-mood-btn">Log today's mood</button>
      </div>

      <div className="home__content">Content</div>
    </div>
  );
};

export default HomePage;
