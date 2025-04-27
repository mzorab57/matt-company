import MattModelBody from "../../components/mattModel/MattModelBody";
import MattModelGallery from "../../components/mattModel/MattModelGallery";
import MattModelHeader from "../../components/mattModel/MattModelHeader";

const MattModel = () => {
  return (
    <div className="Matt Model size-full bg-gradient-to-b from-black/90 to-gray-900 overflow-hidden">
      <MattModelHeader />-
      <MattModelBody />
      <MattModelGallery />
    </div>
  );
};

export default MattModel;