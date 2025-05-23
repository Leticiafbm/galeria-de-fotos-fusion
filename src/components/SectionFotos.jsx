export const SectionFotos = ({ urlsImagens, onAbrir, id, favoritos }) => {
  return(
    <section className="border-t-2 border-darkpurple flex flex-col gap-16">
      <div className="h-0.5 w-12 bg-darkpurple mt-1 self-end"></div>

      <article id={id} className="grid grid-cols-1 size-5/6 self-center lg:grid-cols-3 lg:gap-x-12 lg:size-6/6 gap-y-10" >
        {urlsImagens.map((url, index) => {
          const imagemId = id[index];
          const estaNosFavoritos = favoritos.includes(imagemId);

          return(
            <div key={imagemId} className="relative group" onClick={() => onAbrir(imagemId)}>
              <img 
                src={
                  estaNosFavoritos ? "/icon-favorito.svg" : "/icon-favorito-ativo.svg"
                } 
                alt="favoritar" 
                className={`absolute p-3 rounded-full size-14.5 right-3 top-3 lg:cursor-pointer lg:hover:size-16 lg:transition-all ${estaNosFavoritos ? "bg-beige/40" : "bg-lowopacity"}`}
              />
              <img 
                src={url} 
                alt="imagem" 
                className="rounded-2xl lg:aspect-[3/2] lg:object-cover lg:cursor-pointer" 
              />
            </div>
          );
        })}    
      </article>
    </section>
  );
}