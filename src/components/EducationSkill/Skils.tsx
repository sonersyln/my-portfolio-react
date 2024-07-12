import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "../EducationSkill/SkilsLanguage";

//Ne kadar skill ve level eklersen SkilsLanguage componentinde interface belirt

const Skils = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        DENEYİM & <span className="text-yellow-400">BECERİLER</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkilsItem
            title="Codecademy"
            year="2023 - 2024"
            description="Java & React Full Stack Trainee"
          />
          <SkilsItem
            title="İstanbul Kodluyor (Tobeto)"
            year="2023 - 2024"
            description="Java & React Full Stack Trainee"
          />
          <SkilsLanguage
            skill1="Java"
            skill2="Spring Boot"
            skill3="Git & GitHub"
            skill4="Hibernate"
            skill5="Linux"
            skill6="Agile"
            level1="w-[81%]"
            level2="w-[77%]"
            level3="w-[90%]"
            level4="w-[79%]"
            level5="w-[70%]"
            level6="w-[55%]"
          />
        </div>
        <div>
          <SkilsItem
            title="BAYKAR TEKNOLOJİ"
            year="2022"
            description="R&D Engineer"
          />
          <SkilsItem
            title="İSTANBUL GELİŞİM ÜNİVERSİTESİ"
            year="2016 - 2021"
            description="Mühendislik Fakültesi/Elektrik Elektronik Mühendisi"
          />
          <SkilsLanguage
            skill1="React"
            skill2="TypeScript"
            skill3="CSS"
            skill4="CentOS"
            skill5="matlab"
            skill6="SCRUM"
            level1="w-[60%]"
            level2="w-[55%]"
            level3="w-[55%]"
            level4="w-[70%]"
            level5="w-[80%]"
            level6="w-[55%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skils;