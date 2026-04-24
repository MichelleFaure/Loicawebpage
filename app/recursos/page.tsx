import BannerCoral from "@/components/BannerCoral"
import ResoursesCards from "@/components/ResoursesCards"

export const metadata = {
  title: "Recursos digitales sobre psicología y sexualidad | Centro Loica",
  description:
    "Explora artículos, herramientas y reflexiones sobre psicología y sexualidad. Encontrarás reflexiones, herramientas y contenidos para acompañarte en tu bienestar emocional, sexual y relacional.",
};

function RecursosPage() {
  return (
    <section>
      <BannerCoral
        title="RECURSOS DIGITALES"
        text="Este es un espacio pensado para que hablar de psicología y sexualidad deje de ser tabú. Un lugar donde puedas aprender, cuestionar y compartir desde la libertad, la curiosidad y el autocuidado. Aquí encontrarás reflexiones, herramientas y contenidos para acompañarte en tu bienestar emocional, sexual y relacional."
      ></BannerCoral>
      <ResoursesCards></ResoursesCards>
    </section>
  );
}
export default RecursosPage