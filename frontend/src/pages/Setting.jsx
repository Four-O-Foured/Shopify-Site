import { useDispatch } from "react-redux";
import SettingsComponent from "../components/SettingsComponent";
import { asyncUserLogOut } from "../store/actions/userAction";

const Setting = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-max-screen px-30 pt-15 ">
      <div className="w-full flex flex-col gap-20">
        <SettingsComponent
          iconClass="ri-account-circle-line text-7xl"
          iconName="Profile"
          path="/user/userprofile"
        />

        <SettingsComponent
          iconClass="ri-shopping-cart-2-line text-7xl"
          iconName="Cart"
          path="/cart"
        />

        <div
          className="w-full"
          onClick={() => {
            dispatch(asyncUserLogOut());
            showCustomToast("User logged out successfully", "success");
          }}
        >
          <SettingsComponent
            iconClass="ri-logout-circle-line text-7xl"
            iconName="Logout"
            path="/login"
          />
        </div>
      </div>
    </div>
  );
};

export default Setting;
