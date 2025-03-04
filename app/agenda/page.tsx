"use client";
import AgendaCards from "@/components/AgendaCards";
import BannerCoral from "@/components/BannerCoral";
import aboutUs from "@/data/aboutUs.json";
import Image from "next/image";

function AgendaPage() {
  const lauraServices = aboutUs[0].services;
  const danielaServices = aboutUs[1].services;

  return (
    <>
      <BannerCoral
        title="AGENDA"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit tincidunt enim et hendrerit. In ut est lacus. Mauris dapibus metus sem, et tempor orci hendrerit non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="flex items-center gap-4  mx-auto mt-16 mb-4">
          <Image
            src="/profiles/profilephoto.png"
            alt=""
            width={100}
            height={100}
            className="rounded-full w-[80px] h-[80px] object-cover ms-4 md:ms-0"
          />
          <h2 className="text-xl ">Psicóloga Laura Valdés Cruzatt</h2>
        </div>

        <AgendaCards services={lauraServices} />
        <div className="hidden md:inline absolute top-[500px] -left-[250px] opacity-30 -z-10">
          <Image
            src="/layout/bg-img-2.png"
            alt=""
            width={600}
            height={630}
            quality={100}
          />
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto mb-14">
        <div className="flex items-center gap-4  mx-auto mt-16 mb-4">
          <Image
            src="/profiles/profilephoto2.png"
            alt=""
            width={100}
            height={100}
            className="rounded-full w-[80px] h-[80px] object-cover ms-4 md:ms-0"
          />
          <h2 className="text-xl">Psicóloga Daniela Bustos Páez</h2>
        </div>
        <AgendaCards services={danielaServices} />
        <div className="hidden md:inline absolute top-[900px] right-0 bottom-0 opacity-30 -z-10  ]">
          <Image
            src="/layout/bg-img.png"
            alt=""
            width={340}
            height={500}
            quality={100}
          />
        </div>
      </div>
    </>
  );
}

export default AgendaPage;
