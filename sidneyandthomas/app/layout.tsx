import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import LoginGate from "./login-gate";

const customFont = localFont({
  src: "./fonts/somethingelse-webfont.woff2",
  variable: "--font-custom",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sidney and Thomas | El Nido, Palawan",
  description: "Sidney and Thomas are getting married in El Nido, Palawan on December 3rd and 4th, 2027.",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${customFont.variable} h-full antialiased`}>
      <body
        className="flex h-dvh flex-col overflow-hidden bg-cover bg-center text-[#171713]"
        style={{ backgroundImage: `url("${basePath}/background.png")` }}
      >
        <LoginGate>{children}</LoginGate>
      </body>
    </html>
  );
}
