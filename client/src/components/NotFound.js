import React, { useContext, useEffect } from "react";
import AuthContext from "../context/auth/AuthContext";

const NotFound = () => {
  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 className="text-danger">404 Error: Page Not Found :(</h1>
    </div>
  );
};

export default NotFound;
