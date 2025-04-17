// import clsx from "clsx";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type {
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";


// import { themeSessionResolver } from "./sessions.server";

import "tailwind.css";
import { Header } from "./components/layouts/Header";
import Footer from "./components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Correa Properties - Modern Living for Everyone" },
    {
      name: "description",
      content:
        "Find your dream property in Madrid and Barcelona with Correa Properties.",
    },
  ];
};

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico" },
];

export default function App() {
  return (
    
      <AppContent  />
    
  );
}

function AppContent() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {/* <PreventFlashOnWrongTheme ssrTheme={true} /> */}
        <Links />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
