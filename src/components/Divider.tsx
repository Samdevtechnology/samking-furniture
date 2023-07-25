type props = {
  children?: string;
};

const Divider = ({ children }: props) => {
  return (
    <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t border-gray-400"></div>
      {children && <span className="flex-shrink mx-4">{children}</span>}
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};

export default Divider;
