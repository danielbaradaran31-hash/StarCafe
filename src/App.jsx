import Services from "./components/Services/Services.jsx";
import Hero from "./components/Hero/Hero.jsx";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="">
      <Hero />
      <Services />
      <WhereToBuy />
      {/* <AppBanner/> */}
      <Footer />
    </div>
  );
}

export default App;
