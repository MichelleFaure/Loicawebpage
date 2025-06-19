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

function CardService({ service }: ServiceCardProps) {
  return (
    <div
      className={`${poppins.className} font-light w-[310px] pb-2 shadow-md rounded-md bg-soft-Lavender `}
    >
      <div>
        <Image
          src={service.imgSrc}
          alt="imagen servicio ofrecido por centro de psicologia"
          width={310}
          height={200}
          quality={100}
          className=" w-full h-[200px] rounded-t-md "
        />
      </div>
      <div className="min-h-[72px] flex items-center ">
        <h3 className="text-xl ps-6">{service.title}</h3>
      </div>
      <div className="border-b border-b-lavender shadow-md h-2 w-[250px] m-auto"></div>
      <div className="text-grey-font ps-6 pt-6 text-sm h-[120px]">
        <div className="flex items-center gap-2 ">
          {iconMap[service.modalidad.icon]}
          <p>{service.modalidad.text}</p>
        </div>
        <div className="flex items-center gap-2">
          {iconMap[service.time.icon]}
          <p>{service.time.text}</p>
        </div>
        {service.capacity && (
          <div className="flex items-center gap-2 ">
            <div className="">{iconMap[service.capacity.icon]}</div>
            <div className="">{service.capacity.text}</div>
          </div>
        )}
        {service.classType && (
          <div className="">
            <div className="">{iconMap[service.classType.icon]}</div>
            <div className="">{service.classType.text}</div>
          </div>
        )}
        <div className="flex items-center gap-2">
          {iconMap[service.price.icon]}
          {service.price.text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
      <Link
        href={`/servicios/${service.id}`}
        className={`${poppins.className} flex justify-center mx-6 mb-4  bg-lavender text-white text-sm p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-md rounded-lg`}
      >
        Ver Más
      </Link>
    </div>
  );
};
export default CardService;
