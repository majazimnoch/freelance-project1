"use client";

import React, { useState } from "react";
import ReactFlipCard from "reactjs-flip-card";

export default function Section1() {
  return (
    <div className="flex flex-row justify-center p-60 gap-60">
      <ReactFlipCard
        frontComponent={
          <div className="bg-secondary flex flex-col justify-center items-center p-10 h-64 w-52">
            Afazja
          </div>
        }
        backComponent={
          <div className="bg-primary flex flex-col justify-center items-center p-10 h-64 w-52">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            tempore nulla in eum nisi laboriosam reiciendis porro
            accusamus,debitis blanditiis dolorum vero, ab ducimus maiores
            quisquam expedita voluptate!
          </div>
        }
      />

      <ReactFlipCard
        frontComponent={
          <div className="bg-secondary flex flex-col justify-center items-center p-10 h-64 w-52">
            Afazja
          </div>
        }
        backComponent={
          <div className="bg-primary flex flex-col justify-center items-center p-10 h-64 w-52">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            tempore nulla in eum nisi laboriosam reiciendis porro
            accusamus,debitis blanditiis dolorum vero, ab ducimus maiores
            quisquam expedita voluptate!
          </div>
        }
      />
    </div>
  );
}

// 'background': '#2c3fa8',
// 'primary': '#ffc638',
// 'secondary': '#f57cc3',
// 'bottom': '#f0848e',
// 'white':'#ffffff',
// 'black':'#000000'

// <div className="flex justify-center items-center">
//   <div className="flex justify-center items-center flex-wrap p-10">
//     <div className="bg-primary flex flex-col justify-start items-center relative w-80 h-96 m-3 p-6 rounded-3xl">
//       <Image
//         src="/images/icon.png"
//         alt="logo"
//         width={60}
//         height={60}
//         className="icon-section"
//       />
//       <div className="absolute w-full p-4 py-20 text-center">
//         <h2 className="text-background py-2.5 px-7.5 text-base my-2.5">Card one</h2>
//         <p className="text-background leading-normal">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
//           tempore nulla in eum nisi laboriosam reiciendis porro accusamus,
//           debitis blanditiis dolorum vero, ab ducimus maiores quisquam
//           expedita voluptate! Magni, vitae!
//         </p>
//       </div>
//     </div>
//     <div className="bg-primary flex flex-col justify-start items-center relative w-80 h-96 m-3 p-6 rounded-3xl">
//       <Image
//         src="/images/icon.png"
//         alt="logo"
//         width={60}
//         height={60}
//         className="icon-section"
//       />
//       <div className="absolute w-full p-4 py-20 text-center">
//         <h2 className="text-background py-2.5 px-7.5 text-base my-2.5">Card one</h2>
//         <p className="text-background leading-normal">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
//           tempore nulla in eum nisi laboriosam reiciendis porro accusamus,
//           debitis blanditiis dolorum vero, ab ducimus maiores quisquam
//           expedita voluptate! Magni, vitae!
//         </p>
//       </div>
//     </div>
//     <div className="bg-primary flex flex-col justify-start items-center relative w-80 h-96 m-3 p-6 rounded-3xl">
//       <Image
//         src="/images/icon.png"
//         alt="logo"
//         width={60}
//         height={60}
//         className="icon-section"
//       />
//       <div className="absolute w-full p-4 py-20 text-center">
//         <h2 className="text-background py-2.5 px-7.5 text-base my-2.5">Card one</h2>
//         <p className="text-background leading-normal">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
//           tempore nulla in eum nisi laboriosam reiciendis porro accusamus,
//           debitis blanditiis dolorum vero, ab ducimus maiores quisquam
//           expedita voluptate! Magni, vitae!
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
