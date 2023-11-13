/* eslint-disable consistent-return */
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const { pathname } = req.nextUrl;
  const newUrl = req.nextUrl.clone();
  const token = req.cookies.get("token");

  if (pathname === "/signin") {
    if (token?.name && token?.value) {
      newUrl.pathname = "/";
      return NextResponse.rewrite(newUrl);
    }
  }
}
