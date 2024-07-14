import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Achievements from "./components/Achievements";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Skills/>
      {/* <About /> */}
      <Achievements />
      
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
