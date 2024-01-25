import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div
        className="text-center h-[300px]"
        style={{ background: "linear-gradient(to right, pink, blue)" }}
      >
        <img
          src="./assets/HomeImages/logo.png"
          alt="logo"
          className="w-[200px] justify-center"
        />

        {/* links start here */}
        <div className="">
          <ul className="flex m-5 justify-center gap-10 text-white">
            <a href="#">
              <li>Top Rated Features</li>
            </a>
            <a href="#">
              <li>Best Products</li>
            </a>{" "}
            <a href="#">
              <li>New Arrivals</li>
            </a>{" "}
            <a href="#">
              <li>About Us</li>
            </a>{" "}
            <a href="#">
              <li>Contact Us</li>
            </a>{" "}
            <a href="#">
              <li>Blogs</li>
            </a>
            <a href="#">
              <li>Login</li>
            </a>
            <a href="#">
              <li>Seller Login</li>
            </a>{" "}
          </ul>
        </div>
        {/* links start ends */}

        {/* social media icon starts here */}
        <div className="">
          <ul className="flex flex-row m-4 justify-center ">
            <li className="mx-5 text-4xl text-white">
              <a href="#">
                <AiFillFacebook />
              </a>
            </li>
            <li className="mx-5 text-4xl text-white">
              <a href="#">
                <FaInstagram />
              </a>{" "}
            </li>
            <li className="mx-5 text-4xl text-white">
              <a href="#">
                <TiSocialTwitter />
              </a>
            </li>
            <li className="mx-5 text-4xl text-white">
              <a href="#">
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
        {/* social media icon ends here */}
      </div>
    </>
  );
};

export default Footer;
