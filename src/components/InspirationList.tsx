"use client";

import { useGetInspirationsQuery } from "@/app/(redux)/(slices)/inspiration";
import Inspiration from "@/app/(redux)/types/Inspiration";
import Image from "next/image";

const InspirationList = () => {
  const { data, error, isLoading, isSuccess } = useGetInspirationsQuery();
  if (error) {
    return <div>something Went Wrong</div>;
  }

  if (isLoading) {
    return <div>loading.........</div>;
  }
  if (isSuccess && data) {
    const inspirations = data.ids
      .map((id) => data.entities[id])
      .filter(
        (inspiration): inspiration is Inspiration => inspiration !== undefined
      );

    return (
      <ul className="flex flex-col just-cont gap-y-10 pb-12">
        {inspirations.map((inspiration) => (
          <li
            className="flex just-cont bg-white flex-col lg:odd:flex-row lg:even:flex-row-reverse"
            key={inspiration.id}
          >
            <div className="image w-full">
              <Image
                width={100}
                height={200}
                src={inspiration.image}
                alt={inspiration.title || inspiration.heading}
                className="w-full h-full object-contain"
                quality={80}
                // placeholder="blur"
              />
            </div>
            <div className="w-full self-start flex justify-center flex-col items-center">
              <h5 className="my-4 xl:my-12 text-xl sm:text-2xl">
                {inspiration.heading}
              </h5>
              <p className=" w-11/12 md:w-4/5 mb-6">{inspiration.details}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return null;
};

export default InspirationList;
