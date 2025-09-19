import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setEmail(null);
    setPassword(null);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex min-w-sm items-center justify-center rounded-2xl border-2 border-emerald-600 py-14">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-md rounded-full border border-emerald-600 py-2 pr-10 pl-4 text-white outline-none"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-md rounded-full border border-emerald-600 py-2 pr-10 pl-4 text-white outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-emerald-600 py-2 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
