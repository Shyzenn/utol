import React from "react";
import FinishedProducts from "./FinishedProducts";

const About = () => {
  return (
    <>
      <div className=" ml-24 mt-20 mb-20">
        <h1 className="text-3xl mb-10">About</h1>

        <div className="md:flex md:flex-row gap-8 md:justify-evenly flex flex-col mr-32">
          <div className="shadow-md w-80 p-8 bg-white">
            <h1 className="mb-10 text-xl text-center mt-2">Service Overview</h1>
            <p className="text-justify">
              Our mission is to provide top-quality materials and excellent
              service to our clients, ensuring projects are successful.
            </p>
          </div>
          <div className="shadow-md w-80 p-8 bg-white">
            <h1 className="mb-10 text-xl text-center mt-2">Company History</h1>
            <p className="text-justify">
              Established in [2019], Utol Builders has been a trusted supplier
              of glass, aluminum, and steel materials for fabrication and
              installation industries.
            </p>
          </div>
          <div className="shadow-md w-80 p-8 bg-white">
            <h1 className="mb-10 text-xl text-center mt-2">
              Mission Statement
            </h1>
            <p className="text-justify">
              Utol Builders offers a comprehensive range of glass, aluminum, and
              steel materials and services for various applications.
            </p>
          </div>
        </div>
        <FinishedProducts />
      </div>
    </>
  );
};

export default About;
