
import resources from '@/data/resources.json';
import Image from 'next/image';
import { poppins } from "@/app/fonts/fonts";
interface Articulo {
  id: string;
  titulo: string;
  autor: string;
  image:string;
  autorImage:string;
  contenido: Contenido[];
}

type Contenido =
  | { tipo: string; contenido: (string | { negrita: string })[] }
  | { tipo: string; contenido: string }
  | { tipo: string; contenido: string[] };;

const articles: Articulo[] = resources; 


function Page({ params }: { params: { id: string } }) {
  const article = articles.find((art) => art.id === params.id);

  if (!article) {
    return <div className="text-red-500">Artículo no encontrado</div>;
  }

  return (
    <div className={`max-w-screen-lg mx-auto my-10 md:my-24 p-6 ${poppins.className}`}>
      <h1 className="text-4xl font-bold mb-4">{article.titulo}</h1>
      <h2 className="text-lg text-gray-600 mb-6">{article.autor}</h2>
      <div className="my-10">
        <Image
          src={article.image}
          alt="imagen del articulo"
          width={500}
          height={100}
          quality={100}
          className="w-full md:h-[800px] object-cover"
        />
      </div>

      {article.contenido.map((item, index) => {
        switch (item.tipo) {
          case "parrafo":
            return (
              <p key={index} className="mb-4 ">
                {Array.isArray(item.contenido)
                  ? item.contenido.map((text, i) =>
                      typeof text === "string" ? (
                        text
                      ) : (
                        <strong key={i}>{text.negrita}</strong>
                      )
                    )
                  : item.contenido}
              </p>
            );

          case "subtitulo":
            return (
              <h3 key={index} className="text-2xl font-semibold mt-16 mb-6">
                {typeof item.contenido === "string" ? item.contenido : ""}
              </h3>
            );

          case "lista":
            return (
              <ul key={index} className="ml-2 mb-4">
                {Array.isArray(item.contenido) &&
                  (item.contenido as string[]).map((li, i) => (
                    <li className="my-6" key={i}>
                      {li}
                    </li>
                  ))}
              </ul>
            );

          case "bibliografia":
            return (
              <div key={index} className="mt-24 border-t pt-4">
                <h4 className="text-xl font-light">Bibliografía</h4>
                <ul className="list-disc ml-6 font-light">
                  {Array.isArray(item.contenido) &&
                    (item.contenido as string[]).map((ref, i) => (
                      <li key={i}>{ref}</li>
                    ))}
                </ul>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default Page;