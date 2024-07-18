import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro<span className="text-yellow-400">Jeler</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
      <div data-aos="fade-up">
    <a href="https://rentogo.com.tr/" target="_blank" rel="noopener noreferrer">

        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
            <img src={project1} alt="portfolio" className="object-contain w-full h-full" />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                <p className="text-white text-xl font-bold">Araç Kiralama Sistemi</p>
            </div>
        </div>
    </a>
</div>

        {/* delay eklerken 300-300 arttır */}
        <div data-aos="fade-up" data-aos-delay="300">
        <a href="https://github.com/sonersyln/rent2go_frontend" target="_blank" rel="noopener noreferrer">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <img
                src={project2}
                alt="portfolio"
                className="object-contain w-full h-full"
              />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                <p className="text-white text-xl font-bold">Araç Kiralama Sistemi</p>
            </div>
          </div>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
        <a href="https://github.com/sonersyln/google-nearby-search-backend" target="_blank" rel="noopener noreferrer">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
          <img
                src={project3}
                alt="portfolio"
                className="object-contain w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                <p className="text-white text-xl font-bold">Google Yakınlarda Arama Projesi</p>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;