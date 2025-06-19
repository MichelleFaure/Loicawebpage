import { BiLogoGmail } from "react-icons/bi";
import { poppins } from "@/app/fonts/fonts";
const subject = "Consulta de información";
const recipient = "loica.consultas@gmail.com";
const body = "Hola, quisiera más información sobre sus servicios.";
const link = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body)}`;
const Help = () => {
  return (
    <div className="max-w-screen-lg bg-coral rounded-md shadow-md mx-auto my-20 p-4  flex flex-col justify-center  ">
      <div className="text-white  md:text-lg  pt-10 px-6 md:px-28">
        Si lo que te está movilizando no aparece aquí, igual puedes escribirnos.
        Nos importa escucharte y ayudarte a encontrar el tipo de acompañamiento
        que más sentido tenga para ti.
      </div>
      <div className="text-white  md:text-lg  py-10 px-6 md:px-28">
        Escríbenos a:
        <span className="text-white text-xl font-bold ps-2">
          loica.consultas@gmail.com
        </span>
      </div>
      <a
        key="Gmail"
        className="flex items-center w-[310px]  gap-4 z-10 rounded-full bg-light-coral  p-2 py-2 mb-8   mx-6 md:mx-28 hover:scale-105 shadow-md "
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`${poppins.className} font-medium text-light-coral text-5xl bg-coral rounded-full p-2`}
        >
          <BiLogoGmail />
        </div>
        <div>
          <div
            className={`${poppins.className} font-medium text-xl text-black`}
          >
            ¡Contáctanos!
          </div>
          <div className="w-[200px] h-[2px] bg-coral my-1"></div>
          <div className={`${poppins.className} text-sm  text-black`}>
            loica.consultas@gmail.com
          </div>
        </div>
      </a>
    </div>
  );
}
export default Help