export const Sidebar = ({setSecaoVisivel, secaoVisivel}) => {
  return(
    <aside className="bg-darkpurple fixed top-0 left-0 h-screen w-1/7 p-8 flex flex-col gap-42">
      <div className="w-full h-1/6 flex items-center justify-center">
        <img 
          src="/galeria-logo.svg"
          alt="logo do website" 
          className="size-22" 
        />
      </div>

      <section className="flex flex-col gap-8">
        <div className="text-beige flex gap-2">
          
          <button onClick={() => setSecaoVisivel("galeria")} className="flex gap-3 text-lg font-semibold group">
            <p className="self-center">Galeria</p>
            <img 
              src="/icon-galeria.svg"
              alt="link para galeria" 
              className="size-6 order-[-1] self-center"
            />
            <img 
              src="/seta-icon.svg"
              alt="icone de seta" 
              className="text-beige size-6 self-center group-hover:size-8 transition-all" 
            />
          </button>
        </div>

        <div className="text-beige flex">
          <button onClick={() => setSecaoVisivel("favoritos")} className="flex gap-3 text-lg font-semibold group">
            <p className="self-center">Favoritos</p>
            <img 
              src="/icon-favorito.svg"
              alt="link para favoritos" 
              className="size-6 order-[-1] self-center" 
            />
            <img 
              src="/seta-icon.svg"
              alt="icone de seta" 
              className="text-beige size-6 self-center group-hover:size-8 transition-all" 
            />
          </button>
        </div>
      </section>
    </aside>
  );
}