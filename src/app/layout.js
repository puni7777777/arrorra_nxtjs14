import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./components/sessionwrapper";
import Navbar from './components/navbar'
import Footer from './components/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ARRORRA",
  description: "E-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </SessionWrapper>
    </html>
  );
}
