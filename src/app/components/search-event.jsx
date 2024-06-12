import * as React from "react";

export default function SeacrhEvent() {
  return (
    //<div className="flex flex-col justify-center my-auto text-neutral-400">
    <div className="flex gap-5 justify-between mt-16 w-full max-w-[1141px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-0">
      <input type="text" placeholder="Cari Event" />
        <div className="flex justify-center items-center px-4 py-2 rounded-none border border-solid bg-slate-500 border-zinc-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b76936bef362a9553490ba7b9f89d001dfd7810ea7c04294204e3046c0e84e7b?apiKey=9e843663077c4c7ab823446f13fb11a2&"
            className="aspect-[0.92] fill-neutral-100 w-[11px]"
          />
        </div>
      </div>
      <div className="flex gap-3 text-sm whitespace-nowrap text-neutral-900">
        <div className="flex gap-0.5 justify-center p-2 rounded border border-solid bg-zinc-50 border-neutral-900">
          <div className="flex-1">Lokasi</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fad6ceaa36d78f4033e41bb667c89a044a89e268dde5dfefd5b6cff935ad780?apiKey=9e843663077c4c7ab823446f13fb11a2&"
            className="shrink-0 self-start w-4 aspect-square"
          />
        </div>
        <div className="flex gap-0.5 justify-center p-2 rounded border border-solid bg-zinc-50 border-neutral-900">
          <div className="flex-1">Waktu</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fad6ceaa36d78f4033e41bb667c89a044a89e268dde5dfefd5b6cff935ad780?apiKey=9e843663077c4c7ab823446f13fb11a2&"
            className="shrink-0 self-start w-4 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}
