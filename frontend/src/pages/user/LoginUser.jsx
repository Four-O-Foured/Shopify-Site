import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);

    reset();
  };
  return (
    <div className="mt-20">
      <form onSubmit={handleSubmit(formSubmit)}>
        <input
          className="text-4xl p-3 block w-1/2 mt-15 text-[#37353E] font-semibold outline-none border-b-2 border-[#e6e5e5] focus:border-b-2 focus:border-[#37353E]"
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Email"
        />
        <p className="text-red-400 my-1">{errors.email?.message}</p>
        <input
          className="text-4xl p-3 block mt-15 w-1/2 text-[#37353E] border-b-2 border-[#e6e5e5] font-semibold outline-none focus:border-b-2 focus:border-[#37353E]"
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
        />
        <p className="text-red-400 my-1">{errors.password?.message}</p>

        <div className="flex mt-18 gap-8 items-center">
          <button
            className="text-2xl py-3 px-5 font-semibold border-[#adadad] border-2 rounded-xl text-[#37353E] hover:border-[#37353E] active:scale-95"
            type="submit"
          >
            Login
          </button>

          <div className="flex gap-1">
          
            <h1 className="text-xl">Don't have an account?</h1>
            <Link to="/register" className="text-md mt-1 underline text-cyan-600">
              <h1>Register</h1>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
