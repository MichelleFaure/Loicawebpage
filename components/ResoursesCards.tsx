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
            href={`/recursos/${resource.id}`}
            className="transform transition-transform duration-300 hover:scale-105 hover:translate-y-2"
          >
            <div key={resource.id} className={`shadow-lg max-w-80 ${poppins.className}`}>
              <div className="bg-white rounded-lg">
                <Image
                  src={resource.headerImg}
                  alt={resource.title}
                  width={300}
                  height={170}
                  className="w-full"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{resource.title}</h4>
                  <p className="text-sm mt-4 text-slate-700 min-h-20">
                    {resource.description}
                  </p>
                  <p className="text-sm text-blue-600 hover:text-blue-950">
                    Leer más →
                  </p>
                  <div className="flex items-center mt-8">
                    <Image
                      src={resource.authorImg}
                      alt=""
                      width={48}
                      height={48}
                      className="rounded-full h-12 w-12 object-cover"
                    />
                    <p className="pl-2 text-sm">{resource.author}</p>
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
