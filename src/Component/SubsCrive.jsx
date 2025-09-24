import React from "react";
import bgImg from "../assets/bg-shadow.png";

const SubsCrive = () => {
  return (
    <div
      className="my-10 h-[200px] mx-auto max-w-[800px] bg-cover bg-center rounded-lg flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold">Subscribe to our Newsletter</h1>
        <p>Get the latest updates and news right in your inbox!</p>
        <div className="join ">
          <div>
            <label className="input validator join-item">
              <input type="email" placeholder="Enter your email" required />
            </label>
          </div>
          <span className="btn bg-linear-to-r from-[#E48FB1] to-[#F6CC58] ml-4 rounded font-semibold">
            Subscribe
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubsCrive;
