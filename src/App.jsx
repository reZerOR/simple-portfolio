import "./App.css";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <>
      <div className="bg-banner-bg w-full min-h-screen bg-no-repeat bg-cover">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl text-white uppercase font-bold mb-3">
            I{"'"}m Golam Kibria Raihan
          </h1>
          <p className="text-3xl text-[#2E3440] uppercase font-semibold mb-6">
            {" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Junior Web developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Front-end Developer",
                1000,
                "junior Mern stack Developer",
                1000,
                "A Chess player",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </p>
          <p className="w-[400px] text-lg text-black text-justify">
            Enthusiastic junior web developer dedicated to crafting intuitive,
            responsive websites. Eager to learn, adapt, and contribute to
            innovative projects while embracing new technologies and coding
            solutions.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
