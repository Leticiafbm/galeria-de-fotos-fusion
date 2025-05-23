export const SectionFavoritos = ({ favoritosDetalhados, onAbrir }) => {
  if (favoritosDetalhados.length === 0) {
    return (
      <section className="w-full h-screen bg-beige pt-20">
        <p className="text-xl text-lowopacity font-lusitana">Nada por aqui ainda...</p>
      </section>
    )
  }

  return (
    <section className="border-t-2 border-darkpurple flex flex-col gap-16 h-screen">
      <div className="h-0.5 w-12 bg-darkpurple mt-1 self-end"></div>

      <article className="grid grid-cols-1 size-5/6 self-center lg:grid-cols-3 lg:gap-x-12 lg:size-6/6 gap-y-10" >

        {favoritosDetalhados.map((item, index) => (
          <div key={index} className="relative group" onClick={() => onAbrir(item.id)}>
            <img
              src="/icon-favorito.svg"
              alt="favoritar"
              className="absolute bg-beige/40 p-3 rounded-full size-14.5 right-3 top-3 lg:cursor-pointer lg:hover:size-16 lg:transition-all"
            />
            <img
              src={item.src}
              alt="imagem favorita"
              className="rounded-2xl lg:aspect-[3/2] lg:object-cover lg:cursor-pointer"
            />
          </div>
        ))}

      </article>
    </section>
  );
}