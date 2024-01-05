"use client";

import { useRef } from "react";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import makeStore, { AppStore } from "@/lib/store";
import { getTotals } from "@/lib/features/cart/cartSlice";
// import Auth from "../components/Auth";

interface props extends SessionProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children, session }: props) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(getTotals());
  }
  return (
    <ReduxProvider store={storeRef.current}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </ReduxProvider>
  );
};

export default Provider;
