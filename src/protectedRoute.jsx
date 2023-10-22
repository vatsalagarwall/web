import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const ProtectedRoute = (props) => {
  // uncomment this to enable protected routes when backend is ready

  // const token = localStorage.getItem("token");
  // if (token == (undefined || null)) {
  // 	return <Navigate to="/login"></Navigate>;
  // }
  // const decoded = jwtDecode(token);
  // if (decoded.exp < Date.now() / 1000) {
  // 	localStorage.removeItem("token");
  // 	return <Navigate to="/login"></Navigate>;
  // }

  return props.children;
};

export default ProtectedRoute;
