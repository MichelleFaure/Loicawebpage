import Image from "next/image";
import Link from "next/link";

const imgCards = [
  {
    src: "/home/terapy.png",
    title: "Terapia",
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
          <Link
            href={card.link}
            key={index}
            className="block relative mx-auto transform transition-transform duration-300 hover:scale-105 hover:translate-y-2"
          >
            <div className="relative w-full max-w-sm mx-auto h-[300px] md:h-full ">
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
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SeccionsHome;