import Marquee from "react-fast-marquee";
const Experienc = () => {
  return (
    <div>
      <h2
        className="text-7xl uppercase font-bold mt-10 text-center"
        data-aos="fade-up"
      >
        Experience
      </h2>
      <Marquee className="container mx-auto my-20">
        <div className="text-4xl font-semibold py-3 mx-10 px-6 rounded-lg text-[#2E3440] bg-[#EBCB8B]">
          Website Design
        </div>
        <div className="text-4xl font-semibold py-3 mx-10 px-6 rounded-lg text-[#2E3440] bg-[#D08770]">
          Front-End Development
        </div>
        <div className="text-4xl font-semibold py-3 mx-10 px-6 rounded-lg text-[#2E3440] bg-[#BF616A]">
          MERN Stack
        </div>
        <div className="text-4xl font-semibold py-3 mx-10 px-6 rounded-lg text-[#2E3440] bg-[#A3BE8C]">
          Backend Development
        </div>
      </Marquee>
    </div>
  );
};

export default Experienc;
