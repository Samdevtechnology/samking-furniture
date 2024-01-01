"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../(redux)/store";
// import Auth from "../components/Auth";

interface props extends SessionProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children, session }: props) => {
  return (
    <ReduxProvider store={store}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </ReduxProvider>
  );
};

export default Provider;
