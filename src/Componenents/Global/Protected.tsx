import React, { PropsWithChildren } from "react";
import { useRecoilValue } from "recoil";
import AuthScreen from "../Screens/AuthScreen";
import DisplayScreen from "../Screens/DisplayScreen";
import { authData } from "./Global";

export const Protected: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useRecoilValue(authData);

  return user ? (
    <div>
      <DisplayScreen />
    </div>
  ) : (
    <div>
      <AuthScreen />
    </div>
  );
};
