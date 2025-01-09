import { NextResponse, NextRequest } from "next/server";
import { getUser } from "./actions/auth-actions";

// Define the different types of routes
const globalRoutes = ["/"];
const publicRoutes = ["/login", "/signup"];
const privateRoutes = ["/dashboard", "/models", "/profile", "/feedback"];

export default async function middleware(req: NextRequest) {
  const user = await getUser(); // Get user session

  const isGlobalRoute = globalRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );

  const isPublicRoute = publicRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );

  const isPrivateRoute = privateRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );

  if (isPublicRoute && user) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (isPrivateRoute && !user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isGlobalRoute) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
