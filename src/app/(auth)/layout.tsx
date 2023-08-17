import AuthContextProvider from "./context/AuthContextProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;
