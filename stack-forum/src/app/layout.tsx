import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chub",
  description: "Chub – a minimal Q&A forum inspired by StackOverflow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-zinc-900" />
                <span className="text-sm font-semibold tracking-tight">Chub</span>
              </div>
              <nav className="flex items-center gap-4 text-xs text-zinc-600">
                <Link
                  href="/ask"
                  className="rounded-full border border-zinc-200 px-3 py-1 hover:bg-zinc-100"
                >
                  Ask Question
                </Link>
                <Link
                  href="/auth/signin"
                  className="text-zinc-700 hover:text-zinc-900"
                >
                  Sign in
                </Link>
              </nav>
            </div>
          </header>
          <main className="mx-auto flex w-full max-w-6xl flex-1 px-4 py-6 sm:px-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
