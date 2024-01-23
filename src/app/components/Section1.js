import React from "react";

export default function Section1() {
    return (
      <div className="bg-white px-5 py-20 md:px-80 md:mx-40">
        <p className="text-center my-10 text-3xl">Zajmuje sie</p>
        <div className="grid md:grid-cols-2 grid-rows-2 gap-4 mx-auto">
          <div className="blob text-background flex flex-col text-center">
            <p>Afazja</p>
          </div>
          <div className="blob2 text-background flex flex-col text-center">
            <p>Pomoc 1</p>
          </div>
          <div className="blob2 text-background flex flex-col text-center">
            <p>Pomoc 1</p>
          </div>
          <div className="blob text-background flex flex-col text-center">
            <p>Pomoc 1</p>
          </div>
        </div>
      </div>
    );
  }
  
