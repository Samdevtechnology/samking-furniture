"use client";

import { AuthContext, AuthProps } from "./AuthContext";
import { ReactNode, useEffect, useState } from "react";
import Cookie from "js-cookie";

interface IProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: IProps) => {
  const [authContext, setAuthContexts] = useState<AuthProps>({
    email: Cookie.get("username") || "",
    samkingSid: Cookie.get("samkingSid") || "",
    message: Cookie.get("msg") || "",
  });

  const updateAuthContext = (prop: AuthProps) => {
    setAuthContexts((prev) => ({ ...prev, ...prop }));
  };

  useEffect(() => {
    const message = authContext.message;
    if (message) {
      Cookie.set("msg", message);
    } else {
      Cookie.remove("msg");
    }
  }, [authContext.message]);

  useEffect(() => {
    const samkingSid = authContext.samkingSid;
    if (samkingSid) {
      Cookie.set("samkingSid", samkingSid, {
        secure: true,
        expires: 7,
      });
    } else {
      Cookie.remove("samkingSid");
    }
  }, [authContext.samkingSid]);

  useEffect(() => {
    const email = authContext.email;
    if (email) {
      Cookie.set("username", email);
    } else {
      Cookie.remove("username");
    }
  }, [authContext.email]);

  return (
    <AuthContext.Provider
      value={{
        ...authContext,
        updateAuthContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
