"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });
import HeaderNav from "@/components/Global/HeaderNav.jsx";
import { useUserStore } from "@/stores/store";
import { fetchAndSetUserStore } from "@/lib/fetchAndSetUserStore";
import { useEffect } from "react";


export default function RootLayout({ children }) {
  const { user, update } = useUserStore();
  useEffect(() => {
    if (!user) {
      fetchAndSetUserStore(update);
    }
  }, [user]);
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNav />
        {children}</body>
      <Toaster />
    </html>
  );
}
