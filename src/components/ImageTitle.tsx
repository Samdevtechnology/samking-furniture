"use client";

import SubNav from "./SubNav";
import Image from "next/image";
import bg1 from "@/assets/images/bg1.jpg";
import Container from "@/utils/Container";

type props = {
  title: string;
};

const ImageTitle = ({ title }: props) => {
  return (
    <div className="relative">
      <SubNav />
      <div className="relative">
        <Image
          width={500}
          height={350}
          src={bg1}
          alt="Title background"
          className="h-[18rem] w-full object-cover object-bottom"
          quality={80}
          placeholder="blur"
        />
        <Container className="absolute top-2/4 left-4">
          <span className="title block px-4 py-2 bg-gradient-to-r from-[#ffffff0d] to-[#ffffff66] rounded-sm">
            <h1 className="text-3xl">{title}</h1>
          </span>
        </Container>
      </div>
    </div>
  );
};

export default ImageTitle;
