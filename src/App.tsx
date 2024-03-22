import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Socials from "./components/Socials";
import Testimonial from "./components/Testiomonial";

const App = () => {
  return (
    <main className="grid min-h-screen grid-rows-[auto_1fr_1fr_auto]">
      <Header />
      <Socials/>
      <Services />
      <Testimonial/>
      <Footer />
    </main>
  );
};

export default App;
