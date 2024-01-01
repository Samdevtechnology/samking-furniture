import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {
  variant?: "primary" | "secondary";
};

export const ProductCard = ({ variant = "primary" }: Props) => {
  return (
    <div
      className={` mb-8 max-w-[350px] bg-white ${
        variant === "primary"
          ? "min-w-[250px] w-[220px] sm:w-[280px] xl:w-[340px]"
          : "border min-w-[200px] w-[260px] sm:w-[320px] md:w-[240px] xl:w-[280px] "
      }`}
    >
      <div className="h-[300px]">
        <Skeleton containerClassName="flex w-full h-full" borderRadius={0} />
      </div>

      <div
        className={`px-4 pb-4 mt-4 flex justify-between ${
          variant === "primary" ? "h-[7.5rem]" : "h-[5.75rem]"
        }`}
      >
        <div className=" w-3/5">
          <div className="mb-2">
            <Skeleton containerClassName="flex-1" />
          </div>
          <div>
            <ul className={`flex ${variant === "primary" ? "mb-2" : "mb-2"}`}>
              <Skeleton
                containerClassName="flex flex-1 flex-row gap-x-1"
                circle
                width={"1.5rem"}
                height={"1.5rem"}
                count={4}
              />
            </ul>
          </div>

          <div className={`flex h-full leading-4`}>
            <Skeleton
              containerClassName="flex-1"
              height={"0.3rem"}
              count={variant === "primary" ? 2.5 : 1}
            />
          </div>
        </div>
        <div className={`flex w-1/5`}>
          <div className={`flex w-full h-full`}>
            <Skeleton
              containerClassName={`flex flex-1 justify-center ${
                variant === "primary" ? `items-end` : "items-start"
              }`}
              circle
              height={"2.8rem"}
              width={"2.8rem"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
