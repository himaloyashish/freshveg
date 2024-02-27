import { Inter } from "next/font/google";
import "./globals.css"
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home page",
  description: "This is Home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
