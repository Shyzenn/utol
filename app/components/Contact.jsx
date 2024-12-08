import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import utolLogo from "@/public/utolLogo.png";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="md:ml-24 mt-20 text-white py-6 px-6">
        <h1 className="text-3xl mb-4">Contact Us</h1>
        <div className="flex w-full justify-between flex-col gap-8 md:flex-row">
          <div className="md:w-[30%]">
            <h1>Address</h1>
            <p>
              San Agustin 1 Metrogate Near City Savings Bank, Blk 84 lot 5 and 6
              Governors Drive Dasmariñas, Philippines
            </p>
          </div>
          <div className="md:w-[30%]">
            <h1>Call Us</h1>
            <p>TM / Globe 0926-0427-540 0991-882-4940 046-404-2458</p>
            <p>DITO 0991-613-0649</p>
          </div>
          <div className="md:w-[30%]">
            <h1>Mail Us</h1>
            <p>utolnewconceptshop@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-8 mt-8 md:w-[30%]">
            <p>
              Established in 2019, Utal Builders has been a trusted supplier of
              glass, aluminum, and steel materials for fabrication and
            </p>
            <Link href="https://www.facebook.com/utol.builders?_rdc=1&_rdr#">
              <FaFacebook className="text-4xl" />
            </Link>
          </div>
          <div className="flex justify-center">
            <Image src={utolLogo} alt="utolLogo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
