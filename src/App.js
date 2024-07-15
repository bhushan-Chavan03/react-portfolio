import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Achievements from "./components/Achievements";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
     >
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
