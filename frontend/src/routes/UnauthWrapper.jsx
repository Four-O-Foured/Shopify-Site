import { useSelector } from "react-redux";

const UnauthWrapper = (props) => {
  const user = useSelector((state) => state.users.user);
  return !user ? props.children : <Navigate to="/" />;
};

export default UnauthWrapper;
