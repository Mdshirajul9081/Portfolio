import { Link } from "react-router-dom";


const About = () => {
  return (
    <div>
      <h2 className="text-3xl text-left underline underline-offset-1 mb-4 text-white">About</h2>

      <p className="text-justify text-xl mt-20 text-white">I am Md Shirajul Islam, a passionate MERN Stack developer with a strong foundation in Computer Science and Engineering, 
      which I obtained from Daffodil International University. My enthusiasm for web development drives me to constantly learn and innovate,
      even though I have yet to gain professional work experience.</p>
      <p className="text-justify text-xl mt-10 text-white" >
      Through various personal projects, I have honed my skills in building dynamic and responsive web applications. 
      I am eager to leverage my knowledge and passion to contribute to exciting web development projects and make a meaningful impact in the tech industry.
      </p>
      <p className="text-left"> <Link to="/" > <button className="btn btn-secondary ">home</button> </Link></p>

    </div>
  );
};

export default About;