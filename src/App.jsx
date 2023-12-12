import "./App.css";
import Banner from "./Comoponents/Banner";
import Contectme from "./Comoponents/Contectme";
import Education from "./Comoponents/Education";
import Experienc from "./Comoponents/Experienc";
import Footer from "./Comoponents/Footer";
import Myprojects from "./Comoponents/Myprojects";
import Skills from "./Comoponents/Skills";

function App() {
  return (
    <>
      <Banner></Banner>
      <Skills></Skills>
      <Experienc></Experienc>
      <Myprojects></Myprojects>
      <Education></Education>
      <Contectme></Contectme>
      <Footer></Footer>
    </>
  );
}

export default App;
