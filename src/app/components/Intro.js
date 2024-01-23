import React from "react";
import Button from "./Button";

export default function Intro() {
  return (
    <div className="bg-background text-white flex flex-col items-center py-20 gap-10">
      <div className="px-5 md:px-80 flex flex-col md:flex-row gap-5 justify-center items-center">
        <div className="flex items-center">
          <div
            className="bg-cover bg-center rounded-full"
            style={{
              backgroundImage: "url(/images/woman.jpg)",
              width: "250px",
              height: "250px",
              margin: "20px",
              animation: "animate 5s ease-in-out infinite",
              transition: "all 1s ease-in-out",
            }}
          />
        </div>
        <div className="w-full px-2 md:px-10">
          <h1 className="text-2xl">Hej!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
            accumsan tortor. Aliquam volutpat, mauris in fermentum efficitur,
            libero neque semper eros, sit amet vulputate metus sapien et velit.
            Phasellus et ipsum nec velit gravida varius. Morbi luctus lobortis
            molestie. Mauris egestas a justo ut condimentum.
          </p>
        </div>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}
