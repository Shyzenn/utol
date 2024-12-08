import Image from "next/image";
import React from "react";
import img1 from "@/public/41.jpg";
import img2 from "@/public/42.jpg";
import img3 from "@/public/43.jpg";
import img4 from "@/public/44.jpg";
import img5 from "@/public/45.jpg";
import img6 from "@/public/46.jpg";

const FinishedProducts = () => {
  return (
    <div className="mt-20">
      <h1 className="text-2xl text-center">Finished Products</h1>
      <div className="grid grid-cols-3 gap-5 justify-center place-items-center mt-16">
        <Image src={img1} alt="productImage" className="w-80 h-80" />
        <Image src={img2} alt="productImage" className="w-80 h-80" />
        <Image src={img3} alt="productImage" className="w-80 h-80" />
        <Image src={img4} alt="productImage" className="w-80 h-80" />
        <Image src={img5} alt="productImage" className="w-80 h-80" />
        <Image src={img6} alt="productImage" className="w-80 h-80" />
      </div>
    </div>
  );
};

export default FinishedProducts;
