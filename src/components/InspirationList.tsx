import Image from "next/image";
import { StaticImageData } from "next/image";

interface inspiration {
  key: string;
  image: string | HTMLImageElement | StaticImageData;
  heading: string;
  details: string;
  title?: string;
}

const InspirationList = ({ lists }: { lists: inspiration[] }) => {
  return (
    <ul className="flex flex-col just-cont gap-y-10 pb-12">
      {lists.map((insp) => (
        <li
          className="flex just-cont bg-white flex-col lg:odd:flex-row lg:even:flex-row-reverse"
          key={insp.key}
        >
          <div className="image w-full">
            <Image
              width={100}
              height={200}
              src={insp.image}
              alt={insp.title || insp.heading}
              className="w-full h-full object-contain"
              quality={80}
              placeholder="blur"
            />
          </div>
          <div className="w-full self-start flex justify-center flex-col items-center">
            <h5 className="my-4 xl:my-12 text-xl sm:text-2xl">
              {insp.heading}
            </h5>
            <p className=" w-11/12 md:w-4/5 mb-6 lg:mb-0">{insp.details}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InspirationList;
