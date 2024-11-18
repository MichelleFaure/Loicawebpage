import AgendaCards from "@/components/AgendaCards";
import BannerCoral from "@/components/BannerCoral";
import  aboutUs  from "@/data/aboutUs.json";
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
      <div>
        <div className="flex items-center gap-4 max-w-screen-lg mx-auto mt-16 px-8">
          <Image
            src="/profiles/profilephoto.png"
            alt=""
            width={100}
            height={100}
            className="rounded-full w-24 h-24 object-cover"
          />
          <h2 className="text-3xl">Psicóloga Laura Valdés Cruzatt</h2>
        </div>

        <AgendaCards services={lauraServices} />
      </div>
      <div>
        <div className="flex items-center gap-4 max-w-screen-lg mx-auto mt-16 px-8">
          <Image
            src="/profiles/profilephoto2.png"
            alt=""
            width={100}
            height={100}
            className="rounded-full w-24 h-24 object-cover"
          />
          <h2 className="text-3xl">Psicóloga Daniela Bustos Páez</h2>
        </div>
        <AgendaCards services={danielaServices} />
      </div>
    </>
  );
}

export default AgendaPage;
