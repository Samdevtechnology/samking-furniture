const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-6 grid grid-cols-2 gap-5">{children}</div>;
};

export default CardContainer;
