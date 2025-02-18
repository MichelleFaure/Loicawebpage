"use client";
import { TbFlower } from "react-icons/tb";
import { HiCurrencyDollar } from "react-icons/hi";
import { IoTimeOutline, IoPeopleCircleOutline } from "react-icons/io5";
import { FaChalkboardUser } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { poppins } from "@/app/fonts/fonts";
import { Accordion } from "flowbite-react";

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
  description:string
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
    <Accordion
      collapseAll
      className="max-w-screen-lg mx-auto border-lavender divide-lavender mx-4 md:mx-0"
    >
      {services.map((service) => (
        <Accordion.Panel key={service.id}>
          <Accordion.Title className="bg-lavender-light border-lavender text-black focus:ring-0 focus:outline-none  ">
            {service.title}
          </Accordion.Title>
          <Accordion.Content>
            <div className="mx-auto max-w-5xl  flex flex-col md:flex-row justify-around items-center flex-wrap  rounded-md text-center md:text-start">
              <Image
                src={service.imgSrc}
                alt=""
                width={120}
                height={120}
                quality={100}
                className=" h-[120px] w-[120px] object-cover rounded-md mb-4 md:mb-0"
              />
              
              <div className={`${poppins.className} text-sm w-56 mb-4 md:mb-0"`} >{service.description}</div>
              <div
                className={`${poppins.className} flex flex-col gap-2 mb-4 md:mb-0 py-4`}
              >
                <div className="flex items-center gap-2 w-32">
                  <div className="text-md">
                    {iconMap[service.modalidad.icon]}
                  </div>
                  <div className="font-semibold text-sm">Modalidad</div>
                  <div className="text-sm">{service.modalidad.text}</div>
                </div>
                <div className="flex items-center gap-2 ">
                  <div className="text-md">{iconMap[service.time.icon]}</div>
                  <div className="font-semibold text-sm">Tiempo</div>
                  <div className="text-sm">{service.time.text}</div>
                </div>
                {service.capacity && (
                  <div className="flex items-center gap-2 ">
                    <div className="text-md">
                      {iconMap[service.capacity.icon]}
                    </div>
                    <div className="font-semibold text-sm">
                      {service.capacity.text}
                    </div>
                  </div>
                )}
                <div className="flex gap-2 ">
                  <div className="text-md">{iconMap[service.price.icon]}</div>
                  <div className="font-semibold text-sm">Precio</div>
                  <div className="flex flex-col text-start text-xs gap-2 pt-1">
                    {service.price.text.map((item, index) => {
                      return <div key={index}>{item}</div>;
                    })}
                  </div>
                </div>
              </div>
              <Link
                href={service.link}
                className={`${poppins.className} bg-lavender  text-center  md:min-w-28 text-md p-2 mb-4 md:mb-0rounded-md text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-md rounded-md`}
              >
                AGENDAR
              </Link>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
}

export default AgendaCards;
