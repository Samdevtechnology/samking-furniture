interface props {
  children: React.ReactNode;
  title: string;
}

const MainLayout = ({ children, title }: props) => {
  return (
    <div className="shadow h-full">
      <header className="bg-secondary rounded-t py-3 px-4">
        <h1 className="text-xl font-semibold tracking-wider">{title}</h1>
      </header>

      <div id="body">{children}</div>
    </div>
  );
};

export default MainLayout;
