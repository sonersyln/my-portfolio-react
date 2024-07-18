import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        Uzmanlık <span className="text-yellow-400">Alanlarım</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem] mt-[4rem] text-white">
        <div className="flex flex-col justify-between " data-aos="fade-right">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem] rounded-xl flex-grow">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              KULLANICI DOSTU VE ETKİLEYİCİ ARAYÜZLER OLUŞTURMAK İÇİN
              JAVASCRIPT, TYPESCRIPT, REACT VE CSS GİBİ MODERN FRONTEND
              TEKNOLOJİLERİNİ KULLANIYORUM. FRONTEND GELİŞTİRME KONUSUNDA
              DENEYİM VE YETKİNLİK SAHİBİYİM.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col justify-between "
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem] rounded-xl flex-grow">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              GÜÇLÜ VE ÖLÇEKLENEBİLİR BACKEND SİSTEMLERİ OLUŞTURMAK İÇİN JAVA,
              SPRING BOOT, MAVEN VE HIBERNATE GİBİ TEKNOLOJİLERE HAKİMİM. VERİ
              TABANI YÖNETİMİ İÇİN POSTGRESQL VE MYSQL KULLANARAK, API
              ENTEGRASYONU VE SUNUCU TARAFI MANTIK GELİŞTİRME KONULARINDA
              DENEYİMLİYİM.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col justify-between "
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem] rounded-xl flex-grow">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Server Management
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              PROJELERİMİ BAŞARIYLA HAYATA GEÇİRMEK İÇİN DEPLOY VE SUNUCU
              YÖNETİMİ KONULARINDA DENEYİMLİYİM. GIT VE GITHUB İLE VERSİYON
              KONTROLÜ SAĞLAYARAK, PROJELERİMİN SÜREKLİ ENTEGRASYON VE DAĞITIM
              SÜREÇLERİNİ YÖNETİYORUM. LINUX VDS ÜZERİNDE ÇALIŞARAK, GÜVENLİ VE
              ÖLÇEKLENEBİLİR SUNUCU ÇÖZÜMLERİ ÜRETİYORUM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
