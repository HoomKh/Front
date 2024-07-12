import Image from "next/image";
import React from "react";
import Link from "next/link";
interface Props {
  src: string;
  title: string;
  description: string;
  link: string
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className=" flex flex-col relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={900}
        height={900}
        className="w-full object-contain"
      />

      <div className="h-full relative p-4 flex flex-col gap-y-10 justify-between">
        <div>
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-gray-300">{description}</p>
        </div>
        <Link
          href={link}
          className="z-40 py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-4"
        >
          Learn More!
        </Link>
      </div>

    </div>
  );
};

export default ProjectCard;
