import { Link } from "react-router-dom";

const SettingsComponent = (props) => {
    const { iconClass, iconName, path } = props;
    
    
  return (
    <Link to={path} className="w-full flex items-center gap-20 border-1 border-[#e6e5e5] rounded-2xl p-5 ease-in duration-150 hover:border-[#37353e] hover:shadow-xl hover:scale-105 hover:bg-[#fffbfb]">
      <i className={iconClass}></i>
      <h1 className="text-4xl font-semibold text-[#37353e] ">{iconName}</h1>
    </Link>
  );
};

export default SettingsComponent;
