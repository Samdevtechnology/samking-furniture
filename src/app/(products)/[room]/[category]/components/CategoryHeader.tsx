import Container from "@/utils/Container";
import Image from "next/image";
import Cat from "@/assets/images/cat.png";
import Cat2 from "@/assets/images/cat2.png";
import Cat3 from "@/assets/images/cat3.png";
import Cat4 from "@/assets/images/cat4.png";
import Cat5 from "@/assets/images/cat5.png";
import Cat6 from "@/assets/images/cat6.png";
import Cat7 from "@/assets/images/cat7.png";
import { Select, Option } from "@/utils/MuiServerComponent";

const CategoryHeader = () => {
  return (
    <Container>
      <ul className="flex justify-between mt-16 border-b mb-2 pb-6">
        <li>
          <div className="text-center">
            <Image
              alt="cat"
              src={Cat}
              width={140}
              height={130}
              className=" w-36 h-36 mb-3"
            />
            <span className="font-medium">Tv Stand</span>
          </div>
        </li>
        <li>
          <div className="text-center">
            <Image
              alt="cat"
              src={Cat2}
              width={140}
              height={130}
              className=" w-36 h-36 mb-3"
            />
            <span className="font-medium">Tables</span>
          </div>
        </li>
        <li>
          <div className="text-center">
            <Image
              alt="cat"
              src={Cat3}
              width={140}
              height={130}
              className=" w-36 h-36 mb-3"
            />
            <span className="font-medium">Sofa</span>
          </div>
        </li>
        <li>
          <div className="text-center">
            <Image
              alt="cat"
              src={Cat4}
              width={140}
              height={130}
              className=" w-36 h-36 mb-3"
            />
            <span className="font-medium">Armchairs</span>
          </div>
        </li>
        <li>
          <div className="text-center">
            <Image
              alt="cat"
              src={Cat5}
              width={140}
              height={130}
              className=" w-36 h-36 mb-3"
            />
            <span className="font-medium">Dinner Chairs</span>
          </div>
        </li>
        <li>
          <div className="text-center">
            <Image
              alt="cat"
              src={Cat6}
              width={140}
              height={130}
              className=" w-36 h-36 mb-3"
            />
            <span className="font-medium">Smart Furniture</span>
          </div>
        </li>
        <li>
          <div className="text-center">
            <Image
              alt="cat"
              src={Cat7}
              width={140}
              height={130}
              className=" w-36 h-36 mb-3"
            />
            <span className="font-medium">Leather Chair</span>
          </div>
        </li>
      </ul>
      <div className="flex justify-between items-center border-b pb-8 mb-2">
        <div className="flex">
          <div className="w-64 mr-6">
            <Select label="Filter By">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <div className="w-64">
            <Select label="Sort By">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
            </Select>
          </div>
        </div>
        <div>
          <span>1 - 20 0f 900 products</span>
          <span>1 2 3 </span>
        </div>
      </div>
      <div>
        <ul className="flex gap-4">
          <li className=" rounded-xl bg-secondary p-1">Colour</li>
          <li className=" rounded-xl bg-secondary p-1">Material</li>
          <li className=" rounded-xl bg-secondary p-1">Type</li>
          <li className=" rounded-xl bg-secondary p-1">Brand</li>
          <li className=" rounded-xl bg-secondary p-1">Style</li>
        </ul>
      </div>
    </Container>
  );
};

export default CategoryHeader;
