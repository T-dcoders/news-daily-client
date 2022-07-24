import Business from "../Components/Business/business";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsSlider from "../Components/NewsSlider/NewsSlider";

const index = () => {
  return (
    <div className="">
      <Navbar/>
      <NewsSlider></NewsSlider>
      <Business/>
      <Footer/>
      
    </div>
  );
};

export default index;
