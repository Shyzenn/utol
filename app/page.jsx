import Navbar from "./components/Navbar";
import Image from "next/image";
import homeImg from "../public/utol-home.jpg";
import Hero from "./components/Hero";
import ProductInfo from "./components/ProductInfo";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="w-full h-screen relative" id="home">
        <Image
          src={homeImg}
          alt="homeImage"
          className="w-full h-full object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center left-6 md:left-24">
          <Hero />
        </div>
      </section>

      <section className="w-full" id="products">
        <ProductInfo />
      </section>

      <section className="mt-20" id="about">
        <About />
      </section>

      <section className="mt-20 bg-bgColor" id="contact">
        <Contact />
      </section>
    </>
  );
}
