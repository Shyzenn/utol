import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-white w-[90%]  md:w-[50%] lg:w-[60%]">
      <h1 className="text-3xl md:text-5xl mb-4">
        WELCOME TO UTOL WEBSITE GLASS ALUMINUM & STEEL WORKS
      </h1>
      <p className="text-slate-200 w-[90%]">
        Your Premier Supplier of Glass, Aluminum and Steel Materials and
        Fabrication Services Specializing in high-quality materials for
        Fabrication.
      </p>

      <button className=" bg-buttonColor py-2 px-8 rounded-full mt-8 weight font-semibold">
        <Link href="#products">VIEW PRODUCTS</Link>
      </button>
    </div>
  );
};

export default Hero;
