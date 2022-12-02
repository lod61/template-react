import * as React from "react";

export default function useAuth() {
  const AuthContext = React.createContext(null);
  return React.useContext(AuthContext);
}
