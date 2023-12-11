import { TypeAnimation } from "react-type-animation";
import { IoDownloadOutline } from "react-icons/io5";

const Banner = () => {
  const downloadCV = () => {
    // Replace 'your_cv_url.pdf' with the actual URL of your CV file
    const cvUrl = "/cv.pdf";

    // Creating an 'a' element to trigger the download
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "your_cv_name.pdf"; // The name your CV will have when downloaded
    link.click();
  };
  return (
    <div className="bg-banner-bg w-full min-h-screen flex items-center bg-no-repeat bg-cover">
      <div className="container mx-auto my-10 lg:my-0 flex justify-evenly flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center">
        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="p-4"
        >
          <h1 className="text-5xl md:text-6xl text-white uppercase font-bold mb-3">
            I{"'"}m Golam Kibria Raihan
          </h1>
          <p className="text-3xl text-[#2E3440] uppercase font-bold mb-6">
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
          <p className="w-[400px] text-lg text-black font-medium text-justify">
            Enthusiastic junior web developer dedicated to crafting intuitive,
            responsive websites. Eager to learn, adapt, and contribute to
            innovative projects while embracing new technologies and coding
            solutions.
          </p>
          <div className="inline-block">
            <button
              onClick={downloadCV}
              className="flex font-semibold px-6 mt-6 hover:rounded-lg hover:gap-3 hover:ease-in hover:duration-200 py-3 items-center gap-2 bg-[#2E3440]"
            >
              Download CV <IoDownloadOutline />
            </button>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            className="rounded-full max-w-md md:max-w-lg p-4"
            src="/src/assets/profile-pic.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
