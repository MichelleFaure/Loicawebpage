import { TbFlower } from "react-icons/tb";
import { HiCurrencyDollar } from "react-icons/hi";
import { IoTimeOutline, IoPeopleCircleOutline } from "react-icons/io5";
import { FaChalkboardUser } from "react-icons/fa6";
import { poppins } from "@/app/fonts/fonts";

interface ServiceDetailsProps {
  modalidad: { icon: string; text: string };
  price: { icon: string; text: string };
  time: { icon: string; text: string };
  capacity?: { icon: string; text: string };
  classType?: { icon: string; text: string };
  iconMap: Record<string, JSX.Element>;
}
function ServiceDetails({
  modalidad,
  price,
  time,
  capacity,
  classType,
  iconMap,
}: ServiceDetailsProps) {
  return (
    <section className="max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 my-32 px-8 md:px-0">
      <div
        className={`${poppins.className} rounded-md border border-lavender text-center relative md:px-10 pb-4 my-10`}
      >
        <div className="flex items-center justify-center rounded-full w-24 h-24 bg-lavender text-7xl absolute left-1/2 -translate-x-1/2 -top-10">
          {iconMap[modalidad.icon]}
        </div>
        <div className="h-20"></div>
        <p className="font-semibold text-xl">Modalidad</p>
        <p>{modalidad.text}</p>
      </div>
      <div
        className={`${poppins.className} rounded-md border border-lavender text-center relative md:px-10 pb-4 my-10`}
      >
        <div className="flex items-center justify-center rounded-full w-24 h-24 bg-lavender text-7xl absolute left-1/2 -translate-x-1/2 -top-10">
          {iconMap[price.icon]}
        </div>
        <div className="h-20"></div>
        <p className="font-semibold text-xl">Precio</p>
        <p>{price.text}</p>
      </div>
      <div
        className={`${poppins.className} rounded-md border border-lavender text-center relative md:px-10 pb-4 my-10`}
      >
        <div className="flex items-center justify-center rounded-full w-24 h-24 bg-lavender text-7xl absolute left-1/2 -translate-x-1/2 -top-10">
          {iconMap[time.icon]}
        </div>
        <div className="h-20"></div>
        <p className="font-semibold text-xl">Duración</p>
        <p>{time.text}</p>
      </div>
      {classType && (
        <div
          className={`${poppins.className} rounded-md border border-lavender text-center relative md:px-10 pb-4 my-10`}
        >
          <div className="flex items-center justify-center rounded-full w-24 h-24 bg-lavender text-7xl absolute left-1/2 -translate-x-1/2 -top-10">
            {iconMap[classType.icon]}
          </div>
          <div className="h-20"></div>
          <p className="font-semibold text-xl">Tipo</p>
          <p>{classType.text}</p>
        </div>
      )}
      {capacity && (
        <div
          className={`${poppins.className} rounded-md border border-lavender text-center relative md:px-10 pb-4 my-10`}
        >
          <div className="flex items-center justify-center rounded-full w-24 h-24 bg-lavender text-7xl absolute left-1/2 -translate-x-1/2 -top-10">
            {iconMap[capacity.icon]}
          </div>
          <div className="h-20"></div>
          <p className="font-semibold text-xl">Capacidad</p>
          <p>{capacity.text}</p>
        </div>
      )}
    </section>
  );
}

export default ServiceDetails;
