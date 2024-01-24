"use server";

// import { signIn } from "@/auth";
import axios from "axios";
import { cookies } from "next/headers";

export async function authenticate(formData) {
  const bodyPayload = {
    username: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const res = await axios.post("https://api.mudoapi.tech/login", bodyPayload);
    console.log(res.data.data);
    const token = await res.data.data.token;
    cookies().set("access_token", token);
  } catch (error) {
    return error.message;
  }
}
