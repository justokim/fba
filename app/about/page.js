import { HeroSection } from "../components/AboutUs/HeroSection";
import { Mission } from "../components/AboutUs/Mission";
import { History } from "../components/AboutUs/History";
import { Founder } from "../components/AboutUs/Founder";
import { Pictures } from "../components/AboutUs/Pictures";

const About = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <Mission />
      <History />
      <Founder />
      <Pictures />
    </div>
  );
};

export default About;
