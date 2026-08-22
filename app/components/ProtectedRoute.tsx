import React, { ReactNode, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { authStore } from "../store/authStore";
import { router } from "expo-router";

type Props = {
  allowedRoles: ("admin" | "teacher" | "student")[];
  children: ReactNode;
};

export const ProtectedRoute = observer(({ allowedRoles, children }: Props) => {
  useEffect(() => {
    if (!authStore.isLoggedIn || !authStore.role) {
      router.replace("/login");
    } else if (!allowedRoles.includes(authStore.role)) {
      router.replace("/login");
    }
  }, []);

  return <>{children}</>;
});
