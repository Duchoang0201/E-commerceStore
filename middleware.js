/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
// import { NextResponse } from "next/server";

// import authCheck from "./middleware/authCheck";

// import authExp from "./middleware/authExp";

// async function authExp(req) {
//   const respon = NextResponse.next();
//   const token = req.cookies.get("token")?.value || "";
//   const refreshToken = req.cookies.get("refreshToken")?.value || "";
//   try {
//     if (token && refreshToken) {
//       const response = await fetch(
//         `https://api.escuelajs.co/api/v1/auth/profile`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );

//       if (response.ok) {
//         const data = await response.json();
//         respon.cookies.set("user", JSON.stringify(data));
//         return respon;
//       }
//       if (response.message === "Unauthorized") {
//         const newResponse = await fetch(
//           "https://api.escuelajs.co/api/v1/auth/refresh-token",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json", // Assuming the content type is JSON
//             },
//             body: JSON.stringify({ refreshToken }),
//           },
//         );
//         const { access_token: newToken, refresh_token: newRefreshToken } =
//           await newResponse.json();
//         respon.cookies.set("token", JSON.stringify(newToken));
//         respon.cookies.set("refreshToken", JSON.stringify(newRefreshToken));

//         return respon;
//       }
//     }
//   } catch (error) {
//     console.log(`🚀🚀🚀!..error`, error);
//   }
// }

// export default async function handler(req) {
//   const middleware = combinedMiddleware();
//   await middleware(req);
// }
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const { pathname } = req.nextUrl;
  const respon = NextResponse.next();
  const token = req.cookies.get("token")?.value || "";
  const refreshToken = req.cookies.get("refreshToken")?.value || "";

  const currentTime = new Date();

  const expirationTime = new Date(
    currentTime.getTime() + 3 * 24 * 60 * 60 * 1000,
  );

  if (pathname === "/signin" || pathname === "/signup") {
    if (token) {
      return NextResponse.rewrite(new URL("/", req.url));
    }
  } else {
    try {
      if (token) {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/auth/profile`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (response.ok) {
          const data = await response.json();
          respon.cookies.set("user", JSON.stringify(data), {
            expires: expirationTime,
          });
          return respon;
        }
        if (response.message === "Unauthorized") {
          const newResponse = await fetch(
            "https://api.escuelajs.co/api/v1/auth/refresh-token",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json", // Assuming the content type is JSON
              },
              body: JSON.stringify({ refreshToken }),
            },
          );
          const { access_token: newToken, refresh_token: newRefreshToken } =
            await newResponse.json();
          respon.cookies.set("token", JSON.stringify(newToken));
          respon.cookies.set("refreshToken", JSON.stringify(newRefreshToken));
          // ADD FUNCTION SET USER BACK?
          return respon;
        }
      }
    } catch (error) {
      return respon;
    }
  }
}
// export const config = {
//   matcher: ["/signin/:path*", "/signup/:path*"],
// };

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/",
  ],
};
