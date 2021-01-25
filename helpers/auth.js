import { useSelector } from "react-redux";
// import { SetUser } from "../services/storage.service";
export const useAuth = () => {
  const auth = useSelector(state => state.auth);

  // const tokenData = SetUser.getPermissions();

  // const checkPermissions = permission => tokenData.permissions.includes(permission);

  // const isAdmin = tokenData.role === "admin";

  return {
    ...auth,
    //permissions: tokenData.permissions,
    //isAdmin,
    //checkPermissions
  };
};