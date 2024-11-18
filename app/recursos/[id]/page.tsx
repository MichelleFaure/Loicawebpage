function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl"> AQUI VA EL RECURSO COMPLETO CON EL ID : {params.id}</h1>
    </div>
  );
}
export default page;
