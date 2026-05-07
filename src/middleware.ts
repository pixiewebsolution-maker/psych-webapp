import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = (req.auth?.user as any)?.role;

  const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard");
  const isAdminRoute = nextUrl.pathname.startsWith("/dashboard/admin");
  const isDoctorRoute = nextUrl.pathname.startsWith("/dashboard/doctor");
  const isPatientRoute = nextUrl.pathname.startsWith("/dashboard/patient");
  const isAuthRoute = nextUrl.pathname === "/login" || nextUrl.pathname === "/register";

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL(`/dashboard/${userRole}`, nextUrl));
  }

  if (isDashboardRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  // Role based protection
  if (isAdminRoute && userRole !== "admin") {
    return NextResponse.redirect(new URL(`/dashboard/${userRole}`, nextUrl));
  }
  if (isDoctorRoute && userRole !== "doctor") {
    return NextResponse.redirect(new URL(`/dashboard/${userRole}`, nextUrl));
  }
  if (isPatientRoute && userRole !== "patient") {
    return NextResponse.redirect(new URL(`/dashboard/${userRole}`, nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
