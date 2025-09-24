import React from "react";
import FooterImg from "../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="bg-[#06091A] max-w-full  space-y-10 flex md:justify-center md:items-center flex-col py-20 md:py-15 ">
      <div className="ml-10 md:ml-0">
        <img src={FooterImg} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 ml-10 md:ml-0 items-center gap-10 md:gap-20 text-white">
        <div className="space-y-3">
          <h1 className="font-semibold text-[19px]">About Us</h1>
          <p className="text-[14px] text-[#d6d1d1d2]">We are a passionate team </p>
          <p className="text-[14px] text-[#d6d1d1d2]">dedicated to providing the best </p>
          <p className="text-[14px] text-[#d6d1d1d2]">services to our customers.</p>
        </div>
        <div className="space-y-3">
          <h1 className="font-semibold text-[19px]">Quick Links</h1>
          <p className="text-[14px] text-[#d6d1d1d2]">. Home </p>
          <p className="text-[14px] text-[#d6d1d1d2]">. Services </p>
          <p className="text-[14px] text-[#d6d1d1d2]">. About</p>
          <p className="text-[14px] text-[#d6d1d1d2]">. Contact</p>
        </div>
        <div className="space-y-3">
          <h1 className="font-semibold text-[19px]">Subscribe</h1>
          <p className="text-[14px] text-[#d6d1d1d2]">Subscribe to our newsletter for the </p>
          <p className="text-[14px] text-[#d6d1d1d2]">latest updates</p>
          <div className="join ">
            <div>
              <label className="input  join-item">
                <input
                  className="text-black"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </label>
            </div>
            <span className="btn bg-linear-to-r from-[#E48FB1] to-[#F6CC58] rounded font-semibold join-item">
              Subscribe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
