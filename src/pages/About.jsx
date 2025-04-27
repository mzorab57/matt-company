
import PgaesHeader from "../components/ui/PgaesHeader";
import WhyChooseUs from "../components/whyChooseUs/WhyChooseUs";
import Collection from "../components/collection/Collection";
import Company from "../pages/Company";

const About = () => {
  return (
    <div className="w-full ">
      <PgaesHeader img={'/assets/images/aboutSection/bgAboutPage.jpg'} title={`About Us`} />
      <WhyChooseUs />
      <Company />
      <Collection />
    </div>
  );
};

export default About;