import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("access_token");
  const path = request.nextUrl.pathname;

  if (!token && path !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (token && path === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}

export const config = {
  // matcher: ["/dashboard/:path*", "/login/:path*"],
};
