import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contectme = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_goiivxw",
        "template_lejtaaa",
        form.current,
        "SGTZjtv_TdPlTBZVO"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <h2
        className="text-5xl uppercase font-bold mt-10 text-center"
        data-aos="fade-down"
      >
        Contact Me
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[#4C566A] space-y-6 rounded-lg max-w-3xl p-4 my-10 md:p-10 mx-auto"
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="from_name"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            name="fr0m_email"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Messege</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Messenge"
            name="message"
          ></textarea>
        </label>
        <div className="">
          <button type="submit" className="bg-black py-3 px-6 rounded-lg">
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contectme;
