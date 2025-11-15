import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";


import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 1000,
        offset: -140,
      });
    }
  }, [location]);

  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Profile id="profile" />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <WorkProcess id="work-process" />
      </div>
      <Portfolio id="portfolio" />
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      {/* <div className="blog-background">
        <Blog />
      </div> */}
      <div className="bg-soft-white">
        <Profession id="services" />
      </div>
      
    </div>
  );
};

export default Home;
