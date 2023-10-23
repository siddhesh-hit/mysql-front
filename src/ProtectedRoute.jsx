import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ element }) => {
  const [cookies] = useCookies(["jwt"]);
  const isAuthenticated = !!cookies.jwt;

  // console.log(cookies, isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
