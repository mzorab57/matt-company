import PgaesHeader from "../../components/ui/PgaesHeader";
import OurProducts from "../../components/mattFurnishing/OurProducts";

const MattFurnishing = () => {
  return (
    <div className="Matt Furnishing">
      <PgaesHeader img={'/assets/images/mattFurnishing/bgFurnishing.jpg'} title={'Matt Furnishing'} />
      <OurProducts />
    </div>
  );
};

export default MattFurnishing;