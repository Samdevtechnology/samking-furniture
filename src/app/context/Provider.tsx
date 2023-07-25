"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";
// import Auth from "../components/Auth";

interface props extends SessionProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children, session }: props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
