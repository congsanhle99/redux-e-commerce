import { useSelector } from "react-redux";
import { selectEmail } from "../../redux/slice/authSlice";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);
  if (userEmail === "admin.lcsanh@gmail.com") {
    return children;
  }
  return null;
};

export default AdminOnlyRoute;
