import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function UnderFooter() {
  return (
    <div className="bg-white text-black flex flex-col md:flex-row justify-center items-center px-20 py-4">
      <div className="flex flex-col gap-2 text-center">
        <p className="text-sm">Copyright 2024</p>
        <p className="text-sm">All rights reserved. <em>Maja Zimnoch</em> </p> 
      </div>
      <div className="flex flex-row gap-5">
      </div>
    </div>
  );
}
