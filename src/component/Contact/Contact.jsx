

const Contact = () => {
  return (
    <div className="text-left">
      <div>
      <h2 className="text-4xl     underline underline-offset-1 mt-10 text-white mb-8">Education</h2>
      <p className="text-3xl text-white ">BSc in Computer Science and Engineering</p>
      <p className="text-3xl text-white mt-4">Daffodil International University</p>
      <p className="text-3xl text-white mt-4">2019-2023</p>
      </div>
      <div className="bg-black w-full mx-auto mt-20 text-white">
      <h2 className="text-4xl  text-left underline underline-offset-1 mb-20 mt-20   text-white ">Contact</h2>
      <div className="items-center flex flex-col   ">
      <input className="mx-20 px-20 border border-sky-500 " type="name" name="name" placeholder="enter your name" />
      <input className=" m-4 px-20 border border-sky-500" type="email" name="email" placeholder="enter your name" />
      <input className="m-4 p-20 border border-sky-500 text-left " type="text" name="name" placeholder="enter your massege" />
      <button className="btn-btn-success">Lets talk</button>

      </div>
      </div>

    </div>
  );
};

export default Contact;