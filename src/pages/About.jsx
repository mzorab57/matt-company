
import PgaesHeader from "../components/ui/PgaesHeader";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";
import AboutUs from "../components/aboutUs/AboutUs";
import Collection from "../components/collection/Collection";

const About = () => {
  return (
    <div className="w-full ">
      <PgaesHeader img={'/assets/images/aboutSection/bgAboutPage.jpg'} title={`Avout Us`} />
      <AboutUs />
      <WhyChooseUs />
      <Collection />
    </div>
  );
};

export default About;