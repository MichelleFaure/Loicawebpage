import { TbFlower } from "react-icons/tb";
import { HiCurrencyDollar } from "react-icons/hi";
import { IoTimeOutline, IoPeopleCircleOutline } from "react-icons/io5";
import { FaChalkboardUser } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { poppins } from "@/app/fonts/fonts";

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
type ServiceCardProps = {
  service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="relative  max-w-screen-lg mx-auto md:pr-8 my-16  flex flex-col md:flex-row justify-between items-center flex-wrap border border-lavender rounded-md text-center md:text-start">
      <Image
        src={service.imgSrc}
        alt="imagen del servicio ofrecido por centro de psicologia loica"
        width={120}
        height={120}
        quality={100}
        className="absolute -top-10 md:top-auto md:-left-10 h-[120px] w-[120px] object-cover rounded-md"
      />
      <div className="w-[50px] h-[100px] md:h-[150px]"></div>
      <div className="text-3xl w-56 mb-4 md:mb-0">{service.title}</div>
      <div
        className={`${poppins.className} flex flex-col gap-2 mb-4 md:mb-0 py-4 md:min-w-60`}
      >
        <div className="flex items-center gap-2 ">
          <div className="text-xl">{iconMap[service.modalidad.icon]}</div>
          <div className="font-semibold ">Modalidad</div>
          <div className="text-xs">{service.modalidad.text}</div>
        </div>
        <div className="flex items-center gap-2 ">
          <div className="text-xl">{iconMap[service.time.icon]}</div>
          <div className="font-semibold">Tiempo</div>
          <div className="text-xs">{service.time.text}</div>
        </div>
        {service.capacity && (
          <div className="flex items-center gap-2 ">
            <div className="text-xl">{iconMap[service.capacity.icon]}</div>
            <div className="font-semibold">{service.capacity.text}</div>
          </div>
        )}
        {service.classType && (
          <div className="flex items-center gap-2 ">
            <div className="text-xl">{iconMap[service.classType.icon]}</div>
            <div className="font-semibold">{service.classType.text}</div>
          </div>
        )}
        <div className="flex gap-2 ">
          <div className="text-xl">{iconMap[service.price.icon]}</div>
          <div className="font-semibold">Precio</div>
          <div className="flex flex-col text-start text-xs gap-2 pt-1">
            {service.price.text.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
        </div>
      </div>
      <Link
        href={`/servicios/${service.id}`}
        className={`${poppins.className} bg-lavender  text-center  md:min-w-28 text-md p-2 mb-4 md:mb-0rounded-md text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-md rounded-md`}
      >
        Ver Más
      </Link>
    </div>
  );
}

export default ServiceCard;
