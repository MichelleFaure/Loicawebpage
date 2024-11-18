import { poppins } from "@/app/fonts/fonts";
interface ThemesProps {
  themes: string[]; 
}
function Themes({ themes }: ThemesProps) {
  return (
    <section className="bg-slate-blue w-full relative py-10 px-4">
      <h2 className="text-center text-white text-4xl md:text-6xl mb-14">
        Temáticas que trabajamos
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto ">
        {themes.map((item, index) => {
          return (
            <div
              key={index}
              className={`${poppins.className} bg-lavender-light rounded-full text-sm md:text-xl text-center p-2 flex items-center justify-center  break-words `}
            >
              {item}
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Themes