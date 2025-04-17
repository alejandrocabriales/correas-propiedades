import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { useMatches } from "@remix-run/react";
import { useMemo } from "react";
import { type Theme } from "./theme";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DEFAULT_THEME: Theme = "light";

function parseTheme(cookieHeader: string | null): Theme {
  if (!cookieHeader) {
    return DEFAULT_THEME;
  }
  const themeCookie = cookieHeader
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith("theme="));

  if (!themeCookie) {
    return DEFAULT_THEME;
  }

  const themeValue = themeCookie.split("=")[1];
  return themeValue === "dark" ? "dark" : "light";
}

export function useTheme(): Theme | undefined {
  const matches = useMatches();
  const actionData = matches.find((match) => match.id === "root")?.data as
    | {
        theme?: Theme;
      }
    | undefined;

  const cookieHeader = document.cookie;

  const theme = useMemo(
    () => actionData?.theme ?? parseTheme(cookieHeader),
    [actionData?.theme, cookieHeader]
  );
  return theme;
}

type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassDictionary
  | ClassArray;

interface ClassDictionary {
  [id: string]: any;
}

interface ClassArray extends Array<ClassValue> {}
