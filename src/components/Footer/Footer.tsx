import {
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] md:flex md:justify-between">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Adres
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              Küçükçekmece <br />
              İstanbul
            </p>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/sonerseylan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center space-x-6">
            <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
              <FaLinkedin className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-black" />
            </div>
            <div>
              <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
                Linkedin
              </h1>
              <p className="text-[17px] w-[90%] text-white opacity-60">
                linkedin.com/in/sonerseylan/
              </p>
            </div>
          </div>
        </a>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              E-Posta
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              <a href="mailto:syln.soner@gmail.com" rel="noopener noreferrer">
                syln.soner@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-60">
          Soner Şeylan 2023 © Tüm Hakları Saklıdır
        </div>
        <div className="flex items-center space-x-10 justify-end">
          <p className="text-[16px] text-white opacity-60">
            Şartlar & Koşullar
          </p>
          <p className="text-[16px] text-white opacity-60">
            Gizlilik Politikası
          </p>
          <p className="text-[16px] text-white opacity-60">Site Haritası</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
