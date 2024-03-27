import Footer from "@/app/components/Footer";
import Kontakt from "@/app/components/Kontakt";
import Navbar from "@/app/components/Navbar";
import UnderFooter from "@/app/components/Underfooter";
import React from "react";

export default function page() {
  return (
    <div className="bg-background h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <Kontakt />
      </div>
      <Footer />
      <UnderFooter />
    </div>
  );
}
