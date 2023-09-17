import RedirectLoggedInUser from "./components/RedirectLoggedUser";
import AuthContextProvider from "./context/AuthContextProvider";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  await RedirectLoggedInUser();
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;
