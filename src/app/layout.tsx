import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Z",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body>
        {/* <div className="flex h-full flex-col">
          <div className="flex-1"> */}
        {children}
        {/* </div>
        </div> */}
      </body>
    </html>
  );
}
