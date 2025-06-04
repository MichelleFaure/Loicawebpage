"use client";
import AgendaCards from "@/components/AgendaCards";
import aboutUs from "@/data/aboutUs.json";
import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";
import Help from "@/components/Help";

function AgendaPage() {
  const lauraServices = aboutUs[0].services;
  const danielaServices = aboutUs[1].services;

  return (
    <div>
      <h3
        className={`text-grey-font text-3xl font-light md:text-4xl text-center mt-10 md:mt-24 ${poppins.className}`}
      >
        AGENDA LOICA
      </h3>
      <div className=" max-w-screen-lg mx-auto flex flex-wrap ">
        <div className=" mx-auto max-w-[360px] ">
          <div className="flex items-center gap-4  mx-auto mt-16 mb-4">
            <Image
              src="/profiles/profilephoto.png"
              alt=""
              width={100}
              height={100}
              className="rounded-full w-[80px] h-[80px] object-cover"
            />
            <h2 className="text-xl ">Psicóloga Laura Valdés Cruzatt</h2>
          </div>

          <AgendaCards services={lauraServices} />
          <div className=" absolute top-[50px] -left-[250px] opacity-10 -z-10">
            <Image
              src="/layout/bg-img-2.png"
              alt=""
              width={600}
              height={630}
              quality={100}
            />
          </div>
        </div>
        <div className="mx-auto max-w-[350px]">
          <div className="flex items-center gap-4  mx-auto mt-16 mb-4">
            <Image
              src="/profiles/profilephoto2.png"
              alt=""
              width={100}
              height={100}
              className="rounded-full w-[80px] h-[80px] object-cover"
            />
            <h2 className="text-xl">Psicóloga Daniela Bustos Páez</h2>
          </div>
          <AgendaCards services={danielaServices} />
          <div className="absolute top-[600px] md:top-[800px] right-0 bottom-0 opacity-10 -z-10  ]">
            <Image
              src="/layout/bg-img.png"
              alt=""
              width={340}
              height={500}
              quality={100}
            />
          </div>
        </div>
      </div>
      <Help></Help>
    </div>
  );
}

export default AgendaPage;
