"use client";
import AgendaCards from "@/components/AgendaCards";
import aboutUs from "@/data/aboutUs.json";
import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";
import Help from "@/components/Help";
import { Modal } from "flowbite-react";
import { useState } from "react";

function AgendaPage() {
  const lauraServices = aboutUs[0].services;
  const danielaServices = aboutUs[1].services;
  const julianaServices = aboutUs[2].services;
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <h3
        className={`text-grey-font text-3xl font-light md:text-4xl text-center mt-10 md:mt-24 ${poppins.className}`}
      >
        AGENDA LOICA
      </h3>
      <div className=" max-w-screen-lg mx-auto flex flex-wrap ">
        <div className=" mx-auto max-w-[290px] ">
          <div className="flex flex-col  items-center gap-2  mx-auto mt-16 border-2 border-lavender rounded-md">
            <Image
              src="/profiles/profilephotoagenda.png"
              alt="Psicóloga Laura Valdés Cruzatt"
              width={184.64}
              height={112}
              quality={100}
              className="mt-4"
            />
            <h2 className="text-xl mt-2 ">Laura Valdés Cruzatt</h2>
            <h3 className={`${poppins.className} text-xs `}>
              Psicóloga adolescentes y adultos
            </h3>
            <button
              onClick={() => setOpenModal(true)}
              className={`${poppins.className} bg-lavender font-normal shadow-lg text-sm text-center  md:min-w-28 text-md p-2 my-8 text-white transform transition-transform duration-300 hover:scale-105  rounded-md`}
            >
              Agendar hora
            </button>

            <Modal
              show={openModal}
              onClose={() => setOpenModal(false)}
              size="4xl"
            >
              <Modal.Header>
                <Image
                  src="/layout/navbar-logo-loica.png"
                  alt="Psicóloga Laura Valdés Cruzatt"
                  width={100}
                  height={100}
                />
              </Modal.Header>

              <Modal.Body>
                <iframe
                  src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2PnxVtN4l82IqeOn-zCIoWDfybh4cVFOsli1wU4wwjRNYSXqfBaQ9xl8DxoFVcf_XUx1BK5vF-?gv=true"
                  width="100%"
                  height="500"
                  className="rounded"
                />
              </Modal.Body>
            </Modal>
          </div>

          <AgendaCards services={lauraServices} />
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
        <div className=" mx-auto max-w-[290px] ">
          <div className="flex flex-col  items-center gap-2  mx-auto mt-16 border-2 border-lavender rounded-md">
            <Image
              src="/profiles/profilephotoagenda2.png"
              alt="Daniela Belén Bustos Páez"
              width={184.64}
              height={112}
              quality={100}
              className="mt-4"
            />
            <h2 className="text-xl mt-2 ">Daniela Belén Bustos Páez</h2>
            <h3 className={`${poppins.className} text-xs `}>
              Psicóloga y Sexóloga adultos
            </h3>
            <button
              onClick={() => setOpenModal(true)}
              className={`${poppins.className} bg-lavender font-normal shadow-lg text-sm text-center  md:min-w-28 text-md p-2 my-8 text-white transform transition-transform duration-300 hover:scale-105  rounded-md`}
            >
              Agendar hora
            </button>

            <Modal
              show={openModal}
              onClose={() => setOpenModal(false)}
              size="4xl"
            >
              <Modal.Header>
                <Image
                  src="/layout/navbar-logo-loica.png"
                  alt="Psicóloga Laura Valdés Cruzatt"
                  width={100}
                  height={100}
                />
              </Modal.Header>

              <Modal.Body>
                <iframe
                  src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0OI_N7qua613H0wZcnbg9ybTaGVcOc1UVY-_csvy02kh18OCAr5l6UHPr3iUx5zDhCKpxdaza3?gv=true"
                  width="100%"
                  height="500"
                  className="rounded"
                />
              </Modal.Body>
            </Modal>
          </div>

          <AgendaCards services={danielaServices} />
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
        <div className=" mx-auto max-w-[290px] ">
          <div className="flex flex-col  items-center gap-2  mx-auto mt-16 border-2 border-lavender rounded-md">
            <Image
              src="/profiles/profilephotoagenda3.png"
              alt="Juliana Quevedo Cruz"
              width={184.64}
              height={112}
              quality={100}
              className="mt-4"
            />
            <h2 className="text-xl mt-2 ">Juliana Quevedo Cruz</h2>
            <h3 className={`${poppins.className} text-xs `}>
              Psicóloga y sexóloga adultas y parejas
            </h3>
            <button
              onClick={() => setOpenModal(true)}
              className={`${poppins.className} bg-lavender font-normal shadow-lg text-sm text-center  md:min-w-28 text-md p-2 my-8 text-white transform transition-transform duration-300 hover:scale-105  rounded-md`}
            >
              Agendar hora
            </button>

            <Modal
              show={openModal}
              onClose={() => setOpenModal(false)}
              size="4xl"
            >
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
                  src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1s-RjzM5LkpKYDJ_e-NRrNO7RM_IiyT-QnfW3K2cvO2vQBtOeQA4X6YobqcaNwVpV7NUhKIFME?gv=true"
                  width="100%"
                  height="500"
                  className="rounded"
                />
              </Modal.Body>
            </Modal>
          </div>

          <AgendaCards services={julianaServices} />
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
      </div>
      <Help></Help>
    </div>
  );
}

export default AgendaPage;
