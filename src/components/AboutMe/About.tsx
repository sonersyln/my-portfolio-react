import React from "react";
import aboutImage from "../../assets/about.png";

const About: React.FC = () => {
  
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            HAKKIMDA
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
          Teknolojiyle Geleceği {" "}
            <span className="text-yellow-400">Şekillendirmek</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Amacım, sorunları çözmek ve kullanıcı deneyimini geliştirmek için
              teknolojiyi etkin bir şekilde kullanmak. Projelerdeki rolümü
              ilerletmek için yenilikçi çözümler üretmeye ve kendimi sürekli
              geliştirmeye çalışıyorum.
            </p>
          </div>
          
        </div>
        <div
          data-aos="fade-left"
          className="lg:flex lg:w-[500px] rounded-full mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative flex"
        >
          <img
              src={aboutImage}
              alt="user"
              className="z-[11] object-contain w-full h-full"
            />
          <div className="absolute rounded-full w-[100%] h-[100%] z-[10] bg-custom-radial-gradient top-[-1rem] right-[-1rem]"></div>
          <div className="absolute rounded-full w-[100%] h-[100%] z-[10] bg-radial-gradient bottom-[-1rem] left-[-1rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;