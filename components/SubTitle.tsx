interface SubTitleProps {
  text: string;
}

function SubTitle({ text }: SubTitleProps) {
  return (
    <section className=" m-auto">
      <h2 className=" my-10 mx-6  text-2xl md:mb-16 md:mt-32 md:text-5xl text-center">
        {text}
      </h2>
    </section>
  );
}
export default SubTitle;
