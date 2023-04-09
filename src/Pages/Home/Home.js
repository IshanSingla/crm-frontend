import React from "react";
import Footer from "../../Components/Footer";
import {Navbar2} from "../../Components/Navbar";
import {
  Goal,
  Hero,
  Video,
  Services,
  Works,
  ProductDev,
  Testimonials,
} from "./Sections";

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
