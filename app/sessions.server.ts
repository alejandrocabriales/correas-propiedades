import { createCookieSessionStorage } from "@remix-run/node";
// import { createThemeSessionResolver } from "remix-themes";

const isProduction = process.env.NODE_ENV === "production";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["s3cr3t"], // Replace with your own secret
    ...(isProduction ? { domain: "your-domain.com", secure: true } : {}), // Replace with your domain
  },
});

// export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
