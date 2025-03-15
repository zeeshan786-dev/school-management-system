import { NextResponse } from "next/server";

export  function middleware(request) {
    // if (request.nextUrl.pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", request.url));
    // }
    // return NextResponse.next();
}
export const config={
    //kisi ek route pr ristriction lgani ho tb ise use krte hain 
    matcher:"/about/:path*"
}