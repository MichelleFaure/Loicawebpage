import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { poppins } from "@/app/fonts/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
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
    <section className="bg-lavender-light relative max-w-screen-lg m-auto px-4 flex justify-around items-center flex-wrap my-24 rounded-md shadow-md">
      <div className="w-56 z-10">
        <h2 className="text-6xl pt-8 md:p-0 ">Contacto</h2>
        <p className="pl-2 text-center md:text-start font-semibold">
          Si tienes alguna duda comunicate con nosotras a través de estos
          canales.
        </p>
      </div>
      <div>
        <motion.div   
        className="flex flex-col gap-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}>
          {rrssData.map((item) => {
            return (
              <motion.a
                variants={itemVariants}
                key={item.name}
                className="flex items-center gap-4 z-10 rounded-lg bg-lavender shadow-md px-8 py-2 hover:scale-105"
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
              </motion.a>
            );
          })}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 opacity-40 ">
        <Image
          src="/layout/bg-img-3.png"
          alt=""
          width={433}
          height={500}
          quality={100}
        />
      </div>
    </section>
  );
}
export default ContacUs