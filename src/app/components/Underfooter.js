import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function UnderFooter() {
  return (
    <div className="bg-white flex flex-col md:flex-row gap-10 justify-center items-center px-20 py-1">
      <div className="flex flex-row py-2 gap-2">
        <p className="text-sm">All rights reverved.</p>
        <p className="text-sm">Lodz 2024</p>
      </div>
      <div className="flex flex-row gap-5">
      </div>
    </div>
  );
}
