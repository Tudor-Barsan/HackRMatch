import React, { useEffect } from "react";

export function LoginSuccess() {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);

  return <div>Login successful!</div>;
}

export default LoginSuccess;