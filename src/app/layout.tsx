import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar, NavLink } from "./components/navigation/NavBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar>
          <NavLink href="/admin">Dashboard</NavLink>
          <NavLink href="/admin/products">Products</NavLink>
          <NavLink href="/admin/customers">Customers</NavLink>
          <NavLink href="/admin/sales">Sales</NavLink>
        </NavBar>
        {children}
        </body>
    </html>
  );
}
