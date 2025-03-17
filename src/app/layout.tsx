import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/globals.scss";
import React from 'react';

export const metadata: Metadata = {
  title: "TestWork71",
  description: "Without description",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body>
    { children }
    </body>
    </html>
  );
}
