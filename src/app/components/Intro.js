import React from "react";
import Button from "./Button";

export default function Intro() {
  return (
    <div className="bg-background text-white flex flex-col items-center py-20 gap-10">

      <div className="px-5 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-5 justify-center items-center">
        
        <div className="flex items-center">
          <div
            className="bg-cover bg-center rounded-full"
            style={{
              backgroundImage: "url(/images/bogna.jpg)",
              width: "250px",
              height: "250px",
              margin: "20px",
              animation: "animate 5s ease-in-out infinite",
              transition: "all 1s ease-in-out",
            }}
          />
        </div>
        <div className="p-5 w-80 md:w-96 lg:w-600">
          <h1 className="text-2xl">Hej!</h1>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
            accumsan tortor. Aliquam volutpat, mauris in fermentum efficitur,
            libero neque semper eros, sit amet vulputate metus sapien et velit.
            Phasellus et ipsum nec velit gravida varius. Morbi luctus lobortis
            molestie. Mauris egestas a justo ut condimentum.
          </p>
        </div>
      </div>

      <div>
      <Button buttonText="Umow wizyte" imageSrc="/images/arrow.png" link="/pages/kontakt" />
      </div>

    </div>
  );
}
