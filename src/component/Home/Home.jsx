import About from "../About/About";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";
import Navber from "./Navber/Navber";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div>
     
      <Navber></Navber>
      
      <div className="flex justify-center items-start w-full mt-10">
        <div className="flex flex-col items-start w-1/2">
          <h1 className="text-6xl mb-10 text-left text-white">I'm a Full Stack Developer</h1>
          <p className="text-justify text-xl text-white">
            I am 
            <span className="text-blue-600"> Md Shirajul Islam </span>
            and I am a passionate full stack web developer. I love to work on
            web applications using technologies like React, Tailwind, Node,
            Express, and MongoDB.
          </p>
          <div className="mt-5 text-white justify-end">
            <a
              href="../../../public/Sirajul Islam Frontend Developer (1).pdf"
              download
            >
              <button className="btn btn-secondary flex items-center text-white">
                Resume <FaDownload className="ml-2" />
              </button>
            </a>
          </div>
        </div>
        <div className="ml-10  ">
          <img  src="../../../public/download.jpeg" alt="Developer" className="w-2/3  rounded-2xl text-right" />
        </div>
      </div>
      <div>
      <About></About>
      </div>
      <div>
        <Project></Project>
      </div>
      <div>
        <Skills></Skills>
      </div>
      <div>
        <Contact></Contact>
      </div>
      
    </div>


 
  );
};

export default Home;
