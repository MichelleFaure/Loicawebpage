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
    text: string;
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
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit tincidunt enim et hendrerit. In ut est lacus. Mauris dapibus metus sem, et tempor orci hendrerit non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
      />
      <section className="p-10">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service}  />
      ))}
      </section>

    </section>
  );
}

export default ServiciosPage;
