import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Layout from "@/components/layouts/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div>
      <h1> Welcome to Splash App </h1>
    </div>
  );
};

export default Home;
