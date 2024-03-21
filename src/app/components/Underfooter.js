import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function UnderFooter() {
  return (
    <div className="bg-background flex flex-col md:flex-row gap-10 justify-center items-center px-20 py-1">
      <div className="flex flex-col py-4 gap-2 text-center">
        <p className="text-sm text-white">Copyright 2024</p>
        <p className="text-sm text-white">All rights reserved. <em>Maja Zimnoch</em> </p> 
      </div>
      <div className="flex flex-row gap-5">
      </div>
    </div>
  );
}
