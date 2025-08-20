import Image from "next/image";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Footer></Footer>
    </>
  );
}
