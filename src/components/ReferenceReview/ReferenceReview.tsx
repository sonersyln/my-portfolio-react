import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  image: string;
  name: string;
  role: string;
  description: string;
}

const ReferenceReview = ({ name, image, role, description }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <img
        src={image}
        alt={name}
        className="mx-auto mb-8 w-24 h-24 rounded-full object-contain"
      />
      <div className="flex items-center mx-auto">
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
      <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">
        {role}
      </p>
      <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default ReferenceReview;