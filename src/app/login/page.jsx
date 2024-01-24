"use client";

import { authenticate } from "@/app/lib/actions";

const Login = () => {
  return (
    <form action={authenticate}>
      <input type="texy" name="email" placeholder="username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
