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
  imgSrc: string;
  link: string;
  capacity?: {
    icon: string;
    text: string;
  };
};

type AgendaCardsProps = {
  services: Service[];
};

function AgendaCards({ services }: AgendaCardsProps) {
  return (
    <div className="px-8">
      {services.map((service) => (
        <div className="relative max-w-screen-lg mx-auto md:pr-8 my-16  flex flex-col md:flex-row justify-between items-center flex-wrap border border-lavender rounded-md text-center md:text-start">
          <Image
            src={service.imgSrc}
            alt=""
            width={120}
            height={120}
            className="absolute -top-10 md:top-auto md:-left-10"
          />
          <div className="w-[50px] h-[100px] md:h-[150px]"></div>
          <div className="text-2xl w-56 mb-4 md:mb-0">{service.title}</div>
          <div
            className={`${poppins.className} flex flex-col gap-2 mb-4 md:mb-0`}
          >
            <div className="flex items-center gap-2 w-32">
              <div className="text-md">{iconMap[service.modalidad.icon]}</div>
              <div className="font-semibold text-sm">Modalidad</div>
              <div className="text-sm">{service.modalidad.text}</div>
            </div>
            <div className="flex items-center gap-2 ">
              <div className="text-md">{iconMap[service.time.icon]}</div>
              <div className="font-semibold text-sm">Tiempo</div>
              <div className="text-sm">{service.time.text}</div>
            </div>
            <div className="flex items-center gap-2 ">
              <div className="text-md">{iconMap[service.price.icon]}</div>
              <div className="font-semibold text-sm">Precio</div>
              <div className="text-sm">{service.price.text}</div>
            </div>
            {service.capacity && (
              <div className="flex items-center gap-2 ">
                <div className="text-md">{iconMap[service.capacity.icon]}</div>
                <div className="font-semibold text-sm">
                  {service.capacity.text}
                </div>
              </div>
            )}
          </div>
          <Link
            href={service.link}
            className={`${poppins.className} bg-lavender  text-center  md:min-w-28 text-md p-2 mb-4 md:mb-0rounded-md text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-md rounded-md`}
          >
            AGENDAR
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AgendaCards;