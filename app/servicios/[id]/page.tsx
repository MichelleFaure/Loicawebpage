import serviceData from "@/data/services.json"
import { TbFlower } from "react-icons/tb";
import { HiCurrencyDollar } from "react-icons/hi";
import { IoTimeOutline, IoPeopleCircleOutline } from "react-icons/io5";
import { FaChalkboardUser } from "react-icons/fa6";
import Link from "next/link";
import BannerService from "@/components/BannerService";
import Themes from "@/components/Themes";
import ServiceDetails from "@/components/ServiceDetails";

const iconMap: Record<string, JSX.Element> = {
  TbFlower: <TbFlower />,
  HiCurrencyDollar: <HiCurrencyDollar />,
  IoTimeOutline: <IoTimeOutline />,
  IoPeopleCircleOutline: <IoPeopleCircleOutline />,
  FaChalkboardUser: <FaChalkboardUser />,
};

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


function page({ params }: { params: { id: string } }) {
  
  const service: Service | undefined = serviceData.find(
    (item) => item.id === params.id
  );

  if (!service) {
    return (
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold">Servicio no encontrado</h1>
        <p className="mt-4 text-gray-600">
          El servicio con el ID especificado no existe.
        </p>
        <Link href="/servicios" className="text-blue-500 hover:underline mt-6">
          Volver a servicios
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <BannerService
        title={service.title}
        description={service.description}
        imgSrc={service.imgSrc}
      ></BannerService>
      <Themes themes={service.themes}></Themes>
      <ServiceDetails
        modalidad={service.modalidad}
        price={service.price}
        time={service.time}
        capacity={service.capacity}
        classType={service.classType}
        iconMap={iconMap}
      ></ServiceDetails>
    </>
  );
}
export default page;
