import { poppins } from "@/app/fonts/fonts";
import Image from "next/image";
interface ServiceDetailsProps {
  modalidad: { icon: string; text: string };
  price: { icon: string; text: string[] };
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
    <section className="max-w-screen-lg mx-auto flex flex-wrap justify-center gap-4 my-24">
      <div
        className={`${poppins.className}  p-6 w-[300px] relative border-sm  bg-soft-Lavender border rounded-md border-lavender `}
      >
        <div className="flex items-center justify-center rounded-full w-12 h-12 p-2 text-grey-font bg-off-white-lavender shadow-xl text-7xl">
          {iconMap[modalidad.icon]}
        </div>

        <div>
          <p className="text-lg font-semibold mt-2">Modalidad</p>
          <p className="text-grey-font text-sm">{modalidad.text}</p>
        </div>

        <div className="absolute top-0 right-0 opacity-15">
          <Image
            src="/services/bgPlantService.png"
            alt=""
            width={150}
            height={150}
            quality={100}
          />
        </div>
      </div>
      <div
        className={`${poppins.className} p-6 pe-0 w-[300px] relative border-sm  bg-soft-Lavender border rounded-md border-lavender `}
      >
        <div className="flex items-center justify-center rounded-full w-12 h-12 p-2 text-grey-font bg-off-white-lavender shadow-xl text-7xl">
          {iconMap[price.icon]}
        </div>
        <div>
          <p className="text-lg font-semibold mt-2">Precio</p>
          <div className="flex gap-2">
            {price.text.map((item, index) => {
              return (
                <p className="text-grey-font text-sm" key={index}>
                  {item}
                </p>
              );
            })}
          </div>
          <div className="absolute top-0 right-0 opacity-15">
          <Image
            src="/services/bgPlantService.png"
            alt=""
            width={150}
            height={150}
            quality={100}
          />
        </div>
        </div>
        
      </div>
      <div
        className={`${poppins.className} p-6 w-[300px] relative border-sm  bg-soft-Lavender border rounded-md border-lavender `}
      >
        <div className="flex items-center justify-center rounded-full w-12 h-12 p-2 text-grey-font bg-off-white-lavender shadow-xl text-7xl">
          {iconMap[time.icon]}
        </div>
        <div>
          <p className="text-lg font-semibold mt-2">Duración</p>
          <p className="text-grey-font text-sm">{time.text}</p>
        </div>
                <div className="absolute top-0 right-0 opacity-15">
          <Image
            src="/services/bgPlantService.png"
            alt=""
            width={150}
            height={150}
            quality={100}
          />
        </div>
      </div>
      {classType && (
        <div
          className={`${poppins.className} p-6 w-[300px] relative border-sm  bg-soft-Lavender border rounded-md border-lavender `}
        >
          <div className="flex items-center justify-center rounded-full w-12 h-12 p-2 text-grey-font bg-off-white-lavender shadow-xl text-7xl">
            {iconMap[classType.icon]}
          </div>
          <div>
            <p className="text-lg font-semibold mt-2">Tipo</p>
            <p className="text-grey-font text-sm">{classType.text}</p>
          </div>
                  <div className="absolute top-0 right-0 opacity-15">
          <Image
            src="/services/bgPlantService.png"
            alt=""
            width={150}
            height={150}
            quality={100}
          />
        </div>
        </div>
      )}
      {capacity && (
        <div
          className={`${poppins.className} p-6 w-[300px] relative border-sm  bg-soft-Lavender border rounded-md border-lavender `}
        >
          <div className="flex items-center justify-center rounded-full w-12 h-12 p-2 text-grey-font bg-off-white-lavender shadow-xl text-7xl">
            {iconMap[capacity.icon]}
          </div>
          <div>
            <p className="text-lg font-semibold mt-2">Capacidad</p>
            <p className="text-grey-font text-sm">{capacity.text}</p>
          </div>
                  <div className="absolute top-0 right-0 opacity-15">
          <Image
            src="/services/bgPlantService.png"
            alt=""
            width={150}
            height={150}
            quality={100}
          />
        </div>
        </div>
      )}
    </section>
  );
}

export default ServiceDetails;
