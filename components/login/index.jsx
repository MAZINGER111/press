import { useRouter } from "next/router";
import { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginHandler = (e) => {
    e.preventDefault();

    const payload = { username, password };
    // !todo send data

    router.push("/dashboard/reports");
  };
  return (
    <div style={{ height: "80vh" }} className="flex flex-col justify-center">
      <form
        className="w-full max-w-md mx-auto p-4 md:p-6 rounded-xl shadow-2xl"
        onSubmit={loginHandler}
      >
        <h3 className="text-2xl  lg:text-3xl text-yellow ">Login</h3>
        <p className="text-gray-400 my-2">
          Provide valid admin credentials to continue
        </p>
        <div className="mt-6">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="border border-gray-300 focus:bg-gray-100 bg-transparent rounded-xl"
            required
          />
        </div>

        <div className="mt-4 mb-6">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="border border-gray-300 focus:bg-gray-100 bg-transparent rounded-xl"
            required
          />
        </div>

        <button className="bg-yellow px-4 py-3  text-[#3E3E3E] rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
};
