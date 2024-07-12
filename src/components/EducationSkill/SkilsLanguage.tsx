import React from "react";

interface Props {
  logo1: any;
  logo2: any;
  logo3: any;
  logo4: any;
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  level1: string;
  level2: string;
  level3: string;
  level4: string;
}

const SkilsLanguage = ({
  logo1,
  logo2,
  logo3,
  logo4,
  skill1,
  skill2,
  skill3,
  skill4,
  level1,
  level2,
  level3,
  level4,
}: Props) => {
  return <div>
    <div className="relative mb-[3rem] ">
        <h1 className="p-5 w-[100%] flex justify-between uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
            {skill1}
            <img src={logo1} alt="logo" className="w-[13%] h-[13%] md:w-[9%] md:h-[9%] object-cover" />
        </h1>
        
        <span className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5] `}></span>
    </div>
    <div className="relative mb-[3rem] ">
        <h1 className="p-5 w-[100%] flex justify-between uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
            {skill2}
            <img src={logo2} alt="logo" className="w-[13%] h-[13%] md:w-[9%] md:h-[9%] object-cover"  />
        </h1>
        <span className={`${level2} bottom-0 h-[6px] absolute bg-[#55e6a5] `}></span>
    </div>
    <div className="relative mb-[3rem] ">
        <h1 className="p-5 w-[100%] flex justify-between uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
            {skill3}
            <img src={logo3} alt="logo" className="w-[13%] h-[13%] md:w-[9%] md:h-[9%] object-cover" />
        </h1>
        <span className={`${level3} bottom-0 h-[6px] absolute bg-[#55e6a5] `}></span>
    </div>

    <div className="relative mb-[3rem] ">
        <h1 className="p-5 w-[100%] flex justify-between uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
            {skill4}
            <img src={logo4} alt="logo" className="w-[13%] h-[13%] md:w-[9%] md:h-[9%] object-cover"  />
        </h1>
        <span className={`${level4} bottom-0 h-[6px] absolute bg-[#55e6a5] `}></span>
    </div>

    
    
  </div>;
};

export default SkilsLanguage;