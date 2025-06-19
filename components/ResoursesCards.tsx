import Image from "next/image";
import { poppins } from "@/app/fonts/fonts";
import Link from "next/link";
import resources from "@/data/resources.json"

function ResoursesCards() {  
  return (
    <section className="flex flex-wrap justify-center gap-8 max-w-screen-lg mx-auto my-20">
      {resources.map((resource)=>{
        return (
          <Link
            key={resource.id}
            href={`/recursos/${resource.id}`}
            className="transform transition-transform duration-300 hover:scale-105 hover:translate-y-2"
          >
            <div className={`shadow-lg max-w-80 ${poppins.className}`}>
              <div className="bg-white rounded-lg">
                <Image
                  src={resource.image}
                  alt={resource.titulo}
                  width={320}
                  height={320}
                  className="w-full h-[320px] object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{resource.titulo}</h4>
                  <div className="flex items-center mt-4">
                    <Image
                      src={resource.autorImage}
                      alt="imagen autor de recurso centro psicologia loica"
                      width={48}
                      height={48}
                      quality={100}
                      className="rounded-full h-12 w-12 object-cover"
                    />
                    <p className="pl-2 text-sm">{resource.autor}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default ResoursesCards;
