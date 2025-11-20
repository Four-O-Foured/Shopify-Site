import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  asyncDeleteUser,
  asyncUpdateUser,
} from "../../store/actions/userAction";
import { showCustomToast } from "../../components/Notification";

const UserProfile = () => {
  const user = useSelector((state) => state.users.user);
  console.log(user);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user?.email,
      password: user?.password,
      username: user?.username,
    },
  });

  const navigate = useNavigate();

  const deleteHandler = () => {
    dispatch(asyncDeleteUser(user.id));
    navigate("/login");
  };

  const formSubmit = (data) => {
    dispatch(asyncUpdateUser(user.id, data));
    showCustomToast("User updated successfully", "success");
  };

  return user ? (
    <div className="max-w-screen mt-20">
      <div className="w-full mb-20 relative">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-circle-line absolute text-5xl cursor-pointer -top-20 -left-15"
        ></i>
        <p className="text-[#27391c94] my-3 text-4xl leading-none font-thin">
          Username: <span className="text-[#27391c]">{user.username}</span>
        </p>
        <p className="text-[#27391c94] my-3 text-4xl leading-none font-thin">
          Email: <span className="text-[#27391c]">{user.email}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(formSubmit)} className="max-w-screen">
        <p className="text-[#27391C] my-3 text-2xl leading-none font-semibold ">
          Username
        </p>
        <input
          className="text-4xl p-3 block w-1/2 text-[#37353E] font-semibold outline-none border-b-2 border-[#e6e5e5] focus:border-b-2 focus:border-[#37353E]"
          {...register("username", { required: "Username is required" })}
          type="text"
          placeholder="Username"
        />
        <p className="text-red-400 my-1">{errors.email?.message}</p>
        <p className="text-[#27391C] text-2xl leading-none font-semibold mt-10 mb-3">
          Email
        </p>
        <input
          className="text-4xl p-3 block w-1/2 text-[#37353E] font-semibold outline-none border-b-2 border-[#e6e5e5] focus:border-b-2 focus:border-[#37353E]"
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Email"
        />
        <p className="text-red-400 my-1">{errors.email?.message}</p>
        <p className="text-[#27391C] text-2xl leading-none font-semibold mt-10 mb-3">
          Password
        </p>
        <input
          className="text-4xl p-3 block w-1/2 text-[#37353E] border-b-2 border-[#e6e5e5] font-semibold outline-none focus:border-b-2 focus:border-[#37353E]"
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
        />
        <p className="text-red-400 my-1">{errors.password?.message}</p>

        <div className="flex gap-8 mt-15 items-center">
          <button
            className="text-2xl py-3 px-5 font-semibold border-[#adadad] border-2 rounded-xl text-[#37353E] hover:text-[#e6e5e5] hover:border-[#27391C] hover:bg-[#27391C] ease-in duration-150 active:scale-95"
            type="submit"
          >
            Update Profile
          </button>

          <button
            onClick={deleteHandler}
            className="text-2xl py-3 px-5 font-semibold border-[#adadad] border-2 ease-in duration-150 rounded-xl text-[#37353E] hover:bg-rose-500 hover:border-[#37353E] active:scale-95"
          >
            Delete Profile
          </button>
        </div>
      </form>
    </div>
  ) : (
    <p className="text-[#27391C] text-5xl leading-none font-semibold mt-10 mb-3">
      Loading...
    </p>
  );
};

export default UserProfile;
