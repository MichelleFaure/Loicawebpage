import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { poppins } from "@/app/fonts/fonts";
function ContacUs() {

  const phoneNumber = "56957729169"; 
  const message = "¡Hola! Me gustaría obtener más información."; 
  const recipient = "loica.consultas@gmail.com";
  const subject = "Consulta de información";
  const body = "Hola, quisiera más información sobre sus servicios.";
  const rrssData = [
    {
      name: "WhatsApp",
      link: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      text: "+56 9 57729169",
      icon: <FaWhatsapp />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/centro.loica/",
      text: "centro.loica",
      icon: <FaInstagram />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/centro-loica-psicologia-y-sexologia",
      text: "Centro Loica - Psicología y Sexología",
      icon: <FaLinkedin />,
    },
    {
      name: "Gmail",
      link: `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      text: "loica.consultas@gmail.com",
      icon: <BiLogoGmail />,
    },
  ];


  return (
    <section className="bg-lavender-light max-w-screen-lg m-auto flex justify-around items-center flex-wrap my-24 rounded-md shadow-md">
      <div className="w-56">
        <h2 className="text-6xl pt-8 md:p-0">Contacto</h2>
        <p className="pl-2 text-center md:text-start">
          Si tienes alguna duda comunicate con nosotras a través de estos
          canales.
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-8 py-16">
          {rrssData.map((item)=>{
            return (
              <a
                key={item.name}
                className="flex items-center gap-4 rounded-lg bg-lavender shadow-md px-8 py-2 hover:scale-105"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-4xl text-white  w-14 h-14 flex justify-center items-center ">
                  {item.icon}
                </div>
                <div>
                  <div
                    className={`${poppins.className} font-medium text-xl text-white`}
                  >
                    {item.name}
                  </div>
                  <div className="text-white"> {item.text}</div>
                </div>
              </a>
            );
          })}

        </div>
      </div>
    </section>
  );
}
export default ContacUs