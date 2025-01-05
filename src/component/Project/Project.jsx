import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div>
      <div className="text-left">
      <h2 className="text-4xl text-left underline underline-offset-1 mt-10 text-white mb-4">
        Project
      </h2>
      <p className="text-2xl text-white mt-10">Check out some of my works right here</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="card bg-base-100 w-96  shadow-lg shadow-cyan-500/50 ">
        
          <figure>
           <img src="../../../public/news.jpg" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">News</h2>
            <p className=" text-xl text-white text-justify">Dragon News Portal is a dynamic and modern news platform that provides users with the latest updates from around the world. 
              Built using cutting-edge web technologies,
               this portal is designed to deliver news seamlessly and effectively to its audience.</p>

               <p className="text-justify text-xl text-white">Features:Top headlines Featured news articles Trending stories with images and summaries.</p>

               <p className="text-justify text-xl text-white">Technologies: React, Node, MongoDB</p>
            <div className="card-actions flex justify-between mt-10 ">
             <div className="text-white text-xl ">
             <a href="https://dragon-news-project2.firebaseapp.com/">live</a>
             </div>
              <div className="text-white text-xl">
              <a href="https://github.com/Mdshirajul9081/dragon-news-project2">
              <button className="text-white ">code</button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96  shadow-lg shadow-cyan-500/50 ">
        
          <figure>
           <img src="../../../public/istockphoto-1427598915-2048x2048.jpg" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Alpha Clash</h2>
            <p className="text-justify text-xl text-white">Alpha Clash is an exhilarating, action-packed multiplayer battle game set in a futuristic world where strategy and survival are key. Players take on the roles of powerful warriors,
            known as "Clashers," equipped with advanced weapons and abilities to compete in intense, high-stakes combat.</p>

               <p className="text-justify text-xl text-white">Features:Automatically parses JSON responses to JavaScript objects.</p>

               <p className="text-justify text-xl text-white">Technologies: html,css , tailwind css,JavaScript,react</p>
            <div className="card-actions flex justify-between mt-10 ">
             <div className="text-white text-xl ">
             <a href="https://extraordinary-mochi-dd2576.netlify.app">live</a>
             </div>
              <div className="text-white text-xl">
              <a href="https://github.com/Mdshirajul9081/alphabet-clash">
              <button className="text-white ">code</button>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-lg shadow-cyan-500/50 ">
        
          <figure>
           <img src="../../../public/pexels-goumbik-590016.jpg" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">job apply system</h2>
            <p className="text-justify text-xl text-white">A Job Apply System is a web-based platform that streamlines the recruitment process for both job seekers and employers.
               The system enables job seekers to search for opportunities, apply for positions, and manage their applications,
               while allowing employers to post job openings, review applications, and communicate with candidates.</p>

               <p className="text-justify text-xl text-white">Features:Register and log in securely.
               Create and update profiles with personal details, resume, skills, and work experience.</p>

               <p className="text-justify text-xl text-white">Technologies: html,css,tailwind ,JavaScript,react</p>
            <div className="card-actions flex justify-between mt-10 ">
             <div className="text-white text-xl ">
             <a href="https://scintillating-tarsier-362ba8.netlify.app">live</a>
             </div>
              <div className="text-white text-xl">
              <a href="https://github.com/Mdshirajul9081/carrer-hub-system">
              <button className="text-white ">code</button>
              </a>
              </div>
            </div>
          </div>
        </div>
       
        
      </div>
    </div>
  );
};

export default Project;
