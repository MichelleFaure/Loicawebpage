import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function ContacUs() {
  return (
    <section className="bg-lavender-light max-w-screen-lg m-auto flex justify-around items-center flex-wrap my-24 rounded-md shadow-md">
      <div className="w-56">
        <h2 className="text-6xl pt-8 md:p-0">Contacto</h2>
        <p className="pl-2 text-center md:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-8 py-16">
          <div className="flex items-center gap-4">
            <div className="text-4xl text-white bg-lavender rounded-full w-14 h-14 flex justify-center items-center ">
              <FaWhatsapp />
            </div>
            <div>
              <div className="font-medium text-2xl">WhatsApp</div>
              <div> Lunes-Viernes: 9:00-18:00h</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-4xl text-white bg-lavender rounded-full w-14 h-14 flex justify-center items-center ">
              <FaInstagram />
            </div>
            <div>
              <div className="font-medium text-2xl">Instagram</div>
              <div> Lunes-Viernes: 9:00-18:00h</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-4xl text-white bg-lavender rounded-full w-14 h-14 flex justify-center items-center ">
              <BiLogoGmail />
            </div>
            <div>
              <div className="font-medium text-2xl">Gmail</div>
              <div> Lunes-Viernes: 9:00-18:00h</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContacUs