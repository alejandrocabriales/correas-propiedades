import clsx from "clsx";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";


import { themeSessionResolver } from "./sessions.server";

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

const isDevelopment = process.env.NODE_ENV === "development";

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
    ENV: {
      NODE_ENV: process.env.NODE_ENV,
      isDevelopment,
    },
  };
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  return (
    // <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <AppContent env={data.ENV} />
    // </ThemeProvider>
  );
}

function AppContent({
  env,
}: {
  env: { NODE_ENV: string; isDevelopment: boolean };
}) {
  // const [theme] = useTheme();
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
        {env.isDevelopment ? <LiveReload /> : null}
      </body>
    </html>
  );
}
