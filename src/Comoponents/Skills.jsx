import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoFirebase,
  IoLogoNodejs,
} from "react-icons/io5";
import Marquee from "react-fast-marquee";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
const Skills = () => {
  return (
    <div>
      <h2 className="text-7xl uppercase font-bold mt-10 text-center">Skills</h2>
      <Marquee className="container mx-auto my-20">
        <div>
          <IoLogoJavascript className="text-8xl mx-5 md:mx-20 text-[#F0DB4F]" />
        </div>
        <div>
          <IoLogoHtml5 className="text-8xl mx-5 md:mx-20 text-[#F06529]" />
        </div>
        <div>
          <IoLogoCss3 className="text-8xl mx-5 md:mx-20 text-[#66D3FA]" />
        </div>
        <div>
          <FaGitAlt className="text-8xl mx-5 md:mx-20 text-[#F1502F]" />
        </div>
        <div>
          <FaGithub className="text-8xl mx-5 md:mx-20 text-white" />
        </div>
        <div>
          <SiTailwindcss className="text-8xl mx-5 md:mx-20 text-[#3490dc]" />
        </div>
        <div>
          <IoLogoReact className="text-8xl mx-5 md:mx-20 text-[#61DBFB]" />
        </div>
        <div>
          <IoLogoFirebase className="text-8xl mx-5 md:mx-20 text-[#F5820D]" />
        </div>
        <div>
          <IoLogoNodejs className="text-8xl mx-5 md:mx-20 text-[#7fb000]" />
        </div>
        <div>
          <SiMongodb className="text-8xl mx-5 md:mx-20 text-[#4DB33D]" />
        </div>
        <div>
          <SiExpress className="text-8xl mx-5 md:mx-20" />
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
