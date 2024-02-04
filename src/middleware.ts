export { default } from "next-auth/middleware";

//https://next-auth.js.org/configuration/nextjs#basic-usage
// matcher: 로그인이 된 사람만 접근할 수 있는 경로를 지정할 수 있음
// next auth secret을 env에 명시해야함
export const config = { matcher: ["/admin/:path*", "/user"] };
