"use client";
import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";
import Help from "@/components/Help";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
function AgendaPage() {
  const [openModal, setOpenModal] = useState(false);
  const [calendarLink, setCalendarLink] = useState("");
  return (
    <div>
      <h3
        className={`text-grey-font text-3xl font-light md:text-4xl text-center mt-10 md:mt-24 ${poppins.className}`}
      >
        AGENDA LOICA
      </h3>
      <Image
        src="/layout/agendadivider.png"
        alt="Psicóloga Laura Valdés Cruzatt"
        width={300}
        height={184}
        quality={100}
        className="mx-auto my-6"
      />
      <h2
        className={`${poppins.className} text-center text-grey-font max-w-[600px] mx-auto mb-10`}
      >
        Conoce a nuestro equipo de psicólogas y agenda tu hora con la
        profesional que mejor se adapte a tus necesidades.
      </h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-2">
        <div className="w-full">
          <div className="flex flex-row sm:flex-col items-center gap-2 bg-neutral-50 shadow-xl border border-slate-300  mx-auto mt-4 rounded-md md:text-center">
            <Image
              src="/profiles/profilephotoagenda.png"
              alt="Psicóloga Laura Valdés Cruzatt"
              width={184}
              height={184}
              quality={100}
              className="my-2 w-[120px] md:w-[184px] h-auto"
            />
            <div>
              <h2 className="text-xl mt-2 text-violet-700 font-bold ">
                Laura Valdés Cruzatt
              </h2>
              <h3 className={`${poppins.className} text-xs md:mt-2 `}>
                Psicóloga adolescentes y adultos
              </h3>
              <button
                onClick={() => {
                  setCalendarLink(
                    "https://calendar.google.com/calendar/u/0/appointments/AcZssZ0mBBGXL7PzKVCAW8jf8GBnWf_AwksuuOpqZ3c=",
                  );
                  setOpenModal(true);
                }}
                className={`${poppins.className} flex gap-2 items-center bg-[#7B79DA] font-normal shadow-lg text-xs md:text-sm py-2.5 px-4 sm:px-6 my-4 sm:mt-6 md:mx-auto text-white transform transition-transform duration-300 hover:scale-105 rounded-md`}
              >
                <IoCalendarOutline className="text-xl" /> Agendar hora
              </button>
              <h3
                className={`${poppins.className} hidden md:block text-xs mt-2 mb-6 `}
              >
                Atención presencial y online
              </h3>
            </div>
          </div>

          <div className=" absolute top-[50px] -left-[250px] opacity-10 -z-10">
            <Image
              src="/layout/bg-img-2.png"
              alt=""
              width={600}
              height={630}
              quality={100}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row sm:flex-col items-center gap-2 bg-neutral-50 shadow-xl border border-slate-300  mx-auto mt-4 rounded-md md:text-center">
            <Image
              src="/profiles/profilephotoagenda2.png"
              alt="Psicóloga Daniela Belén Bustos Páez"
              width={184.64}
              height={112}
              quality={100}
              className="my-2 w-[120px] md:w-[184px] h-auto"
            />
            <div>
              <h2 className="text-xl mt-2 text-violet-700 font-bold ">
                Daniela Belén Bustos Páez
              </h2>
              <h3 className={`${poppins.className} text-xs md:mt-2 `}>
                Psicóloga y Sexóloga adultos
              </h3>
              <button
                onClick={() => {
                  setCalendarLink(
                    "https://calendar.google.com/calendar/u/0/appointments/AcZssZ3BuRwOxP_SOCj5Vdm2xmSGtGaIgqGnNJkSU_A=",
                  );
                  setOpenModal(true);
                }}
                className={`${poppins.className} flex gap-2 items-center bg-[#7B79DA] font-normal shadow-lg text-xs md:text-sm py-2.5 px-4 sm:px-6 my-4 sm:mt-6 md:mx-auto text-white transform transition-transform duration-300 hover:scale-105 rounded-md`}
              >
                <IoCalendarOutline className="text-xl" /> Agendar hora
              </button>
              <h3
                className={`${poppins.className} hidden md:block text-xs mt-2 mb-6 `}
              >
                Atención online
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row sm:flex-col items-center gap-2 bg-neutral-50 shadow-xl border border-slate-300  mx-auto mt-4 rounded-md md:text-center">
            <Image
              src="/profiles/profilephotoagenda3.png"
              alt="Psicóloga Juliana Quevedo Cruz"
              width={184.64}
              height={112}
              quality={100}
              className="my-2 w-[120px] md:w-[184px] h-auto"
            />
            <div>
              <h2 className="text-xl mt-2 text-violet-700 font-bold ">
                Juliana Quevedo Cruz
              </h2>
              <h3 className={`${poppins.className} text-xs md:mt-2 `}>
                Psicóloga y sexóloga adultas y parejas
              </h3>
              <button
                onClick={() => {
                  setCalendarLink(
                    "https://calendar.google.com/calendar/u/0/appointments/AcZssZ0P6ZikbsNyP25KyaHUAD8LuuHXjH9Dct4ow2U=",
                  );
                  setOpenModal(true);
                }}
                className={`${poppins.className} flex gap-2 items-center bg-[#7B79DA] font-normal shadow-lg text-xs md:text-sm py-2.5 px-4 sm:px-6 my-4 sm:mt-6 md:mx-auto text-white transform transition-transform duration-300 hover:scale-105 rounded-md`}
              >
                <IoCalendarOutline className="text-xl" /> Agendar hora
              </button>
              <h3
                className={`${poppins.className} hidden md:block text-xs mt-2 mb-6 `}
              >
                Atención online
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row sm:flex-col items-center gap-2 bg-neutral-50 shadow-xl border border-slate-300  mx-auto mt-4 rounded-md md:text-center">
            <Image
              src="/profiles/profilephotoagenda4.png"
              alt="Psicóloga Constanza Fernández"
              width={184.64}
              height={112}
              quality={100}
              className="my-2 w-[120px] md:w-[184px] h-auto"
            />
            <div>
              <h2 className="text-xl mt-2 text-violet-700 font-bold ">
                Constanza Fernández
              </h2>
              <h3 className={`${poppins.className} text-xs md:mt-2 `}>
                Psicóloga adultos y adultos mayores
              </h3>
              <button
                onClick={() => {
                  setCalendarLink(
                    "https://calendar.google.com/calendar/u/0/appointments/AcZssZ2nhwN0CCh--TW563GcnaQq1KpIGPbq7ySSz5s=",
                  );
                  setOpenModal(true);
                }}
                className={`${poppins.className} flex gap-2 items-center bg-[#7B79DA] font-normal shadow-lg text-xs md:text-sm py-2.5 px-4 sm:px-6 my-4 sm:mt-6 md:mx-auto text-white transform transition-transform duration-300 hover:scale-105 rounded-md`}
              >
                <IoCalendarOutline className="text-xl" /> Agendar hora
              </button>
              <h3
                className={`${poppins.className} hidden md:block text-xs mt-2 mb-6 `}
              >
                Atención online
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex items-center gap-4 bg-[#ECE9FB] border my-10 p-8 text-[#7B79DA] rounded-lg  ">
        <IoCalendarOutline className="text-7xl" />
        <p className={`${poppins.className}  max-w-[600px]`}>
          Haz click en &ldquo;Agendar hora&rdquo; para ver los servicios que
          ofrece cada profesional, sus horarios disponibles y reservar tu
          sesión.
        </p>
      </div>
      <Help></Help>
      <Modal show={openModal} onClose={() => setOpenModal(false)} size="4xl">
        <Modal.Header>
          <Image
            src="/layout/navbar-logo-loica.png"
            alt="Juliana Quevedo Cruz"
            width={100}
            height={100}
          />
        </Modal.Header>

        <Modal.Body>
          <iframe
            src={calendarLink}
            width="100%"
            height="500"
            className="rounded"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AgendaPage;
