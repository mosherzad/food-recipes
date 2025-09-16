import React from "react";

const Footer = () => {
  return (
    <footer className=" text-black p-5 flex justify-center items-center">
      <span className="text-sm text-center">
        &copy; {new Date().getFullYear()} Mohammed. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
