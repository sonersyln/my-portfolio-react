import React from "react";
import Particle from "../Particle/Particle";
import TextEffect from "./TextEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import bannerImage from '../../assets/banner.jpeg';
import u1Image from '../../assets/u1low.png';


const Hero: React.FC = () => {
  const handleDownload = () => {
    window.open("https://sonerseylan.com.tr/cv/Soner_Seylan.pdf", "_blank");
  };

  return (
    <div
      className="h-[90vh] mt-[10vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            MERHABA, BEN <span className="text-yellow-400">SONER!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Yazılım geliştirme alanında tutkulu bir mühendis ve yazılımcıyım.
            Java, Spring Boot, React ve Hibernate gibi modern teknolojilerde
            uzmanlaşmış bulunmaktayım. Yazılım dünyasında her zaman yeni şeyler
            öğrenmeye ve kendimi geliştirmeye odaklanıyorum. Farklı projelerde
            yer alarak, kullanıcı dostu ve verimli yazılım çözümleri üretmek
            benim için büyük bir keyif. Profesyonel yaşamımın yanı sıra,
            savunma sanayi, otomasyon ve teknolojiye özel bir ilgi duyuyorum.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button
              //indirme çalışmazsa sunucudan al pdfi
              onClick={handleDownload}
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
            >
              <p>ÖZGEÇMİŞ İNDİR</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden relative lg:flex items-center rounded-full h-[500px]">
          <img
            src={u1Image} 
            alt="user"
            className="z-[11] object-cover rounded-full w-[100%] h-[100%]"
          />
          <div className="absolute rounded-full w-[100%] h-[100%] z-[10] bg-custom-radial-gradient top-[-1rem] right-[-1rem]"></div>
          <div className="absolute rounded-full w-[100%] h-[100%] z-[10] bg-radial-gradient bottom-[-1rem] left-[-1rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
