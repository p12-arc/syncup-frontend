import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export const metadata: Metadata = {
  title: "SyncUp - Connect, Collaborate, Grow",
  description: "SyncUp is a professional networking platform for hiring and collaboration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-surface antialiased">
        <div className="flex min-h-screen">
          {/* left sidebar navigation */}
          <Sidebar />

          {/* main content area offset by sidebar width */}
          <div className="ml-[60px] flex-1 flex flex-col">
            <Topbar />
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}