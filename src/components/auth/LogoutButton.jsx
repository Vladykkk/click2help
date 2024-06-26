import { useAuth0 } from "@auth0/auth0-react";

import "./authButton.css";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated && <button onClick={() => logout()}>Logout</button>;
};

export default LogoutButton;
