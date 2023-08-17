"use client";

import { createContext, useContext } from "react";

export type AuthProps = {
  email?: string;
  message?: string;
  samkingSid?: string;
};

export type UpdateAuthProps = {
  updateAuthContext: (props: AuthProps) => void;
};

interface IAuthContext extends AuthProps, UpdateAuthProps {}

export const AuthContext = createContext<IAuthContext>({
  updateAuthContext() {},
});

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
