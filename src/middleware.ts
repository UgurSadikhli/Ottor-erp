import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./app/utils/auth";
import { log } from "console";

export function middleware(req: NextRequest) {
  console.log("Middleware executed");

  const token = req.cookies.get("auth-token");
  const twoFA = req.cookies.get("2fa");
  const userData = req.cookies.get("user-data");

  // console.log(userData);
  
  if (req.nextUrl.pathname.startsWith("/auth")) {
    if (!token?.value) {
      const url = req.nextUrl.clone();
      url.pathname = "/auth/sign-in";
      return NextResponse.redirect(url);
    } else if(twoFA?.value==='false'){
      const url = req.nextUrl.clone();
      url.pathname = "/auth/two-factor-auth";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/staff/:path*",
    "/auth/:path*",
    "/",
    "/payment-voucher/:path*",
    "/payroll/:path*",
    "/memo/:path*",
    "/circulars/:path*",
    "/maintenance/:path*",
    "/logistics/:path*",
    "/office-budget/:path*",
    "/stocksAndInventory/:path*",
    "/notifications/:path*",
    "/capacityBuilding/:path*",
    "/procurements/:path*",
  ],
};
