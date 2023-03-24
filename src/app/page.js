import Header from "../../Component/Header/Header";
import Slides from "../../Component/ImageSlider/Slides";
import HomePage from "../../Pages/Home";

export default function Home() {
  return (
    <>
      <Header />
      <div className="py-4 body-content">
        <div className="image-banner border ">
          <Slides />
        </div>
        <HomePage />
      </div>
    </>
  );
}
