import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import KeyFeatures from "./components/KeyFeatures";
import OurWork from "./components/OurWork";
import Gallery from "./components/Gallery";
import Brochure from "./components/Brochure";
import Popup from 'reactjs-popup';

function App() {
  return (
    <>
      

      <Hero/>
      <AboutUs />
      <KeyFeatures/>
      <OurWork/>
      <Gallery/>
      <Brochure/>
      <section className="location">
        <div className="heading"></div>
        <div className="map"></div>
      </section>
    </>
  );
}


export default App;
