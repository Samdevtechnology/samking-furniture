import React, { useEffect, useState } from "react";

const FlashingTextLoader = ({ message }: { message: string }) => {
  const [showMsg, setShowMsg] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMsg((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex just-cont h-[40vh] min-h-[16rem] text-3xl font-bold">
      <span
        className={`text-primary/50 transition-opacity duration-500 ${
          showMsg ? "opacity-100" : "opacity-0"
        }`}
      >
        {message}
      </span>
    </section>
  );
};

export default FlashingTextLoader;
