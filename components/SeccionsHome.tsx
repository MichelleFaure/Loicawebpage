import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const imgCards = [
  {
    src: "/home/terapy.png",
    title: "Terapias",
    link: "/servicios",
  },
  {
    src: "/home/courses.png",
    title: "Cursos y Talleres",
    link: "/cursosytalleres",
  },
  {
    src: "/home/resourses.png",
    title: "Recursos",
    link: "/recursos",
  },
];

function SeccionsHome() {
  return (
    <section className="mb-24 max-w-screen-lg  mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {imgCards.map((card, index) => (
          <motion.div
            className="block relative mx-auto "
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}

          >
            <Link href={card.link}>
            
              <motion.div className="relative w-full max-w-sm mx-auto h-[300px] md:h-full"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}>
                <Image
                  src={card.src}
                  alt={`Imagen de ${card.title}`}
                  width={288}
                  height={500}
                  quality={100}
                  className="shadow-xl h-[300px] md:h-full object-cover rounded-md"
                />
                <div className="absolute w-full h-24 bottom-0 bg-bluish-Gray opacity-75 rounded-b-md"></div>
                <div className="absolute w-full h-24 bottom-0 flex items-center justify-center text-4xl text-white rounded-b-md">
                  <h4 className="p-4">{card.title}</h4>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SeccionsHome;