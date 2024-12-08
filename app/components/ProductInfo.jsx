import React from "react";
import { TableDemo } from "./productTable";

const ProductInfo = () => {
  return (
    <>
      <div className=" ml-24 mt-20 mb-20">
        <h1 className="text-3xl mb-10">Product Information</h1>

        <div className="md:flex md:flex-row gap-8 md:justify-evenly flex flex-col ">
          <div className="shadow-md w-80 p-8 bg-white">
            <h1 className="mb-10 text-xl text-center mt-2">Glass Materials</h1>
            <p className="text-justify">
              UTol Builders supplies a glass materials suitable for windows,
              doors, facades and interior design.
            </p>
          </div>
          <div className="shadow-md w-80 p-8 bg-white">
            <h1 className="mb-10 text-xl text-center mt-2">Steel Materials</h1>
            <p className="text-center">
              We provide high-quality steel materials.
            </p>
          </div>
          <div className="shadow-md w-80 p-8 bg-white">
            <h1 className="mb-10 text-xl text-center mt-2">
              Aluminum Materials
            </h1>
            <p className="text-justify">
              Out aluminum materials are perfect for structural and
              architectural applications, offering strength and durability.
            </p>
          </div>
        </div>
      </div>
      <TableDemo />
    </>
  );
};

export default ProductInfo;
