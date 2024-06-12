import * as React from "react";

export function ProfileArtis() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-neutral-100 max-md:px-5">
      <div className="flex flex-col mt-11 w-full max-w-[1140px] max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af1257eb00e7291b43c7a33ad196983e5c3fc6b761357af5a9a5e6a1de655de?apiKey=9e843663077c4c7ab823446f13fb11a2&"
          className="ml-3 border-solid aspect-[1.27] border-[3px] border-blue-950 stroke-[3px] stroke-blue-950 w-[19px] max-md:ml-2.5"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8b4d071287ac47bfe1762bcbfb4d95df625006d29265444f7eda4151df67c71c?apiKey=9e843663077c4c7ab823446f13fb11a2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b4d071287ac47bfe1762bcbfb4d95df625006d29265444f7eda4151df67c71c?apiKey=9e843663077c4c7ab823446f13fb11a2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b4d071287ac47bfe1762bcbfb4d95df625006d29265444f7eda4151df67c71c?apiKey=9e843663077c4c7ab823446f13fb11a2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b4d071287ac47bfe1762bcbfb4d95df625006d29265444f7eda4151df67c71c?apiKey=9e843663077c4c7ab823446f13fb11a2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b4d071287ac47bfe1762bcbfb4d95df625006d29265444f7eda4151df67c71c?apiKey=9e843663077c4c7ab823446f13fb11a2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b4d071287ac47bfe1762bcbfb4d95df625006d29265444f7eda4151df67c71c?apiKey=9e843663077c4c7ab823446f13fb11a2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b4d071287ac47bfe1762bcbfb4d95df625006d29265444f7eda4151df67c71c?apiKey=9e843663077c4c7ab823446f13fb11a2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b4d071287ac47bfe1762bcbfb4d95df625006d29265444f7eda4151df67c71c?apiKey=9e843663077c4c7ab823446f13fb11a2&"
          className="mt-11 w-full aspect-[3.7] max-md:mt-10 max-md:max-w-full"
        />
        <div className="flex gap-3 justify-between mt-3 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="text-5xl font-bold text-center text-neutral-900">
            Kunto Aji
          </div>
          <div className="flex gap-3 my-auto">
            <div className="flex justify-center items-center p-3 rounded-lg border border-solid shadow-sm bg-zinc-50 border-neutral-400 h-[42px] w-[42px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d141915cf50d7d69222d8f8618d0683f35a97d04bc58d7de48569ed1a7acf455?apiKey=9e843663077c4c7ab823446f13fb11a2&"
                className="aspect-square w-[18px]"
              />
            </div>
            <div className="flex justify-center items-center p-3 rounded-lg border border-solid shadow-sm bg-zinc-50 border-neutral-400 h-[42px] w-[42px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b98f5ba6657c5da92316c81061027284bf2f114789b09a67b8214fbc92ef76aa?apiKey=9e843663077c4c7ab823446f13fb11a2&"
                className="aspect-square w-[18px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-3 text-2xl text-neutral-700 max-md:max-w-full">
          Singer-songwriter since 2013
        </div>
      </div>
    </div>
  );
}

