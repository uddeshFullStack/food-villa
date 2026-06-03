import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import UserContext from "../../provider/UserContext";
import { ROUTES } from "../../constants/routes";

interface Props {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: Props) {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
    );
  }

  return <>{children}</>;
}
