import BannerCoral from "@/components/BannerCoral";
import CardService from "@/components/CardService";
import servicesData from "@/data/services.json";
import Image from "next/image";

type Service = {
  id: string;
  imgSrc: string;
  title: string;
  modalidad: {
    icon: string;
    text: string;
  };
  price: {
    icon: string;
    text: string[];
  };
  time: {
    icon: string;
    text: string;
  };
  themes: string[];
  description: string;
  classType?: {
    icon: string;
    text: string;
  };
  capacity?: {
    icon: string;
    text: string;
  };
};

function ServiciosPage() {
  const services: Service[] = servicesData;

  return (
    <section className="relative">
      <BannerCoral
        title="SERVICIOS"
        text="En Loica creemos en una psicoterapia cercana, cuidadosa y profundamente humana. Ofrecemos un acompañamiento profesional que respeta tus tiempos, tu historia y tus necesidades. Trabajamos desde una mirada inclusiva, con compromiso ético y con la certeza de que el proceso terapéutico puede ser un camino hacia una vida más libre y consciente."
      />
      <section className="flex flex-wrap justify-center gap-10 py-24 max-w-screen-lg mx-auto">
        {services.map((service) => (
          <CardService key={service.id} service={service}></CardService>
        ))}
      </section>
      <div className="hidden md:inline absolute top-[1100px] right-0 bottom-0 opacity-30 -z-10  ]">
        <Image
          src="/layout/bg-img.png"
          alt=""
          width={340}
          height={500}
          quality={100}
        />
      </div>
      <div className="hidden md:inline absolute top-[500px] -left-[250px] opacity-30 -z-10">
        <Image
          src="/layout/bg-img-2.png"
          alt=""
          width={600}
          height={630}
          quality={100}
        />
      </div>
    </section>
  );
}

export default ServiciosPage;
