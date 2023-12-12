import web1 from "../assets/web1.jpeg";
import web2 from "../assets/web2.jpeg";
import web3 from "../assets/web3.jpeg";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
const Myprojects = () => {
  return (
    <div>
      <h2
        className="text-5xl uppercase font-bold mt-56 text-center"
        data-aos="fade-down"
      >
        Projects
      </h2>
      <div className="container my-20 mx-auto gap-6 grid lg:grid-cols-3 md:grid-cols-2 justify-items-center grid-cols-1">
        <div
          data-aos="fade-up"
          className="card  card-compact w-96 bg-[#4C566A] shadow-xl"
        >
          <figure>
            <img src={web1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gig Junction</h2>
            <p>
              A website where users can bid on posted jobs. Also users can post
              jobs. Posted jobs can be manageable
            </p>
            <div className="card-actions">
              <a
                href="https://gigjunction-f7c2d.web.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-black px-2 py-1 rounded-lg"
              >
                Website
                <GoArrowUpRight />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/reZerOR/Gig-junction"
                className="flex items-center gap-2 bg-black px-2 py-1 rounded-lg"
              >
                Github
                <GoArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="card card-compact w-96 bg-[#4C566A] shadow-xl"
        >
          <figure>
            <img src={web2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">DataDump</h2>
            <p>
              A website where users can vote on surveys. Users can vote, like,
              dislke, report and comment on surveys. Surveys are managed by
              admin
            </p>
            <div className="card-actions ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://datadump-4f599.web.app/"
                className="flex items-center gap-2 bg-black px-2 py-1 rounded-lg"
              >
                Website
                <GoArrowUpRight />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/reZerOR/DataDump"
                className="flex items-center gap-2 bg-black px-2 py-1 rounded-lg"
              >
                Github
                <GoArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="card card-compact w-96 bg-[#4C566A] shadow-xl"
        >
          <figure>
            <img src={web3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Techify Shop</h2>
            <p>
              A Website where users can shop from their favourite brands. Users
              can see their cart and can know whice product they choosed.
            </p>
            <div className="card-actions">
              <a
                href="https://brand-shop-4f7f6.web.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-black px-2 py-1 rounded-lg"
              >
                Website
                <GoArrowUpRight />
              </a>
              <a
                href="https://github.com/reZerOR/Techify-shop"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-black px-2 py-1 rounded-lg"
              >
                Github
                <GoArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprojects;
