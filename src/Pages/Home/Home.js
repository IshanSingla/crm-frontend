import React from "react";
import Footer from "../../Components/Footer";
import Navbar2 from "../../Components/Navbar2";
import Goal from "./Sections/Goal";
import Hero from "./Sections/Hero";
import Video from "./Sections/Video";
import Services from "./Sections/Services";
import Works from "./Sections/Works";
import ProductDev from "./Sections/ProductDev";
import Testimonials from "./Sections/Testimonials";

export default function Home() {
  return (
    <main className="bg-mainBlue overflow-x-hidden">
      <Navbar2 />

      <div className="md:px-16 px-10 mb-20 flex flex-col space-y-20 bg-transparent text-white font-pop">
        <Hero />
        <Goal />
        <Video />
        <Services />
        <Works />
        <ProductDev />
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
