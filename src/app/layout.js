import { Inter } from "next/font/google";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metaData = {
  title: "Home page",
  description: "This is Home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
