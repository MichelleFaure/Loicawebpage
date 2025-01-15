import BannerCoral from "@/components/BannerCoral";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/services.json";

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
    <section>
      <BannerCoral
        title="SERVICIOS"
        text="Confía en nuestra experiencia para cuidarte, en nuestro centro encontrarás la guía y el apoyo que necesitas. Contamos con una amplia gama de servicios para atender tus necesidades individuales, de pareja o grupales. Te ofrecemos un acompañamiento profesional, cercano y personalizado para responder a tus necesidades únicas."
      />
      <section className="p-10">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
    </section>
  );
}

export default ServiciosPage;
