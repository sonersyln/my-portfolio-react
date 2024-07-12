import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "../EducationSkill/SkilsLanguage";

//Ne kadar skill ve level eklersen SkilsLanguage componentinde interface belirt

const Skils = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        EĞİTİM & <span className="text-yellow-400">BECERİLER</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-3 gap-[2rem] items-center">
        <div>
          <SkilsItem
            title="Codecademy"
            year="2023 - 2024"
            description="Java & React Full Stack Trainee"
          />

          <SkilsLanguage
            skill1="Java"
            skill2="Spring Boot"
            skill3="Git & GitHub"
            skill4="React"
            level1="w-[81%]"
            level2="w-[77%]"
            level3="w-[90%]"
            level4="w-[60%]"
          />
        </div>

        <div>
          <SkilsItem
            title="İstanbul Kodluyor (Tobeto)"
            year="2023 - 2024"
            description="Java & React Full Stack Trainee"
          />
          <SkilsLanguage
            skill1="Hibernate"
            skill2="CSS"
            skill3="Agile"
            skill4="TypeScript"
            level1="w-[79%]"
            level2="w-[55%]"
            level3="w-[55%]"
            level4="w-[55%]"
          />
        </div>

        <div>
          <SkilsItem
            title="İSTANBUL GELİŞİM ÜNİVERSİTESİ"
            year="2016 - 2021"
            description="Mühendislik Fakültesi/Elektrik Elektronik Mühendisi"
          />
          <SkilsLanguage
            skill1="CentOS"
            skill2="Matlab"
            skill3="Linux"
            skill4="SCRUM"
            level1="w-[70%]"
            level2="w-[80%]"
            level3="w-[70%]"
            level4="w-[55%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skils;
