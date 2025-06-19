import { poppins } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
const ServiceCta = () => {
    const phoneNumber = "56957729169";
    const message = "¡Hola! Me gustaría obtener más información."; 

  return (
    <div className="max-w-screen-lg mx-auto mb-20 mt-36 flex justify-center">
      <div
        className={`${poppins.className} relative  text-center md:text-start w-full bg-lavender-light p-20 rounded-md shadow-lg`}
      >
        <div className="max-w-[250px] lg:max-w-[400px]">
          <p className="text-2xl font-semibold mt-2">
            ¿Te gustaría dar el siguiente paso?
          </p>
          <p className="text-grey-font my-6">
            Agenda tu sesión o contáctanos si tienes dudas
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 max-w-[400px]">
            <Link
              href="/agenda"
              className=" bg-lavender py-2 w-[171px] text-center rounded-md text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-md"
            >
              Agenda
            </Link>
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className=" bg-lavender py-2 w-[171px] text-center rounded-md text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
                WhatsApp
              </div>
            </a>
          </div>
        </div>

        <div className="absolute left-28 -top-28 right-16 w-[200px] sm:top-28 sm:left-auto md:w-auto md:top-0 lg:-top-20">
          <Image
            src="/services/servicectaImg.png"
            alt="imagen mujer"
            width={422}
            height={387}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
export default ServiceCta